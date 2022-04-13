<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Toast</h3>
          <div class="view-exam">
            <button
              type="button"
              @click="open"
            >
              open Toast!!
            </button>
            <br>
            <button
              type="button"
              @click="btnOpen"
            >
              open Button Toast!!
            </button>
            <uu-toast
              ref="toast"
              :message="message"
              class="text-center"
            />
            <uu-toast
              ref="toast2"
              button
              :message="message2"
              @click="btnEvent"
            />
          </div>
          <div class="view-code">
            <pre class="language-html">
              <code>
&lt;button
  type=&quot;button&quot;
  @click=&quot;open&quot;
&gt;
  open Toast!!
&lt;/button&gt;
&lt;br&gt;
&lt;button
  type=&quot;button&quot;
  @click=&quot;btnOpen&quot;
&gt;
  open Button Toast!!
&lt;/button&gt;
&lt;uu-toast
  ref=&quot;toast&quot;
  :message=&quot;message&quot;
  class=&quot;text-center&quot;
/&gt;
&lt;uu-toast
  ref=&quot;toast2&quot;
  button
  :message=&quot;message2&quot;
  @click=&quot;btnEvent&quot;
/&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre class="language-js">
              <code>
export default defineComponent({
  components: {
    &apos;uu-toast&apos;: Toast
  },
  setup () {
    const message = ref(&apos;이건 텍스트만 있는 \n토스트입니다.&apos;)
    const message2 = (&apos;이건 버튼이 있는 토스트입니다.&apos;)

    const toast = ref&lt;InstanceType&lt;typeof Toast&gt; | null&gt;(null)
    const toast2 = ref&lt;InstanceType&lt;typeof Toast&gt; | null&gt;(null)

    function open () {
      toast.value?.showToast()
    }
    function btnOpen () {
      toast2.value?.showToast()
    }
    function btnEvent () {
      console.log(&apos;btnEvent&apos;)
    }

    onMounted(() =&gt; {
      Prism.highlightAll()
    })

    return {
      message,
      message2,
      toast,
      toast2,
      open,
      btnOpen,
      btnEvent
    }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Toast from '@/components/uu-components/Toast.vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
    'uu-toast': Toast
  },
  setup () {
    const message = ref('이건 텍스트만 있는 \n토스트입니다.')
    const message2 = ('이건 버튼이 있는 토스트입니다.')

    const toast = ref<InstanceType<typeof Toast> | null>(null)
    const toast2 = ref<InstanceType<typeof Toast> | null>(null)

    function open () {
      toast.value?.showToast()
    }
    function btnOpen () {
      toast2.value?.showToast()
    }
    function btnEvent () {
      console.log('btnEvent')
    }

    onMounted(() => {
      Prism.highlightAll()
    })

    return {
      message,
      message2,
      toast,
      toast2,
      open,
      btnOpen,
      btnEvent
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
