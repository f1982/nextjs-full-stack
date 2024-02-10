import LoadingSkeleton from '@/components/molecule/loading-skeleton'

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <LoadingSkeleton></LoadingSkeleton>
    </div>
  )
}
