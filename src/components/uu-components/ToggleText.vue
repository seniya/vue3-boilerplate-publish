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

<script>
import { computed, defineComponent, reactive, toRefs } from '@vue/runtime-core'
import func from 'vue-temp/vue-editor-bridge'

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
    const state = reactive({
      state: props.state,
      selected: Boolean,
      randomString: computed(() => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
        const stringLength = 15
        let randomstring = ''
        for (let i = 0; i < stringLength; i++) {
          const rnum = Math.floor(Math.random() * chars.length)
          randomstring += chars.substring(rnum, rnum + 1)
        }
        return randomstring
      })
    })

    function updateState (e) {
      if (!(e.target.parentElement.className === 'on')) {
        this.slider = !this.slider
        this.state = !this.state
      }
      this.emit('toggle', e.target.id)
    }
    return {
      ...toRefs(state),
      updateState
    }
  }
})

// export default {
//   props: {
//     disabled: Boolean,
//     type: {
//       type: String,
//       default: 'type1'
//     },
//     name: {
//       type: String,
//       default: ''
//     },
//     leftText: {
//       type: String,
//       default: ''
//     },
//     rightText: {
//       type: String,
//       default: ''
//     },
//     stateValue: {
//       type: Boolean,
//       default: true
//     }
//   },
//   data () {
//     return {
//       state: this.stateValue,
//       selected: Boolean
//     }
//   },
//   computed: {
//     // 랜덤아이디생성
//     randomString () {
//       var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
//       var stringLength = 15
//       var randomstring = ''
//       for (var i = 0; i < stringLength; i++) {
//         var rnum = Math.floor(Math.random() * chars.length)
//         randomstring += chars.substring(rnum, rnum + 1)
//       }
//       return randomstring
//     }
//   },
//   methods: {
//     updateState (e) {
//       if (!(e.target.parentElement.className === 'on')) {
//         this.slider = !this.slider
//         this.state = !this.state
//       }
//       this.$emit('toggle', e.target.id)
//     }
//   }
// }
</script>

<style lang="scss" scoped>
  .toggletext {
    &.type4 {
      @include fontHeight(1.6);
    }
  }
</style>
