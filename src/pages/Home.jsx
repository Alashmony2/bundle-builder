import Builder from '../components/Builder/Builder'
import ReviewPanel from '../components/ReviewPanel/ReviewPanel'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f4f8] px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 lg:flex-row lg:items-start">
        <Builder />
        <ReviewPanel />
      </div>
    </main>
  )
}
