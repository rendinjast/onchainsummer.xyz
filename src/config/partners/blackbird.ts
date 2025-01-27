import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const blackbird: Partner = {
  slug: 'blackbird',
  name: 'Blackbird',
  url: 'https://www.blackbird.xyz/',
  description:
    'Join the Blackbird community to get access to sweet treats at your favorite restaurants with onchain rewards.',
  brandColor: '#000000',
  icon: '/partners/blackbird/icon.png',
  banner: '/partners/blackbird/banner-icon.svg',
  aarweaveDigest: 'D-InXuDVczYGgpI82Ivudt1i7LIw_N3BJ3xC719Flwo',
  twitter: '@blackbird_xyz',
  drops: [
    {
      image:
        '/partners/blackbird/drops/Blackbird-Summer-Pass-Summertime-Sweet.png',
      creator: '0x27193862848d9009ab6d01941ceb9fc86b17ab27',
      name: 'Blackbird Summer Pass: Summertime Sweet',
      externalLink: 'blackbird.xyz/summerpass',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.014',
      description:
        "With Blackbird's Summertime Sweet pass, in addition to earning 1,000 $FLY bonus on your next check-in, holders will also receive a complimentary sweet surprise at select Blackbird restaurants (from 8/15-8/22) and access to a private Discord channel for pre-sale access to NFT drops, new products and more.",
      // TODO: update address
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image:
        '/partners/blackbird/drops/Blackbird-Summer-Pass-Supercharge-Summer.png',
      creator: '0x27193862848d9009ab6d01941ceb9fc86b17ab27',
      name: 'Blackbird Summer Pass: Supercharge Summer',
      externalLink: 'blackbird.xyz/summerpass',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 15, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.0011',
      description:
        "With Blackbird's Supercharge Summer pass, you will get a 1,000 $FLY bonus on your next restaurant check-in.",
      // TODO: update address
      address: '0x0',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default blackbird
