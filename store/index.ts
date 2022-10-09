import { defineStore } from 'pinia'
import { MovieData } from '@/types/MovieData'

export const useMoviesStore = defineStore('movies', {
  state: () => {
    return { favouriteMovies: [] as MovieData[] }
  },

  getters: {
    getFavouriteMovies: (state) => state.favouriteMovies,
  },
})
