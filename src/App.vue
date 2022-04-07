<template>
  <div id="app">
    <mainContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { logger } from '@/utils/instance.logger'
import mainContainer from '@/views/_container.vue'

export default defineComponent({
  name: 'App',
  components: {
    mainContainer
  },
  setup () {
    onMounted(() => {
      logger.debug('onMounted App')
    })
    return { }
  }
})
</script>
<style>
#application {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
