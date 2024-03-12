import GradientBackground from '@/entities/GradientBackground/GradientBackground'
import HeaderText from '@/entities/HeaderText/HeaderText'
import Paragraph from '@/entities/Paragraph/Paragraph'
import classes from '@/pages/About/About.module.scss'
import Text from '@/shared/Text/Text'

interface IAbout {
  className: string
}

export default function About({ className }: IAbout) {
  return (
    <main className={className}>
      <GradientBackground />
      <HeaderText>О нас</HeaderText>
      <h3 className={classes.subHeader}>
        <Text>Миссия</Text>
      </h3>
      <Paragraph>
        Нашей миссией является создание инновационной и вдохновляющей
        экосистемы, объединяющей людей через обмен услугами. Мы стремимся
        предоставить уникальную платформу, где пользователи могут легко и
        эффективно обмениваться навыками, опытом и услугами, способствуя
        взаимному росту и развитию.
      </Paragraph>
      <h3 className={classes.subHeader}>
        <Text>Видение компании</Text>
      </h3>
      <Paragraph>
        Мы видим будущее, где &laquo;Sapphire&raquo; станет центром для всех,
        кто ищет возможности для личного и профессионального роста. Наше видение
        включает в себя создание виртуального пространства, где талантливые люди
        со всего мира могут соединяться, обмениваться идеями, развиваться и
        достигать новых вершин в своих областях.
      </Paragraph>
      <h3 className={classes.subHeader}>
        <Text>Стратегия компании</Text>
      </h3>
      <Paragraph>
        Наши действия направлены на разностороннюю поддержку наших
        пользователей. Мы стремимся предоставить интуитивно понятные и
        эффективные инструменты для обмена услугами, а также создать уникальные
        решения для эффективного поиска работы и сотрудников. Наша стратегия
        включает в себя активное внедрение технологий, поощрение сотрудничества
        и постоянное совершенствование наших сервисов, чтобы удовлетворять
        растущие потребности наших пользователей. Мы стремимся быть в центре
        современного профессионального и личного развития, предлагая
        инновационные решения для облегчения ваших целей и достижений.
      </Paragraph>
    </main>
  )
}
