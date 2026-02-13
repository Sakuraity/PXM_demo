interface ProductSpecsProps {
  specifications?: Record<string, any>
  priceRange?: string
  moq?: number
}

export default function ProductSpecs({ specifications, priceRange, moq }: ProductSpecsProps) {
  const hasSpecs = specifications && Object.keys(specifications).length > 0
  
  if (!hasSpecs && !priceRange && !moq) {
    return (
      <div className="text-center py-8 text-secondary">
        <p>No specifications available.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 商务信息 */}
      {(priceRange || moq) && (
        <div className="grid grid-cols-2 gap-4 p-4 bg-accent/5 rounded-lg">
          {priceRange && (
            <div>
              <p className="text-sm text-secondary">Price Range</p>
              <p className="text-lg font-semibold text-primary">{priceRange}</p>
            </div>
          )}
          {moq && (
            <div>
              <p className="text-sm text-secondary">Minimum Order</p>
              <p className="text-lg font-semibold text-primary">{moq} pieces</p>
            </div>
          )}
        </div>
      )}

      {/* 规格参数表 */}
      {hasSpecs && (
        <div>
          <h4 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
            Technical Specifications
          </h4>
          <dl className="divide-y divide-gray-100">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="py-3 flex justify-between">
                <dt className="text-secondary capitalize">
                  {key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}
                </dt>
                <dd className="text-primary font-medium">{value as string}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  )
}
