<template>
  <span
    class="icon"
    :class="[computedDirection, computedVertical]"
    :style="{
      width: computedSize+'rem',
      height: computedSize+'rem'
    }"
  >
    <img
      v-if="png"
      :src="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.png')"
      alt=""
    >
    <object
      v-else
      :data="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.svg')"
      type="image/svg+xml"
      :style="{
        width: computedSize+'rem',
        height: computedSize+'rem'
      }"
    >
      <img
        :src="require('@/assets/images/'+ category + '/icons/' + subcategory + '/icon_' + size + '_' + icon + computedColor + computedActive +'.svg')"
        alt=""
      >
    </object>
    <span
      class="icon-click"
      :style="{
        width: computedSize+'rem',
        height: computedSize+'rem'
      }"
    />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: '24'
    },
    // 대분류
    category: {
      type: String,
      default: 'common'
    },
    // 소분류
    subcategory: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: null
    },
    active: {
      type: String,
      default: null
    },
    direction: {
      type: String,
      default: null
    },
    vertical: {
      type: String,
      default: null
    },
    png: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const computedColor = computed(() => {
      if (props.color === null || props.color === '') {
        return ''
      } else if (props.color === 'black') {
        return '_bk'
      } else if (props.color === 'gray') {
        return '_gr'
      } else if (props.color === 'white') {
        return '_wh'
      } else {
        return '_' + props.color
      }
    })

    const computedSize = computed(() => parseInt(props.size) / 10)

    const computedActive = computed(() => {
      if (props.active === 'active') {
        return '_active'
      } else {
        return ''
      }
    })

    const computedDirection = computed(() => {
      if (props.direction === 'left') {
        return 'direction-left'
      } else if (props.direction === 'right') {
        return 'direction-right'
      } else if (props.direction === 'bottom') {
        return 'direction-bottom'
      } else {
        return null
      }
    })

    const computedVertical = computed(() => {
      if (props.vertical === 'top') {
        return 'vertical-top'
      } else if (props.vertical === 'bottom') {
        return 'vertical-bottom'
      } else if (props.vertical === 'middle') {
        return 'vertical-middle'
      } else if (props.vertical === 'textTop') {
        return 'vertical-text-top'
      } else if (props.vertical === 'textBottom') {
        return 'vertical-text-bottom'
      } else if (props.vertical === 'sub') {
        return 'vertical-sub'
      } else if (props.vertical === 'super') {
        return 'vertical-super'
      } else {
        return null
      }
    })

    return {
      computedColor,
      computedSize,
      computedActive,
      computedDirection,
      computedVertical
    }
  }

})
</script>
