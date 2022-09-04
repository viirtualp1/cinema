<template>
  <v-card class="mx-auto movie">
    <v-img height="250" :src="movie.image">
      <v-btn class="float-right" icon><v-icon>mdi-heart</v-icon></v-btn>
    </v-img>

    <v-card-title>{{ movie.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
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

      <div class="mt-4">
        {{ movie.description }}
      </div>

      <v-chip-group column>
        <v-chip v-for="(tag, idx) in movie.tags" :key="idx">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text>Посмотреть</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { MovieData } from '~/types/MovieData'

export default defineComponent({
  name: 'MoviePreview',

  props: {
    movie: {
      type: Object as PropType<MovieData>,
      required: true,
    },
  },
})
</script>

<style lang="scss" src="./MoviePreview.scss"></style>
