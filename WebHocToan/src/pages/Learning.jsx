import { Icon } from "@iconify/react/dist/iconify.js";

export const Learning = () => {
  return (
    <>
      <div className="bg-blue-700 p-5 h-60 text-white font-semibold text-2xl rounded-lg shadow-md shadow-neutral-700 mb-3">
        Bản tin
      </div>
      <div className="bg-yellow-500 justify-between flex items-center px-5 pr-32 py-10 text-white font-bold text-4xl rounded-lg shadow-md shadow-neutral-700 mb-3">
        <div>Số học</div>
        <div className="border rounded-lg bg-yellow-500 p-5"><Icon icon="icomoon-free:arrow-right" /></div>
      </div>
      <div className="bg-lime-500 justify-between flex items-center px-5 pr-32 py-10 text-white font-bold text-4xl rounded-lg shadow-md shadow-neutral-700 mb-3">
        Hình học
        <div className="border rounded-lg bg-lime-500 p-5"><Icon icon="icomoon-free:arrow-right" /></div>
      </div>
    </>
  );
};
