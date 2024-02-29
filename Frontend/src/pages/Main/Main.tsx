import GradientBackground from '@/entities/GradientBackground/GradientBackground'
import HeaderText from '@/entities/HeaderText/HeaderText'
import classes from '@/pages/Main/Main.module.scss'
import food from '@/pages/Main/assets/food.jpg'
import game from '@/pages/Main/assets/game.jpg'
import work from '@/pages/Main/assets/work.jpg'
import LinkReroute from '@/shared/LinkReroute/LinkReroute'

interface IMain {
  className: string
}

export default function Main({ className }: IMain) {
  return (
    <main className={className}>
      <GradientBackground />
      <HeaderText>Наши проекты</HeaderText>
      <div className={classes.wrapper}>
        <LinkReroute className={classes.link} href="">
          <img className={classes.img} src={work} alt="Работа" />
          <h2 className={classes.text}>Sapphire-Работа</h2>
        </LinkReroute>
        <LinkReroute className={classes.link} href="">
          <img className={classes.img} src={game} alt="Работа" />
          <h2 className={classes.text}>Sapphire-Игры</h2>
        </LinkReroute>
        <LinkReroute className={classes.link} href="">
          <img className={classes.img} src={food} alt="Работа" />
          <h2 className={classes.text}>Sapphire-Еда</h2>
        </LinkReroute>
      </div>
    </main>
  )
}
