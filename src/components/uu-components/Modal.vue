<template>
  <div
    class="modal"
    role="dialog"
    :class="[type, inner? 'inner':'']"
    :aria-labelledby="randomString + 'Title'"
    :aria-describedby="randomString + 'Desc'"
  >
    <div class="modal-dialog">
      <div
        ref="modalContent"
        class="modal-content"
        :class="[isHideHeader? 'hide-header':'', hideFooter? 'hide-footer':'', close? 'close':'', btnHeader? 'btn-header':'', noScroll? 'no-scroll':'', floating? 'floating':'', bodyScroll? 'body-scroll':'']"
        tabindex="0"
      >
        <!-- modal-header -->
        <div v-if="btnHeader">
          <slot name="modal-header-btn">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span>확인</span>
            </button>
          </slot>
        </div>
        <slot
          v-if="!isHideHeader"
          name="native-header"
        />
        <div
          v-if="!isHideHeader"
          class="modal-header"
          :class="headerType2? 'header-type2':''"
        >
          <div class="modal-header-inner">
            <!-- back -->
            <button
              v-if="back"
              type="button"
              class="btn-header back"
              aria-label="이전"
              @click="closebtn"
            >
              <uu-icon
                icon="arrow2"
                size="24"
                direction="left"
              />
            </button>
            <!--// back -->
            <div
              v-if="divHeader"
              :id="randomString + 'Title'"
            >
              <slot name="modal-header">
                div-header
              </slot>
            </div>
            <h2
              v-else
              :id="randomString + 'Title'"
              class="modal-title"
              :class="titleLeft? 'text-left':''"
            >
              <span
                v-if="hideTitle"
                class="sr-only"
              >팝업 타이틀</span>
              <slot
                v-else
                name="modal-header"
              >
                <span>팝업 타이틀</span>
              </slot>
            </h2>
            <!-- modal-close -->
            <button
              v-if="!hideClose"
              type="button"
              class="btn-header close"
              aria-label="닫기"
              @click="closebtn"
            >
              <uu-icon
                icon="close"
                size="24"
              />
            </button>
            <!-- modal-close -->
          </div>
        </div>
        <!-- modal-header //-->
        <!-- modal-body -->
        <div
          :id="randomString + 'Desc'"
          class="modal-body"
        >
          <!-- modal-close -->
          <button
            v-if="close"
            type="button"
            class="btn-header close"
            aria-label="닫기"
            @click="closebtn"
          >
            <uu-icon
              icon="close"
              size="24"
            />
          </button>
          <!-- modal-close -->
          <slot name="modal-body">
            <h4>type</h4>
            <p>
              bottom || full || alert
            </p>
            <br>
            <h4>option</h4>
            <p>
              hideHeader(=isHideHeader)(해더x) || hideFooter(푸터x) || hideBackdrop(배경x) || hideClose(닫기버튼x) || titleLeft(타이틀왼쪽정렬) || inner(모달+모달)
              || back(이전버튼추가) || headerType2(예외케이스타입) || btn-header(bottom모달 header에 버튼유형) || divHeader(div해더) || noScroll(스크롤 없음) || floating(하단버튼플로팅) || bodyScroll(modal-body에 scroll)
              || scroll-floating(스크롤이 생기면 하단버튼플로팅)
            </p>
          </slot>
        </div>
        <!-- modal-body //-->
        <!-- modal-footer -->
        <div
          v-if="!hideFooter"
          class="modal-footer"
        >
          <slot
            v-if="type === 'full' || type === 'bottom'"
            name="modal-footer"
          >
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-primary"
                @click="okbtn"
              >
                <span>확인</span>
              </button>
            </div>
          </slot>
          <slot
            v-else
            name="modal-footer"
          >
            <button
              type="button"
              class="btn text-secondary"
              @click="closebtn"
            >
              <span>취소</span>
            </button>
            <button
              type="button"
              class="btn text-primary"
              @click="okbtn"
            >
              <span>확인</span>
            </button>
          </slot>
        </div>
        <!-- modal-footer //-->
      </div>
    </div>
    <div
      v-if="!hideBackdrop"
      class="modal-backdrop"
      aria-label="닫기"
      @click="closebtn"
    />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import uuIcon from '@/components/uu-components/Icon.vue'
export default defineComponent({
  components: {
    uuIcon
  },
  props: {
    showModal: Boolean,
    etarget: {
      type: Element,
      default: null
    },
    etargetinner: {
      type: Element,
      default: null
    },
    inner: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    },
    titleLeft: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    headerType2: {
      type: Boolean,
      default: false
    },
    btnHeader: {
      type: Boolean,
      default: false
    },
    divHeader: {
      type: Boolean,
      default: false
    },
    noScroll: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    },
    bodyScroll: {
      type: Boolean,
      default: false
    },
    scrollFloating: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    let scrollFloatingHeight = null
    let scrollInterval = null
    let overflowScroll = null
    let scrollY = null
    const modalContent = ref(null)

    const randomString = computed(() => {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      const stringLength = 15
      let randomstring = ''
      for (let i = 0; i < stringLength; i++) {
        const rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum, rnum + 1)
      }
      return randomstring
    })

    const isHideHeader = computed(() => props.btnHeader ? true : props.hideHeader)

    onMounted(() => {
      document.body.classList.add('modal-open')
      // backdrop
      const inner = document.querySelector('.inner')
      if (props.inner) {
        const backdrop = document.querySelectorAll('.modal-backdrop')
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].classList.add('hide')
        }
        if (props.type === 'bottom') {
          inner.nextElementSibling.classList.remove('hide')
        } else {
          document.querySelector('.inner .modal-backdrop').classList.remove('hide')
        }
      }
      if (props.type === 'full' && props.inner) {
        inner.nextElementSibling.classList.remove('hide')
      }
      // focus
      modalContent.value.focus()
      // hide-header

      // scroll
      scrollY = window.pageYOffset

      // scroll overflow-y
      overflowScroll = setInterval(() => {
        let modalFooter = 0
        let modalHeader = 0
        let modalHeight = document.querySelector('.modal-content').clientHeight
        let modalBodyHeight = document.querySelector('.modal-body').clientHeight
        let modalViewHeight = modalHeight - (modalFooter + modalHeader)
        if (!props.hideFooter) {
          modalFooter = document.querySelector('.modal-footer').clientHeight
          if (props.inner) {
            modalFooter = document.querySelector('.inner .modal-footer').clientHeight
          }
        }
        if (!isHideHeader.value) {
          modalHeader = document.querySelector('.modal-header').clientHeight
          if (props.inner) {
            modalHeader = document.querySelector('.inner .modal-header').clientHeight
          }
        }
        if (props.type === 'bottom' || props.type === 'alert' || props.type === 'full') {
          modalViewHeight = modalHeight - (modalFooter + modalHeader)
          if (modalViewHeight < modalBodyHeight) {
            document.querySelector('.modal-content').classList.add('overflow-y')
          }
        }
        if (props.inner) {
          modalHeight = document.querySelector('.inner .modal-content').clientHeight
          modalBodyHeight = document.querySelector('.inner .modal-body').clientHeight
          modalViewHeight = modalHeight - (modalFooter + modalHeader)
          if (modalViewHeight < modalBodyHeight) {
            document.querySelector('.inner .modal-content').classList.add('overflow-y')
          }
          const modalClass = document.querySelectorAll('.modal')
          for (let j = 0; j < modalClass.length; j++) {
            if (!modalClass[j].classList.contains('inner')) {
              if (modalClass[j].querySelector('.modal-content').classList.contains('overflow-y')) {
                modalClass[j].querySelector('.modal-content').classList.add('overflow-hidden')
              }
            }
          }
        }
      }, 100)

      // scroll floating
      if (props.scrollFloating) {
        scrollFloatingHeight = setInterval(() => {
          const modalBodyHeight = document.querySelector('.modal-body').clientHeight
          const modalHeight = document.querySelector('.modal').clientHeight
          if (modalBodyHeight >= modalHeight) {
            modalContent.value.classList.add('floating')
          } else {
            modalContent.value.classList.remove('floating')
          }
          if (props.inner) {
            const innerModalBodyHeight = document.querySelector('.inner .modal-body').clientHeight
            const innerModalHeight = document.querySelector('.inner .modal').clientHeight
            if (innerModalBodyHeight >= innerModalHeight) {
              document.querySelector('.inner .modal-content').add('floating')
            } else {
              document.querySelector('.inner .modal-content').remove('floating')
            }
          }
        }, 100)
      }
      // scroll gradient
      scrollInterval = setInterval(() => {
        let scrollTop
        if (props.type === 'bottom') {
          if (props.bodyScroll || props.floating || props.hideFooter) {
            scrollTop = document.querySelector('.modal-body').scrollTop
            if (scrollTop > 0) {
              document.querySelector('.modal-content').classList.add('scroll')
            } else {
              document.querySelector('.modal-content').classList.remove('scroll')
            }
          } else {
            scrollTop = document.querySelector('.modal-content').scrollTop
            if (scrollTop > 0) {
              modalContent.value.classList.add('scroll')
            } else {
              modalContent.value.classList.remove('scroll')
            }
          }
        }
        if (props.inner) {
          if (props.bodyScroll) {
            scrollTop = document.querySelector('.inner .modal-body').scrollTop
            if (scrollTop > 0) {
              document.querySelector('.inner .modal-content').classList.add('scroll')
            } else {
              document.querySelector('.inner .modal-content').classList.remove('scroll')
            }
          } else {
            scrollTop = document.querySelector('.inner .modal-content').scrollTop
            if (scrollTop > 0) {
              modalContent.value.classList.add('scroll')
            } else {
              modalContent.value.classList.remove('scroll')
            }
          }
        }
      }, 100)
    })

    onUnmounted(() => {
      clearInterval(overflowScroll)
      clearInterval(scrollInterval)
      if (!props.inner) {
        document.body.classList.remove('modal-open')
      }
      if (props.scrollFloating) {
        clearInterval(scrollFloatingHeight)
      }
      if (props.inner) {
        const backdrop = document.querySelectorAll('.modal-backdrop')
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].classList.remove('hide')
        }
        if (document.querySelector('.modal-content').classList.contains('overflow-hidden')) {
          document.querySelector('.modal-content').classList.remove('overflow-hidden')
        }
      }
      // scroll 원위치
      window.scrollTo(0, scrollY)
    })

    function closebtn () {
      emit('close', 'close')
      if (props.etargetinner != null) {
        props.etargetinner.focus()
      } else if (props.etarget != null) {
        props.etarget.focus()
      }
    }

    function okbtn () {
      emit('close', 'ok')
      if (props.etargetinner != null) {
        props.etargetinner.focus()
      } else if (props.etarget != null) {
        props.etarget.focus()
      }
    }

    return {
      modalContent,
      randomString,
      isHideHeader,
      closebtn,
      okbtn
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
