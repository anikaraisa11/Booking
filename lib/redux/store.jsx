import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { baseApi2 } from "./api/ExtraApi";
import alertReducer from "./features/socket/alert/alertSlice";
import authReducer from "./features/auth/AuthSlice";
import conversationReducer from "./features/socket/conversation/conversationSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "auth",
  storage: storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApi2.reducerPath]: baseApi2.reducer,
    auth: persistedAuthReducer,
    alert: alertReducer,
    conversation: conversationReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, baseApi2.middleware),
});

export const persistor = persistStore(store);
