import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.jsx'
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy.jsx'
import Terms from './Pages/Terms/Terms.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import HowItWorks from './Pages/HowItWorks/HowItWorks.jsx'
import Services from './Pages/Services/Services.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import MeetOurTeam from './Pages/MeetOurTeam/MeetOurTeam.jsx'
import Careers from './Pages/Careers/Careers.jsx'
import Agents from './Pages/Agents/Agents.jsx'

const router = createBrowserRouter([
     {
      path:"/",
      element:<HomePage />
     },
     {
      path:'/howitworks',
      element:<HowItWorks />
     },
     {
      path:'/services',
      element:<Services />
     },
     {
      path:'/privacypolicy',
      element:<PrivacyPolicy />
     },
     {
      path:'/refundpolicy',
      element:<RefundPolicy />
     },
     {
      path:'/terms',
      element:<Terms />
     },
     {
       path:"/contact",
       element:<ContactUs />
     },
     {
       path:'/meetourteam',
       element:<MeetOurTeam />
     },
     {
      path:'/careers',
      element:<Careers />
     },
     {
      path:'/agents',
      element:<Agents />
     }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
