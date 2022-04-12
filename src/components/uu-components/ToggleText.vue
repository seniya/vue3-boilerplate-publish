<template>
  <div
    class="toggletext"
    :class="type"
  >
    <label
      :class="state ? 'on' : ''"
      :for="randomString + 'left'"
    >
      {{ leftText }}
      <input
        :id="randomString + 'left'"
        type="radio"
        :name="name"
        @click="updateState"
      >
    </label>
    <label
      :class="!state ? 'on' : ''"
      :for="randomString + 'right'"
    >
      {{ rightText }}
      <input
        :id="randomString + 'right'"
        type="radio"
        :name="name"
        @click="updateState"
      >
    </label>
    <span :class="state ? 'slider left' : 'slider right'" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'type1'
    },
    name: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    stateValue: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const state = ref(props.stateValue)

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

    function updateState (e: { target: HTMLInputElement }) {
      if (!(e.target.parentElement?.className === 'on')) {
        state.value = !state.value
      }
      emit('toggle', e.target.id)
    }
    return {
      state,
      randomString,
      updateState
    }
  }
})
</script>

<style lang="scss" scoped>
  // .toggletext {
  //   &.type4 {
  //     @include fontHeight(1.6);
  //   }
  // }
</style>
