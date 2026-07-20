import ReviewItem from './ReviewItem'

export default function ReviewCategory({ label, items }) {
  return (
    <section className="mb-4">
      <h3 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </h3>

      <div className="divide-y divide-[#d6e4f5]">
        {items.map((item) => (
          <ReviewItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
