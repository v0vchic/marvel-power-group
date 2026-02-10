import type { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className = '' }: WrapperProps) => {
  return (
    <div className={`w-full px-[256px] ${className}`}>
      {children}
    </div>
  )
}
