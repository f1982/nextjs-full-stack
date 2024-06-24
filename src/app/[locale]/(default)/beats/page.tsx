import dynamic from 'next/dynamic'

const LazyBeatsPlayer = dynamic(() => import('./_components/beats-player'), {
  loading: () => <p>Loading...</p>,
})

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <LazyBeatsPlayer />
      {/* <BeatsPlayer /> */}
    </div>
  )
}
