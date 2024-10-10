import { configureStore } from '@reduxjs/toolkit'
import downloadReducer from './Reducers/downloadSlice'

export default configureStore({
    reducer: {
        downloads: downloadReducer,
    },
})