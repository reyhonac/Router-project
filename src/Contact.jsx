
const products = [ 
  { id: 1, title: 'رژگونه پودری شیگلم', price: 651 , discount: 30, description: 'رژگونه پودری شیگلم ', image: './Assets/Img/rozhgone.jpeg' }, 
  { id: 2, title: 'هایلایتر مدادی شیگلم', price: 400000, discount: 10, description: ' هایلایتر چند منظوره ', image: './Assets/Img/hailaiter.jpeg' }, 
  { id: 3, title: 'پلت سایه بورگاندی شیگلم', price:680000, discount:0  ,   description: ' SHEGLAM BURGUNDY EYE SHADOW ', image: './Assets/Img/palet.jpeg' }, 
  { id: 4, title: 'خط لب شیگلم', price:496, discount: 30, description: ' پیگمنت دهی عالی', image: './Assets/Img/line.lip.jpeg' }, 
  { id: 5, title: 'ریمل دوطرفه شیگلم قابل شستشو', price: 30, discount: 553, description: 'ریمل دو سر حجم دهنده و بلند کننده شیگلم', image: './Assets/Img/rimel.jpeg' }, 
  { id: 6, title: 'ژل ابرو شیگلم', price: 496, discount: 36, description: 'ژل ابرو شیگلم مدل SET ME UP BROWN GEL ', image: './Assets/Img/gel.jpeg' }, 
  { id: 7, title: 'ست براش ۸ عددی شیگلم', price: 756000, discount: 20, description: 'ست فوق العاده شامل ۸ عدد براش برای زدن انواع محصولات آرایشی لیکوئیدی و پودری ', image: './Assets/Img/brash.jpeg' }, 
  { id: 8, title: 'پودر فیکس دوطبقه شیگلم bubblegam', price: 80000, discount: 30, description: ' پودر تثبیت کننده شیگلم مدل INSTA-READY ', image: './Assets/Img/fix.jpeg' }, 
  { id: 9, title: 'فیس واش شیگلم', price: 552000, discount: 0, description: 'پاک کننده صورت شیگلم مناسب پوست', image: './Assets/Img/face wash.jpeg' }, 
  { id: 10, title: 'پک خرس مهربان شیگلم', price:6500000, discount: 21, description: '   قیمتش هم گوگولیه نگا کن آخههه چقددددر قند و گوگولیه ', image: './Assets/Img/pack.jpeg' }, 
   
]; 
 
 
const ProductCard = ({ title, price, discount, description, image }) => { 
  const discountedPrice = price - (price * discount / 100); 
 
  return ( 
    <div className="bg-white-200 shadow-md rounded p-4 mb-12 mt-12 mr-10 ml-10"> 


      <img src={image} alt={title} className="w-full h-52  object-cover mb-6" /> 
      <h2 className="text-base text-slate-600 font-bold mb-2">{title}</h2> 
      <p className="text-sm text-slate-600">{description}</p> 
      <p className="text-sm text-gray-600 mb-2">قیمت: {price} تومان</p> 
      <p className="text-sm text-slate-600 mb-2">تخفیف: {discount}% ({discountedPrice} تومان)</p> 
      
          </div> 
  ); 
}; 
 
 
const Contact = () => { 
  return ( 
    <div className="grid grid-cols-5 gap-4 "> 
      {products.map(product => ( 
        <ProductCard key={product.id} {...product}  /> 
        

        
      ))} 
    </div> 
  ); 
}; 
 
export default Contact;
