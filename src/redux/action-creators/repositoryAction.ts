import repository from '../api/repositiry'
import { RepositoryActionType as ActionType } from '../actionType'
import { Dispatch } from 'redux'
import { RepositoryAction as Action } from '../action'

export const getPostsAction = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.SEARCH_REPOSITORY_REQUEST })
        repository.getPosts()
            .then(response => {
                console.log(response)
                dispatch({ type: ActionType.SEARCH_REPOSITORY_SUCCESS, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: ActionType.SEARCH_REPOSITORY_FAIL, payload: error.message });
            })
    }
}
