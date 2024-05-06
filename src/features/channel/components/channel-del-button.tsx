'use client'

import { deleteChannel } from '../api/channel-actions'
import DelButton from './del-button'

export default function ChannelDelButton({ channelId }: { channelId: string }) {
  return (
    <DelButton
      action={async () => {
        return await deleteChannel(channelId)
      }}></DelButton>
  )
}
