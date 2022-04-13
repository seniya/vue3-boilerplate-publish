<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="view-exam">
            <tabs v-model="activeTab">
              <tab val="dogs" label="dogs">
              </tab>
              <tab val="cats" label="cats">
              </tab>
            </tabs>
            <tab-panels
              v-model="activeTab"
            >
              <tab-panel val="dogs">
                Dogs are pretty cool.  Here's some info about them.
              </tab-panel>
              <tab-panel val="cats">
                Cats are pretty neat too.  Here's some stuff about them!****
              </tab-panel>
            </tab-panels>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
      &lt;tabs v-model=&quot;activeTab&quot;&gt;
        &lt;tab val=&quot;dogs&quot; label=&quot;dogs&quot;&gt;
        &lt;/tab&gt;
        &lt;tab val=&quot;cats&quot; label=&quot;cats&quot;&gt;
        &lt;/tab&gt;
      &lt;/tabs&gt;
      &lt;tab-panels
        v-model=&quot;activeTab&quot;
      &gt;
        &lt;tab-panel val=&quot;dogs&quot;&gt;
          Dogs are pretty cool.  Here&apos;s some info about them.
        &lt;/tab-panel&gt;
        &lt;tab-panel val=&quot;cats&quot;&gt;
          Cats are pretty neat too.  Here&apos;s some stuff about them!****
        &lt;/tab-panel&gt;
      &lt;/tab-panels&gt;
              </code>
            </pre>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-js">
      import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs'
      export default defineComponent({
        components: { Tabs, Tab, TabPanels, TabPanel },
        setup () {
          const activeTab = ref('dogs')
          onMounted(() => {
            Prism.highlightAll()
          })
          return {
            activeTab
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
import { defineComponent, onMounted, ref } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs'
export default defineComponent({
  components: { Tabs, Tab, TabPanels, TabPanel },
  setup () {
    const activeTab = ref('dogs')
    onMounted(() => {
      Prism.highlightAll()
    })
    return {
      activeTab
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
</style>
