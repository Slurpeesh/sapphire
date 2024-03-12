import { MouseEventHandler, MutableRefObject, ReactNode } from 'react'

interface INavbar {
  dataMenuActive: string
  className: string
  children?: ReactNode
  menuRef?: MutableRefObject<undefined>
  onClick?: MouseEventHandler<HTMLElement>
}

export default function Navbar({
  children,
  className,
  dataMenuActive,
  menuRef,
  onClick,
}: INavbar) {
  return (
    <nav
      data-menu-active={dataMenuActive}
      className={className}
      onClick={onClick}
      ref={menuRef}
    >
      {children}
    </nav>
  )
}
