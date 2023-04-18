import { configureStore } from '@reduxjs/toolkit'
import ledReducer from './redux/ledSlice'
import pumpReducer from './redux/pumpSlice'
import treeReducer from './redux/treeSlice'
import tempReducer from './redux/tempSlice'
import humidReducer from './redux/humidSlice'
import moistureReducer from './redux/moistureSlice'
import lightReducer from './redux/lightSlice'

export const store = configureStore({
  reducer: {
    led: ledReducer,
    pump: pumpReducer,
    tree: treeReducer,
    temp: tempReducer,
    humid: humidReducer,
    moisture: moistureReducer,
    light: lightReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})