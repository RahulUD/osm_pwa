import {combineReducers} from 'redux'
import repositoryReducer from '../reducers/repositoriesReducer'

const rootReducer = combineReducers({
    repositoryReducer,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>