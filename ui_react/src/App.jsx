import React, { Suspense, lazy  } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Public/Loader';
import UserEnquiry from './pages/Shared/UserEnquiry';
import AdminEnquiries from './pages/Admin/AdminEnquiries';
import AdminProfile from './components/Admin/AdminProfile';
import TermsAndConditions from './pages/Terms';

const WebLayout = lazy(() => import('./layouts/WebLayout'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const UserLayout = lazy(() => import('./layouts/UserLayout'));
const UserDashboard = lazy(() => import('./pages/Shared/UserDashboard'));
const UserProfile = lazy(() => import('./components/Shared/UserProfile'));
const Membership = lazy(() => import('./pages/Shared/Membership'));
const Courses = lazy(() => import('./pages/Shared/Courses'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminCourses = lazy(() => import('./pages/Admin/AdminCourses'));



function App() {

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Routes>

          <Route  element={<WebLayout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />          
          <Route path='/login' element={<Login />} />                    
          <Route path='/contact' element={<Contact />} />   
          <Route path='/terms' element={<TermsAndConditions />} />   
          </Route>

          <Route element={<UserLayout />}>
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/profile' element={<UserProfile />} />
          <Route path='/user/membership' element={<Membership/>}/>
          <Route path='/user/courses' element={<Courses/>}/>
          <Route path='/user/enquiry' element={<UserEnquiry/>}/>
          </Route>

          <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route path='/admin/courses' element={<AdminCourses/>}/>
          <Route path='/admin/enquiries' element={<AdminEnquiries/>}/>
          <Route path='/admin/profile' element={<AdminProfile/>}/>
          </Route>

      </Routes>      
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
