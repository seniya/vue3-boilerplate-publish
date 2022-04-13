<template>
  <div class="modal-area">
    <transition name="slide-up">
      <!--
        모달 딤 숨김 : "hide-backdrop",
        상담 영역 숨김 : "hide-header"
        하단 영역 숨김 : "hide-footer"
        닫기 버튼 숨김 : "hide-close",
        제목 숨김 : "hide-title",
        백 버튼 추가 : back",
        컨텐츠 스크롤 없음 : "no-scroll"
        모달 바디(modal-body)에 스크롤이 필요한 경우 : "body-scroll"
        플로팅 버튼 사용할 경우 : "floating"
        컨텐츠 높이 100%일때 모달바디에 스크롤이 필요한 경우 : "no-scroll body-scroll"
        * 복사 후 해당 영역은 삭제
      -->
      <uu-modal
        v-if="fullModal"
        type="full"
        hide-backdrop
        hide-header
        class="category"
        @close="fullModal = false"
      >
        <!-- modal-header -->
        <template v-slot:native-header>
          <!-- native -->
          <div class="native-header">
            <!--
              back button: back,
              close button: close,
              search button: search,
              drawer button: drawer,
              title left : title-left
              * 복사 후 해당 영역은 삭제
            -->
            <Header
              back
              title="풀모달 타이틀"
              close
            />
          </div>
          <!-- // native -->
        </template>
        <!-- // modal-header -->
        <!-- // native -->
        <!-- modal-body -->
        <template v-slot:modal-body>
          modalbody
        </template>
        <!-- // modal-body -->
        <!-- modal footer -->
        <template v-slot:modal-footer>
          <div class="btn-area">
            <button
              type="button"
              class="btn btn-primary"
              disabled
              @click="fullModal = false"
            >
              확인
            </button>
          </div>
        </template>
        <!-- // modal footer -->
      </uu-modal>
    </transition>
    <uu-backdrop
      v-if="fullModal"
      @close="fullModal = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    // full modal
    const fullModal = ref(true)

    return { fullModal }
  }
})
</script>

<style lang="scss" scoped>

</style>
