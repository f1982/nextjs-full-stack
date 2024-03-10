'use client'

import useDrawCanvas, { DrawFunctionType } from './use-draw-canvas'
import React from 'react'

interface DrawCanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  draw: DrawFunctionType
}
export default function DrawCanvas({ draw, ...rest }: DrawCanvasProps) {
  const canvasRef = useDrawCanvas(draw)

  const downloadImage = () => {
    var anchor = document.createElement('a')
    anchor.href = canvasRef.current?.toDataURL('image/png', 1) ?? '#' // 'image/jpg'
    anchor.download = 'emoji.png' // 'image.jpg'
    anchor.click()
  }

  return (
    <>
      <canvas ref={canvasRef} {...rest} />
      <button
        className="mt-6 rounded-md border-2 border-gray-300 p-2"
        title="Emoji png image download"
        onClick={() => {
          downloadImage()
        }}>
        Download PNG
      </button>
    </>
  )
}
