import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/theme'
/**
 * set reducer for theme change action and name it to theme
 */
export default configureStore({
  reducer: {
    theme: themeReducer,
  },
})