import LoadingSkeleton from '@/components/molecule/loading-skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingSkeleton></LoadingSkeleton>
    </div>
  )
}
