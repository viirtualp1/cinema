<template>
  <div class="movies">
    <v-row justify="center">
      <v-col v-for="(movie, idx) in MOVIES" :key="idx" cols="12" md="3">
        <movie-preview :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MOVIES } from '@/types/Movies'
import MoviePreview from '@/components/MoviePreview/MoviePreview.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MoviePreview,
  },
  setup() {
    return {
      MOVIES,
    }
  },
})
</script>

<style lang="scss" src="@/assets/main.scss"></style>
