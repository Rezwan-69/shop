import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './Components/slice/productSlice'

export default configureStore({
  reducer: {
    product:productSlice
  },
})