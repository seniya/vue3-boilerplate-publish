<template>
  <div class="guide-wrap">
    <!-- header -->
    <header class="guide-header">
      <div class="brand">
        <h1 class="logo">
          <router-link to="/">
            UI GUIDE
          </router-link>
        </h1>
      </div>
      <div class="guide-header-nav">
        <ul class="guide-header-nav-menu">
          <li
            v-for="(item, index) in navMenuItems"
            :key="index"
          >
            <a @click="navMenuItemClick(index)">
              {{ item.navMenuTitle }}
            </a>
          </li>
        </ul>
        <button
          class="btn-guide"
          @click="$router.push('/')"
        >
          MYDATA
        </button>
      </div>
    </header>
    <!-- header //-->
    <div class="guide-container">
      <!-- aside -->
      <aside class="guide-aside">
        <h2 class="guide-nav-title">
          {{ navMenuTitle }}
        </h2>
        <nav class="guide-aside-nav">
          <ul class="guide-aside-nav-menu">
            <li
              v-for="(item, index) in asideItems"
              :key="index"
              class="menu-item"
              @click="subMenuItemClick(index)"
            >
              <router-link :to="item.subNavUrl">
                {{ item.subNavMenu }}
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <aside
        class="guide-aside-mo"
        :class="[active? 'active':'']"
      >
        <uu-accordion>
          <uu-accordionitem
            v-for="(item, index) in navMenuItems"
            :key="index"
            :active="item.active"
          >
            <template v-slot:accordion-header>
              <div>
                <!-- <span class="title">{{ item.navMenuTitle }}</span> -->

                <router-link to="">
                  {{ item.navMenuTitle }}
                </router-link>
              </div>
            </template>
            <template v-slot:accordion-content>
              <ul class="guide-aside-nav">
                <li
                  v-for="(sub, i) in item.asideItems"
                  :key="i"
                  class="guide-aside-nav-menu"
                >
                  <router-link
                    :to="sub.subNavUrl"
                  >
                    {{ sub.subNavMenu }}
                  </router-link>
                </li>
              </ul>
            </template>
          </uu-accordionitem>
        </uu-accordion>
      </aside>
      <!-- aside //-->
      <!-- -->
      <div class="page-container">
        <div class="page-header">
          <h2 class="page-title">
            {{ pageTitle }}
          </h2>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="navMenuLink">
                {{ navMenuTitle }}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import accordion from '@/components/uu-components/Accordion.vue'
import accordionitem from '@/components/uu-components/AccordionItem.vue'

const navMenuItems = [
  {
    navMenuTitle: 'Rule',
    link: '/convention',
    asideItems: [
      { subNavMenu: '기본정책', subNavUrl: '/convention/rule-intro' },
      { subNavMenu: '표준규칙', subNavUrl: '/convention/rule-standard' },
      { subNavMenu: '코드규칙', subNavUrl: '/convention/rule-code' },
      { subNavMenu: '네임규칙', subNavUrl: '/convention/rule-name' }
    ]
  },
  {
    navMenuTitle: 'General',
    link: '/plan',
    asideItems: [
      { subNavMenu: 'Layout', subNavUrl: '/plan/plan-layout' },
      { subNavMenu: 'General', subNavUrl: '/plan/plan-general' }
    ]
  },
  {
    navMenuTitle: 'Accessibility',
    link: '/accessibility',
    asideItems: [
      { subNavMenu: '접근성 개요', subNavUrl: '/accessibility/wa-index' },
      { subNavMenu: '접근성 지침 ', subNavUrl: '/accessibility/wa-guide' },
      { subNavMenu: 'WAI-ARIA', subNavUrl: '/accessibility/wa-wai' }
    ]
  },
  {
    navMenuTitle: 'Components',
    link: '/basic-libs',
    asideItems: [
      { subNavMenu: 'Button', subNavUrl: '/basic-libs/libsButton' },
      { subNavMenu: 'ButtonText', subNavUrl: '/basic-libs/libsButtonText' },
      { subNavMenu: 'Checkbox', subNavUrl: '/basic-libs/libsCheckbox' },
      { subNavMenu: 'Radio', subNavUrl: '/basic-libs/libsRadio' },
      { subNavMenu: 'Input', subNavUrl: '/basic-libs/libsInput' },
      { subNavMenu: 'Loader', subNavUrl: '/basic-libs/libsLoader' },
      { subNavMenu: 'Card', subNavUrl: '/basic-libs/libsCard' }
    ]
  },
  {
    navMenuTitle: 'UU',
    link: '/uu-libs',
    asideItems: [
      { subNavMenu: 'Accordion', subNavUrl: '/uu-libs/uuLibsAccordion' },
      { subNavMenu: 'Bubble', subNavUrl: '/uu-libs/uuLibsBubble' },
      { subNavMenu: 'Dropdown', subNavUrl: '/uu-libs/uuLibsDropdown' },
      { subNavMenu: 'Icon', subNavUrl: '/uu-libs/uuLibsIcon' },
      { subNavMenu: 'Modal', subNavUrl: '/uu-libs/uuLibsModal' },
      { subNavMenu: 'Stepper', subNavUrl: '/uu-libs/uuLibsStepper' },
      { subNavMenu: 'Swiper', subNavUrl: '/uu-libs/uuLibsSwiper' },
      { subNavMenu: 'Tab', subNavUrl: '/uu-libs/uuLibsTab' },
      { subNavMenu: 'Toast', subNavUrl: '/uu-libs/uuLibsToast' },
      { subNavMenu: 'Toggle', subNavUrl: '/uu-libs/uuLibsToggle' },
      { subNavMenu: 'ToggleText', subNavUrl: '/uu-libs/uuLibsToggleText' },
      { subNavMenu: 'Tooltip', subNavUrl: '/uu-libs/uuLibsTooltip' }
    ]
  },
  {
    navMenuTitle: 'UI',
    link: '/ui-libs',
    asideItems: [
      { subNavMenu: 'Banner', subNavUrl: '/ui-libs/banner' },
      { subNavMenu: 'datePicker(Modal)', subNavUrl: '/ui-libs/datepicker' },
      { subNavMenu: 'Div Area', subNavUrl: '/ui-libs/divarea' },
      { subNavMenu: 'Graph', subNavUrl: '/ui-libs/graph' },
      { subNavMenu: 'List', subNavUrl: '/ui-libs/list' },
      { subNavMenu: '- Line List', subNavUrl: '/ui-libs/linelist' },
      { subNavMenu: '- Table List', subNavUrl: '/ui-libs/tablelist' },
      { subNavMenu: '- Box List', subNavUrl: '/ui-libs/boxlist' },
      { subNavMenu: 'Terms', subNavUrl: '/ui-libs/terms' },
      { subNavMenu: '- Terms Rating', subNavUrl: '/ui-libs/termsRating' }
    ]
  },
  {
    navMenuTitle: 'Library',
    link: '/libs',
    asideItems: [
      { subNavMenu: 'Swiper', subNavUrl: '/libs/swiper' },
      { subNavMenu: 'A11y', subNavUrl: '/libs/vuea11y' },
      { subNavMenu: 'InfiniteScroll', subNavUrl: '/libs/infinitescroll' },
      { subNavMenu: 'ScrollPicker', subNavUrl: '/libs/scrollpicker' },
      { subNavMenu: 'Tab', subNavUrl: '/libs/tab' },
      { subNavMenu: 'HighCharts', subNavUrl: '/libs/highcharts' }
    ]
  }
]

export default defineComponent({
  name: 'guide-container',
  components: {
    'uu-accordion': accordion,
    'uu-accordionitem': accordionitem
  },
  setup () {
    const router = useRouter()
    const route = useRoute()

    const state = reactive({
      navMenuItems,
      navIndex: 0,
      subNavIndex: 0,
      active: false
    })

    const asideItems = computed(() => {
      return navMenuItems[state.navIndex].asideItems
    })
    const navMenuLink = computed(() => {
      return navMenuItems[state.navIndex].link
    })
    const pageTitle = computed(() => {
      return asideItems.value[state.subNavIndex].subNavMenu
    })
    const navMenuTitle = computed(() => {
      return navMenuItems[state.navIndex].navMenuTitle
    })

    function navMenuItemClick (selectedIndexNav: number) {
      state.navIndex = selectedIndexNav
      state.subNavIndex = 0
      router.push({ path: navMenuLink.value })
    }

    function subMenuItemClick (selectedIndexAside: number) {
      state.subNavIndex = selectedIndexAside
    }

    function toggleNav () {
      state.active = !state.active
      if (state.active) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    function asideNav () {
      state.active = !state.active
      document.body.style.overflow = ''
    }

    onMounted(() => {
      console.log(route.path)
      state.navIndex = navMenuItems.findIndex((item) =>
        route.path.includes(item.link)
      )
      state.subNavIndex = navMenuItems[
        state.navIndex
      ].asideItems.findIndex((item) => route.path.includes(item.subNavUrl))
    })

    return {
      asideItems,
      navMenuLink,
      pageTitle,
      navMenuTitle,
      navMenuItemClick,
      subMenuItemClick,
      toggleNav,
      asideNav,
      ...toRefs(state)
    }
  }
})

</script>
