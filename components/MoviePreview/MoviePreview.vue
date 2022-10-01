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
      <v-btn icon @click="like(movie.id)">
        <v-icon :color="likeColor">mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed,
  useContext,
} from '@nuxtjs/composition-api'
import { MovieData } from '@/types/MovieData'

export default defineComponent({
  name: 'MoviePreview',

  props: {
    movie: {
      type: Object as PropType<MovieData>,
      required: true,
    },
  },

  setup() {
    const isLiked = ref(false)
    const store = useContext()

    const likeColor = computed(() => {
      return isLiked.value ? 'pink lighten-2' : 'white'
    })

    function like(movieId: number | string) {
      isLiked.value = !isLiked.value

      store.store.commit('favourite', movieId)
    }

    return { like, isLiked, likeColor }
  },
})
</script>
