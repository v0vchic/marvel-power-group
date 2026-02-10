interface ArrowProps {
  className?: string
}

export const Arrow = ({ className = '' }: ArrowProps) => {
  return (
    <div className={`flex items-center gap-1 text-primary ${className}`}>
      <span className="w-8 h-0.5 bg-primary" />
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        className="flex-shrink-0"
      >
        <path
          d="M1 1L6 6L1 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
