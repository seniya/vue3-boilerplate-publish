<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Swiper</h3>
          <p>
            *<a
              href="https://splidejs.com/integration-vue-splide/"
              target="_blank"
            >SPLIDE(https://splidejs.com/integration-vue-splide/)</a> 참고
          </p>
          <p>기본적으로 this.$emit('event', this.swiper)로 swiper를 보내고 있음. 개발시 참고.</p>
          <p>@moved 이벤트 $emit 으로 보내고 있음. 개발시 참고.</p>
          <h4>Basic</h4>
          <div class="view-exam">
            <!-- Swiper basic -->
            <uu-swiper
              type="basic"
              slide="3"
              width="30rem"
              height="40rem"
              @moved="movedEvent"
              @event="event"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  basic1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  basic2
                </div>
              </template>
              <template v-slot:slide3>
                <div class="slide-inner">
                  basic3
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper basic -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;uu-swiper
  type=&quot;basic&quot;
  slide=&quot;3&quot;
  width=&quot;30rem&quot;
  height=&quot;40rem&quot;
  @moved=&quot;movedEvent&quot;
  @event=&quot;event&quot;
&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      basic1
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      basic2
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      basic3
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-swiper&gt;
                </code>
            </pre>
          </div>
          <h4>Progress</h4>
          <div class="view-exam">
            <!-- Swiper progress -->
            <uu-swiper
              type="progress"
              slide="3"
              height="40rem"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  progress1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  progress2
                </div>
              </template>
              <template v-slot:slide3>
                <div class="slide-inner">
                  progress3
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper progress -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;!-- Swiper progress --&gt;
&lt;uu-swiper
  type=&quot;progress&quot;
  slide=&quot;3&quot;
  height=&quot;40rem&quot;
&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      progress1
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      progress2
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      progress3
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-swiper&gt;
&lt;!-- // Swiper progress --&gt;
                </code>
            </pre>
          </div>
          <h4>Bullet</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="40rem"
              color="black"
              class-type="type1"
              auto
              @event="event"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;!-- 기본 loop로 되어 있으며 mode="slide" 추가시 단방향 --&gt;
&lt;!-- Swiper bullet --&gt;
&lt;uu-swiper
  type=&quot;bullet&quot;
  slide=&quot;2&quot;
  height=&quot;40rem&quot;
  color=&quot;black&quot;
  class-type=&quot;type1&quot;
  auto
  @event=&quot;event&quot;
&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      bullet1
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      bullet2
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-swiper&gt;
&lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <br>
          <h4>Bullet type2</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="20rem"
              color="black"
              class-type="type2"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;!-- 기본 loop로 되어 있으며 mode="slide" 추가시 단방향 --&gt;
&lt;!-- Swiper bullet --&gt;
&lt;uu-swiper
  type=&quot;bullet&quot;
  slide=&quot;2&quot;
  height=&quot;20rem&quot;
  color=&quot;black&quot;
  class-type=&quot;type2&quot;
&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      bullet1
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;slide-inner&quot;&gt;
      bullet2
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-swiper&gt;
&lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <br>
          <h4>Bullet type3</h4>
          <div class="view-exam">
            <!-- Swiper bullet -->
            <uu-swiper
              type="bullet"
              slide="2"
              height="20rem"
              class-type="type3"
              color="black"
              position="bottom-left"
              gap="1.6rem"
              padding-left="1.6rem"
              padding-right="1.6rem"
            >
              <template v-slot:slide1>
                <div class="slide-inner">
                  bullet1
                </div>
              </template>
              <template v-slot:slide2>
                <div class="slide-inner">
                  bullet2
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper bullet -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
  &lt;!-- position="" || bottom-left || bottom-right || bottom-center || top-left || top-right || top-center // default: bottom-center --&gt;
  &lt;!-- gap="" || 1.6rem || 16px // default: 0 --&gt;
  &lt;!-- padding-left="" || 1.6rem || 16px // default: 0 --&gt;
  &lt;!-- padding-right="" || 1.6rem || 16px // default: 0 --&gt;
  &lt;!-- Swiper bullet --&gt;
  &lt;uu-swiper
    type=&quot;bullet&quot;
    slide=&quot;2&quot;
    height=&quot;20rem&quot;
    class-type=&quot;type3&quot;
    color=&quot;black&quot;
    position=&quot;bottom-left&quot;
    gap=&quot;1.6rem&quot;
    padding-left=&quot;1.6rem&quot;
    padding-right=&quot;1.6rem&quot;
  &gt;
    &lt;template v-slot:slide1&gt;
      &lt;div class=&quot;slide-inner&quot;&gt;
        bullet1
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template v-slot:slide2&gt;
      &lt;div class=&quot;slide-inner&quot;&gt;
        bullet2
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/uu-swiper&gt;
  &lt;!-- // Swiper bullet --&gt;
                </code>
            </pre>
          </div>
          <h4>Custom</h4>
          <div class="view-exam">
            <!-- Swiper Custom -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <br>
            <!-- type2 -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom2"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <br>
            <!-- type3 -->
            <uu-swiper
              type="custom"
              slide="2"
              :custom="custom3"
            >
              <template v-slot:slide1>
                <div style="background-color: red">
                  custom1
                </div>
              </template>
              <template v-slot:slide2>
                <div style="height: 100%; background-color: black; overflow-y: auto; color:#fff;">
                  custom2
                  <p style="height:1000px">
                    height: 100%; background-color: black; overflow-y: auto; color:#fff;
                  </p>
                </div>
              </template>
            </uu-swiper>
            <!-- // Swiper Custom -->
          </div>
          <div class="view-code">
            <pre>
                <code class="language-html">
&lt;uu-swiper
  type=&quot;custom&quot;
  slide=&quot;2&quot;
  :custom=&quot;custom&quot;
&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div style=&quot;background-color: red&quot;&gt;
      custom1
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div style=&quot;height: 100%; background-color: black; overflow-y: auto; color:#fff;&quot;&gt;
      custom2
      &lt;p style=&quot;height:1000px&quot;&gt;
        height: 100%; background-color: black; overflow-y: auto; color:#fff;
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-swiper&gt;
                </code>
            </pre>

            <pre>
                <code class="language-js">
export default defineComponent({
  setup () {
    const custom = reactive({
      type: &apos;slide&apos;,
      width: &apos;100%&apos;,
      height: &apos;10rem&apos;,
      // heightRatio: 0.3, width값에 따라 height가 변함 width의 30% 너비를 높이로..
      focus: &apos;center&apos;,
      arrows: false,
      pagination: false,
      autoplay: false
    })

    return { custom }
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
import { defineComponent, reactive, ref, onMounted } from 'vue'
import Swiper from '@/components/uu-components/Swiper.vue'
import { Splide } from '@splidejs/splide'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default defineComponent({
  components: {
    'uu-swiper': Swiper
  },
  setup () {
    const custom = reactive({
      type: 'slide',
      width: '100%',
      height: '10rem',
      // heightRatio: 0.3, width값에 따라 height가 변함 width의 30% 너비를 높이로..
      focus: 'center',
      arrows: false,
      pagination: false,
      autoplay: false
    })
    const custom2 = reactive({
      type: 'slide',
      width: '100%',
      heightRatio: 0.3,
      focus: 'center',
      arrows: false,
      pagination: false,
      autoplay: false
    })
    const custom3 = reactive({
      type: 'fade',
      width: '100%',
      autoHeight: true,
      focus: 'center',
      arrows: false,
      pagination: false,
      autoplay: false
    })
    const swiper = ref<Splide | null>(null)

    function event (swiperArg: Splide) {
      swiper.value = swiperArg
    }
    function movedEvent () {
      console.log(swiper.value)
    }

    onMounted(() => {
      Prism.highlightAll()
    })

    return {
      custom,
      custom2,
      custom3,
      swiper,
      event,
      movedEvent
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
.slide-inner {
  width: 100%;
  height: 100%;
  background-color: $gray080;
}
</style>
