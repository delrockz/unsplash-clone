import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Header from './app/components/Header'

const HomePage = lazy(() => import('./app/Pages/HomePage/HomePage'))

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner className='my-2' />}>
          <Route exact component={HomePage} path={'/'} />
          <Route exact component={HomePage} path={'/t/:topic'} />
          <Route exact component={HomePage} path={'/photos/:photo'} />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App
