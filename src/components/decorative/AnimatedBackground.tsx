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

    // Grid configuration
    const gridSize = 60; // Size of each grid cell
    const lineWidth = 1;

    // CIS brand colors
    const accentColor = { r: 14, g: 143, b: 168 };    // #0e8fa8
    const mistColor = { r: 196, g: 224, b: 232 };     // #c4e0e8

    // Base opacity based on variant
    const baseOpacity = isDark ? 0.15 : 0.12;

    // Animated nodes at grid intersections
    class GridNode {
      x: number;
      y: number;
      baseIntensity: number;
      pulseSpeed: number;
      pulseOffset: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseIntensity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.8 + 0.4;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      getIntensity(time: number): number {
        return this.baseIntensity + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3;
      }
    }

    // Create grid nodes
    const nodes: GridNode[] = [];
    const cols = Math.ceil(canvas.width / gridSize) + 1;
    const rows = Math.ceil(canvas.height / gridSize) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        nodes.push(new GridNode(col * gridSize, row * gridSize));
      }
    }

    // Animation
    let startTime = Date.now();
    let animationId: number;

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height - gridSize; y += gridSize) {
          const node = nodes.find(n => n.x === x && n.y === y);
          if (!node) continue;

          const intensity = node.getIntensity(currentTime);
          const opacity = baseOpacity * intensity;

          // Use mist color for vertical lines
          ctx.strokeStyle = `rgba(${mistColor.r}, ${mistColor.g}, ${mistColor.b}, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();
        }
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width - gridSize; x += gridSize) {
          const node = nodes.find(n => n.x === x && n.y === y);
          if (!node) continue;

          const intensity = node.getIntensity(currentTime);
          const opacity = baseOpacity * intensity;

          // Use accent color for horizontal lines
          ctx.strokeStyle = `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y);
          ctx.stroke();
        }
      }

      // Draw glowing dots at intersections occasionally
      nodes.forEach(node => {
        const intensity = node.getIntensity(currentTime);
        if (intensity > 0.8) {
          const opacity = (intensity - 0.8) * 5 * baseOpacity;
          const dotSize = 3;

          // Gradient for glow effect
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, dotSize * 3);
          gradient.addColorStop(0, `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, dotSize * 3, 0, Math.PI * 2);
          ctx.fill();
        }
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
    />
  );
}
