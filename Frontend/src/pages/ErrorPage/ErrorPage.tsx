import HeaderText from '@/entities/HeaderText/HeaderText'
import MiniLink from '@/entities/MiniLink/MiniLink'
import classes from '@/pages/ErrorPage/ErrorPage.module.scss'
import Text from '@/shared/Text/Text'

export default function ErrorPage() {
  return (
    <div className={classes.wrapper}>
      <HeaderText>Ошибка 404</HeaderText>
      <Text>Страница не найдена.</Text>
      <MiniLink to="/">На главную</MiniLink>
    </div>
  )
}
