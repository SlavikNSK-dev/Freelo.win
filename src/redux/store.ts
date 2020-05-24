import { Action, applyMiddleware, combineReducers, createStore, Store } from 'redux';
import ReduxThunkMiddleware, { ThunkAction } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  
});

export type TRootState = ReturnType<typeof rootReducer>
export type TStore = Store<TRootState>;

export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;

// Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: TStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunkMiddleware)),
);

export const persistor = persistStore(store);
