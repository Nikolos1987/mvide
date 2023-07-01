import {createStore,combineReducers} from 'redux'
import { profileReducer,testReduser } from './profile'

export const store=createStore(combineReducers({profiles:profileReducer,test:testReduser}))