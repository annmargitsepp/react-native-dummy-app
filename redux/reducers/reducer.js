import * as ActionType from '../actions/ActionTypes';

const initialState = { repos: [], repoInfo: {}, user: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_REPOS:
      return { ...state, loading: true };
    case ActionType.GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case ActionType.GET_REPOS_FAIL:
      return { ...state, loading: false, error: 'Error getting repos info' };
    case ActionType.GET_REPO_INFO:
      return { ...state, loadingInfo: true };
    case ActionType.GET_REPO_INFO_SUCCESS:
      return { ...state, loadingInfo: false, repoInfo: action.payload.data };
    case ActionType.GET_REPO_INFO_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: 'Error getting repo info'
      };
    case ActionType.GET_USER:
      return { ...state, loadingProfile: true };
    case ActionType.GET_USER_SUCCESS:
      return { ...state, loadingProfile: false, user: action.payload.data };
    case ActionType.GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorUser: 'Error getting user info'
      };
    default:
      return state;
  }
}

