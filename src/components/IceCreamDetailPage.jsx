import React from 'react';
import { useParams } from 'react-router-dom';
import IcecreamDetail from './IceCreamDetail';

const IceCreamDetailPage = () => {
    const { title } = useParams(); // Get the ice cream title from the URL
    const iceCream = IcecreamDetail.find(ice => ice.title === title); // Find the clicked ice cream
    
    return (
      <div className="ice-cream-detail">
        <h2>{iceCream.title}</h2>
        <p>{iceCream.description}</p>
        <p>Price: ${iceCream.price}</p>
        <div className="additional-images">
        <img src={iceCream.img} alt={iceCream.title} />
        <img src="https://th.bing.com/th/id/OIP.hakvaIfWKqdHU7m0ihEFfgAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.6" alt="Additional view 1" />
        <img src="https://th.bing.com/th/id/OIP.hakvaIfWKqdHU7m0ihEFfgAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.6" alt="Additional view 1" />
        <img src="https://th.bing.com/th/id/OIP.hakvaIfWKqdHU7m0ihEFfgAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.6" alt="Additional view 1" />

      </div>
      
      <button>Add to Cart</button>
    </div>
  );
};

export default IceCreamDetailPage;