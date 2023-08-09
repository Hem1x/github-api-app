import { configureStore } from "@reduxjs/toolkit";
import { githubAPI } from "./github/github.api";
import {setupListeners} from '@reduxjs/toolkit/query/react' 

export const store = configureStore({
    reducer: {
        [githubAPI.reducerPath]: githubAPI.reducer
    },
    devTools: true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(githubAPI.middleware),
})

setupListeners(store.dispatch)