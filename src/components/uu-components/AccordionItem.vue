<template>
  <div
    v-if="multiple"
    :class="['accordion-panel', type, {'active': multiVisible}]"
  >
    <div
      class="accordion-header"
    >
      <!-- 헤더 안에 버튼 클릭 -->
      <div
        v-if="hasbtn"
        class="accordion-header-inner"
        tabindex="0"
      >
        <slot name="accordion-header" />
        <button
          :id="randomString + 'Acc'"
          :class="arrowgray ? 'btn-toggle gray' : 'btn-toggle'"
          type="button"
          :aria-expanded="multiVisible ? 'true' : 'false'"
          :aria-controls="'con-'+ randomString"
          :aria-disabled="multiVisible ? 'true' : 'false'"
          @click="open"
        >
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
          <span
            v-if="multiVisible"
            class="sr-only"
          >닫기</span>
          <span
            v-else
            class="sr-only"
          >열기</span>
        </button>
      </div>
      <!-- 헤더 전체 클릭 -->
      <button
        v-else
        :id="randomString + 'Acc'"
        class="accordion-header-inner"
        type="button"
        :aria-expanded="multiVisible ? 'true' : 'false'"
        :aria-controls="'con-'+ randomString"
        :aria-disabled="multiVisible ? 'true' : 'false'"
        @click="open"
      >
        <slot name="accordion-header" />
        <div :class="arrowgray ? 'ico-toggle gray' : 'ico-toggle'">
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
        </div>
      </button>
    </div>
    <transition
      name="accordion-content"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="multiVisible"
        :id="'con-'+ randomString"
        class="accordion-content"
        role="region"
        :aria-labelledby="randomString + 'Acc'"
        tabindex="0"
      >
        <div class="accordion-content-inner">
          <slot name="accordion-content" />
        </div>
      </div>
    </transition>
  </div>
  <!--  -->
  <div
    v-else
    :class="['accordion-panel', type, {'active':visible }]"
  >
    <div
      class="accordion-header"
    >
      <!-- 헤더 안에 버튼 클릭 -->
      <div
        v-if="hasbtn"
        class="accordion-header-inner"
        tabindex="0"
      >
        <slot name="accordion-header" />
        <button
          :id="randomString + 'Acc'"
          :class="arrowgray ? 'btn-toggle gray' : 'btn-toggle'"
          type="button"
          :aria-expanded="multiVisible ? 'true' : 'false'"
          :aria-controls="'con-'+ randomString"
          :aria-disabled="multiVisible ? 'true' : 'false'"
          @click="open"
        >
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
          <span
            v-if="multiVisible"
            class="sr-only"
          >닫기</span>
          <span
            v-else
            class="sr-only"
          >열기</span>
        </button>
      </div>
      <!-- 헤더 전체 클릭 -->
      <button
        v-else
        :id="randomString + 'Acc'"
        class="accordion-header-inner"
        type="button"
        :disabled="disabled"
        :aria-expanded="multiVisible ? 'true' : 'false'"
        :aria-controls="'con-'+ randomString"
        :aria-disabled="multiVisible ? 'true' : 'false'"
        @click="open"
      >
        <slot name="accordion-header" />
        <div :class="arrowgray ? 'ico-toggle gray' : 'ico-toggle'">
          <uu-icon
            v-if="type === 'type2'"
            icon="arrow1"
            size="16"
            direction="bottom"
          />
          <uu-icon
            v-else
            icon="arrow1"
            size="24"
            direction="bottom"
          />
        </div>
      </button>
    </div>
    <transition
      name="accordion-content"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="visible"
        :id="'con-'+ randomString"
        class="accordion-content"
        role="region"
        :aria-labelledby="randomString + 'Acc'"
        tabindex="0"
      >
        <div class="accordion-content-inner">
          <slot
            name="accordion-content"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { getRandomId } from '@/utils/common.function'
import { computed, defineComponent, inject, onMounted, reactive, toRefs } from 'vue'
import uuIcon from './Icon.vue'
import { AccordionInterface } from './Accordion.vue'

export default defineComponent({
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    hasbtn: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    arrowgray: {
      type: Boolean,
      default: false
    }
  },
  components: { uuIcon },
  setup (props) {
    const randomString = getRandomId()
    const parent = inject<AccordionInterface>('accordion', {
      count: 0,
      active: null,
      type: ''
    })
    const state = reactive({
      index: parent.count++,
      multiVisible: false,
      type: parent.type
    })
    const visible = computed(() => {
      return state.index === parent.active
    })

    onMounted(() => {
      if (props.active && props.multiple) {
        state.multiVisible = true
      }
      if (props.active) {
        parent.active = state.index
      }
    })

    const open = () => {
      if (props.multiple) {
        state.multiVisible = !state.multiVisible
      } else {
        if (visible.value) {
          parent.active = null
        } else {
          parent.active = state.index
        }
      }
    }
    const startTransition = (el: HTMLElement) => {
      el.style.height = el.scrollHeight + 'px'
    }
    const endTransition = (el: HTMLElement) => {
      el.style.height = ''
    }
    return {
      ...toRefs(state),
      randomString,
      visible,
      open,
      startTransition,
      endTransition
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
