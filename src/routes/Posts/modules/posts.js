import request from 'axios'
import Posts from 'models/Posts'

const dataMock = `[
{
  "id":1,
  "title":"title",
  "text":"text"
},
{
  "id":2,
  "title":"title 2",
  "text":"text 2"
}
]`

// ------------------------------------
// Constants
// ------------------------------------
export const GET_ALL_POSTS_PENDING = 'GET_ALL_POSTS_PENDING'
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS'
export const GET_ALL_POSTS_ERROR = 'GET_ALL_POSTS_ERROR'

// ------------------------------------
// Action Creators
// ------------------------------------
export const getAllPostsPending = () => {
  return {
    type: GET_ALL_POSTS_PENDING
  }
}
export const getAllPostsSuccess = (data = {}) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    payload: { posts: data }
  }
}
export const getAllPostsError = (err = {}) => {
  return {
    type: GET_ALL_POSTS_ERROR,
    payload: { error: err }
  }
}
export const getAllPosts = dispatch => {
  return dispatch => {
    dispatch(getAllPostsPending())

    return request.get(``)
      .then(res => {
        return dispatch(getAllPostsSuccess(JSON.parse(dataMock)))
      })
      .catch(err => {
        return dispatch(getAllPostsError(err))
      })
  }
}

export const actions = {
  getAllPosts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_ALL_POSTS_PENDING]: (state, action) => state.set('gettingAllPosts', true),
  [GET_ALL_POSTS_SUCCESS]: (state, { payload: { posts } }) => state.merge({ gettingAllPosts: false, posts }),
  [GET_ALL_POSTS_ERROR]: (state, { payload: { error } }) => state.merge({ gettingAllPosts: false, error })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = new Posts()

export default function displayReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
