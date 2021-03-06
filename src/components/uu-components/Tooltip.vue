<template>
  <span
    class="tooltip-wrap"
    :class="[{'absolute':absolute},{'fixed':fixed}, {'left-center':leftCenter}]"
    :style="{top : absoluteTop+'px', bottom: absoluteBottom+'px', left:absoluteLeft+'px', right:absoluteRight+'px'}"
  >
    <button
      v-if="type === 'type1'"
      type="button"
      class="btn-tooltip"
      aria-label="툴팁 열림"
      :aria-describedby="randomString + 'Tooltip'"
      @click="tooltipShow = true"
    >
      <slot
        name="tooltip-button"
      >
        <uu-icon
          icon="tip"
          size="24"
        />
      </slot>
    </button>
    <span
      v-if="long"
      v-show="tooltipShow"
      :id="randomString + 'Tooltip'"
      class="tooltip2"
      :class="[type,{'top':top},{'bottom':bottom},{'left':left},{'right':right},{'center':center},{'small':small},{'hide-close':hideClose},{'in-btn':inBtn},{'light':light},{'no-fade':noFade},{'long':long}]"
      :style="{width:width+'px',top : tailTop, bottom: tailBottom, left: tailLeft, right : tailRight}"
      role="tooltip"
    >
      <span
        class="tooltip-inner"
      >
        <span
          v-if="hasTitle"
          class="tooltip-title"
        >
          <slot name="tooltip-title" />
        </span>
        <span class="tooltip-content">
          <slot name="tooltip-content" />
        </span>
        <span
          v-if="hideClose || inBtn || type==='type3' || type==='type4' || type==='type5' ? false : true"
          class="tooltip-close"
        >
          <button
            class="btn-close"
            @click="tooltipShow = false"
          >
            <uu-icon
              v-if="type === 'type1' || light"
              icon="close"
              size="16"
            >
              <span class="sr-only">닫기</span>
            </uu-icon>
            <uu-icon
              v-else
              icon="close"
              size="16"
              color="wh"
            >
              <span class="sr-only">닫기</span>
            </uu-icon>
          </button>
        </span>
      </span>
    </span>
    <!--  -->
    <span
      v-else
      v-show="tooltipShow"
      :id="randomString + 'Tooltip'"
      class="tooltip2"
      :class="[type,{'top':top},{'bottom':bottom},{'left':left},{'right':right},{'center':center},{'small':small},{'hide-close':hideClose},{'in-btn':inBtn},{'light':light},{'no-fade':noFade}]"
      :style="{position: tipPosition, width:width+'px',top : tailTop, bottom: tailBottom, left: tailLeft, right : tailRight}"
      role="tooltip"
    >
      <span
        v-if="hasTitle"
        class="tooltip-title"
      >
        <slot name="tooltip-title" />
      </span>
      <span class="tooltip-content">
        <slot name="tooltip-content" />
      </span>
      <span
        v-if="hideClose || inBtn || type==='type3' || type==='type4' || type==='type5' ? false : true"
        class="tooltip-close"
      >
        <button
          class="btn-close"
          @click="tooltipShow = false"
        >
          <uu-icon
            v-if="type === 'type1' || light"
            icon="close"
            size="16"
          >
            <span class="sr-only">닫기</span>
          </uu-icon>
          <uu-icon
            v-else
            icon="close"
            size="16"
            color="wh"
          >
            <span class="sr-only">닫기</span>
          </uu-icon>
        </button>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import uuIcon from '@/components/uu-components/Icon.vue'

export default defineComponent({
  components: {
    uuIcon
  },
  props: {
    type: {
      type: String,
      default: 'type1'
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    hasTitle: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    inBtn: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    absoluteTop: {
      type: String,
      default: ''
    },
    absoluteBottom: {
      type: String,
      default: ''
    },
    absoluteLeft: {
      type: String,
      default: ''
    },
    absoluteRight: {
      type: String,
      default: ''
    },
    noFade: {
      type: Boolean,
      default: false
    },
    leftCenter: {
      type: Boolean,
      default: false
    },
    tipPosition: {
      type: String,
      default: ''
    },
    tipLeft: {
      type: String,
      default: ''
    },
    tipRight: {
      type: String,
      default: ''
    },
    tipTop: {
      type: String,
      default: ''
    },
    tipBottom: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const state = reactive({
      tooltipShow: true,
      tailTop: 'auto',
      tailBottom: 'auto',
      tailLeft: 'auto',
      tailRight: 'auto'
    })

    onMounted(() => {
      if (props.top) {
        state.tailTop = 'calc(100% + 8px)'
      }
      if (props.bottom) {
        state.tailBottom = 'calc(100% + 8px)'
      }
      if (props.left || props.center) {
        state.tailLeft = '50%'
      }
      if (props.right) {
        state.tailRight = '50%'
      }
      if (props.type === 'type1') {
        state.tooltipShow = false
      }
      if (props.type === 'type2' && props.small) {
        const tootipBtn = document.querySelector('.btn')
        if (!tootipBtn?.classList.contains('btn-underline') && !props.hideClose) {
          const tooltip2 = document.querySelectorAll('.tooltip2')
          for (let i = 0; i < tooltip2.length; i++) {
            tooltip2[i].classList.add('hide-close')
          }
        }
      }
      if (props.tipPosition === 'fixed') {
        if (props.tipTop) {
          state.tailTop = props.tipTop + 'px'
        }
        if (props.tipBottom) {
          state.tailBottom = props.tipBottom + 'px'
        }
        if (props.tipRight) {
          state.tailRight = props.tipRight + 'px'
        }
        if (props.tipLeft) {
          state.tailLeft = props.tipLeft + 'px'
        }
      }
    })

    const randomString = computed(() => {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      const stringLength = 15
      let randomstring = ''
      for (let i = 0; i < stringLength; i++) {
        const rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
      }
      return randomstring
    })

    return {
      ...toRefs(state),
      randomString
    }
  }
})
</script>
