import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isTabActive = useRef(true);

  const createParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const particleCount = Math.min(150, Math.floor((width * height) / 8000));

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      particles.push({
        x,
        y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        baseX: x,
        baseY: y,
      });
    }

    return particles;
  }, []);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const forceRadius = 120;
    const returnForce = 0.005;
    const maxDistance = 40;

    particles.forEach((particle) => {
      // Calculate distance to mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Apply repulsion force
      if (distance < forceRadius && distance > 0) {
        const force = (forceRadius - distance) / forceRadius;
        const angle = Math.atan2(dy, dx);
        const repulsion = force * 0.8;
        
        particle.vx -= Math.cos(angle) * repulsion;
        particle.vy -= Math.sin(angle) * repulsion;
      }

      // Return to base position
      const returnDx = particle.baseX - particle.x;
      const returnDy = particle.baseY - particle.y;
      const returnDistance = Math.sqrt(returnDx * returnDx + returnDy * returnDy);

      if (returnDistance > maxDistance) {
        particle.vx += returnDx * returnForce * 2;
        particle.vy += returnDy * returnForce * 2;
      } else {
        particle.vx += returnDx * returnForce;
        particle.vy += returnDy * returnForce;
      }

      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.5;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.5;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }
    });
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    
    particles.forEach((particle) => {
      ctx.save();
      
      // Create soft glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      
      gradient.addColorStop(0, `rgba(34, 197, 94, ${particle.opacity})`);
      gradient.addColorStop(0.4, `rgba(34, 197, 94, ${particle.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Core particle
      ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });
  }, []);

  const animate = useCallback(() => {
    if (!isTabActive.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    updateParticles();
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particlesRef.current = createParticles(canvas.width, canvas.height);
  }, [createParticles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Visibility API for performance
    const handleVisibilityChange = () => {
      isTabActive.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, handleMouseMove, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ transform: 'translateZ(0)' }} // Force GPU acceleration
    />
  );
}