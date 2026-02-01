function FAQSection() {
  const faqs = [
    {
      question: 'HealthNet có thay thế được bác sĩ không?',
      answer: 'HealthNet là công cụ hỗ trợ, không thay thế hoàn toàn bác sĩ. AI giúp chẩn đoán sơ bộ và cung cấp thông tin tham khảo. Đối với các trường hợp khẩn cấp hoặc bệnh lý nghiêm trọng, bạn nên đến cơ sở y tế gần nhất hoặc sử dụng tính năng Video Call để gặp bác sĩ chuyên khoa.'
    },
    {
      question: 'Thông tin sức khỏe của tôi có được bảo mật không?',
      answer: 'Tuyệt đối an toàn. Chúng tôi tuân thủ các tiêu chuẩn bảo mật y tế quốc tế (HIPAA). Dữ liệu của bạn được mã hóa đầu cuối và chỉ có bạn cùng các bác sĩ được cấp quyền mới có thể truy cập.'
    },
    {
      question: 'Chi phí sử dụng dịch vụ như thế nào?',
      answer: 'HealthNet cung cấp gói miễn phí cho các tính năng cơ bản như tra cứu thuốc, nhắc lịch. Các dịch vụ nâng cao như tư vấn AI chuyên sâu hoặc Video Call bác sĩ sẽ có các gói phí linh hoạt theo lượt hoặc thuê bao tháng.'
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d141c]">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Câu hỏi thường gặp
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <div className="text-slate-600 dark:text-slate-300 p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-slate-100 dark:group-open:border-slate-700">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
