'use client'

import { useEffect, useRef } from 'react'

export type DrawFunctionType = (
  canvas: HTMLCanvasElement,
  frame: number,
) => void

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const { clientWidth, clientHeight } = canvas
  const needResize =
    canvas.width !== clientWidth || canvas.height !== clientHeight

  if (needResize) {
    const { devicePixelRatio: ratio = 1 } = window
    canvas.width = clientWidth
    canvas.height = clientHeight
    const context = canvas.getContext('2d')!
    context.scale(ratio, ratio)
  }
  return needResize
}

const useDrawCanvas = (draw: DrawFunctionType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    let frameCount = 0
    let animationFrameId = -1

    const render = () => {
      resizeCanvas(canvas)
      frameCount++
      draw?.(canvas, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useDrawCanvas
