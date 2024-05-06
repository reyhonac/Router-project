import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="bg-pink-200 text-white h-20 flex justify-between items-center">


        <div className="flex items-center mx-4">
            <img src="./Assets/Img/mehrshop.jpeg" alt="" className="h-12 w-12 mx-4" />
            <span className='text-stone-600 font-bold'>مهرشاپ</span>
          </div>


        <ul className="flex justify-center gap-10  ">
          <li>
            <Link to="/" className="text-slate-600 ml-5   p-3 rounded-sm px-10   bg-gradient-to-r  bg-pink-500 hover:from-pink-600 hover:to-pink-500 transition-colors duration-300 ease-in-out">خانه</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-slate-600 ml-5   p-3 rounded-sm px-5  bg-gradient-to-r bg-pink-500 hover:from-pink-600 hover:to-pink-500 transition-colors duration-300 ease-in-out"> محصولات</Link>
          </li>
          <li>
            <Link to="/blogs" className="text-slate-600 ml-5   p-3 rounded-sm   bg-gradient-to-r  bg-pink-500 hover:from-pink-600 hover:to-pink-500 transition-colors duration-300 ease-in-out">بلاگ</Link>
          </li>
        </ul>
      </nav>            


      <Outlet />
    </>
  );
};

export default Navbar;