

import './App.css'
import { Navbar } from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shopcategory } from './pages/Shopcategory'
import { LoginSignup} from './pages/LoginSignup'
import { Shop } from './pages/shop'
import { Products } from './pages/products'
import { Cart } from './pages/Cart'
import { Footer } from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {


  return (
    <>
   <BrowserRouter>
      <Navbar></Navbar>
<Routes>
  <Route path='/' element ={<Shop></Shop>}/>
  <Route path='/mens' element ={<Shopcategory banner = {men_banner}category="men"/>}/>
  <Route path='/womens' element ={<Shopcategory banner = {women_banner}category="women"/>}/>
  <Route path='/kids' element ={<Shopcategory banner = {kid_banner} category="kid"/>}/>

  <Route path='product' element={<Products/>}>
    <Route path=':productId' element={<Products/>}/>
    </Route>
    <Route path='/cart' element ={<Cart/>}/>
    <Route path='/login' element ={<LoginSignup/>}/>
</Routes>
<Footer></Footer>
      </BrowserRouter>
    </> 
  )
}

export default App
