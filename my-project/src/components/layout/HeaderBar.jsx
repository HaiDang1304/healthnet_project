const HeaderBar = () => {
  return (
    <div className="h-auto shrink-0 px-6 py-5 md:px-10 md:py-8 bg-background-light dark:bg-background-dark z-10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Xin chào !</h3>
          <span className="text-md text-gray-500">
            Hôm nay bạn cảm thấy như thế nào ? Hãy kiểm tra sức khỏe nhé!
          </span>
        </div>
        <div className=" relative w-64 md:w-80 lg:w-96">
         <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
          <input
            type="search"
            placeholder="Tìm kiếm thuốc, bệnh lý, bác sĩ...."
            className="w-full border border-gray-300 rounded-md pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
