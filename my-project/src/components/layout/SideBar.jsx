import React, { useState } from "react";
import { Link } from "react-router-dom";


const menu_item = [
  { icon: "grid_view", label: "Tổng quan", path: "/dashboard", active: true },
  { icon: "description", label: "Hồ sơ sức khỏe", path: "/dashboard/records" },
  { icon: "stethoscope", label: "Bác sĩ", path: "/dashboard/doctors" },
  { icon: "smart_toy", label: "Chat AI", path: "/dashboard/ai-chat" },
  { icon: "calendar_month", label: "Lịch khám", path: "/dashboard/appointments" },
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("Tổng quan");

  return (
    <div className="w-64 hidden md:flex flex-col bg-white dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800 shrink-0 z-20">
      <div className="flex items-center p-6 gap-2">
        <div className="bg-primary/10 p-2 rounded-lg text-primary">
          <span className="material-symbols-outlined text-3xl">medical_services</span>
        </div>
        <h3 className="p-2 text-lg font-bold">HealthNet</h3>
      </div>

      <nav className="flex flex-col mt-6 gap-4 px-4">
        {menu_item.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={() => setActiveMenu(item.label)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeMenu === item.label
                ? "bg-primary/10 text-primary"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 space-y-2">
        <Link 
          to="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
          <span className="text-sm">Cài đặt</span>
        </Link>

        <Link 
          to="/dashboard/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIKsHxOeEjZsMDv9XVi_xA87UsSD5rXHazqAEn0xId_0c5t7rrUXhlB8MtjkerE9tl9fLUVAvzkb9akg5ckdHV7c63UWGpedLm2y0f8_aC9HS0Taxfbf0nASpOiz-qMFynJ4oupKNLhP2PtLlJCueU5xGdFKZwUaC2QIP5MGiLsTOfJStB5MNmRupW7Wrw4gL3yyeOCcKOmgFKsvi1NCh8k9GAJmCZo8UAyDf2ZvoTG9Y99x-ds5WHmrUm3Uaj1sLHn-vwEFG_28I"
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Nguyễn Văn A</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">nguyenvana@email.com</p>
          </div>
          <span className="material-symbols-outlined text-[18px] text-slate-400">chevron_right</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
