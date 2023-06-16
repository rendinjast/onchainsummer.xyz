import { FC } from 'react'
import { Card } from '../Card'
import Image from 'next/image'
import clsx from 'clsx'
import { Countdown } from '../Countdown'
import { Button } from '../Button'

type DropCardProps = {
  partnerIcon: string
  partner: string
  image: string
  href: string
  title: string
  endDate: number
  price: string
}

export const DropCard: FC<DropCardProps> = ({
  partnerIcon,
  image,
  partner,
  title,
  href,
  endDate,
  price,
}) => {
  return (
    <Card className="p-5 relative flex flex-col w-full gap-4 font-text">
      <div className="relative w-full aspect-[115/77]">
        <Image
          src={image}
          alt={`${title} from ${partner}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <a
        href={href}
        className="font-medium text-lg after:absolute after:inset-0"
      >
        {title}
      </a>
      <div className="flex gap-10 font-text">
        <div>
          <h4 className="text-xs text-neutral-900/50">Remaining Time</h4>
          <div className="flex gap-2 items-center font-medium">
            <div
              className={clsx('h-2 w-2 rounded-full', {
                'bg-timer-active': endDate > new Date().getTime(),
                'bg-red': endDate <= new Date().getTime(),
              })}
            />
            <div>
              <Countdown date={endDate} completedText={'Drop Ended'} />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs text-neutral-900/50">Price</h4>
          <div className="font-medium">{price} ETH</div>
        </div>
      </div>
      <Button tabIndex={-1}>Mint ({price} ETH)</Button>
    </Card>
  )
}
