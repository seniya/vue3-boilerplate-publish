<template>
  <div>
    <splide :options="options">
      <splide-slide>
        <div class="slide">
          1번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          2번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          3번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          4번
        </div>
      </splide-slide>
      <splide-slide>
        <div class="slide">
          5번
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// https://splidejs.com/integration-vue-splide/
import { Splide, SplideSlide, Options as SplideOptions } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default defineComponent({
  components: {
    Splide,
    SplideSlide
  },
  setup () {
    const options = reactive<SplideOptions>({
      type: 'slide',
      direction: 'ttb',
      heightRatio: 0.6,
      perPage: 1
    })

    return { options }
  }
})
</script>

<style lang="scss" scoped>
.slide {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
