<template>
  <div>
    <div class="accordion">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'

export interface AccordionInterface {
  count: number,
  active: null | number,
  type: string,
}

export default defineComponent({
  name: 'uu-Accordion',
  props: {
    type: {
      type: String,
      default: 'type1'
    }
  },
  setup (props) {
    const accordion = reactive({
      count: 0,
      active: null,
      type: props.type
    })
    provide<AccordionInterface>('accordion', accordion)
  }
})
</script>

<style lang="scss" scoped>

</style>
