<template>
  <header
    id="header"
    class="header"
    :class="[colorWhite? 'white':'',colorGray? 'gray':'', textOverflow? 'text-overflow':'', show? 'd-flex':'']"
  >
    <h1
      :class="titleLeft? 'text-left':''"
    >
      <span
        v-if="hideTitle"
        class="sr-only"
      >페이지 타이틀</span>
      <slot
        v-else
        name="header"
      >
        {{ title }}
      </slot>
    </h1>
    <div
      v-if="back"
      class="left"
    >
      <button
        class="gnb"
        @click="$emit('back')"
      >
        <uu-icon
          icon="arrow2"
          size="24"
          direction="left"
          :color="colorWhite? 'white':''"
        >
          <span class="sr-only">이전</span>
        </uu-icon>
      </button>
    </div>
    <div class="right">
      <button
        v-if="search"
        class="gnb"
        @click="$emit('search')"
      >
        <uu-icon
          icon="search"
          size="24"
        >
          <span class="sr-only">검색</span>
        </uu-icon>
      </button>
      <button
        v-if="drawer"
        class="gnb"
        @click="$emit('drawer')"
      >
        <uu-icon
          icon="menu"
          size="24"
        >
          <span class="sr-only">메뉴</span>
        </uu-icon>
      </button>
      <button
        v-if="close"
        class="gnb"
        @click="$emit('close')"
      >
        <uu-icon
          icon="close"
          size="24"
          :color="colorWhite? 'white':''"
        >
          <span class="sr-only">닫기</span>
        </uu-icon>
      </button>
      <button
        v-if="bookmark"
        class="gnb"
        @click="$emit('bookmark')"
      >
        <uu-icon
          icon="bookmark2"
          size="24"
          :active="active"
        >
          <span class="sr-only">북마크</span>
        </uu-icon>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    close: {
      type: Boolean,
      default: false
    },
    titleLeft: {
      type: Boolean,
      default: false
    },
    colorWhite: {
      type: Boolean,
      default: false
    },
    colorGray: {
      type: Boolean,
      default: false
    },
    textOverflow: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    bookmark: {
      type: Boolean,
      default: false
    },
    active: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .header {
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 100%;
    height: 5.6rem;
    padding: 0 1.9rem 0 2.2rem;
    text-align: center;
    background-color: $white;
    &.white {
      background-color: transparent;
      h1 {
        color: $white;
      }
    }
    &.gray {
      background-color: $bgLightGray;
    }
    &.text-overflow {
      h1 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 1.2rem;
      }
      .left {
        position: static;
      }
      .right {
        position: static;
      }
    }
    h1 {
      flex: 1;
      padding-top: .4rem;
      @include fontHeight2(1.8);
      font-weight: $fontMedium;
      color: $black;
    }
    .left {
      position: absolute;
      left: 2.2rem;
      order: -1;
    }
    .right {
      position: absolute;
      right: 1.9rem;
    }
    .gnb {
      &.hide > * {
        display: none;
      }
      + .gnb {
        margin-left: 1.2rem;
      }
    }
    // +.content {
    //   padding-top: 5.6rem;
    // }
  }
</style>
