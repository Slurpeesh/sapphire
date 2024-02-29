import '@/app/App.module.scss'
import classes from '@/app/App.module.scss'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header className={classes.header} />
      <Outlet />
      <Footer className={classes.footer} />
    </>
  )
}
