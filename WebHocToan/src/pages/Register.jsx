import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue-700 text-white min-h-screen">
        <div className="bg-blue-700 flex justify-between items-center px-14 py-7">
          <Link to={"/"}>
            <Icon icon="streamline:delete-1" className="text-3xl text-white" />
          </Link>
          <div className="flex items-center text-lg font-medium">
            <button
              onClick={() => navigate("/Login")}
              className="text-white bg-indigo-500 shadow-[10px_10px_10px_-10px] shadow-black px-10 py-2 mx-3 rounded-xl"
            >
              Đăng nhập
            </button>
          </div>
        </div>

        <div className="text-center w-5/12 text-xl m-auto">
          <div className="text-6xl font-bold mb-5">Đăng kí</div>
          <input
            className="px-5 py-3 border-2 border-white text-white bg-blue-700 rounded-3xl w-full mb-10"
            placeholder="Tên"
          />
          <input
            className="px-5 py-3 border-2 border-white text-white bg-blue-700 rounded-3xl w-full mb-10"
            placeholder="Email"
          />
          <input
            className="px-5 py-3 border-2 border-white text-white bg-blue-700 rounded-3xl w-full mb-10"
            placeholder="Mật khẩu"
            type="password"
          />

          <button className="py-3 w-full text-4xl mb-7 font-medium rounded-3xl bg-indigo-500 text-white shadow-md shadow-neutral-800">
            Đăng kí
          </button>

          <div className="flex items-center justify-center mt-5 mb-3">
            <hr className="w-1/2" />
            <span className="mx-3">Hoặc</span>
            <hr className="w-1/2" />
          </div>
          <div className="flex items-center justify-center mb-5">
            <button className="flex items-center justify-center w-1/2 mx-5 border-2 border-white bg-blue-700 text-2xl font-semibold text-white px-5 py-3 rounded-2xl">
              <Icon icon="logos:facebook" className="mr-2" /> Facebook
            </button>
            <button className="flex items-center justify-center w-1/2 mx-5 border-2 border-white bg-blue-700 text-2xl font-semibold text-white px-5 py-3 rounded-2xl">
              <Icon icon="flat-color-icons:google" className="mr-2" /> Google
            </button>
          </div>
          <div className="text-center text-wrap px-20 font-medium text-sm">
            Khi đăng ký trên FuzzyMath, bạn đã đồng ý với Các chính
            sách và Chính sách bảo mật của chúng tôi.
          </div>
          <div className="text-center text-wrap px-20 font-medium text-sm">
            Trang này được bảo vệ bởi tập đoàn reCAPTCHA và theo Chính sách bảo
            mật và Điều khoản dịch vụ của Google.
          </div>
        </div>
      </div>
    </>
  );
};
