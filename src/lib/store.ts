import { themeReducer } from "@/context/admin/theme/reducer";
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "smart-portal",
  storage,
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

export const store = createStore();

export const persist = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
