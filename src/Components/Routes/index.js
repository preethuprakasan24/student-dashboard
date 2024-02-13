import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../../Pages/HomePage'
import Dashboard from '../../Pages/Dashboard'
import Course from '../../Pages/Course'
import Inventory from '../../Pages/Inventory'

const AppRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path='/student-dashboard' element={<HomePage />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/course' element={<Course />}></Route >
                <Route path='/inventory' element={<Inventory />}></Route >
            </Routes>

        </div >
    )
}

export default AppRoutes