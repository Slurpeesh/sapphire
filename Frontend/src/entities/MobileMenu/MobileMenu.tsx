import classes from '@/entities/MobileMenu/MobileMenu.module.scss'
import Close from '@/entities/MobileMenu/assets/cross.svg'
import Menu from '@/entities/MobileMenu/assets/menu.svg'
import { MouseEventHandler } from 'react'

interface IMobileMenu {
  dataMenuActive: string
  menuHandler: MouseEventHandler<HTMLButtonElement>
}

export default function MobileMenu({
  menuHandler,
  dataMenuActive,
}: IMobileMenu) {
  return (
    <button
      data-menu-active={dataMenuActive}
      className={classes.container}
      onClick={menuHandler}
      aria-label="Открыть или закрыть меню"
    >
      <Menu className={classes.menu} aria-label="Открыть меню" />
      <Close className={classes.close} aria-label="Закрыть меню" />
    </button>
  )
}
