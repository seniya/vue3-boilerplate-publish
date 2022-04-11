import job00Common from '@/utils/jobs/job.00.common'
import job01Main from '@/utils/jobs/job.01.main'
import job02MyAssets from '@/utils/jobs/job.02.myAssets'
import job03MyConsumption from '@/utils/jobs/job.03.myConsumption'
import job04FinCalendar from '@/utils/jobs/job.04.finCalendar'
import job05MyTarget from '@/utils/jobs/job.05.myTarget'
import job06CustomInvestment from '@/utils/jobs/job.06.customInvestment'
import job07TaxSaving from '@/utils/jobs/job.07.taxSaving'
import job08RobotAdvise from '@/utils/jobs/job.08.robotAdvise'
import job09Survey from '@/utils/jobs/job.09.survey'

const tabData = [
  {
    name: '공통서비스',
    value: '00',
    item: job00Common
  },
  {
    name: '메인화면',
    value: '01',
    item: job01Main
  },
  {
    name: 'My 자산',
    value: '02',
    item: job02MyAssets
  },
  {
    name: 'My 소비',
    value: '03',
    item: job03MyConsumption
  },
  {
    name: '금융캘린더',
    value: '04',
    item: job04FinCalendar
  },
  {
    name: 'My 목표',
    value: '05',
    item: job05MyTarget
  },
  {
    name: '맞춤형투자백서',
    value: '06',
    item: job06CustomInvestment
  },
  {
    name: '절세꿀팁',
    value: '07',
    item: job07TaxSaving
  },
  {
    name: '로보어드바이저',
    value: '08',
    item: job08RobotAdvise
  },
  {
    name: 'survey',
    value: '09',
    item: job09Survey
  }
]

export default tabData
