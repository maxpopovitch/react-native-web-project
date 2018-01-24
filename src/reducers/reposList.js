import {ActionTypes} from '../constants/AppConstants';

const initialState = {
  isLoading: true,
  errMessage: '',
  repos: []
};

export default function reposList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_REPOS_REQUEST_SUCCESS:
      return {
        ...state,
        repos: action.data.items,
        isLoading: false
      };

    case ActionTypes.GET_REPOS_REQUEST_FAIL:
      return {
        ...state,
        errMessage: action.errMessage,
        isLoading: false
      };

    default:
      return state;
  }
}