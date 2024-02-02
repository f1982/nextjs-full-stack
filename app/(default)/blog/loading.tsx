import LoadingSkeleton from '@/app/_modules/components/loading-skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingSkeleton></LoadingSkeleton>
    </div>
  )
}
