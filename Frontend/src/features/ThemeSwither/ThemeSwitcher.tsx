import { useTheme } from '@/app/providers/ThemeProvider'
import classes from '@/features/ThemeSwither/ThemeSwitcher.module.scss'
import Dark from '@/features/ThemeSwither/assets/moon.svg'
import Light from '@/features/ThemeSwither/assets/sun.svg'

export default function ThemeSwitcher() {
  const { changeTheme } = useTheme()

  return (
    <button
      id="themeSwitcher"
      className={classes.themeSwitcher}
      aria-label="Переключатель на темную или светлую тему"
      onClick={(e) => {
        e.stopPropagation()
        changeTheme()
      }}
    >
      <Light className={classes.light} aria-label="Светлая тема" />
      <Dark className={classes.dark} aria-label="Темная тема" />
    </button>
  )
}
