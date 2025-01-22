//rfce
import React from 'react'
import { Link, Outlet, Route, Routes } from "react-router"
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/admin/Dashboard'
import Setting from '../pages/admin/Setting'
import Manage from '../pages/admin/Mange'
import Layout from '../Layout/Layout'
import About from '../pages/About'
import Recap from '../pages/admin/Recap'
import RecapUseState from '../pages/RecapUserState'
function AppRoutes() {
  return (
    <div>
        <Routes>
            {/*Public*/}
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>

                <Route path="recap" element={<Recap/>}/>
                <Route path="recap_state" element={<RecapUseState/>}/>
            </Route>

            {/*Private*/}
            <Route path="admin" element={<Layout/>}>
                <Route index element={<Dashboard/>} />
                <Route path="manage" element={<Manage/>} />
                <Route path="setting" element={<Setting/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes