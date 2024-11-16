
import './App.css';
import Hero from './components/Hero';
import IceCreamBox from './components/IceCreamBox';
import './assets/banner.jpeg'
import Navbar from './components/Navbar';
import About from './components/About';
import image from './assets/linkding image.jpeg'
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FooterIcons from './components/FooterIcons';
import IcecreamDetail from './components/IceCreamDetail';
import IceCreamImages from './components/pages/IceCreamImages';
import { BrowserRouter as router, Routes, Route } from 'react-router-dom';

function createIceCream(detail){
    return <IceCreamBox 
    title ={detail.title}
    img = {detail.img}
    description = {detail.description}
    price = {detail.price}
      />

}

function App() {
  return (
    <div className="App">
    <Hero />
    <IceCreamImages/>
    <Navbar />
    <h1 style={{ textAlign: 'center', marginTop:'33px' }}>About Our Ice Cream</h1>
    <About title = "Crafting Sweet Memories" description ="At Bay Ice Cream, our journey began with a simple idea: to create ice cream that brings joy to every bite. With a love for crafting delicious, creamy treats, we started our journey in a small kitchen, using only the finest ingredients sourced from local farms. Our ice cream is made in small batches, ensuring every scoop is packed with flavor and quality. We believe that ice cream is more than just a dessert; it’s a way to create lasting memories with family and friends."/>
   
    <About title = "Our Mission" description ="Our mission at Bay Ice Cream is simple: to spread joy and happiness through our delicious ice cream. We are dedicated to using only the highest-quality ingredients, ensuring every scoop delivers a rich and creamy experience. Our ice cream is free from artificial flavors and preservatives, allowing you to enjoy the pure taste of our creations. We strive to exceed our customers' expectations by providing exceptional service and a welcoming environment."/>

{IcecreamDetail.map(createIceCream)}

{/* form */}
<ContactForm /> 
<Footer />
    </div>

    
  );
}

export default App;
