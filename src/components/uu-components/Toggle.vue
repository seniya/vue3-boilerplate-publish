<template>
  <label
    class="toggle-switch"
    :class="isStatus"
  >
    <input
      v-model="value"
      type="checkbox"
      :disabled="isDisabled"
      @click="sendStatus"
    >
    <span class="slider" />
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean
    },
    checked: {
      type: Boolean
    }
  },
  setup (props, { emit }) {
    const state = ref(props.checked)

    const isStatus = computed(() => props.disabled === true ? 'no-active' : '')
    const isDisabled = computed(() => props.disabled)

    watch(() => state.value, () => {
      emit('status', state.value)
    })

    function sendStatus () {
      emit('status', state.value)
    }

    return {
      state,
      sendStatus,
      isStatus,
      isDisabled
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
