import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="bg-blue-700 flex justify-between items-center px-14 py-7">
        <Link to={"/"}>
          <Icon icon="streamline:delete-1" className="text-3xl text-white" />
        </Link>
        <div className="flex items-center text-lg font-medium">
          <button onClick={() => navigate('/Login')} className="text-white bg-indigo-500 shadow-[10px_10px_10px_-10px] shadow-black px-10 py-2 mx-3 rounded-xl">Đăng nhập</button>
          <button onClick={() => navigate('/Register')} className="text-white bg-indigo-500 shadow-[10px_10px_10px_-10px] shadow-black px-10 py-2 mx-3 rounded-xl">Đăng kí</button>
        </div>
      </div>

      <div className="w-1/3 m-auto py-48 text-center">
        <div className="text-4xl font-bold mb-5">Quên mật khẩu</div>
        <div className="px-32 text-wrap mb-3">Chúng tôi sẽ gửi cho bạn hướng dẫn về cách đặt lại mật khẩu qua email.</div>
        <div className="px-5"><input className="px-5 py-3 border-2 border-black rounded-xl w-full mb-10" placeholder="Email"/></div>
        <button className="py-3 w-full text-3xl mb-5 font-medium rounded-xl shadow-lg shadow-neutral-500 bg-indigo-500 text-white">NHẬP</button>
      </div>
    </>
  );
};
