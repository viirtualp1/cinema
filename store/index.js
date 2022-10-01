import { Store } from 'vuex'

const store = () =>
  new Store({
    state: () => ({
      favouriteMovies: [],
    }),
    mutations: {
      favourite(state, movieId) {
        state.favouriteMovies.push(movieId)
      },
    },
    modules: {
      movie: {
        namespaced: true,
        state: () => ({
          favouriteMovies: [],
        }),
        getters: {
          getFavouriteMovies(state) {
            return state.favouriteMovies
          },
        },
        mutations: {
          favourite(state, movieId) {
            state.favouriteMovies.push(movieId)
          },
        },
      },
    },
  })

export default store
