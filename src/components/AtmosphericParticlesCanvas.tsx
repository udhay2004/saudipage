import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
}

export const AtmosphericParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create particles
    const particleCount = Math.min(80, Math.floor((width * height) / 14000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(200, 164, 93, ', // Gold
      'rgba(11, 143, 90, ',  // Emerald
      'rgba(244, 241, 232, ', // Ivory
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.45;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw constellation connections between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around borders
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Subtle alpha breathing
        p1.alpha = p1.baseAlpha + Math.sin(tick * p1.pulseSpeed) * 0.15;

        // Proximity to mouse interactions
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 140) {
          // Interactive constellation connection to cursor
          const connectionAlpha = (1 - distMouse / 140) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(200, 164, 93, ${connectionAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Subtle gentle repulsion from mouse
          p1.x -= (dxMouse / distMouse) * 0.4;
          p1.y -= (dyMouse / distMouse) * 0.4;
        }

        // Particle-to-particle links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const linkAlpha = (1 - dist / 90) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(200, 164, 93, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${Math.max(0, p1.alpha)})`;
        ctx.fill();

        // Shimmering outer halo for larger particles
        if (p1.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p1.color}${Math.max(0, p1.alpha * 0.25)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};
