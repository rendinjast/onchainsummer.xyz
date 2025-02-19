import Image from 'next/image'
import { FC } from 'react'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { NFTAsset } from '@/components/NFTAsset'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { dropImage, dropName } = useMintDialogContext()
  return (
    <div className="relative grid gap-4 lg:grid-cols-2 lg:gap-16 h-full">
      <div className="relative z-20 w-full aspect-video lg:aspect-square mb-1 lg:mb-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <NFTAsset
          source={dropImage}
          name={dropName}
          className="object-cover object-top rounded-lg md:rounded-[20px] absolute inset-0 h-full w-full"
        />
      </div>
      <div className="flex flex-col w-full gap-4 h-full overflow-scroll hide-scrollbar">
        {children}
      </div>
    </div>
  )
}
