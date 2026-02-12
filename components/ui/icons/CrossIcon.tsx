import type { FC, SVGProps } from 'react'

export const CrossIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
    {...props}
  >
    <rect
      y="17.6777"
      width="25"
      height="2"
      transform="rotate(-45 0 17.6777)"
      fill="currentColor"
    />
    <rect
      width="25"
      height="2"
      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 19.0918 17.6777)"
      fill="currentColor"
    />
  </svg>
)
