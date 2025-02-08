import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasksSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tasksPersistConfig = {
  key: "tasks",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
}

const persistTasksReducer = persistReducer(tasksPersistConfig, tasksReducer);
const persistFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);

const store = configureStore({
  reducer: {
    tasks: persistTasksReducer,
    filters: persistFiltersReducer,
  },
});

const persistedStore = persistStore(store);

export {store, persistedStore}