import request from 'axios'
import Post from 'models/Post'
import { mock } from 'mock'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_POST_BY_ID_PENDING = 'GET_POST_BY_ID_PENDING'
export const GET_POST_BY_ID_SUCCESS = 'GET_POST_BY_ID_SUCCESS'
export const GET_POST_BY_ID_ERROR = 'GET_POST_BY_ID_ERROR'

// ------------------------------------
// Action Creators
// ------------------------------------
export const getPostByIdPending = () => {
  return {
    type: GET_POST_BY_ID_PENDING
  }
}
export const getPostByIdSuccess = (data = {}) => {
  return {
    type: GET_POST_BY_ID_SUCCESS,
    payload: { post: data }
  }
}
export const getPostByIdError = (err = {}) => {
  return {
    type: GET_POST_BY_ID_ERROR,
    payload: { error: err }
  }
}
export const getPostById = (id) => {
  console.log('Mocked request getPostById: ', id)
  return dispatch => {
    dispatch(getPostByIdPending())

    return request.get(``)
      .then(res => {
        return dispatch(getPostByIdSuccess(JSON.parse(mock)[id - 1]))
      })
      .catch(err => {
        return dispatch(getPostByIdError(err))
      })
  }
}
export const actions = {
  getPostById,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_POST_BY_ID_PENDING]: (state, action) => state.set('gettingPostById', true),
  [GET_POST_BY_ID_SUCCESS]: (state, { payload: { post: { id, title, text } } }) => state.merge({ gettingPostById: false, post: { id, title, text } }),
  [GET_POST_BY_ID_ERROR]: (state, { payload: { error } }) => state.merge({ gettingPostById: false, error }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = new Post()

export default function postReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
