<template>
  <div
    id="page"
    class="page"
  >
    <!-- native -->
    <Header
      back
      title="풀모달 타이틀"
      close
    />
    <!-- // native -->
    <!--
        하단 푸터 버튼 떠있는 경우 floating 클래스 추가 ex) class="content category floating"
        tab 일경우 content-body에 넣지 말것
        * 복사 후 해당 영역은 삭제
    -->
    <div
      id="content"
      class="content category"
    >
      <!-- content-header -->
      <div class="content-header">
        content-header <!-- 해당 영역 없을 경우 삭제 -->
      </div>
      <!-- // content-header -->
      <!-- content-body -->
      <div class="content-body">
        <!--
          content-body height: 100% 일 경우 full-body 클래스 추가 ex) content-body full-body
          * 복사 후 해당 영역은 삭제
        -->
        <section class="section">
          <!-- card -->
          <div class="card">
            <div class="card-header">
              <div class="card-title">
                <span class="fw-medium fs-18">Cardtitle</span>
              </div>
            </div>
            <div class="card-body">
              cardbody
            </div>
          </div>
          <!-- // card -->
        </section>
      </div>
      <!-- // content-body -->
      <!-- content-footer -->
      <div class="content-footer">
        content-footer <!-- 해당 영역 없을 경우 삭제 -->
      </div>
      <!-- // content-footer -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
