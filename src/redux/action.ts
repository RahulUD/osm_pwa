import {RepositoryActionType as ActionType} from './actionType'

interface SearchRepositoryRequest {
    type: ActionType.SEARCH_REPOSITORY_REQUEST
}
interface SearchRepositorySuccess {
    type: ActionType.SEARCH_REPOSITORY_SUCCESS;
    payload: string[]
}
interface SearchRepositoryFail {
    type: ActionType.SEARCH_REPOSITORY_FAIL;
    payload: string
}

export type RepositoryAction = SearchRepositoryRequest | SearchRepositorySuccess | SearchRepositoryFail
