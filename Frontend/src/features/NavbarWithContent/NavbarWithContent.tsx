import Navbar from '@/entities/Navbar/Navbar'
import classes from '@/features/NavbarWithContent/NavbarWithContent.module.scss'
import Text from '@/shared/Text/Text'
import { NavLink } from 'react-router-dom'

interface INavbarWithContent {
  dataMenuActive: string
}

export default function NavbarWithContent({
  dataMenuActive,
}: INavbarWithContent) {
  return (
    <Navbar className={classes.navbar} dataMenuActive={dataMenuActive}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? classes.link + ' ' + classes.activeLink : classes.link
        }
      >
        <Text>Главная</Text>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? classes.link + ' ' + classes.activeLink : classes.link
        }
      >
        <Text>О нас</Text>
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? classes.link + ' ' + classes.activeLink : classes.link
        }
      >
        <Text>Контакты</Text>
      </NavLink>
      <NavLink
        to="/creators"
        className={({ isActive }) =>
          isActive ? classes.link + ' ' + classes.activeLink : classes.link
        }
      >
        <Text>Разработчики</Text>
      </NavLink>
    </Navbar>
  )
}
