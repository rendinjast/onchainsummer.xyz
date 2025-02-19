import { Partner } from './types'
import { unlimited } from '../test-contracts'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'

const nestcoin: Partner = {
  slug: 'onboard',
  name: 'Onboard',
  url: 'https://nestcoin.com/',
  description:
    'Support the democratization of access to economic opportunity with Onboard by minting art and music "from Africa, with love."',
  brandColor: '#000000',
  icon: '/partners/nestcoin/icon.png',
  banner: '/partners/nestcoin/banner-icon.svg',
  aarweaveDigest: 'isGtzFoGSsXNZl42Xt3SnNM9BoDOo_QrJ6F6mJNB2JA',
  twitter: '@nestcoin',
  drops: [
    {
      image: '',
      creator: '',
      name: '',
      ...unlimited,
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 23, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 24, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0001',
    },
  ],
}

export default nestcoin
