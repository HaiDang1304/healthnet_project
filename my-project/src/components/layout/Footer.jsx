import { Link } from 'react-router-dom'

function Footer() {
  const productLinks = [
    { name: 'Tư vấn AI', path: '/ai-consult' },
    { name: 'Đặt lịch khám', path: '/features' },
    { name: 'Nhà thuốc Online', path: '/features' },
    { name: 'Hồ sơ sức khỏe', path: '/features' },
  ]
  const aboutLinks = [
    { name: 'Đội ngũ bác sĩ', path: '/doctors' },
    { name: 'Tuyển dụng', path: '/contact' },
    { name: 'Tin tức y tế', path: '/features' },
    { name: 'Liên hệ', path: '/contact' },
  ]

  return (
    <footer className="bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-slate-900 dark:text-white font-black text-xl">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
              HealthNet
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Nền tảng công nghệ y tế tiên phong, mang lại sự an tâm và tiện lợi cho hàng triệu gia đình Việt.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Sản phẩm</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Về chúng tôi</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
         
          <div className="flex gap-6">
            <Link className="hover:text-slate-900 dark:hover:text-white" to="#">Điều khoản</Link>
            <Link className="hover:text-slate-900 dark:hover:text-white" to="#">Bảo mật</Link>
            <Link className="hover:text-slate-900 dark:hover:text-white" to="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
