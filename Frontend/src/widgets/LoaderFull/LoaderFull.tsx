import Loader from '@/shared/Loader/Loader'
import classes from '@/widgets/LoaderFull/LoaderFull.module.scss'

export default function LoaderFull() {
  return (
    <div className={classes.wrapper}>
      <Loader />
    </div>
  )
}
