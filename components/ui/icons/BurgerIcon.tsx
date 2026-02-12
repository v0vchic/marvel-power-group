import type { FC } from 'react'

interface BurgerIconProps {
  className?: string
}

export const BurgerIcon: FC<BurgerIconProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col justify-center gap-[5px] ${className}`}>
      <span className="block w-[25px] h-[2px] bg-black" />
      <span className="block w-[25px] h-[2px] bg-black" />
    </div>
  )
}
