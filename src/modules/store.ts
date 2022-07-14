import { AnyAction, CombinedState, combineReducers,  configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import { HYDRATE } from 'next-redux-wrapper';
import userReducer from './users/join'
import loginReducer from './users/login';
import findUserNameReducer from './users/findUserName'
import findUserPwReducer from './users/findPw'
import loadUserReducer from './users/loadUser'
import updateReducer from './users/update'
import removeReducer from './users/remove'
import checkReducer from '@/modules/users/check'
import rootSaga from '@/sagas';
import createSagaMiddleware from '@redux-saga/core'
import { TypedUseSelectorHook, useSelector } from 'react-redux';


// 기존 RootState는 RTK로 인해서, 자체적으로 RootState와 Dispatch는 스토어 자체에서 추론.
// export interface RootStates 
// 루트 스테이트는 리듀서 결합 시 이렇게, 스토어에 리듀서 하나씩 넣어주는 건 다르게. RTK 참조

const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

const combinedReducer = combineReducers({
        user : userReducer,
        login : loginReducer,
        findUserName : findUserNameReducer,
        findUserPw : findUserPwReducer,
        loadUser: loadUserReducer,
        update: updateReducer,
        remove: removeReducer,
        check: checkReducer
})
const rootReducer = (
	state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, // use previous state
            ...action.payload // apply delta from hydration
        }
    } else {
    return combinedReducer(state,action)
    }
}
const makeStore = () =>{
    const store = 
    configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
        //직렬화 문제 발생 시 {serializableCheck: false} 파라미터로 전달
            .prepend(sagaMiddleware)
            .concat(logger),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper(makeStore, {debug: isDev})
export default store;