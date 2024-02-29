import { ReactNode } from 'react'

interface INavbar {
  dataMenuActive: string
  className: string
  children?: ReactNode
}

export default function Navbar({
  children,
  className,
  dataMenuActive,
}: INavbar) {
  return (
    <nav data-menu-active={dataMenuActive} className={className}>
      {children}
    </nav>
  )
}
