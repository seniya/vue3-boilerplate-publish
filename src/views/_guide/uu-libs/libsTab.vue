<template>
  <div class="page-body">
    <div class="container">
      <h3>Overview</h3>
      <ul class="list-dot">
        <li>*<a href="https://splidejs.com/integration-vue-splide/">SPLIDE(https://splidejs.com/integration-vue-splide/)</a> 참고</li>
        <li>option : menu-center 사용시 탭 메뉴 텍스트 가운데 정렬</li>
        <li>option : cont-drag="false" 사용시 컨텐츠 영역 스와이프 막기</li>
        <li>option : active-bar 사용시 active메뉴 자연스럽게 이동 (tab-name="tabName1" 탭이름 지정, :cont-drag="false" 와 같이 사용)</li>
        <li>option : focus="center" 사용시 탭메뉴 중앙이 포커스 (탭메뉴에 스크롤 생길 때 사용)</li>
        <li>기본으로 this.$emit('custom', this.tabmenu)을 보내고 있음. 개발시 참고</li>
      </ul>
      <br>
      <br>
      <div class="row">
        <div class="col-12">
          <!-- Type2 -->
          <h4>Type2</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type2'"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>

              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>

              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type2&apos;&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <!-- Type2 + active-bar -->
          <h4>Type2 + active-bar</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type2'"
              tab-name="type22"
              active-bar
              option="fade"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type2&apos;&quot;
  tab-name=&quot;type22&quot;
  active-bar
  option=&quot;fade&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type4</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type4'"
              start="1"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type4&apos;&quot;
  start=&quot;1&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type5</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type5'"
              start="1"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type5&apos;&quot;
  start=&quot;1&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type 6</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type6 gradient'"
              start="1"
              padding-left="2.4rem"
              padding-right="2.4rem"
              focus="center"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;!-- 그라데이션 :class="'type6 gradient'" 추가 --&gt;
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type6 gradient&apos;&quot;
  start=&quot;1&quot;
  padding-left=&quot;2.4rem&quot;
  padding-right=&quot;2.4rem&quot;
  focus=&quot;center&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type 7</h4>
          <div class="view-exam">
            <uu-tab
              :items="wallet"
              :class="'type7'"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                    탭111<br>
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;wallet&quot;
  :class=&quot;&apos;type7&apos;&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet = ref([&apos;카드/계좌&apos;, &apos;멤버십&apos;, &apos;인증&apos;, &apos;부가서비스&apos;])
    return { wallet }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>통합검색 탭 (type1)</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              :items="search"
              :class="'type1'"
              start="1"
              active-bar
              menu-center
              tab-name="search"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    페이판 탭
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    신한카드 탭
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  :items=&quot;search&quot;
  :class=&quot;&apos;type1&apos;&quot;
  start=&quot;1&quot;
  active-bar
  menu-center
  tab-name=&quot;search&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        페이판 탭
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        신한카드 탭
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const search = ref([
      {
        name: &apos;페이판&apos;,
        count: 14
      },
      {
        name: &apos;신한카드&apos;,
        count: 16
      }
    ])
    return { search }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8"
              active-bar
              menu-center
              start="1"
              :class="'type8'"
              :items="wallet2"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
              <template v-slot:slide4>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭44444
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  tab-name=&quot;tabname8&quot;
  active-bar
  menu-center
  start=&quot;1&quot;
  :class=&quot;&apos;type8&apos;&quot;
  :items=&quot;wallet2&quot;
  :menu-drag=&quot;false&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide4&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭44444
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet2 = ref([&apos;결제&apos;, &apos;송금/충전&apos;, &apos;대중교통&apos;, &apos;입출금&apos;])
    return { wallet2 }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8 + lg</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8-lg"
              active-bar
              menu-center
              start="1"
              :class="'type8 lg'"
              :items="wallet3"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
              <template v-slot:slide3>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭3
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  tab-name=&quot;tabname8-lg&quot;
  active-bar
  menu-center
  start=&quot;1&quot;
  :class=&quot;&apos;type8 lg&apos;&quot;
  :items=&quot;wallet3&quot;
  :menu-drag=&quot;false&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide3&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet3 = ref([&apos;결제&apos;, &apos;송금/충전&apos;, &apos;대중교통&apos;])
    return { wallet3 }
  }
})
              </code>
            </pre>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12">
          <h4>Type8 + sm</h4>
          <br>
          <div class="view-exam">
            <uu-tab
              tab-name="tabname8-sm"
              active-bar
              menu-center
              start="1"
              :class="'type8 sm'"
              :items="wallet4"
              :menu-drag="false"
              :cont-drag="false"
            >
              <!-- slot 영역 -->
              <template v-slot:slide1>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭111<br>
                  </div>
                </div>
              </template>
              <template v-slot:slide2>
                <div class="tab-slot">
                  <div class="tab-content">
                    탭22
                  </div>
                </div>
              </template>
            </uu-tab>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html">
&lt;uu-tab
  tab-name=&quot;tabname8-sm&quot;
  active-bar
  menu-center
  start=&quot;1&quot;
  :class=&quot;&apos;type8 sm&apos;&quot;
  :items=&quot;wallet4&quot;
  :menu-drag=&quot;false&quot;
  :cont-drag=&quot;false&quot;
&gt;
  &lt;!-- slot 영역 --&gt;
  &lt;template v-slot:slide1&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭111&lt;br&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:slide2&gt;
    &lt;div class=&quot;tab-slot&quot;&gt;
      &lt;div class=&quot;tab-content&quot;&gt;
        탭22
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/uu-tab&gt;
              </code>
              <code class="language-javascript">
export default defineComponent({
  setup () {
    const wallet4 = ref([&apos;등록순&apos;, &apos;최신순&apos;])
    return { wallet4 }
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
import Tab from '@/components/uu-components/Tab.vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
    'uu-tab': Tab
  },
  setup () {
    const search = ref([
      {
        name: '페이판',
        count: 14
      },
      {
        name: '신한카드',
        count: 16
      }
    ])
    const wallet = ref(['카드/계좌', '멤버십', '인증', '부가서비스'])
    const wallet2 = ref(['결제', '송금/충전', '대중교통', '입출금'])
    const wallet3 = ref(['결제', '송금/충전', '대중교통'])
    const wallet4 = ref(['등록순', '최신순'])
    const names = ref([])

    onMounted(() => {
      Prism.highlightAll()
    })

    return {
      search,
      wallet,
      wallet2,
      wallet3,
      wallet4,
      names
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/guide.scss";
  .tab-content {
    display: flex;
    justify-content: center;
    font-size: 5rem;
    padding: 2.4rem;
  }
  .view-exam {
    height: 50rem;
  }
</style>
