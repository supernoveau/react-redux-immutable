import { injectReducer } from 'store/reducers'

export default (store, path) => ({
  path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Container = require('./PostsContainer').default
      const reducer = require('./modules/posts').default

      /*  Add the reducer to the store on key 'display'  */
      injectReducer(store, { key: 'posts', reducer })

      /*  Return getComponent   */
      cb(null, Container)

    /* Webpack named bundle   */
    }, 'posts')
  }
})
