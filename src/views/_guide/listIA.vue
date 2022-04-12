<template>
  <div class="guide-wrap guide-ia">
    <!-- header -->
    <header class="guide-header">
      <div class="brand">
        <h1 class="logo">
          마이데이터
        </h1>
      </div>
      <div class="guide-header-nav">
        <button
          class="btn-guide"
          @click="$router.push('/convention/rule-intro')"
        >
          GUIDE
        </button>
      </div>
    </header>
    <!-- header //-->
    <!-- login -->
    <div v-if="loginFlag === 'N'">
      <div class="form-group">
        <input
          v-model="loginId"
          type="text"
          class="form-control"
          placeholder="ID"
        >
        <input
          v-model="loginPw"
          type="password"
          class="form-control"
          placeholder="PW"
        >
        <div class="btn-area">
          <button
            type="button"
            class="btn btn-primary"
            @click="loginB"
          >
            login
          </button>
        </div>
      </div>
    </div>
    <!-- login // -->
    <div
      v-if="loginFlag === 'Y'"
      class="guide-container"
    >
      <div class="guide-note">
        <h2>작성 가이드</h2>
        <ul>
          <li>
            * 유형 표시방법 - [P] Page / [FP] Full Popup / [BP] Bottom Popup / [T] Tab / [S] Section / [AP] Alert Popup
          </li>
          <li>
            * 진척관리 - 최초 완료 표시 기준으로 날짜를 표시하고, 비고란에 전달사항이 있는 경우 표시해주세요.
          </li>
          <li>
            * 결함관리 - 신규/수정/삭제 이슈가 있는 경우 소스 코드와 비고란에 동일한 주석 문구를 표시해주세요. (ex. 주석 표기 YYMMDD Worker 작업내용 수정)
          </li>
          <!-- <li>
            * 최종완료 - 사이트 오픈후에 전체현황을 엑셀로 백업하여 기록을
            남기고 비고란은 삭제한다.
          </li> -->
        </ul>
      </div>

      <tabs v-model="selectedTab">
        <tab
          class="tab"
          v-for="(tab, i) in tabsData"
          :key="`t${i}`"
          :val="tab.value"
          :label="tab.name"
          :indicator="true"
        />
      </tabs>
      <tab-panels
        v-model="selectedTab"
        :animate="false"
      >
        <tab-panel
          v-for="(tab, i) in tabsData"
          :key="`tp${i}`"
          :val="tab.value"
        >
          <ListTable :items="tab.item" />
        </tab-panel>
      </tab-panels>

    </div>
  </div>
</template>

<script lang="ts">
import ListTable from '@/views/_guide/listTable.vue'

import tabsData from '@/utils/jobs/job.index'
import { defineComponent, reactive, toRefs } from 'vue'
import { Tabs, Tab, TabPanels, TabPanel } from 'vue3-tabs'

export default defineComponent({
  name: 'list-ia',
  components: {
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    ListTable
  },
  setup () {
    const state = reactive({
      selectedTab: tabsData[0],
      loginFlag: localStorage.getItem('loginFlag') || 'N'
    })
    return {
      tabsData,
      ...toRefs(state)
    }
  }
})
</script>
