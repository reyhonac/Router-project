import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-200 text-white py-4">
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center">
          <div className="flex items-center mx-4">
            <img src="./Assets/Img/mehrshop.jpeg" alt="" className="h-12 w-12 mx-4" />
            <span className='text-stone-600 font-bold'>مهرشاپ</span>
          </div>
        </div>
        <div className="flex items-center">
        <span className='text-stone-600 font-bold'>ارتباط با ما</span>
          <img src="./Assets/Img/insta.png" alt="" className="h-8 w-8 mx-2" />
          <img src="./Assets/Img/telegram.png" alt="" className="h-8 w-8 mx-2" />

          
        </div>
      </div>
      <hr className="border-pink-5500 my-4" />
      <div className="bg-neutral-300 text-center py-4 ">
        <img src="./Assets/Img/logo.png" alt="" className="h-12 w-12 mx-auto mb-2" />
        <p className='text-stone-600'> تمامی حقوق مادی و معنوی این سایت متعلق به مهرشاپ می‌باشد</p>
      </div>
    </footer>
  );
}

export default Footer;
