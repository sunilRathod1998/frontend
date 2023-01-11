import Home from './components/home/Home';
import Header from './components/layout/Header';
import './styles/App.scss'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import About from './components/layout/About';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Founder.scss'
import './styles/Menu.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/confirmorder.scss'
import './styles/PaymentSuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/myOrders.scss'
import './styles/orderDetails.scss'
import './styles/dashboard.scss'
import './styles/Users.scss'
import './styles/About.scss'
import './styles/NotFound.scss'
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/Authentication/Login'
import Profile from './components/Authentication/Profile';
import Founder from './components/home/Founder';
import Myorders from './components/myOrders/Myorders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Orders from './components/Admin/Orders';
import NotFound from './components/NotFound';


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/shipping' element={<Shipping/>}/>
    <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
    <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/founder' element={<Founder/>}/>
    <Route path='/myorders' element={<Myorders/>}/>
    <Route path='/admin/orders/:id' element={<OrderDetails/>}/>
    <Route path='/admin/dashboard' element={<Dashboard/>}/>
    <Route path='/admin/users' element={<Users/>}/>
    <Route path='/admin/orders' element={<Orders/>}/>
    <Route path='*' element={<NotFound/>}/>



    </Routes>
    <Footer/>
   </Router> 
  )
}

export default App;
