import { cpuApi } from "@/store/api/cpuApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [cpuApi.reducerPath]: cpuApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cpuApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
