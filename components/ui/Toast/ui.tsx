'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  title: string
  message: string
  variant?: 'success' | 'error'
}

export const Toast = ({
  title,
  message,
  variant = 'success',
}: ToastProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible)
    return null

  const isError = variant === 'error'

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-80 min-h-24 px-5 py-4 rounded-lg shadow-lg animate-fadeIn flex flex-col justify-center gap-3
        ${isError ? 'bg-red-600 text-primary' : 'bg-dark text-accent border border-accent'}
      `}
    >
      <div className="font-semibold uppercase">
        {title}
      </div>
      <div>
        {message}
      </div>
    </div>
  )
}
