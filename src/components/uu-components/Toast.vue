<template>
  <transition
    :name="slide"
    @leave="endTransition"
  >
    <div
      v-show="openToast"
      ref="toast"
      class="toast"
      :class="button? 'button':''"
      tabindex="0"
    >
      <p class="toast-message">
        {{ message }}
      </p>
      <slot
        v-if="button"
        name="toast-button"
      >
        <button
          type="button"
          class="toast-button"
          @click="clickToastButton"
        >
          보기
        </button>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      default: null
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup (_props, { emit }) {
    const slide = ref('')
    const openToast = ref(false)
    const target = ref(null)

    function showToast () {
      slide.value = 'slide-up'
      openToast.value = !openToast.value
      setTimeout(() => {
        openToast.value = !openToast.value
      }, 3000)
    }
    function endTransition () {
      slide.value = 'slide-down'
    }
    function clickToastButton () {
      emit('click')
    }

    const toast = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      toast.value?.focus()
    })

    return {
      slide,
      openToast,
      target,
      showToast,
      endTransition,
      clickToastButton
    }
  }
})
</script>

<style lang="scss">
</style>
