<template>
  <div class="modal-area">
    <transition name="slide-up">
      <!--
        모달 딤 숨김 : "hide-backdrop",
        상담 영역 숨김 : "hide-header"
        하단 영역 숨김 : "hide-footer"
        닫기 버튼 숨김 : "hide-close",
        제목 숨김 : "hide-title",
        제목 왼쪽 정렬 : "title-left"
        제목 위에 버튼 : "btn-header"
        백 버튼 추가 : back",
        플로팅 버튼 사용할 경우 : "floating"
        * 복사 후 해당 영역은 삭제
      -->
      <uu-modal
        v-if="bottomModal"
        type="bottom"
        hide-backdrop
        title-left
        class="category"
        @close="bottomModal = false"
      >
        <!-- modal-header -->
        <template v-slot:modal-header>
          Title
        </template>
        <!-- // modal-header -->
        <!-- modal-body -->
        <template v-slot:modal-body>
          body
        </template>
        <!-- // modal-body -->
        <!-- modal-footer -->
        <template v-slot:modal-footer>
          <div class="btn-area">
            <button
              type="button"
              class="btn btn-primary"
              @click="bottomModal = false"
            >
              확인
            </button>
          </div>
        </template>
        <!-- // modal-footer -->
      </uu-modal>
    </transition>
    <uu-backdrop
      v-if="bottomModal"
      @close="bottomModal = false"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomModal: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
