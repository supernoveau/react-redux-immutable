import { Record, Map } from 'immutable'

const PostRecord = Record({
  gettingPostById: false,
  post: Map({
    id: undefined,
    title: '',
    text: ''
  }),
  error: null
})

class Post extends PostRecord {
  isGettingPostById () {
    return this.get('gettingPostById')
  }

  getPost () {
    return this.get('post').toObject()
  }
}

export default Post
