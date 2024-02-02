import { Separator } from '@/app/_modules/components/ui/separator'

export default function Page() {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Create new video</h3>
        <p className="text-sm text-muted-foreground">
          Start a new video by adding a title and description.
        </p>
      </div>
      <Separator className="mb-6" />
    </>
  )
}
