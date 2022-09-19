import { configureStore } from '@reduxjs/toolkit';
import reduxCart from './reduxCart';
import createWeatherSlice from './reduxWeatherSlice';

export default configureStore({
    reducer:{
        redux_cart:reduxCart,       
        wheater_slice:createWeatherSlice
    }
})