import App from '@/app/App'
import classes from '@/app/App.module.scss'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'
import { Creators } from '@/pages/Creators'
import { ErrorPage } from '@/pages/ErrorPage'
import Main from '@/pages/Main/Main'
import LoaderBlock from '@/widgets/LoaderBlock/LoaderBlock'
import LoaderFull from '@/widgets/LoaderFull/LoaderFull'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'

injectSpeedInsights()

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoaderBlock />}>
              <Main className={classes.main} />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoaderBlock />}>
              <About className={classes.about} />
            </Suspense>
          }
        />
        <Route
          path="creators"
          element={
            <Suspense fallback={<LoaderBlock />}>
              <Creators className={classes.creators} />
            </Suspense>
          }
        />
        <Route
          path="contacts"
          element={
            <Suspense fallback={<LoaderBlock />}>
              <Contacts className={classes.contacts} />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<LoaderFull />}>
            <ErrorPage />
          </Suspense>
        }
      />
    </>
  )
)

container.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
