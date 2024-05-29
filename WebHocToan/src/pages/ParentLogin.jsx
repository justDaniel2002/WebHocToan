import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export const ParentLogin = () => {
  return (
    <>
      <div className="bg-yellow-500 px-3 py-3">
        <Link to={"/"}><Icon icon="streamline:delete-1" className="text-3xl text-white"/></Link>
      </div>

      <div className="text-center w-5/12 text-xl m-auto my-40">
        <div className="text-6xl font-bold mb-5">Đăng nhập</div>
        <input className="px-5 py-3 border-2 border-black rounded-3xl w-full mb-10" placeholder="Tên Đăng Nhập"/>
        <input className="px-5 py-3 border-2 border-black rounded-3xl w-full mb-10" placeholder="Mã ID"/>
        <input className="px-5 py-3 border-2 border-black rounded-3xl w-full mb-10" placeholder="Mật khẩu" type="password"/>
        
        <button className="py-3 w-full text-4xl mb-5 font-medium rounded-3xl bg-yellow-500 text-white">Đăng nhập</button>
        <Link to={"/ForgotPassword"} className="font-medium">Quên mật khẩu?</Link>
      </div>
    </>
  );
};
