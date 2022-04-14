<template>
  <div
    class="modal-backdrop"
    :class="hideBackdropClass"
    aria-label="닫기"
    @click="closebtn"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    etarget: {
      type: HTMLElement,
      default: null
    },
    etargetinner: {
      type: HTMLElement,
      default: null
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const closebtn = () => {
      emit('close', 'backdrop')
      if (props.etarget != null) {
        props.etarget.focus()
      }
      if (props.etargetinner != null) {
        props.etargetinner.focus()
      }
    }
    const hideBackdropClass = computed(() => {
      return props.hideBackdrop ? 'hide-backdrop' : ''
    })

    return {
      closebtn,
      hideBackdropClass
    }
  }
})
</script>
