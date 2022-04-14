<template>
  <div
    class="dropdown"
    :class="position"
  >
    <div
      class="dropdown-container"
    >
      <button
        :id="randomString"
        type="button"
        class="dropdown-name"
        aria-haspopup="true"
        :aria-expanded="dropdownCont"
        aria-label="확장 메뉴 열림"
        @click="dropdownToggle"
      >
        <slot
          name="dropdown-name"
        >
          텍스트
        </slot>
      </button>
      <div
        v-show="dropdownCont"
        class="dropdown-content"
        :aria-labelledby="randomString"
      >
        <slot
          name="dropdown-content"
        >
          내용
        </slot>
      </div>
    </div>

    <div
      v-show="dropdownBack"
      class="dropdown-backdrop"
      @click="dropdownToggle"
    />
  </div>
</template>

<script lang="ts">
import { getRandomId } from '@/utils/common.function'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    position: {
      type: String,
      default: ''
    }
  },
  setup () {
    const dropdownCont = ref(false)
    const dropdownBack = ref(false)

    const randomString = getRandomId()

    const dropdownToggle = () => {
      dropdownCont.value = !dropdownCont.value
      dropdownBack.value = !dropdownBack.value
    }

    return {
      // position: props.position,
      dropdownCont,
      dropdownBack,
      randomString,

      // action
      dropdownToggle
    }
  }
})
</script>
