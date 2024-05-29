import { Outlet } from "react-router-dom"

export const InnerChartLayout = () => {
    return <>
    <div className="flex">
        <div className="w-2/3">
            <Outlet />
        </div>
        <div className="w-1/3 px-10">
            <div className="rounded-xl p-3 px-5 bg-neutral-200 shadow-[5px_5px_5px_0] mb-10 shadow-neutral-400">
                <div className="font-medium flex justify-between">
                    <div>Nhiệm vụ hằng ngày</div>
                    <div className="text-blue-700">XEM TẤT CẢ</div>
                </div>
            </div>
            <div className="rounded-xl text-center px-10 py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white shadow-[5px_5px_5px_0] mb-20 shadow-neutral-400" >
                <div className="text-lg font-bold">Sử dụng trình chặn quảng cáo?</div>
                <div className="text-sm font-thin text-wrap px-10 my-1 tracking-wide mb-16">Hỗ trợ khóa học với Super Park và chúng tôi sẽ xóa quảng cáo cho bạn</div>
                <button className="bg-white text-black font-medium w-full py-2 rounded-xl mb-3">Dùng thử Super miễn phí</button>
                <div className="font-medium">Tắt Trình chặn Quảng cáo</div>
            </div>
        </div>
    </div>
    </>
}