import { retrieveChannel, updateChannel } from '../../_lib/channel-actions'
import EditChannelForm from '../../_lib/channel-form'
import ServerError from '@/app/_modules/components/server/server-error'
import { Separator } from '@/app/_modules/components/ui/separator'
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {
  const response = await retrieveChannel(params.id)

  if (response.status === 'failure') {
    return <ServerError message={response.message} />
  }

  const { data } = response

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
      <EditChannelForm
        formData={data}
        handleSubmit={updateChannel}
        redirectUrl="/dashboard/channel"
        cancelUrl="/dashboard/channel"
      />
    </>
  )
}
