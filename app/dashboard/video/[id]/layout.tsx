import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video',
  description: 'Video detail page'
}

export default async function VideoLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="w-full">
        <h3>this is video layout part</h3>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}
