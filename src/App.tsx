import { lazy, useState, Suspense } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Header from './app/components/Header'
const HomePage = lazy(() => import('./app/Pages/HomePage/HomePage'))

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner className='my-2' />}>
          <Route exact component={HomePage} path={'/'} />
          <Route exact component={HomePage} path={'/t/:topic'} />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App
