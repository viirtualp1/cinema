<template>
  <v-row justify="center">
    <v-col v-for="(movie, idx) in movies" :key="idx" cols="12" md="3">
      <MoviePreview :movie="movie" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MovieData } from '~/types/MovieData'
import MoviePreview from '~/components/MoviePreview/MoviePreview.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MoviePreview,
  },
  setup() {
    const movies = [
      {
        title: 'Сорвиголова',
        description:
          'В результате несчастного случая юный Мэтт Мердок теряет зрение, но зато все остальные его чувства усиливаются в десятки раз. Повзрослев, Мердок понимает, что хочет посвятить свою жизнь защите людей и борьбе с преступностью. Днем он — успешный адвокат, а ночью — мститель в маске по прозвищу Сорвиголова.',
        image:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/24528c82-a544-4008-b974-ba8f5c335871/600x900',
        tags: ['фантастика', 'боевик', 'фентези', 'драма', 'криминал'],
        rating: {
          value: 4.5,
          reviews: 400,
        },
      } as MovieData,
      {
        title: 'Доктор Кто',
        description:
          'Пришелец, меняющий внешность, спасает Вселенную от космических злодеев. Научная фантастика с британским юмором',
        image:
          'https://kinopoisk-ru.clstorage.net/d1f611W83/6a225e-dEMAi/RhtLF8Jq2sV2vlIYyD8POKshmb4Nu-Ruf3IHitl8TIneYFSukWXLpCtTOSZOISlxqPWeLvy6obynMJNuTKQEBxJLHuNjzz_Ql9_nWG3_HqkrkZ3vuT6AL65H0j8rj04K_Pd2zWPnyWI_Z31Xm_S8hanAG_-ZSzW4gBMCOBmAkwIGe5hVdvtJFFEfM5mr775uWoKrW206p3oOgOfLSV2suk50dN7QFqlwnkadgGplvrcKMmoNOU1EGtMyJktLMVDBFyrKZVSqGeZRPYFZOz3N3rixqYi9-6V5_ZK0ywo8jYpv5JRtYDfZMLx2bJALdh6me6O67ji_RftjYcbpmwKQQkUaGEe1u6nEUH6AquhPLE_aUrqYXMqXWE-SBdk7bm1Z_bSUXIJHCHPcJOyCKQQOBtoiO175zvQ64QLWaGpi8uNn2CsUl-iaFvHeY3rJLt2cizGI2Lza1wu8U9Xo-Rx9Gb5EtE8CVrkSXXUckZnG3uZqoAueuO6k2rFxdumbUrMRdktqphQY2ZaSvaF42h5f3ung-iiPS_RJrKClmshNrLjOBnbNAGaYgAwEjpFIdS_Fy8BbPmt9paihUkVaaQCCIdWbi3RmyRuUkB7CGhsNPq3oopq7bPinevzTFYi67E06jPZUDjE0OsHu1E5C-MbMpyvz2F_L7bfosGA2i_ti8HKlGjkHtZl7F9IsoalYXQyvexJLur8rhUqcwoZJSewOu-yk5w7RtOjR_vb9Uik0r1YYIit-iu0U-vCyJrro8oNg9RrbJZXJCcSC3sNbWt4PvPvzilnfude6X2OWCyotr2jOJ7cNYuQqYD0GfALZNH6HOJOqLOudZHvAcOdKCKAxUBRbGxSWqPsWMJ_y-IjOTu0ag_iqz4iUSmyQZfo73Sz4X5S3bHEXSzGe1ZzAK2eupEgCWn25v4ZZ8MIm2FizQZMV2zqUVDlb9hJ_gniavD-umRDa2L66pRmfMqRqWA6NeK-FFx6wBPvQfvdMY7kWfIQakLtdiZ1lOZOytIno8IPiJij4dhTYeuXjPPA4yP5_vOuBCkmeSBZrjrJkybnsnjrOpDR-IkS5kYzGXKMpxxxWKdJpr6i_pMsjI-WryzCCMEXqSFfUSWmHYz9xKaluXE648sirX6rnCo9wxEgbHEzZvfTXf1BV2VDsJL5j2tb-JElTyE5J3xTJwGGXS6qBoFF3K-oX15paRFE-wxmqrF-NaPNqin-rdluNoze4Ox4-Wo2k5w7QNCkRjMY9gYu0jof5wNueWm0HGcJwlPnpI-MjBioLVOa7GMaT35NZCrxf_9uyypn_m8R6n_B1-6tuzbv8JdbvY8Qro67U3FI5hy1XSZL6PzqdBGlxAeZKysGy09dLKuQH2mpmk3-yS1idPAwKQOn67wlXuC-C5ej4jz0YrbWEnIEnSLH9dJ8yCwQ8dApT2A7bLyWoU9J3m0hDsFC3uUoURPmI5cNP0ShLf059KPKo677I5qkt05Waa94dSK_GNz1Rlosh3wWvsluXTRYaQCt-i37kCSOgVqgoc-DgZ8m4VkYIWqURbFKISR88zOiDm7vNidRLnsDmGoj-LPv9hnWuMjUb4m63rrAoNBykWGALzJjO9hjToCRqK_NyYUXr2hWl-wv00h5SWQrvPf7LsKiYztknuz5idwj57s14jgUGTVJ3qeGNFMwRmWUOJUrgaY_4XWa44zA2yYixcyLXC4jXZlqYB-CN4FsKbS-t2-D724yIFlsOQKXKGj_sam7nxO_htDqx3levoYkGDyV50NkM66ymG3NQNznrwFHyRlnKV3fo6ufhHJJrOXw8bvnjqhntqeXpjbOFiNhNjQue5FYt4uUq4i7VfTEbBX8XmcLYLjr896vzwDSKWfBQ08bLGoQGKCh2wRzA-bhN3PwZQ7irzTt3O_2xBljrDRzr3_cGvHJ0G8DPZmwx-lROFXqzqx0JfUY4UzGUSThD4nPW-8hl1Njr1iJtsKm5Tn8dG0DpWBy5xnuc4QfrGB38upzn9h7yJZlCbbSvg_oW3KWJw5tcWX5XqqKhZuv7o6FzVFsIpDR7GyZhX0BKWD09LXlyyNg9uqRbnvEUeBgf37r-hOcswfcooE13nUGr5E1XCGJI_yjs1RlB0GR6atFRgnX5ynali2pHUW2QyVv8_v5Ysvjb_7iXOv7T1-kpL98YTkUnHqHX2NDPZu7AeeavBivie13pPXS7o4DlqQuRw6A0O6m0ZhloVnH9oRk4HC-PaOBa2a0YtogOUHeYCDxtOey2F26ARzkQ_KUPYCknvlW5Utst203mCwDR10uawfIw9CjZdoXYSLaA7QGbGr7czllRWIicaKZonMM3Osq8Xbhs9nR90udo8uxUvRE55O1U2BC73vkOh7jBIta4KrIgYtZ6GKY2OxgGsi0wabsOXl4okNqo79n0Cg8yxlpZHz1avvUXTdDXmFO_ty1S-kQ_VQiS2OzYvTbZsbFm6CnCYMFF-RlGFqtp1VDdAkh67c5cOkJLm98K5VrNMMTrG90862wklx6x5wuB3AesM5ombMU4orstu31lipEgdWpacvLQd8j49iTLarQCLqNYi14MHGrh6rttmdX67aK2KSifnDl_V5aeIfVrIUzkLuBLp06VaNBr3yl9JKth0gcbKSKSAgVoOAS3iomWUtxAWNkPTZ_bgugbzUtUqu-Rx3jpXM4pbBQ3XcA2uuK9Jl6zqFaPBFliiY-5fXYJARHnqcugcnDFOUlGVApLlQK_EitYDxzsGeEZ6f8ZJfqfAnX5SQ5s-e2lJgwz5Quxz4Q-U8kXfXVp8Yhcm50HutETVuh6QXJRNYv4VqZLqNbg_dMJS9xd7zpRGfrsWzR7rwDXONhcnxveFRSec_foor8kblMI5JwFeqBJr_rdNamDkBV4ecFxIiXKGERlK6hlcj9gyDhufNxa4srozwi0q-0AZ9jbPlzZbORFvqMFS2OvtY4TOYcehxgQaA243WWKQ',
        tags: ['фантастика', 'драма', 'комедия'],
        rating: {
          value: 4.7,
          reviews: 118881,
        },
      } as MovieData,
      {
        title: 'Флэш',
        description:
          'После удара молнии Барри становится самым быстрым человеком в мире. История любимого супергероя Шелдона Купера',
        image:
          'https://kinopoisk-ru.clstorage.net/d1f611W83/6a225e-dEMAi/RhtLF8Jq2sV2vlIYyD8POKshmb4Nu-Ruf3IHitl8TIneYFSukWXLpCtTOSZOISlxrcVuK8x6wcyHNXYeLHQEB1JeHuNzr3qwkjqiGAhffplOxN3vuT6AL65H0j8rj04K_Pd2zWPnyWI_Z31Xm_S8hanAG_-ZSzW4gBMCOBmAkwIGe5hVdvtJFFEfM5mr775uWoKrW206p3oOgOfLSV2suk50dN7QFqlwnkadgGplvrcKMmoNOU1EGtMyJktLMVDBFyrKZVSqGeZRPYFZOz3N3rixqYi9-6V5_ZK0ywo8jYpv5JRtYDfZMLx2bJALdh6me6O67ji_RftjYcbpmwKQQkUaGEe1u6nEUH6AquhPLE_aUrqYXMqXWE-SBdk7bm1Z_bSUXIJHCHPcJOyCKQQOBtoiO175zvQ64QLWaGpi8uNn2CsUl-iaFvHeY3rJLt2cizGI2Lza1wu8U9Xo-Rx9Gb5EtE8CVrkSXXUckZnG3uZqoAueuO6k2rFxdumbUrMRdktqphQY2ZaSvaF42h5f3ung-iiPS_RJrKClmshNrLjOBnbNAGaYgAwEjpFIdS_Fy8BbPmt9paihUkVaaQCCIdWbi3RmyRuUkB7CGhsNPq3oopq7bPinevzTFYi67E06jPZUDjE0OsHu1E5C-MbMpyvz2F_L7bfosGA2i_ti8HKlGjkHtZl7F9IsoalYXQyvexJLur8rhUqcwoZJSewOu-yk5w7RtOjR_vb9Uik0r1YYIit-iu0U-vCyJrro8oNg9RrbJZXJCcSC3sNbWt4PvPvzilnfude6X2OWCyotr2jOJ7cNYuQqYD0GfALZNH6HOJOqLOudZHvAcOdKCKAxUBRbGxSWqPsWMJ_y-IjOTu0ag_iqz4iUSmyQZfo73Sz4X5S3bHEXSzGe1ZzAK2eupEgCWn25v4ZZ8MIm2FizQZMV2zqUVDlb9hJ_gniavD-umRDa2L66pRmfMqRqWA6NeK-FFx6wBPvQfvdMY7kWfIQakLtdiZ1lOZOytIno8IPiJij4dhTYeuXjPPA4yP5_vOuBCkmeSBZrjrJkybnsnjrOpDR-IkS5kYzGXKMpxxxWKdJpr6i_pMsjI-WryzCCMEXqSFfUSWmHYz9xKaluXE648sirX6rnCo9wxEgbHEzZvfTXf1BV2VDsJL5j2tb-JElTyE5J3xTJwGGXS6qBoFF3K-oX15paRFE-wxmqrF-NaPNqin-rdluNoze4Ox4-Wo2k5w7QNCkRjMY9gYu0jof5wNueWm0HGcJwlPnpI-MjBioLVOa7GMaT35NZCrxf_9uyypn_m8R6n_B1-6tuzbv8JdbvY8Qro67U3FI5hy1XSZL6PzqdBGlxAeZKysGy09dLKuQH2mpmk3-yS1idPAwKQOn67wlXuC-C5ej4jz0YrbWEnIEnSLH9dJ8yCwQ8dApT2A7bLyWoU9J3m0hDsFC3uUoURPmI5cNP0ShLf059KPKo677I5qkt05Waa94dSK_GNz1Rlosh3wWvsluXTRYaQCt-i37kCSOgVqgoc-DgZ8m4VkYIWqURbFKISR88zOiDm7vNidRLnsDmGoj-LPv9hnWuMjUb4m63rrAoNBykWGALzJjO9hjToCRqK_NyYUXr2hWl-wv00h5SWQrvPf7LsKiYztknuz5idwj57s14jgUGTVJ3qeGNFMwRmWUOJUrgaY_4XWa44zA2yYixcyLXC4jXZlqYB-CN4FsKbS-t2-D724yIFlsOQKXKGj_sam7nxO_htDqx3levoYkGDyV50NkM66ymG3NQNznrwFHyRlnKV3fo6ufhHJJrOXw8bvnjqhntqeXpjbOFiNhNjQue5FYt4uUq4i7VfTEbBX8XmcLYLjr896vzwDSKWfBQ08bLGoQGKCh2wRzA-bhN3PwZQ7irzTt3O_2xBljrDRzr3_cGvHJ0G8DPZmwx-lROFXqzqx0JfUY4UzGUSThD4nPW-8hl1Njr1iJtsKm5Tn8dG0DpWBy5xnuc4QfrGB38upzn9h7yJZlCbbSvg_oW3KWJw5tcWX5XqqKhZuv7o6FzVFsIpDR7GyZhX0BKWD09LXlyyNg9uqRbnvEUeBgf37r-hOcswfcooE13nUGr5E1XCGJI_yjs1RlB0GR6atFRgnX5ynali2pHUW2QyVv8_v5Ysvjb_7iXOv7T1-kpL98YTkUnHqHX2NDPZu7AeeavBivie13pPXS7o4DlqQuRw6A0O6m0ZhloVnH9oRk4HC-PaOBa2a0YtogOUHeYCDxtOey2F26ARzkQ_KUPYCknvlW5Utst203mCwDR10uawfIw9CjZdoXYSLaA7QGbGr7czllRWIicaKZonMM3Osq8Xbhs9nR90udo8uxUvRE55O1U2BC73vkOh7jBIta4KrIgYtZ6GKY2OxgGsi0wabsOXl4okNqo79n0Cg8yxlpZHz1avvUXTdDXmFO_ty1S-kQ_VQiS2OzYvTbZsbFm6CnCYMFF-RlGFqtp1VDdAkh67c5cOkJLm98K5VrNMMTrG90862wklx6x5wuB3AesM5ombMU4orstu31lipEgdWpacvLQd8j49iTLarQCLqNYi14MHGrh6rttmdX67aK2KSifnDl_V5aeIfVrIUzkLuBLp06VaNBr3yl9JKth0gcbKSKSAgVoOAS3iomWUtxAWNkPTZ_bgugbzUtUqu-Rx3jpXM4pbBQ3XcA2uuK9Jl6zqFaPBFliiY-5fXYJARHnqcugcnDFOUlGVApLlQK_EitYDxzsGeEZ6f8ZJfqfAnX5SQ5s-e2lJgwz5Quxz4Q-U8kXfXVp8Yhcm50HutETVuh6QXJRNYv4VqZLqNbg_dMJS9xd7zpRGfrsWzR7rwDXONhcnxveFRSec_foor8kblMI5JwFeqBJr_rdNamDkBV4ecFxIiXKGERlK6hlcj9gyDhufNxa4srozwi0q-0AZ9jbPlzZbORFvqMFS2OvtY4TOYcehxgQaA243WWKQ',
        tags: ['фантастика', 'боевик', 'драма', 'приключения'],
        rating: {
          value: 3.5,
          reviews: 120447,
        },
      } as MovieData,
    ]

    return {
      movies,
    }
  },
})
</script>
