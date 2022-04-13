<template>
  <div
    ref="tabWrap"
    class="tab-wrap"
    :class="[type, activeBar? 'splide-active-bar':'', tabName]"
  >
    <!-- tab menu -->
    <splide
      ref="tabmenu"
      :options="menu"
      class="tab-menu"
      :class="[menuCenter? 'tab-menu-center':'']"
      @splide:moved="activeBarEvent"
      @splide:drag="dragStart"
      @splide:dragged="dragEnd"
    >
      <splide-slide
        v-for="(tab, index) in items"
        :key="index"
        role="presentation"
        :class="names[index]"
      >
        <span
          v-if="typeof(tab) == 'string'"
          class="tab-btn"
        >
          {{ tab }}
        </span>
        <span
          v-if="typeof(tab) == 'object'"
          class="tab-btn"
        >
          <span class="menu-name">
            {{ tab.name }}
          </span>
          <span class="menu-count">
            {{ tab.count }}
          </span>
        </span>
      </splide-slide>
    </splide>

    <!-- tab content -->
    <splide
      ref="tabcon"
      :options="options"
      class="tab-con"
    >
      <splide-slide
        v-for="(tab, index) in items"
        :key="index"
      >
        <div
          class="tab-panel"
          role="tabpanel"
        >
          <slot
            :name="'slide'+(index+1)"
          />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue'

// https://splidejs.com/integration-vue-splide/
import { Splide as SplideClass } from '@splidejs/splide'
import { Splide as SplideComponent, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default defineComponent({
  components: {
    splide: SplideComponent,
    SplideSlide
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    names: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: null
    },
    start: {
      type: [Number, String],
      default: 1
    },
    menuDrag: {
      type: Boolean,
      default: true
    },
    contDrag: {
      type: Boolean,
      default: true
    },
    menuCenter: {
      type: Boolean,
      default: false
    },
    option: {
      type: String,
      default: 'fade'
    },
    paddingLeft: {
      type: String,
      default: '0'
    },
    paddingRight: {
      type: String,
      default: '0'
    },
    tabName: {
      type: String,
      default: ''
    },
    activeBar: {
      type: Boolean,
      default: false
    },
    focus: {
      type: String,
      default: '0'
    },
    updateOnMove: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    // tab menu
    const menu = reactive({
      type: 'slide',
      speed: 100,
      autoWidth: true,
      isNavigation: true,
      pagination: false,
      arrows: false,
      keyboard: false,
      start: Number(props.start) - 1,
      focus: props.focus,
      easing: 'linear',
      drag: props.menuDrag,
      updateOnMove: props.updateOnMove,
      padding: {
        left: props.paddingLeft,
        right: props.paddingRight
      }
    })

    // tab content
    const options = reactive({
      type: 'fade',
      pagination: false,
      arrows: false,
      keyboard: false,
      start: Number(props.start) - 1,
      drag: props.contDrag
    })

    // active bar
    function activeBarEvent () {
      emit('tabmoved')
      if (props.activeBar) {
        const activeBar = document.querySelector('.' + props.tabName + ' .active-state') as HTMLElement | null
        const isActive = document.querySelector('.' + props.tabName + ' .splide__slide.is-active .tab-btn') as HTMLElement | null
        const target = (isActive?.parentNode ?? null) as HTMLElement | null

        if (activeBar === null || isActive === null || target === null) {
          throw new Error()
        }

        const targetLeft = target.offsetLeft + isActive.offsetLeft
        const targetWidth = isActive.offsetWidth
        const targetHeight = target.offsetHeight

        activeBar.style.left = targetLeft + 'px'
        activeBar.style.height = targetHeight + 'px'
        activeBar.style.width = targetWidth + 'px'
        activeBar.style.opacity = '1'
      }
    }
    function dragStart () {
      document.body.style.overflow = 'hidden'
    }
    function dragEnd () {
      document.body.style.overflow = ''
    }

    const activeSetTimeout = ref<number | null>(null)
    const tabmenu = ref<InstanceType<typeof SplideComponent> | null>(null)
    const tabcon = ref<InstanceType<typeof SplideComponent> | null>(null)
    const tabmenuSplide = ref<SplideClass | null>(null)

    onMounted(() => {
      if (tabmenu.value?.splide === undefined) {
        return
      }

      // Set the sync target.
      tabcon.value?.sync(tabmenu.value?.splide)
      tabmenuSplide.value = tabmenu.value.splide
      emit('custom', tabmenuSplide)

      if (props.activeBar) {
        // div 만들기
        const tabmenuElement = document.querySelector('.' + props.tabName + ' .tab-menu')
        const newActive = document.createElement('div')
        tabmenuElement?.appendChild(newActive)
        newActive.classList.add('active-state')

        // 이벤트 실행
        activeSetTimeout.value = setTimeout(() => {
          activeBarEvent()
        }, 300)
      }
    })

    onUnmounted(() => {
      if (activeSetTimeout.value !== null) {
        clearTimeout(activeSetTimeout.value)
      }
      document.body.style.overflow = ''
    })

    return {
      menu,
      options,
      activeBarEvent,
      dragStart,
      dragEnd,
      activeSetTimeout,
      tabmenu,
      tabcon,
      tabmenuSplide
    }
  }
})
</script>

<style lang="scss">
</style>
