const stats = [
  { prefix: '', value: '30,000', suffix: '+', title: 'Ready Molds in Stock' },
  { prefix: '', value: '1,500', suffix: '+', title: 'Brands Served Globally' },
  { prefix: '', value: '3', suffix: '-Day', title: 'Sample Production' },
  { prefix: '', value: '15', suffix: ' M', title: 'Bottles/Month Capacity' },
  { prefix: 'ISO', value: '9001', suffix: '', title: 'Certified Quality' },
]

export default function StatsCounter() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center text-[69px] font-semibold leading-none text-primary">
                {stat.prefix && <span className="text-right flex-grow whitespace-pre-wrap">{stat.prefix}</span>}
                <span>{stat.value}</span>
                {stat.suffix && <span className="text-left flex-grow whitespace-pre-wrap">{stat.suffix}</span>}
              </div>
              <div className="text-center text-[19px] font-normal leading-[2.5] text-primary">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
