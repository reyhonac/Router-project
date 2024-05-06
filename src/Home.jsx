import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">برند ها</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
      
        <div className="w-full">
          <img src="./Assets/Img/netro.jpeg" alt="برند 1" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/simple.jpeg" alt="برند 2" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/ordinery.jpeg" alt="برند 3" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/silcre.jpeg" alt="برند 4" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/sant.jpeg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/beulis.jpeg" alt="برند 6" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/famrmaci.jpeg" alt="برند 4" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/micham.jpg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/wet.jpeg" alt="برند 6" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/garnier.jpeg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/balance.jpeg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/varemi.jpeg" alt="برند 6" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/gabrini.jpeg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/sheglam.jpeg" alt="برند 5" className="w-full" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/liesel.jpeg" alt="برند 6" className="w-full" />
        </div>
      </div>




      <div className="grid grid-cols-2 gap-4 mb-8">
     
        <div className="w-full">
          <img src="./Assets/Img/care.jpg" alt="تصویر 1" className="" />
        </div>
        <div className="w-full">
          <img src="./Assets/Img/makeup.jpeg" alt="تصویر 2" className="" />
        </div>
        <div>
          <img src="./Assets/Img/hair.jpeg" alt="اسلاید 1" className="w-max" />
        </div>
        
        </div>
       
      
      <Slider {...settings}>
      
        <div>
          <img src="./Assets/Img/argan.jpg" alt="اسلاید 1" className="w-full" />
        </div>
        <div>
          <img src="./Assets/Img/difrin.jpg" alt="اسلاید 2" className="w-full" />
        </div>
        <div>
          <img src="./Assets/Img/face.jpg" alt="اسلاید 2" className="w-full" />
        </div>
      
      </Slider>
    </div>
  );
};

export default Home;
