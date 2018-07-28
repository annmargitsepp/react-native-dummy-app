import * as ActionTypes from './ActionTypes';
export function listRepos(user) {
    return {
      type: ActionTypes.GET_REPOS,
      payload: {
        request: {
          url: `/users/${user}/repos`
        }
      }
    };
  }
  
  export function getRepoDetail(user, repo) {
    console.log()
    return {
      type: ActionTypes.GET_REPO_INFO,
      payload: {
        request: {
          url: `/repos/${user}/${repo}`
        }
      }
    };
  }
  
  export function getUser(user) {
    return {
      type: ActionTypes.GET_USER,
      payload: {
        request: {
          url: `/users/${user}`
        }
      }
    };
  }