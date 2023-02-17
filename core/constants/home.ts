import { Award } from '../types/Award'

import badge from '../../public/photos/awards/badge.svg'
import clucth from '../../public/photos/awards/clutch.svg'
import web from '../../public/photos/awards/web.svg'
import goodfirms from '../../public/photos/awards/goodfirms.svg'
import ui from '../../public/photos/awards/ui-ux.svg'
import clutchTwo from '../../public/photos/awards/clutch-2019.svg'
import manifest from '../../public/photos/awards/manifest.svg'
import mobile from '../../public/photos/awards/mobile.svg'

export const allAwards: Award[] = [
  {
    id: 1,
    image: badge,
    alt: 'badge',
  },
  {
    id: 2,
    image: clucth,
    alt: 'clutch',
  },
  {
    id: 3,
    image: web,
    alt: 'web',
  },
  {
    id: 4,
    image: goodfirms,
    alt: 'badge',
  },
  {
    id: 5,
    image: ui,
    alt: 'ui',
  },
  {
    id: 6,
    image: clutchTwo,
    alt: 'clutchTwo',
  },
  {
    id: 7,
    image: manifest,
    alt: 'manifest',
  },
  {
    id: 8,
    image: mobile,
    alt: 'mobile',
  },
]
