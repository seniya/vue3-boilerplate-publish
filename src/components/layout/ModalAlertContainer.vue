<template>
  <div class="modal-area">
    <!--
      모달 딤 숨김 : "hide-backdrop",
      상담 영역 숨김 : "hide-header"
      하단 영역 숨김 : "hide-footer"
      닫기 버튼 숨김 : "hide-close",
      제목 숨김 : "hide-title",
      제목 왼쪽 정렬 : "title-left"
      백 버튼 추가 : back",
      * 복사 후 해당 영역은 삭제
    -->
    <uu-modal
      v-if="alertModal"
      type="alert"
      hide-header
      @close="alertModal = false"
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
        <button
          type="button"
          class="btn text-primary"
          @click="alertModal = false"
        >
          확인
        </button>
      </template>
      <!-- // modal-footer -->
    </uu-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    // alert modal
    const alertModal = ref(true)

    return { alertModal }
  }
})
</script>

<style lang="scss" scoped>
</style>
