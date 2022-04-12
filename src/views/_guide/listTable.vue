<template>
  <div class="work-list">
    <div class="work-status">
      <span class="item"><em>전체 : </em>{{ realPageLength }}(<span class="sr-only">삭제 된 페이지 포함</span>{{ totalPageLength }}), </span>
      <span class="item"><em>완료 : </em>{{ donePageLength }}(<span class="sr-only">완료 후 삭제</span>{{ doneDeletePageLength }}), </span>
      <span class="item"><em>삭제 : </em>{{ deletePageLength }}, </span>
      <span class="item"><em>네이티브 : </em>{{ nativePageLength }}, </span>
      <span class="item"><em>배포 : </em>{{ finePageLength }}, </span>
      <span class="item"><em>진척률 : </em>{{ ratioPage }}%, </span>
    </div>
    <ul class="ia-list ia-list-fo">
      <li class="list-header">
        <span class="col-no">번호</span>
        <span class="col-sort">Sort</span>
        <span class="col-depth1">depth1</span>
        <span class="col-depth2">depth2</span>
        <span class="col-depth3">depth3</span>
        <span class="col-depth4">depth4</span>
        <span class="col-depth5">depth5</span>
        <span class="col-depth6">depth6</span>
        <span class="col-type">종류</span>
        <span class="col-url">화면ID</span>
        <span class="col-date">시작일</span>
        <span class="col-date">완료일</span>
        <span class="col-date">수정일</span>
        <span class="col-status">상태</span>
        <span class="col-worker">담당자</span>
        <span class="col-memo">비고</span>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[item.status, { 'list-body': true, 'list-body-start': item.listStart }]"
      >
        <span class="col-no">{{ index + 1 }}</span>
        <span class="col-sort">{{ item.sort }}</span>
        <span class="col-depth1">{{ item.depth1 }}</span>
        <span class="col-depth2">{{ item.depth2 }}</span>
        <span class="col-depth3">{{ item.depth3 }}</span>
        <span class="col-depth4">{{ item.depth4 }}</span>
        <span class="col-depth5">{{ item.depth5 }}</span>
        <span class="col-depth6">{{ item.depth6 }}</span>
        <span class="col-type"><span
          v-if="item.type"
          class="icon-type"
        >{{ item.type }}</span></span>
        <span
          v-if="item.status.includes('done')"
          class="col-url"
        >
          <!-- <a
            href="javascript:void(0)"
            @click.prevent="$router.push(item.url)"
          >{{ item.page }}</a> -->
          <a
            :href="'#'+item.url"
            target="_blank"
          >{{ item.page }}</a>
        </span>
        <span
          v-else
          class="col-url"
        >{{ item.page }}</span>
        <span class="col-date">{{ item.startDate }}</span>
        <span class="col-date">{{ item.endDate }}</span>
        <span class="col-date">{{ item.finalDate }}</span>
        <span :class="['col-status', item.status]">{{
          displayStatus(item.status)
        }}</span>
        <span class="col-worker">{{ item.worker }}</span>
        <span class="col-memo">
          <span
            v-for="(memo, i) in item.memos"
            :key="i"
          >{{ memo }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'component-list-table',
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const state = reactive({})

    const ratioPage = computed(() => {
      return (donePageLength.value / realPageLength.value) * 100
    })

    const realPageLength = computed(() => {
      return totalPageLength.value - (deletePageLength.value + nativePageLength.value)
    })

    const deletePageLength = computed(() => {
      return props.items.filter((item: any) => {
        return item.status.includes('delete')
      }).length
    })

    const nativePageLength = computed(() => {
      return props.items.filter((item: any) => {
        return item.status.includes('native')
      }).length
    })

    const donePageLength = computed(() => {
      return props.items.filter((item: any) => {
        return item.status.includes('done')
      }).length - doneDeletePageLength.value
    })

    const doneDeletePageLength = computed(() => {
      return props.items.filter((item: any) => {
        return item.status.includes('done delete')
      }).length
    })

    const finePageLength = computed(() => {
      return props.items.filter((item: any) => {
        return item.status.includes('done fine')
      }).length
    })

    const totalPageLength = computed(() => {
      return props.items.length
    })

    function displayStatus (status: string) {
      if (status.includes('delete')) {
        return '삭제'
      } else if (status.includes('ing')) {
        return '작업중'
      } else if (status.includes('fine')) {
        return '배포'
      } else if (status.includes('native')) {
        return '네이티브'
      } else if (status.includes('done')) {
        return '완료'
      }
      return ''
    }
    return {
      ...toRefs(state),
      ratioPage,
      realPageLength,
      deletePageLength,
      nativePageLength,
      donePageLength,
      doneDeletePageLength,
      finePageLength,
      totalPageLength,

      displayStatus
    }
  }
})

</script>
