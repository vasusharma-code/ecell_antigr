import { useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';

/**
 * Antigravity Background - Three.js WebGL Implementation
 * 
 * Creates floating geometric shapes that respond to cursor movement
 * with physics-based antigravity effects. Shapes drift upward slowly
 * and react to mouse interaction with smooth repulsion/attraction.
 */

interface FloatingObject {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  basePosition: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  floatOffset: number;
  floatSpeed: number;
}

export default function AntigravityBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<FloatingObject[]>([]);
  const mouseRef = useRef(new THREE.Vector2(-1000, -1000));
  const mouse3DRef = useRef(new THREE.Vector3());
  const animationRef = useRef<number>();
  const clockRef = useRef(new THREE.Clock());
  const isTabActive = useRef(true);

  // Configuration - memoized to prevent recreation
  const CONFIG = useMemo(() => ({
    objectCount: 60,
    cursorInfluenceRadius: 3,
    cursorForce: 0.15,
    returnSpeed: 0.02,
    floatStrength: 0.3,
    driftSpeed: 0.0005,
    friction: 0.95,
  }), []);

  const createGeometries = useCallback(() => {
    return [
      new THREE.IcosahedronGeometry(0.15, 0),
      new THREE.OctahedronGeometry(0.12, 0),
      new THREE.TetrahedronGeometry(0.14, 0),
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.DodecahedronGeometry(0.1, 0),
      new THREE.TorusGeometry(0.08, 0.03, 8, 16),
    ];
  }, []);

  const createMaterial = useCallback((opacity: number) => {
    return new THREE.MeshBasicMaterial({
      color: 0xc9a227, // Warm amber/gold
      transparent: true,
      opacity: opacity,
      wireframe: true,
    });
  }, []);

  const initScene = useCallback(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer with WebGL check
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // WebGL not supported - show fallback
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div style="
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-family: 'Space Grotesk', sans-serif;
          ">
            WebGL not supported
          </div>
        `;
      }
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Create floating objects
    const geometries = createGeometries();
    const objects: FloatingObject[] = [];

    for (let i = 0; i < CONFIG.objectCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const opacity = 0.15 + Math.random() * 0.25;
      const material = createMaterial(opacity);
      const mesh = new THREE.Mesh(geometry.clone(), material);

      // Random position in 3D space
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 6 - 2;

      mesh.position.set(x, y, z);
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(mesh);

      objects.push({
        mesh,
        velocity: new THREE.Vector3(),
        basePosition: new THREE.Vector3(x, y, z),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.5,
      });
    }

    objectsRef.current = objects;
  }, [createGeometries, createMaterial, CONFIG.objectCount]);

  const animate = useCallback(() => {
    if (!isTabActive.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const objects = objectsRef.current;

    if (!scene || !camera || !renderer) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const time = clockRef.current.getElapsedTime();
    const mouse3D = mouse3DRef.current;

    // Update each floating object
    for (const obj of objects) {
      const { mesh, velocity, basePosition, rotationSpeed, floatOffset, floatSpeed } = obj;

      // Calculate distance to mouse in 3D space
      const dx = mouse3D.x - mesh.position.x;
      const dy = mouse3D.y - mesh.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Antigravity cursor repulsion
      if (distance < CONFIG.cursorInfluenceRadius && distance > 0) {
        const force = (CONFIG.cursorInfluenceRadius - distance) / CONFIG.cursorInfluenceRadius;
        const angle = Math.atan2(dy, dx);
        
        // Push away from cursor (antigravity effect)
        velocity.x -= Math.cos(angle) * force * CONFIG.cursorForce;
        velocity.y -= Math.sin(angle) * force * CONFIG.cursorForce;
      }

      // Floating animation (gentle upward drift)
      const floatY = Math.sin(time * floatSpeed + floatOffset) * CONFIG.floatStrength;
      const targetY = basePosition.y + floatY + time * CONFIG.driftSpeed;

      // Return to base position smoothly
      velocity.x += (basePosition.x - mesh.position.x) * CONFIG.returnSpeed;
      velocity.y += (targetY - mesh.position.y) * CONFIG.returnSpeed;
      velocity.z += (basePosition.z - mesh.position.z) * CONFIG.returnSpeed * 0.5;

      // Apply friction
      velocity.multiplyScalar(CONFIG.friction);

      // Update position
      mesh.position.add(velocity);

      // Rotate
      mesh.rotation.x += rotationSpeed.x;
      mesh.rotation.y += rotationSpeed.y;
      mesh.rotation.z += rotationSpeed.z;
    }

    renderer.render(scene, camera);
    animationRef.current = requestAnimationFrame(animate);
  }, [CONFIG]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const camera = cameraRef.current;
    if (!camera) return;

    // Convert mouse position to normalized device coordinates
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Convert to 3D world coordinates at z=0
    const vector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    mouse3DRef.current = camera.position.clone().add(dir.multiplyScalar(distance));
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse3DRef.current.set(-1000, -1000, 0);
  }, []);

  const handleResize = useCallback(() => {
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (!camera || !renderer) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }, []);

  useEffect(() => {
    initScene();

    // Capture ref value for cleanup
    const container = containerRef.current;

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleVisibilityChange = () => {
      isTabActive.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Cleanup Three.js
      const renderer = rendererRef.current;
      if (renderer && container) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      objectsRef.current.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
    };
  }, [initScene, animate, handleResize, handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
