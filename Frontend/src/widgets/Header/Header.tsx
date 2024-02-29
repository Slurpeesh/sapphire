import LogoWithContent from '@/entities/LogoWithContent/LogoWithContent'
import MobileMenu from '@/entities/MobileMenu/MobileMenu'
import NavbarWithContent from '@/features/NavbarWithContent/NavbarWithContent'
import ThemeSwitcher from '@/features/ThemeSwither/ThemeSwitcher'
import { useState } from 'react'

interface IHeader {
  className: string
}

export default function Header({ className }: IHeader) {
  const [menuActive, setMenuActive] = useState('false')

  function menuHandler() {
    setMenuActive((cur) => (cur === 'false' ? 'true' : 'false'))
  }

  return (
    <header className={className}>
      <LogoWithContent />
      <NavbarWithContent dataMenuActive={menuActive} />
      <ThemeSwitcher />
      <MobileMenu dataMenuActive={menuActive} menuHandler={menuHandler} />
    </header>
  )
}
