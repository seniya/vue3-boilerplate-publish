<template>
  <div>
    <splide
      ref="splide"
      :has-track="false"
      :options="slideType"
      :class="[slideType === bullet ? 'bullet': '', classType === 'type3' ? 'type3': '', onlySlide? 'only-slide':'']"
      @splide:moved="onMoved"
      @splide:drag="dragStart"
      @splide:dragged="dragEnd"
    >
      <splide-track>
        <splide-slide
          v-for="item in slideGroup"
          :key="item.id"
        >
          <div
            class="slide-box"
          >
            <slot
              :name="'slide' + item.id"
            >
              slide1
            </slot>
          </div>
        </splide-slide>
      </splide-track>
      <template v-if="type === 'progress'">
        <div class="splide__progress">
          <div class="splide__progress__bar" />
        </div>
        <button
          type="button"
          class="splide-btn-more"
        >
          <uu-icon
            icon="view"
            size="16"
            color="white"
          />
        </button>
      </template>
    </splide>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onUnmounted, Ref, PropType, toRef } from 'vue'
import { Splide, SplideSlide, SplideTrack, Options as SplideOptions } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import Icon from '@/components/uu-components/Icon.vue'

interface SlideGroup {
  id: number
}

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
    'uu-icon': Icon
  },
  props: {
    type: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    custom: {
      type: Object as PropType<SplideOptions>,
      default: () => ({})
    },
    slide: {
      type: String,
      default: null
    },
    auto: {
      type: Boolean,
      default: false
    },
    classType: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'white'
    },
    mode: {
      type: String,
      default: 'loop'
    },
    position: {
      type: String,
      default: 'center'
    },
    gap: {
      type: String,
      default: '0px'
    },
    paddingLeft: {
      type: String,
      default: '0'
    },
    paddingRight: {
      type: String,
      default: '0'
    },
    clones: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  emits: ['moved', 'event'],
  setup (props, { emit }) {
    let slideType: Ref<SplideOptions>
    const slideGroup = ref<SlideGroup[]>([])
    const slideLength = ref(-1)

    const basic: SplideOptions = reactive({
      type: 'slide',
      fixedWidth: props.width,
      height: props.height,
      padding: '2.4rem',
      gap: '1.6rem',
      focus: 'center',
      autoplay: props.auto,
      interval: 3000,
      arrows: false,
      pagination: false
    })

    const progress: SplideOptions = reactive({
      type: 'loop',
      fixedWidth: props.width,
      height: props.height,
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 3000
    })

    const bullet: SplideOptions = reactive({
      type: props.mode,
      width: props.width,
      height: props.height,
      arrows: false,
      autoplay: props.auto,
      interval: props.interval,
      gap: props.gap,
      clones: props.clones,
      drag: true,
      waitForTransition: false,
      padding: {
        left: props.paddingLeft,
        right: props.paddingRight
      },
      classes: {
        pagination: 'splide__pagination ' + props.classType + ' ' + props.color + ' ' + props.position,
        page: 'splide__pagination__page splide-pagination-page'// each button
      }
    })

    const swiper = ref(null)
    const onlySlide = ref(false)

    function onMoved () {
      emit('moved')
    }
    function dragStart () {
      document.body.style.overflow = 'hidden'
    }
    function dragEnd () {
      document.body.style.overflow = ''
    }

    const splide = ref(null)
    onMounted(() => {
      emit('event', splide)
    })
    onUnmounted(() => {
      document.body.style.overflow = ''
    })

    // 슬라이드 갯수에 따라 추가
    slideLength.value = Number(props.slide)
    for (let i = 0; i < slideLength.value; i++) {
      const max = slideGroup.value.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      slideGroup.value.push({
        id: max + 1
      })
    }
    if (props.type === 'basic') {
      slideType = ref(basic)
    } else if (props.type === 'progress') {
      slideType = ref(progress)
    } else if (props.type === 'bullet') {
      slideType = ref(bullet)
    } else if (props.type === 'custom') {
      slideType = toRef(props, 'custom')
    } else {
      throw new Error('slideType 값 유효하지 않음')
    }

    if (slideGroup.value.length < 2) {
      onlySlide.value = true
      bullet.drag = false
    }

    return {
      slideType,
      slideGroup,
      slideLength,
      basic,
      progress,
      bullet,
      swiper,
      onlySlide,
      onMoved,
      dragStart,
      dragEnd
    }
  }
})
</script>
