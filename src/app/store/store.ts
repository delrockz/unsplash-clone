import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './rootReducer'
import IAction from '../../interfaces/IAction'

const sagaMiddleware = createSagaMiddleware()
const loggingReduxMiddleware = () => (next: Function) => (action: IAction) => {
  console.info('Dispatching Action: ', action.type, action)
  next(action)
}

const middlewares = [sagaMiddleware, loggingReduxMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
