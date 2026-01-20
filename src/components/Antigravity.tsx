import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

interface ParticleData {
  t: number;
  factor: number;
  speed: number;
  xFactor: number;
  yFactor: number;
  zFactor: number;
  mx: number;
  my: number;
  mz: number;
  cx: number;
  cy: number;
  cz: number;
  vx: number;
  vy: number;
  vz: number;
  randomRadiusOffset: number;
  colorIndex: number; // For multi-color support
}

interface AntigravityInnerProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  colors?: string[]; // Multi-color support
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron';
  fieldStrength?: number;
}

const AntigravityInner = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = '#bcb3df',
  colors,
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10
}: AntigravityInnerProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorArray = useMemo(() => colors || [color], [colors, color]);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(0);
  const virtualMouse = useRef({ x: 0, y: 0 });
  const prevPositions = useRef<{ x: number; y: number; z: number }[]>([]);

  const particles = useMemo(() => {
    const temp: ParticleData[] = [];
    const width = viewport.width || 100;
    const height = viewport.height || 100;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;

      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 20;

      const randomRadiusOffset = (Math.random() - 0.5) * 2;
      
      // Assign color based on Y position (top = blue, bottom = red/pink)
      const normalizedY = (y + height / 2) / height;
      const colorIndex = Math.floor(normalizedY * colorArray.length) % colorArray.length;

      temp.push({
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        zFactor,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        vx: 0,
        vy: 0,
        vz: 0,
        randomRadiusOffset,
        colorIndex
      });
    }
    
    // Initialize previous positions
    prevPositions.current = temp.map(p => ({ x: p.cx, y: p.cy, z: p.cz }));
    
    return temp;
  }, [count, viewport.width, viewport.height, colorArray.length]);

  useFrame(state => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { viewport: v, pointer: m } = state;

    const mouseDist = Math.sqrt(Math.pow(m.x - lastMousePos.current.x, 2) + Math.pow(m.y - lastMousePos.current.y, 2));

    if (mouseDist > 0.001) {
      lastMouseMoveTime.current = Date.now();
      lastMousePos.current = { x: m.x, y: m.y };
    }

    let destX = (m.x * v.width) / 2;
    let destY = (m.y * v.height) / 2;

    if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
      const time = state.clock.getElapsedTime();
      destX = Math.sin(time * 0.5) * (v.width / 4);
      destY = Math.cos(time * 0.5 * 2) * (v.height / 4);
    }

    // Direct mouse tracking - no smoothing delay
    virtualMouse.current.x = destX;
    virtualMouse.current.y = destY;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;

    const globalRotation = state.clock.getElapsedTime() * rotationSpeed;

    particles.forEach((particle, i) => {
      const { mx, my, mz, cz, randomRadiusOffset, speed } = particle;

      particle.t += speed / 2;
      const t = particle.t;

      const projectionFactor = 1 - cz / 50;
      const projectedTargetX = targetX * projectionFactor;
      const projectedTargetY = targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const targetPos = { x: mx, y: my, z: mz * depthFactor };

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation;

        const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));

        const currentRingRadius = ringRadius + wave + deviation;

        targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
        targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
        targetPos.z = mz * depthFactor + Math.sin(t) * (1 * waveAmplitude * depthFactor);
      }

      // Smoother interpolation with velocity damping
      const prev = prevPositions.current[i];
      const velX = particle.cx - prev.x;
      const velY = particle.cy - prev.y;
      const velZ = particle.cz - prev.z;
      
      // Lower damping = more responsive, higher = smoother trails
      const damping = 0.6;
      const effectiveLerpSpeed = lerpSpeed * 1.5; // Boost responsiveness
      const newVelX = velX * damping + (targetPos.x - particle.cx) * effectiveLerpSpeed;
      const newVelY = velY * damping + (targetPos.y - particle.cy) * effectiveLerpSpeed;
      const newVelZ = velZ * damping + (targetPos.z - particle.cz) * effectiveLerpSpeed;
      
      prev.x = particle.cx;
      prev.y = particle.cy;
      prev.z = particle.cz;
      
      particle.cx += newVelX;
      particle.cy += newVelY;
      particle.cz += newVelZ;

      dummy.position.set(particle.cx, particle.cy, particle.cz);

      dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
      dummy.rotateX(Math.PI / 2);

      const currentDistToMouse = Math.sqrt(
        Math.pow(particle.cx - projectedTargetX, 2) + Math.pow(particle.cy - projectedTargetY, 2)
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;

      scaleFactor = Math.max(0, Math.min(1, scaleFactor));

      const finalScale = scaleFactor * (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
      dummy.scale.set(finalScale, finalScale, finalScale);

      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
    
    // Update instance colors
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  });

  // Set initial colors using useEffect
  useEffect(() => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        const colorHex = colorArray[particle.colorIndex];
        const c = new THREE.Color(colorHex);
        meshRef.current!.setColorAt(i, c);
      });
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
    }
  }, [particles, colorArray]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === 'capsule' && <capsuleGeometry args={[0.08, 0.32, 4, 8]} />}
      {particleShape === 'sphere' && <sphereGeometry args={[0.15, 16, 16]} />}
      {particleShape === 'box' && <boxGeometry args={[0.22, 0.22, 0.22]} />}
      {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.22]} />}
      <meshBasicMaterial />
    </instancedMesh>
  );
};

export interface AntigravityProps extends AntigravityInnerProps {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[]; // Multi-color support
}

const Antigravity = ({ className, style, ...props }: AntigravityProps) => {
  return (
    <div className={className} style={style}>
      <Canvas camera={{ position: [0, 0, 50], fov: 35 }} dpr={[1, 1.5]}>
        <AntigravityInner {...props} />
      </Canvas>
    </div>
  );
};

export default Antigravity;
