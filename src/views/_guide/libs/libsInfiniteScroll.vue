<template>
  <div>
    <p
      v-for="item in list"
      :key="item"
      class="example-list-item"
      v-text="item"
    />
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script lang="ts">
// https://peachscript.github.io/vue-infinite-loading/guide/#installation
import { defineComponent, Ref, ref } from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

interface State {
  complete: () => void;
  loaded: () => void;
  reset: () => void;
  error: () => void;
}

export default defineComponent({
  components: {
    InfiniteLoading
  },
  setup () {
    const list: Ref<number[]> = ref([])

    function infiniteHandler ($state: State) {
      if (list.value.length > 200) {
        $state.complete()
      } else {
        setTimeout(() => {
          const temp = []
          for (let i = list.value.length; i <= list.value.length + 10; i++) {
            temp.push(i)
          }
          list.value.push(...temp)
          $state.loaded()
        }, 1000)
      }
    }

    return {
      list,
      infiniteHandler
    }
  }
})
</script>

<style lang="scss" scoped>
.example-list-item {
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 40px;
  color: #666;
  background-color: #fafafa;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e3e3e3;
}

.example-list-item::before {
  content: 'Line: ';
}

</style>
