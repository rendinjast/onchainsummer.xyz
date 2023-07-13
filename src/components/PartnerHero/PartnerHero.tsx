import { Partner } from '@/config/partners/types'
import Image from 'next/image'
import { FC } from 'react'

interface PartnerHeroProps {
  partner: Partner
}

import { Separator } from '../Separator'
import { MintButton } from '../MintButton/MintButton'
import { Button } from '../Button'
import { AddressPill } from '../AddressPill'
import { Countdown } from '@/components/Countdown'

export const PartnerHero: FC<PartnerHeroProps> = ({
  partner: { brandColor, name, description, iconInverse, drop, icon },
}) => {
  return (
    <section className="grid p-5 md:py-6 md:px-10 rounded-3xl md:rounded-[32px] bg-white shadow-large w-full md:grid-cols-[5fr,7fr] gap-5 md:gap-10">
      <div className="relative w-full aspect-[287/212] mb-1 lg:mb-0 order-1 md:order-2">
        <Image
          src={drop.image}
          alt={drop.name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full gap-4 h-full overflow-scroll order-2 md:order-1 md:gap-8">
        <div className="flex gap-2 md:mt-6">
          <div className="relative h-6 w-6">
            <Image src={icon} alt={`${name} Icon`} fill />
          </div>
          <span className="font-medium">{name}</span>
        </div>
        <h1 className="text-[32px] leading-none font-display md:text-[46px]">
          {drop.name}
        </h1>
        <AddressPill address={drop.creator} />
        <div className="flex flex-col w-full gap-4 mt-auto">
          <p className="md:hidden">{drop.description}</p>
          <Separator className="bg-ocs-red mt-4" />
          <Countdown
            title="Ends"
            completedText="Drop Ended"
            date={drop.endDate}
            className="text-ocs-red"
          />
          {drop.externalLink ? (
            <Button href={drop.externalLink}>Mint {drop.price} ETH</Button>
          ) : (
            <MintButton
              address={drop.address}
              crossMintClientId={drop.crossMintClientId}
              price={drop.price}
              partnerIcon={icon}
              partnerName={name}
              dropImage={drop.image}
              dropName={drop.name}
              dropEndTime={drop.endDate}
              creatorAddress={drop.creator}
            />
          )}
        </div>
      </div>
    </section>
  )
}