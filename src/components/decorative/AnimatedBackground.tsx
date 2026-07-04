"use client";

import { useEffect, useRef } from "react";

type Props = {
  variant?: "light" | "dark";
  intensity?: "subtle" | "medium" | "strong";
};

export default function AnimatedBackground({ variant = "light", intensity = "medium" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isDark = variant === "dark";

    // CIS colors from the brand
    const primaryColor = { r: 14, g: 143, b: 168 };    // #0e8fa8 accent
    const secondaryColor = { r: 196, g: 224, b: 232 }; // #c4e0e8 mist

    // Opacity based on intensity
    const baseOpacity = intensity === "subtle" ? 0.15 : intensity === "medium" ? 0.25 : 0.35;

    // Gradient orbs that slowly drift and pulse
    class GradientOrb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: { r: number; g: number; b: number };

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Slow drift
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseRadius = Math.random() * 150 + 100;
        this.radius = this.baseRadius;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        // Randomly pick between primary and secondary color
        this.color = Math.random() > 0.5 ? primaryColor : secondaryColor;
      }

      update(time: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges for seamless effect
        if (this.x < -this.baseRadius) this.x = canvas.width + this.baseRadius;
        if (this.x > canvas.width + this.baseRadius) this.x = -this.baseRadius;
        if (this.y < -this.baseRadius) this.y = canvas.height + this.baseRadius;
        if (this.y > canvas.height + this.baseRadius) this.y = -this.baseRadius;

        // Gentle pulsing
        this.radius = this.baseRadius + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 20;
      }

      draw() {
        if (!ctx) return;

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );

        const opacity = isDark ? baseOpacity * 0.8 : baseOpacity;

        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          this.x - this.radius,
          this.y - this.radius,
          this.radius * 2,
          this.radius * 2
        );
      }
    }

    // Create orbs - fewer but larger for more visible effect
    const orbs: GradientOrb[] = [];
    const orbCount = intensity === "subtle" ? 3 : intensity === "medium" ? 5 : 7;

    for (let i = 0; i < orbCount; i++) {
      orbs.push(new GradientOrb());
    }

    // Animation loop
    let startTime = Date.now();
    let animationId: number;

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach((orb) => {
        orb.update(currentTime);
        orb.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ mixBlendMode: variant === "dark" ? "screen" : "multiply" }}
    />
  );
}
