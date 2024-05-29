import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Home = () => {
    const navigate = useNavigate()
    return <>
    <div className='bg-blue-700 py-7 px-10'>
        <img className='w-14' src={logo}/>
    </div>
    <div className='py-20 text-center'>
        <div className='text-4xl font-bold text-wrap'>Học Toán vui vẻ, không còn nhàm chán!</div>
        <div><button onClick={() => navigate('/Login')} className='text-white w-2/12 py-3 bg-indigo-500 rounded-3xl text-3xl shadow-md shadow-neutral-700 font-semibold my-10'>Đăng nhập</button></div>
        <div><button onClick={() => navigate('/Register')} className='text-white w-2/12 py-3 bg-indigo-500 rounded-3xl text-3xl shadow-md shadow-neutral-700 font-semibold my-10'>Đăng kí</button></div>
        <div><button onClick={() => navigate('/ParentLogin')} className='text-white w-2/12 py-3 bg-yellow-500 rounded-3xl text-3xl shadow-md shadow-neutral-700 font-semibold my-10'>Phụ huynh</button></div>
    </div>
    </>
}