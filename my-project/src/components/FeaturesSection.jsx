function FeaturesSection() {
  const features = [
    {
      icon: 'smart_toy',
      title: 'AI Tư vấn 24/7',
      description: 'Hỗ trợ giải đáp thắc mắc y tế tức thì với trí tuệ nhân tạo, phân tích triệu chứng ban đầu.',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-primary'
    },
    {
      icon: 'description',
      title: 'Hồ sơ sức khỏe số',
      description: 'Lưu trữ và theo dõi lịch sử khám chữa bệnh bảo mật, dễ dàng chia sẻ với bác sĩ.',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      textColor: 'text-indigo-500'
    },
    {
      icon: 'calendar_month',
      title: 'Đặt lịch khám nhanh',
      description: 'Kết nối với các cơ sở y tế uy tín, đặt lịch khám ưu tiên mà không cần chờ đợi.',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      textColor: 'text-teal-500'
    },
    {
      icon: 'medication',
      title: 'Tra cứu thuốc & bệnh lý',
      description: 'Từ điển y khoa chuẩn xác về hàng nghìn loại thuốc, triệu chứng và cách phòng ngừa.',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      textColor: 'text-rose-500'
    },
    {
      icon: 'video_camera_front',
      title: 'Video Call bác sĩ',
      description: 'Tư vấn trực tuyến 1:1 với đội ngũ chuyên gia hàng đầu qua video chất lượng cao.',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      textColor: 'text-amber-500'
    },
    {
      icon: 'notifications_active',
      title: 'Nhắc nhở uống thuốc',
      description: 'Không bao giờ quên lịch uống thuốc với tính năng nhắc nhở thông minh tùy chỉnh.',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-500'
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d141c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Giải pháp toàn diện cho sức khỏe
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              HealthNet cung cấp các công cụ tiên tiến giúp bạn chủ động quản lý sức khỏe mọi lúc, mọi nơi.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Xem tất cả tính năng <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
