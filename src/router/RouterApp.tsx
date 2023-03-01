import { Route, Routes } from 'react-router-dom'
import { RouterLayout } from '../layout/RouterLayout';
import { 
    HomePage,
    About,
    Blog,
    Contact,
    Gallery,
    Worshop
} from '../pages'



export const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<RouterLayout/>}>
            <Route  path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Worshop/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
  )
}
