function PartnersSection() {
  const partners = [
    { icon: 'local_hospital', name: 'MEDLATEC' },
    { icon: 'health_and_safety', name: 'VINMEC' },
    { icon: 'cardiology', name: 'BACH MAI' },
    { icon: 'monitor_heart', name: 'TAM ANH' },
  ]

  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
          Đối tác y tế uy tín hàng đầu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="text-xl font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="material-symbols-outlined">{partner.icon}</span> {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
