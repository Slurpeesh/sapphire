import LogoWithContent from '@/entities/LogoWithContent/LogoWithContent'
import MobileMenu from '@/entities/MobileMenu/MobileMenu'
import NavbarWithContent from '@/features/NavbarWithContent/NavbarWithContent'
import ThemeSwitcher from '@/features/ThemeSwither/ThemeSwitcher'
import { useRef, useState } from 'react'

interface IHeader {
  className: string
}

export default function Header({ className }: IHeader) {
  const [menuActive, setMenuActive] = useState('false')

  const navbarEl = useRef()

  function menuHandler(e: any) {
    if (e.currentTarget === bodyEl && menuActive) {
      setMenuActive('false')
      return
    }
    setMenuActive((cur) => (cur === 'false' ? 'true' : 'false'))
  }

  const bodyEl = document.querySelector('body')
  bodyEl.onclick = menuHandler

  return (
    <header className={className}>
      <LogoWithContent />
      <NavbarWithContent dataMenuActive={menuActive} menuRef={navbarEl} />
      <ThemeSwitcher />
      <MobileMenu dataMenuActive={menuActive} menuHandler={menuHandler} />
    </header>
  )
}
