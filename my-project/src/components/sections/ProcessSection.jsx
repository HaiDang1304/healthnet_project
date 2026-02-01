function ProcessSection() {
  const steps = [
    {
      icon: "account_circle",
      title: "Tạo hồ sơ cá nhân",
      description:
        "Đăng ký tài khoản và cập nhật thông tin sức khỏe cơ bản để AI hiểu rõ về bạn.",
    },
    {
      icon: "chat",
      title: "Chat với AI / Bác sĩ",
      description:
        "Mô tả triệu chứng để nhận chẩn đoán sơ bộ từ AI hoặc kết nối trực tiếp với bác sĩ.",
    },
    {
      icon: "medical_services",
      title: "Nhận phác đồ điều trị",
      description:
        "Nhận lời khuyên chi tiết, đơn thuốc điện tử và hướng dẫn chăm sóc sức khỏe tại nhà.",
    },
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Quy trình hoạt động đơn giản
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Chỉ với 3 bước đơn giản để bắt đầu chăm sóc sức khỏe của bạn tốt hơn
            ngay hôm nay.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">
                  {step.icon}
                </span>
                <div className="absolute -top-10 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
