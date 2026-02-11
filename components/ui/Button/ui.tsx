import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  icon?: ReactNode
}

export const Button = ({
  children,
  icon,
  className = '',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2 bg-accent text-dark font-semibold text-sm font-sofia-pro h-12 px-6 transition-opacity
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'
    }
        ${className}
      `}
      {...props}
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
