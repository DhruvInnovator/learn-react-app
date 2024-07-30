import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redux/slices/counter'

export default configureStore({
  reducer: {
    counter: counterSlice,
    },
})