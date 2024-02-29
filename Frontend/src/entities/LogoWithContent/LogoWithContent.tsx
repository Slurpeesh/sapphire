import classes from '@/entities/LogoWithContent/LogoWithContent.module.scss'
import Logo from '@/shared/Logo/Logo'
import sapphire from './assets/sapphire.svg?url'

export default function LogoWithContent() {
  return (
    <Logo className={classes.wrapper}>
      <img
        className={classes.svg}
        src={sapphire}
        alt="Логотип компании Sapphire"
      />
      <h1 className={classes.logoText}>Sapphire</h1>
    </Logo>
  )
}
