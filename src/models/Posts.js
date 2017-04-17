import { Record, List } from 'immutable'

const PostsRecord = Record({
  gettingAllPosts: false,
  posts: List(),
  error: null
})

class Posts extends PostsRecord {
  isGettingAllPosts () {
    return this.get('gettingAllPosts')
  }

  getPosts () {
    return this.get('posts').toArray()
  }
}

export default Posts
