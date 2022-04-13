<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>ScrollPicker</h3>
          <br>
          <p>
            <a
              href="https://github.com/wan2land/vue-scroll-picker/tree/main"
              target="_blank"
            >참고) https://github.com/wan2land/vue-scroll-picker/tree/main</a>
          </p>
          <br>
          <h4>ScrollPicker Default</h4>
          <p>Current value is <strong>{{ currentValue }}</strong></p>
          <div class="view-exam">
            <!-- default -->
            <vue-scroll-picker
              v-model="currentValue"
              :options="options"
            />
            <!-- // default -->
            <h4>ScrollPicker Group</h4>
            <p>Current value is <strong>{{ currentValue1 }}</strong></p>
            <p>Current value is <strong>{{ currentValue2 }}</strong></p>
            <!-- group -->
            <div class="scroll-picker-group">
              <vue-scroll-picker
                v-model="currentValue1"
                :options="options1"
              />
              <vue-scroll-picker
                v-if="currentValue1 === '매주'"
                v-model="currentValue2"
                :options="options2"
              />
              <vue-scroll-picker
                v-else
                v-model="currentValue2"
                :options="options3"
              />
            </div>
            <!-- // group -->
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html" v-pre>
&lt;!-- default --&gt;
&lt;vue-scroll-picker
  v-model=&quot;currentValue&quot;
  :options=&quot;options&quot;
/&gt;
&lt;!-- // default --&gt;
&lt;h4&gt;ScrollPicker Group&lt;/h4&gt;
&lt;p&gt;Current value is &lt;strong&gt;{{ currentValue1 }}&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Current value is &lt;strong&gt;{{ currentValue2 }}&lt;/strong&gt;&lt;/p&gt;
&lt;!-- group --&gt;
&lt;div class=&quot;scroll-picker-group&quot;&gt;
  &lt;vue-scroll-picker
    v-model=&quot;currentValue1&quot;
    :options=&quot;options1&quot;
  /&gt;
  &lt;vue-scroll-picker
    v-if=&quot;currentValue1 === &apos;매주&apos;&quot;
    v-model=&quot;currentValue2&quot;
    :options=&quot;options2&quot;
  /&gt;
  &lt;vue-scroll-picker
    v-else
    v-model=&quot;currentValue2&quot;
    :options=&quot;options3&quot;
  /&gt;
&lt;/div&gt;
&lt;!-- // group --&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-js">
import { defineComponent, ref } from &apos;vue&apos;
import { VueScrollPicker } from &apos;vue-scroll-picker&apos;
import &apos;vue-scroll-picker/lib/style.css&apos;

export default defineComponent({
  components: {
    VueScrollPicker
  },
  setup () {
    const options = ref([
      { value: &apos;instagram&apos;, name: &apos;instagram&apos; },
      { value: &apos;facebook&apos;, name: &apos;facebook&apos; },
      { value: &apos;youtube&apos;, name: &apos;youtube&apos; },
      { value: &apos;twitter&apos;, name: &apos;twitter&apos; },
      { value: &apos;line&apos;, name: &apos;line&apos; }
    ])
    const options1 = ref([
      { value: &apos;매월&apos;, name: &apos;매월&apos; },
      { value: &apos;매주&apos;, name: &apos;매주&apos; }
    ])
    const options2 = ref([
      { value: &apos;일요일&apos;, name: &apos;일요일&apos; },
      { value: &apos;월요일&apos;, name: &apos;월요일&apos; },
      { value: &apos;화요일&apos;, name: &apos;화요일&apos; },
      { value: &apos;수요일&apos;, name: &apos;수요일&apos; },
      { value: &apos;목요일&apos;, name: &apos;목요일&apos; }
    ])
    const options3 = ref([
      { value: &apos;1월&apos;, name: &apos;1월&apos; },
      { value: &apos;2월&apos;, name: &apos;2월&apos; },
      { value: &apos;3월&apos;, name: &apos;3월&apos; },
      { value: &apos;4월&apos;, name: &apos;4월&apos; },
      { value: &apos;5월&apos;, name: &apos;5월&apos; },
      { value: &apos;6월&apos;, name: &apos;6월&apos; },
      { value: &apos;7월&apos;, name: &apos;7월&apos; }
    ])
    const currentValue = ref(null)
    const currentValue1 = ref(null)
    const currentValue2 = ref(null)

    return {
      options,
      options1,
      options2,
      options3,
      currentValue,
      currentValue1,
      currentValue2
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
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
// https://github.com/wan2land/vue-scroll-picker/tree/0.x-vue2
import { VueScrollPicker } from 'vue-scroll-picker'
import 'vue-scroll-picker/lib/style.css'

export default defineComponent({
  components: {
    VueScrollPicker
  },
  setup () {
    const options = ref([
      { value: 'instagram', name: 'instagram' },
      { value: 'facebook', name: 'facebook' },
      { value: 'youtube', name: 'youtube' },
      { value: 'twitter', name: 'twitter' },
      { value: 'line', name: 'line' }
    ])
    const options1 = ref([
      { value: '매월', name: '매월' },
      { value: '매주', name: '매주' }
    ])
    const options2 = ref([
      { value: '일요일', name: '일요일' },
      { value: '월요일', name: '월요일' },
      { value: '화요일', name: '화요일' },
      { value: '수요일', name: '수요일' },
      { value: '목요일', name: '목요일' }
    ])
    const options3 = ref([
      { value: '1월', name: '1월' },
      { value: '2월', name: '2월' },
      { value: '3월', name: '3월' },
      { value: '4월', name: '4월' },
      { value: '5월', name: '5월' },
      { value: '6월', name: '6월' },
      { value: '7월', name: '7월' }
    ])
    const currentValue = ref(null)
    const currentValue1 = ref(null)
    const currentValue2 = ref(null)

    onMounted(() => {
      Prism.highlightAll()
    })

    return {
      options,
      options1,
      options2,
      options3,
      currentValue,
      currentValue1,
      currentValue2
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/scss/guide.scss";
</style>
