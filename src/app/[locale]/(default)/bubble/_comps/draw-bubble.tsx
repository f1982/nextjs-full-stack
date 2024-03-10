'use client'
// Import necessary libraries
import React, { useRef, useEffect } from 'react';
import { Leva, useControls } from 'leva';
import useDrawCanvas, { DrawFunctionType } from '@/utils/canvas/use-draw-canvas';
import { useEffectOnce } from 'usehooks-ts';

export default function BubbleCanvas() {
  const dotRadius = 5;
  let isDragging = false;

  // Create Leva controls for width and height
  const { width, height } = useControls({
    width: { value: 200, label: 'Width' },
    height: { value: 100, label: 'Height' },
  });

  const bubble = {
    x: 60,
    y: 280,
    width,
    height,
  };

  function drawControlDot(ctx: CanvasRenderingContext2D) {
    // Draw dot
    ctx.beginPath();
    ctx.arc(
      bubble.x + bubble.width,
      bubble.y + bubble.height,
      dotRadius,
      0,
      2 * Math.PI,
    );
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
  }

  const drawBubble: DrawFunctionType = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw chat bubble using Leva controls for width and height
    ctx.beginPath();
    ctx.moveTo(bubble.x, bubble.y + 20);
    ctx.arcTo(bubble.x, bubble.y, bubble.x + 20, bubble.y, 20);
    ctx.lineTo(bubble.x + bubble.width - 20, bubble.y);
    ctx.arcTo(
      bubble.x + bubble.width,
      bubble.y,
      bubble.x + bubble.width,
      bubble.y + 20,
      20,
    );
    ctx.lineTo(bubble.x + bubble.width, bubble.y + bubble.height - 20);
    ctx.arcTo(
      bubble.x + bubble.width,
      bubble.y + bubble.height,
      bubble.x + bubble.width - 20,
      bubble.y + bubble.height,
      20,
    );
    ctx.lineTo(bubble.x + 20, bubble.y + bubble.height);
    ctx.arcTo(
      bubble.x,
      bubble.y + bubble.height,
      bubble.x,
      bubble.y + bubble.height - 20,
      20,
    );
    ctx.lineTo(bubble.x, bubble.y + 20);
    ctx.closePath();

    // Fill the bubble with color
    ctx.fillStyle = 'lightblue';
    ctx.fill();

    drawControlDot(ctx)
    
  };

  

  const canvasRef = useDrawCanvas(drawBubble);

  function isDotClicked(mouseX, mouseY) {
    const dotX = bubble.x + bubble.width;
    const dotY = bubble.y + bubble.height;
    return Math.sqrt((mouseX - dotX) ** 2 + (mouseY - dotY) ** 2) <= dotRadius;
  }

  function initEventListeners(canvas) {
    canvas.addEventListener('mousedown', (e) => {
      const mouseX = e.clientX - canvas.getBoundingClientRect().left;
      const mouseY = e.clientY - canvas.getBoundingClientRect().top;

      if (isDotClicked(mouseX, mouseY)) {
        isDragging = true;
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const mouseX = e.clientX - canvas.getBoundingClientRect().left;
        const mouseY = e.clientY - canvas.getBoundingClientRect().top;

        bubble.width = Math.max(mouseX - bubble.x, 20);
        bubble.height = Math.max(mouseY - bubble.y, 20);

        drawBubble(canvasRef.current!, 30);
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  useEffect(() => {
    if (canvasRef.current) {
      initEventListeners(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <>
      {/* Render Leva to control width and height */}
      <Leva />

      <canvas ref={canvasRef} width="660px" height="660px" />
    </>
  );
}
