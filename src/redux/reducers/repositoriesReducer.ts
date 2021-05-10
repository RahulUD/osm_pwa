import {RepositoryActionType as ActionType} from '../actionType'
import { RepositoryAction as Action } from '../action'
import {repositoryInitialization} from './../reExport'
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const repositoryReducer = (state: RepositoriesState = {...repositoryInitialization}, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORY_REQUEST:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORY_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORY_FAIL:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}
export default repositoryReducer