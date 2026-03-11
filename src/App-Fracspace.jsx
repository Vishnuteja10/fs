

import './App.css'
import Footer from './components/Footer/Footer'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy/RefundPolicy'
import Terms from './components/Terms/Terms'

function App() {
 

  return (
    <>
     <div>
         <Footer />
     </div>
     <div>
        <PrivacyPolicy />
     </div>
     <div>
         <RefundPolicy />
     </div>
     <div>
         <Terms />
     </div>
    </>
  )
}

export default App
