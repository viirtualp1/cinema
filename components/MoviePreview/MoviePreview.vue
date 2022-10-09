<template>
  <v-card class="mx-auto movie">
    <v-img height="250" :src="movie.image"> </v-img>

    <v-card-title>{{ movie.title }}</v-card-title>

    <v-card-text>
      <v-row class="mx-0">
        <v-rating
          :value="movie.rating.value"
          background-color="grey lighten-1"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ movie.rating.value }} ({{ movie.rating.reviews }})
        </div>
      </v-row>

      <v-chip-group class="mt-3" column>
        <div v-for="(tag, idx) in movie.tags" :key="idx">
          <v-chip v-if="idx < 3">
            {{ tag }}
          </v-chip>
        </div>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn text>
        <nuxt-link :to="`movie/${movie.id}`">Посмотреть</nuxt-link>
      </v-btn>

      <v-spacer />
      <v-btn v-if="!isLiked" :disabled="isFavourite" icon @click="like(movie)">
        <v-icon :color="likeColor">mdi-heart</v-icon>
      </v-btn>
      <v-btn v-if="isFavourite || isLiked" icon @click="unlike(movie.id)">
        <v-icon :color="COLORS.PINK">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
} from '@nuxtjs/composition-api'
import { useMoviesStore } from '@/store/'
import { MovieData } from '@/types/MovieData'
import { COLORS } from '~/utils/constans'

export default defineComponent({
  name: 'MoviePreview',

  props: {
    movie: {
      type: Object as PropType<MovieData>,
      required: true,
    },

    isFavourite: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const isLiked = ref(false)
    const movieStore = useMoviesStore()

    const likeColor = computed(() => {
      if (props.isFavourite) {
        return COLORS.PINK
      }

      return isLiked.value ? COLORS.PINK : COLORS.WHITE
    })

    function like(movie: MovieData) {
      isLiked.value = !isLiked.value

      movieStore.$patch((state) => {
        state.favouriteMovies.push(movie)
      })
    }

    function unlike(movieId: string | number) {
      isLiked.value = !isLiked.value

      movieStore.$patch((state) => {
        const movieIndex = state.favouriteMovies
          .map((movie) => movie.id)
          .indexOf(movieId)

        state.favouriteMovies.splice(movieIndex, 1)
      })
    }

    return { COLORS, isLiked, likeColor, like, unlike }
  },
})
</script>

<style lang="scss">
.disabled {
  pointer-events: none;
}
</style>
