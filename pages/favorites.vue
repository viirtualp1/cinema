<template>
  <div class="favourites">
    <h1>Любимое</h1>

    <v-row justify="center">
      <v-col
        v-for="(movie, idx) in favouriteMovies"
        :key="idx"
        cols="12"
        md="3"
      >
        <movie-preview :movie="movie" is-favourite />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import MoviePreview from '@/components/MoviePreview/MoviePreview.vue'
import { useMoviesStore } from '@/store'

export default defineComponent({
  components: {
    MoviePreview,
  },

  setup() {
    const moviesStore = useMoviesStore()

    const favouriteMovies = computed(() => {
      return moviesStore.getFavouriteMovies
    })

    return {
      favouriteMovies,
    }
  },
})
</script>
