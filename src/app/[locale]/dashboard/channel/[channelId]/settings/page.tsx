import { Separator } from '@/components/ui/separator'
import ChannelInfoForm from '@/features/channel/components/channel-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: { channelId: string }
}) {
  return (
    <>
      <div className="mb-6">
        <Link className="hover:underline" href={'/dashboard/channel'}>
          Back to channel list
        </Link>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Edit channel</h3>
        <p className="text-sm text-muted-foreground">
          Update your channel settings.
        </p>
      </div>
      <Separator className="mb-6" />
      <ChannelInfoForm channelId={params.channelId} />
    </>
  )
}
