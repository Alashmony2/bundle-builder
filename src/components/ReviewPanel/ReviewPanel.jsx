import {
  REVIEW_CATEGORIES,
  REVIEW_HEADER,
  REVIEW_SHIPPING,
  REVIEW_SUMMARY,
} from '../../data/reviewData'
import ReviewCategory from './ReviewCategory'
import ReviewItem from './ReviewItem'
import SummarySection from './SummarySection'
import useBuilder from '../../hooks/useBuilder'

export default function ReviewPanel() {
  const { products, summary } = useBuilder()
  const cameraCategory = {
    id: 'cameras',
    label: 'Cameras',
    items: products
      .filter((product) => {
        if (product.colors.length > 0) {
          return product.colors.some((color) => color.quantity > 0)
        }

        return product.quantity > 0
      })
      .flatMap((product) => {
        if (product.colors.length > 0) {
          return product.colors
            .map((color, index) => ({ color, index }))
            .filter(({ color }) => color.quantity > 0)
            .map(({ color, index }) => ({
              id: product.id,
              colorIndex: index,
              name: product.name,
              subtitle: color.label,
              image: product.image,
              quantity: color.quantity,
              price: (Number(product.price) * color.quantity).toFixed(2),
              originalPrice: product.originalPrice
                ? (Number(product.originalPrice) * color.quantity).toFixed(2)
                : null,
            }))
        }

        return {
          id: product.id,
          name: product.name,
          image: product.image,
          quantity: product.quantity,
          price: (Number(product.price) * product.quantity).toFixed(2),
          originalPrice: product.originalPrice
            ? (Number(product.originalPrice) * product.quantity).toFixed(2)
            : null,
        }
      }),
  }
  return (
    <section className="w-full rounded-[10px] border border-[#c8d9eb] bg-[#edf4ff] p-[15px] lg:w-[399px] lg:shrink-0 lg:sticky lg:top-8 lg:self-start">
      <div className="flex flex-col gap-20 md:flex-row lg:flex-col">
        {/* Left Section */}
        <div className="min-w-0 flex-1">
          <header className="mb-5">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
              {REVIEW_HEADER.label}
            </p>

            <h2 className="mb-1 text-xl font-bold text-slate-900">
              {REVIEW_HEADER.title}
            </h2>

            <p className="text-xs leading-relaxed text-slate-500">
              {REVIEW_HEADER.description}
            </p>
          </header>

          {[cameraCategory, ...REVIEW_CATEGORIES.filter(c => c.id !== 'cameras')].map(
            (category) => (
              <ReviewCategory
                key={category.id}
                label={category.label}
                items={category.items}
              />
            )
          )}

          <div className="border-t border-[#d6e4f5] pt-2">
            <ReviewItem {...REVIEW_SHIPPING} variant="shipping" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[300px] md:shrink-0 lg:w-full">
          <SummarySection
            returnsText={REVIEW_SUMMARY.returnsText}
            financingLabel={REVIEW_SUMMARY.financingLabel}
            originalTotal={summary.originalTotal.toFixed(2)}
            total={summary.total.toFixed(2)}
            savingsMessage={`Congrats! You're saving $${summary.savings.toFixed(
              2
            )} on your security bundle!`}
          />
        </div>
      </div>
    </section>
  )
}