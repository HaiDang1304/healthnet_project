import HeaderBar from "../../components/layout/HeaderBar";

const DashBoardHome = () => {
  return (
    <>
      <HeaderBar />
      <div className="h-auto shrink-0 px-6 py-3 md:px-10 md:py-3 bg-background-light dark:bg-background-dark z-10">
        <span className="text-lg font-bold">Truy cập nhanh</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <button className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center gap-3 text-center border border-transparent hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[28px]">pill</span>
            </div>
            <span className="font-medium text-sm md:text-base">
              Tra cứu thuốc
            </span>
          </button>
          <button className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center gap-3 text-center border border-transparent hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[28px]">
                coronavirus
              </span>
            </div>
            <span className="font-medium text-sm md:text-base">
              Tra cứu bệnh
            </span>
          </button>
          <button className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center gap-3 text-center border border-transparent hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[28px]">
                smart_toy
              </span>
            </div>
            <span className="font-medium text-sm md:text-base">Hỏi Đáp AI</span>
          </button>
          <button className="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center gap-3 text-center border border-transparent hover:border-primary/20">
            <div className="w-14 h-14 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined text-[28px]">
                calendar_add_on
              </span>
            </div>
           <span className="font-medium text-sm md:text-base">Đặt lịch khám</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DashBoardHome;
