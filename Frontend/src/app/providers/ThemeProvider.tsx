import { ReactNode, createContext, useContext } from 'react'
import useLocalStorage from 'use-local-storage'

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

interface IThemeContext {
  theme: string
  changeTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({
  theme: defaultDark ? 'dark' : 'light',
  changeTheme: () => null,
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

interface IThemeProvider {
  children: ReactNode
}

export function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  function changeTheme() {
    setTheme((cur) => (cur === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
