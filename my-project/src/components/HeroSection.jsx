function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-20 lg:pt-24 lg:pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 lg:max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 w-fit">
            <span className="material-symbols-outlined text-primary text-sm">verified</span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">Công nghệ AI Y tế</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight text-slate-900 dark:text-white">
            Chăm sóc sức khỏe <span className="text-primary">thông minh</span> cùng HealthNet
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Nền tảng y tế toàn diện: AI chẩn đoán sơ bộ, hồ sơ sức khỏe điện tử và kết nối bác sĩ chuyên khoa chỉ trong vài phút.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
              Bắt đầu ngay
            </button>
            <button className="h-12 px-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Tư vấn AI
            </button>
          </div>
          
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex -space-x-3">
              <img 
                alt="User Avatar" 
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIKsHxOeEjZsMDv9XVi_xA87UsSD5rXHazqAEn0xId_0c5t7rrUXhlB8MtjkerE9tl9fLUVAvzkb9akg5ckdHV7c63UWGpedLm2y0f8_aC9HS0Taxfbf0nASpOiz-qMFynJ4oupKNLhP2PtLlJCueU5xGdFKZwUaC2QIP5MGiLsTOfJStB5MNmRupW7Wrw4gL3yyeOCcKOmgFKsvi1NCh8k9GAJmCZo8UAyDf2ZvoTG9Y99x-ds5WHmrUm3Uaj1sLHn-vwEFG_28I"
              />
              <img 
                alt="User Avatar" 
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC74JH-eFKIMFlmKJ0po8A8feoLCKavCmMUx066Du-YT8vCc8QGO4umKKeppxhTLW64adh90z6sPboRfkGLvSfw3cbOYWjHwHAoMeoYZUhmO8vIO655PIqycxXI09YfVw0LzkUD74368rEDQKA-pE71PGF7lh1Zj5uytvxff4I7cfmrlVPf0pQMioSPQDu-3p6NV2RgxL8YKWPQe4HJlH4PZ0yIf_H14i_0Uc6D-3l0QyVQCUqSymElpsfCuIDhkaaFyNvIuI26buU"
              />
              <img 
                alt="User Avatar" 
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJY7e8v3vg-_1l9WRaUBgJYprw83DoLN_Pgll1CtK0uZmg0Cofu6ahyu0lCqJi3D9RC8f4aSdohivRq7hFfHbXW7Bt0uuNB5eYxVynFKc2c0eCmkoIivu8LYW-ZA1cIHWCksB5dfuHVfULIhHiU22fsWNEJbnEsIL-5kpu8m3FhBozn_0__yUFGcmRzVSVFUNhCKMWlvs2366LzeGo23yp9Lsc3g0_yT3nxG2ALkF2zi3sU3wjcPa0T-5V5bitZrtyunIHUDz-8IA"
              />
            </div>
            <p>Hơn <span className="font-bold text-slate-900 dark:text-white">10.000+</span> người dùng tin tưởng</p>
          </div>
        </div>
        
        <div className="relative lg:h-full flex justify-center lg:justify-end">
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-blob animation-delay-2000"></div>
          
          <div 
            className="relative w-full aspect-square max-w-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7njslZ6VHbozsra-Ug0cgTkuScnUO9QtJgb1KJx7CX5KVHnt-McSY92R4ixVqPECUBHw8UT7bmlA-YkQTjC9IMupx6w_zOWGc7SrB-Jbbb7KCYWLqEgcDF4TKpU6v4ea_HhjEEMQyjI3GVEFE-0nW_aQ-4XCvdC8PBnlurSlcz9bphpPrb4JNIClF7_20cIEP9_FmRfb13oNypboyr45RuC7eTrfDlQgmAOiDYYjcnpets3tbbWKjWW_agPGPnJdb1N62lGndHrc')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-lg p-4 shadow-lg flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Kết nối thành công</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Dr. Nguyen Van A đang trực tuyến</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
