import bg from '@/entities/GradientBackground/BackgroundTexture/assets/bg.svg?url'
import classes from '@/entities/GradientBackground/BackgroundTexture/BackgroundTexture.module.scss'

export default function BackgroundTexture() {
  return (
    <img
      src={bg}
      className={classes.bgTexture}
      aria-label="Сетка из четырехугольников"
    />
  )
}
