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

<script>
import { computed, defineComponent, reactive, toRefs, watch } from '@vue/runtime-core'

export default defineComponent({
  name: 'uu-toggle',
  props: {
    disabled: {
      type: Boolean
    },
    checked: {
      type: Boolean
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      value: '',
      // value:  props.checked,
      isStatus: computed(() => props.disabled === true ? 'no-active' : ''),
      isDisabled: computed(() => props.disabled)
    })

    // onMounted(() => {
    //   state.value = props.checked
    // })

    watch(() => state.value, (oldVal, newVal) => {
      emit('status', state.value)
    })

    function sendStatus () {
      emit('status', this.value)
    }

    return {
      ...toRefs(state),
      sendStatus
    }
  }
})

// export default {
//   props: {
//     disabled: Boolean,
//     checked: Boolean
//   },
//   data () {
//     return {
//       value: ''
//     }
//   },
//   computed: {
//     isStatus () {
//       return this.disabled === true ? 'no-active' : ''
//     },
//     isDisabled () {
//       return this.disabled
//     }
//   },
//   // watch: {
//   //   value: function () {
//   //     this.$emit('status', this.value)
//   //   }
//   // },
//   mounted () {
//     this.value = this.checked
//   },
//   methods: {
//     sendStatus () {
//       this.$emit('status', this.value)
//     }
//   }
// }
</script>

<style lang="scss" scoped>

</style>
