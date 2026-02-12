import type { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className = '' }: WrapperProps) => {
  return (
    <div className={`w-full mx-auto px-4 mobile:px-8 tablet:px-12 2xl:px-64 ${className}`}>
      {children}
    </div>
  )
}
