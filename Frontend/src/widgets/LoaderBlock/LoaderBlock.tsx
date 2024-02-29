import GradientBackground from '@/entities/GradientBackground/GradientBackground'
import Loader from '@/shared/Loader/Loader'
import classes from '@/widgets/LoaderBlock/LoaderBlock.module.scss'

export default function LoaderBlock() {
  return (
    <div className={classes.loaderBlock}>
      <GradientBackground />
      <Loader />
    </div>
  )
}
