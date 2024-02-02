import { createChannel } from '../_lib/channel-actions'
import EditChannelForm from '../_lib/channel-form'
import { Separator } from '@/app/_modules/components/ui/separator'

export default function Page() {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Create new channel</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator className="mb-6" />
      {/* <NewChannelForm
        handleSubmit={createChannel}
        redirectUrl="/dashboard/channel"
      /> */}
      <EditChannelForm
        handleSubmit={createChannel}
        redirectUrl="/dashboard/channel"
        cancelUrl="/dashboard/channel"
      />
    </>
  )
}
