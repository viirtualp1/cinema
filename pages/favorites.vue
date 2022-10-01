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
        <movie-preview :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'
import MoviePreview from '@/components/MoviePreview/MoviePreview.vue'

export default defineComponent({
  components: {
    MoviePreview,
  },

  setup() {
    const store = useContext()

    const favouriteMovies = computed(() => {
      return store.store.state.favouriteMovies
    })

    return {
      favouriteMovies,
    }
  },
})
</script>
