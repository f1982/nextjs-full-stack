'use client'

import { Button, ButtonProps } from '../ui/button'
import React from 'react'

interface CopyButtonProps extends ButtonProps {
  content: string
  label?: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  content,
  label = 'Copy',
  ...reset
}) => {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)

    setTimeout(() => setCopied(false), 800)
  }

  return (
    <Button
      title={`Copy ${content} to your clipboard`}
      className={` ${copied ? 'animate-pulse' : ''}`}
      onClick={copyToClipboard}
      {...reset}>
      {copied ? (
        <b>Copied!</b>
      ) : (
        <span>{reset.children ? reset.children : label}</span>
      )}
    </Button>
  )
}
