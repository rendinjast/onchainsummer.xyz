'use client'

import { FC } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { ConnectDialog } from '../ConnectDialog'
import { MintDialog } from '../MintDialog'
import { MintDialogContextType } from '../MintDialog/Context/Context'
import { useValidate } from './useValidate'
import { Button } from '../Button'
import { Loading } from '../icons/Loading'

interface MintButtonProps extends MintDialogContextType {}

export const MintButton: FC<MintButtonProps> = ({ ...mintProps }) => {
  const walletAddress = useAddress()
  const { valid, message, isValidating } = useValidate(mintProps.address)

  if (!walletAddress) {
    return <ConnectDialog />
  }

  if (isValidating) {
    return (
      <Button disabled>
        <span className="sr-only">Loading</span>
        <Loading
          className="animate-spin"
          color="white"
          height={24}
          width={24}
        />
      </Button>
    )
  }

  if (!valid) {
    return <Button disabled>{message}</Button>
  }

  return <MintDialog {...mintProps} />
}