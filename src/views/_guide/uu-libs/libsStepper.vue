<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12 view-exam ">
          <h3>Stepper</h3>
          <section class="view-section">
            <!-- overview -->
            <h4>Overview</h4>
            <p>*** 임시로 잡은 디자인입니다. 디자인 추후 수정 예정***</p>
            <ul class="list-stepper">
              <li>
                <uu-stepper />
              </li>
              <li>
                <uu-stepper
                  value="6"
                  min="2"
                  max="20"
                  step="2"
                />
              </li>
            </ul>
          </section>
        </div>
        <div class="col-12 view-code">
          <pre>
              <code class="language-html">
      &lt;!-- default (value="0", min="0", max="100", step="1") --&gt;
      &lt;uu-stepper /&gt;

      &lt;uu-stepper
        value=&quot;6&quot;
        min=&quot;2&quot;
        max=&quot;20&quot;
        step=&quot;2&quot;
      /&gt;
              </code>
            </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Stepper from '@/components/uu-components/Stepper.vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
    'uu-stepper': Stepper
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  .list-stepper {
    li {
      + li {
        margin-top: 1rem;
      }
    }
  }
</style>
