<template>
  <div class="stepper">
    <button
      :disabled="minusDeactivate"
      @click="onDecrease"
    >
      –
    </button>
    <input
      type="number"
      :value="numValue"
      :min="numMin"
      :max="numMax"
      :step="numStep"
    >
    <button
      :disabled="plusDeactivate"
      @click="onIncrease"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '0'
    },
    min: {
      type: String,
      default: '0'
    },
    max: {
      type: String,
      default: '100'
    },
    step: {
      type: String,
      default: '1'
    }
  },
  setup (props) {
    const numValue = ref(parseInt(props.value))
    const numMin = ref(parseInt(props.min))
    const numMax = ref(parseInt(props.max))
    const numStep = ref(parseInt(props.step))
    const minusDeactivate = ref(false)
    const plusDeactivate = ref(false)

    function onDeactivate () {
      if (numValue.value <= numMin.value) {
        minusDeactivate.value = true
      } else if (numValue.value >= numMax.value) {
        plusDeactivate.value = true
      } else {
        minusDeactivate.value = false
        plusDeactivate.value = false
      }
    }

    function onDecrease () {
      if (numValue.value > numMin.value) {
        numValue.value = numValue.value - numStep.value
      }
      onDeactivate()
    }

    function onIncrease () {
      if (numValue.value < numMax.value) {
        numValue.value = numValue.value + numStep.value
      }
      onDeactivate()
    }

    onMounted(() => {
      onDeactivate()
    })

    return {
      numValue,
      numMin,
      numMax,
      numStep,
      minusDeactivate,
      plusDeactivate,
      onDecrease,
      onIncrease,
      onDeactivate
    }
  }
})
</script>
