import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function Button({ children, icon, className = '' }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-accent text-dark font-semibold text-sm font-sofia-pro h-12 ${className}`}
    >
      {children}
      {icon && (
        <span className="flex items-center justify-center size-4">
          {icon}
        </span>
      )}
    </button>
  )
}
