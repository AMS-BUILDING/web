import { configureStore } from '@reduxjs/toolkit';

import pageReducer from './PageSlice'
export default configureStore({
    reducer: {
        page: pageReducer
    }
})