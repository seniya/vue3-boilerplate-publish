<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted } from 'vue'
import { Emitter } from 'mitt'
import { EventsType } from '@/utils/instance.eventBus'
import { logger } from '@/utils/instance.logger'

export default defineComponent({
  name: 'mainContainer',
  components: { },
  setup () {
    const eventBus = inject<Emitter<EventsType>>('eventBus')

    function actionOnEventbus () {
      eventBus?.on('showToast', (value: string) => {
        logger.debug('showToast received', `value: ${value}`)
      })
    }
    function actionOffEventbus () {
      eventBus?.off('showToast')
    }

    onMounted(() => {
      actionOnEventbus()
      logger.debug('onMounted MainContainer')
    })

    onUnmounted(() => {
      actionOffEventbus()
    })

    return { }
  }
})
</script>
