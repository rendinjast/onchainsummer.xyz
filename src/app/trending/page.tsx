'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { CollectionPlaceholder } from '@/components/CollectionPlaceholder'
import { useQuery } from 'react-query'
import { MintDotFunMinter } from '@/components/MintDotFunMinter/MintDotFunMinter'
import { useAddress } from '@thirdweb-dev/react'
import { formatEther } from 'viem'
import { ThirdWeb } from '@/components/icons/ThirdWeb'
import { Zora } from '@/components/icons/Zora'
import { Manifold } from '@/components/icons/Manifold'
import { MintDotFun } from '@/components/icons/MintDotFun'
import { UpArrow } from '@/components/icons/UpArrow'

interface Mint {
  imageURI: string
}

interface Collection {
  name: string
  contract: string
  mintsLastHour: number
  recentMints: Mint[]
  externalURL: string
  deployer: string
  mintStatus: {
    price: string
    isMintable: boolean
    tx: {
      data: string
      quantity: string
      to: `0x${string}`
      tokenId: string
      value: string
    }
  }
}

interface QueryResult {
  collections: Collection[]
}

async function fetchData(connectedWallet: string) {
  const res = await fetch(`/api/trending?connectedWallet=${connectedWallet}`)

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return data
}

const VISIBLE_NFTS = {
  mobile: 2,
  sm: 7,
  md: 10,
}

export default function Trending() {
  const connectedWallet = useAddress()

  const { data, error, isLoading } = useQuery<QueryResult>({
    queryKey: ['trending', connectedWallet],
    queryFn: ({ queryKey }) => fetchData(queryKey[1] as string),
  })

  const collections = data?.collections

  return (
    <main className="mx-6 mt-12">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex items-start md:justify-between flex-col md:flex-row md:items-center w-full">
          <div className="basis-1/2">
            <UpArrow />
            <h1 className="text-[32px] md:text-[40px] md:leading-[50px] my-6">
              Trending
            </h1>
            <p className="text-sm md:text-xl my-2 font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <div className="flex items-center">
              <p className="text-xl text-[#010101] opacity-50 mr-3 font-mono uppercase my-2">
                Powered by{' '}
              </p>
              <MintDotFun />
              <span className="sr-only">mint.fun</span>
            </div>
          </div>
          <div className="basis-1/2 flex justify-end">
            <div>
              <p className="text-neutral-800 text-sm mb-4 font-mono">
                Create on Base.
              </p>

              <div className="flex gap-1 sm:gap-2 lg:gap-7">
                <a
                  href="https://thirdweb.com/thirdweb.eth/OpenEditionERC721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square"
                >
                  <ThirdWeb />
                  <span className="sr-only">ThirdWeb</span>
                </a>
                <a
                  href="https://zora.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square"
                >
                  <Zora />
                  <span className="sr-only">Zora</span>
                </a>
                <a
                  href="https://studio.manifold.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square"
                >
                  <Manifold />
                  <span className="sr-only">Manifold</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 md:p-6 mt-8 mb-32 bg-gray-200/80 rounded-2xl">
          {isLoading
            ? Array.from({ length: 5 }, (_, index) => (
                <CollectionPlaceholder key={index} />
              ))
            : collections?.map(
                (
                  {
                    name,
                    deployer,
                    mintsLastHour,
                    recentMints,
                    mintStatus,
                    externalURL,
                  },
                  idx
                ) => (
                  <div
                    key={idx}
                    className="w-full mb-6 last:mb-0 bg-white rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap">
                      <div className="flex flex-row flex-wrap lg:basis-[55%] order-1 w-full">
                        <div className="flex flex-wrap md:flex-nowrap basis-full md:mb-3 overflow-hidden">
                          <div className="flex items-center w-full md:w-auto">
                            <p className="text-neutral-400 mr-3 md:mr-[29px] text-mono md:text-lg">
                              #{idx + 1}
                            </p>
                          </div>
                          <h3 className="text-black text-[20px] md:text-2xl whitespace-normal overflow-hidden break-all">
                            {name}
                          </h3>
                        </div>
                        <div className="basis-full whitespace-normal overflow-hidden break-all">
                          <p className="text-[#858585] font-mono text-sm md:text-base lg:ml-[54px]">
                            {mintsLastHour} mints last hour •{' '}
                            {formatEther(BigInt(mintStatus.price))} ETH
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 lg:justify-end lg:basis-[45%] order-3 lg:order-2 w-full max-h-[50px]">
                        <MintDotFunMinter mintStatus={mintStatus} />
                        <Button
                          size="SMALL"
                          className="grow lg:grow-0 uppercase border border-1 border-black !bg-white"
                          variant="LIGHT"
                          href={externalURL}
                        >
                          View More
                        </Button>
                      </div>
                      <div className="flex gap-4 items-center order-2 lg:order-3 mt-5 mb-4 md:mt-8 lg:mb-0  lg:ml-12">
                        {recentMints.map(({ imageURI }, idx) => (
                          <div
                            key={idx}
                            className={`${
                              idx > VISIBLE_NFTS.mobile ? 'hidden' : 'block'
                            } sm:${
                              idx > VISIBLE_NFTS.sm ? 'hidden' : 'block'
                            } md:${
                              idx > VISIBLE_NFTS.md ? 'hidden' : 'block'
                            } lg:block`}
                          >
                            <Image
                              src={imageURI}
                              alt="Image Alt"
                              width={65}
                              height={65}
                              priority
                              className="rounded-xl"
                            />
                          </div>
                        ))}
                        {recentMints.length > 4 && (
                          <div className="flex items-center justify-center lg:hidden p-[2px] bg-trending-linear-gradient">
                            <div className="flex justify-center items-center h-[65px] w-[65px] bg-[#F5F5F5]">
                              <span className="sm:hidden">
                                +{recentMints.length - VISIBLE_NFTS.mobile - 1}
                              </span>
                              <span className="hidden sm:block md:hidden">
                                +{recentMints.length - VISIBLE_NFTS.sm - 1}
                              </span>
                              <span className="hidden md:block">
                                +{recentMints.length - VISIBLE_NFTS.md - 1}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>
      </section>
    </main>
  )
}