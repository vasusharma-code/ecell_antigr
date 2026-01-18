import { useEffect, useRef, useCallback } from 'react';

/**
 * Premium Particle Background
 * 
 * Dense field of subtle particles with smooth cursor repulsion.
 * Particles flow around the cursor like soft fluid.
 */

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const isTabActive = useRef(true);

  // Initialize dense particle field
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const spacing = 25; // Grid spacing for even distribution
    
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        // Add slight randomness to position
        const px = x + (Math.random() - 0.5) * spacing * 0.8;
        const py = y + (Math.random() - 0.5) * spacing * 0.8;
        
        particles.push({
          x: px,
          y: py,
          baseX: px,
          baseY: py,
          size: 1 + Math.random() * 1.5, // 1-2.5px
          opacity: 0.2 + Math.random() * 0.3, // 0.2-0.5
        });
      }
    }
    
    return particles;
  }, []);

  const animate = useCallback(() => {
    if (!isTabActive.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const avoidRadius = 80; // Cursor avoidance zone
    const easing = 0.08; // Smooth movement speed

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Calculate distance to mouse
      const dx = mouse.x - p.baseX;
      const dy = mouse.y - p.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Target position (where particle wants to be)
      let targetX = p.baseX;
      let targetY = p.baseY;
      
      // If within avoidance zone, push particle away
      if (distance < avoidRadius && distance > 0) {
        const force = (avoidRadius - distance) / avoidRadius;
        const angle = Math.atan2(dy, dx);
        
        // Push away from cursor
        targetX = p.baseX - Math.cos(angle) * force * 40;
        targetY = p.baseY - Math.sin(angle) * force * 40;
      }
      
      // Smooth easing toward target position
      p.x += (targetX - p.x) * easing;
      p.y += (targetY - p.y) * easing;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesRef.current = initParticles(canvas.width, canvas.height);
  }, [initParticles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();

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
    };
  }, [handleResize, handleMouseMove, handleMouseLeave, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ transform: 'translateZ(0)' }}
    />
  );
}