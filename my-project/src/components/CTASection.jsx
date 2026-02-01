function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left">
          <div className="max-w-lg">
            <h2 className="text-3xl font-black mb-4">Sẵn sàng chăm sóc sức khỏe tốt hơn?</h2>
            <p className="text-blue-100 text-lg">Tham gia cùng cộng đồng hơn 10.000 người dùng HealthNet ngay hôm nay.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
              Đăng ký miễn phí
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
