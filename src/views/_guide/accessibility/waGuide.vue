<template>
  <div class="page-body">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>모바일 애플리케이션 접근성 지침</h3>
          <ul class="list-dot">
            <li>모바일 애플리케이션 접근성 지침은「국가정보화기본법」제32조제5항에 따라 모바일애플리케이션 서비스 제공자가 장애인과 고령자 등의 접근성을 보장하기 위해 애플리케이션 제작 시 지켜야 할 사항을 규정함을 목적으로 제정되었습니다.</li>
          </ul>
          <table
            class="table"
            caption="모바일 애플리케이션 접근성 지침"
          >
            <thead>
              <tr>
                <th scope="col">
                  구분
                </th>
                <th scope="col">
                  검사 항목
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  rowspan="7"
                >
                  준수사항
                </td>
                <td>1. (대체텍스트) 텍스트 아닌 콘텐츠는 대체 가능한 텍스트와 함께 제공되어야 한다.</td>
              </tr>
              <tr>
                <td>2. (초점) 모든 객체에는 초점(focus)이 적용되고, 초점은 순차적으로 이동되어야 한다.</td>
              </tr>
              <tr>
                <td>3. (운영체제 접근성 기능 지원) 운영체제가 제공하는 접근성 기능 및 속성이 사용되어야 한다.</td>
              </tr>
              <tr>
                <td>4. (누르기 동작지원) 터치 기반 모바일 기기의 모든 컨트롤은 누르기 동작으로 제어할 수 있어야 한다.</td>
              </tr>
              <tr>
                <td>5. (색에 무관한 인식) 화면에 표시되는 모든 정보는 색에 관계없이 인식할 수 있어야 한다.</td>
              </tr>
              <tr>
                <td>6. (명도 대비) 화면에 표시되는 모든 정보는 전경색과 배경색이 구분될 수 있도록 최소 대비 이상으로 제공되어야 한다.</td>
              </tr>
              <tr>
                <td>7. (자막, 수화 등 제공) 멀티미디어 콘텐츠에는 동등한 내용의 자막, 원고 또는 수화가 제공되어야 한다.</td>
              </tr>
              <tr>
                <td
                  scope="row"
                  rowspan="8"
                >
                  권고사항
                </td>
                <td>8. (기본 사용자 인터페이스 컴포넌트) 운영체제에서 제공하는 기본 사용자 인터페이스 컴포넌트(Native UI Component)를 최대한 이용하는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>9. (컨트롤간 충분한 간격) 컨트롤은 충분한 간격으로 배치하는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>10. (알림 기능) 사용자에게 알림을 제공할 때에는 진동, 시각, 소리 등 최대한 다양한 방법으로 사용자가 선택할 수 있도록 제공하는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>11. (범용 폰트 이용) 폰트의 크기 조절, 확대 기능을 제공하거나 운영체제에서 제공하는 관련 기능을 활용할 수 있는 방법을 제공하는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>12. (사용자 인터페이스의 일관성) 사용자 인터페이스 요소들의 배치를 일관성 있게 제공하는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>13. (깜박거림의 사용 제한) 광과민성 발작을 일으킬 수 있는 콘텐츠를 제공하지 않는 것이 바람직히다.</td>
              </tr>
              <tr>
                <td>14. (배경음 사용 금지) 자동으로 재생되는 배경음을 사용하지 않는 것이 바람직하다.</td>
              </tr>
              <tr>
                <td>15. (장애인 등 사용자 평가) 애플리케이션 개발 시 다양한 모바일 기기에서의 이용 가능 여부를 점검해야 하며, 장애인 사용자 평가를 수행하는 것이 바람직하다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'rule-code',
  components: {},
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })
  }
})
</script>
