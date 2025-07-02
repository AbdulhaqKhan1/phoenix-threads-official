import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import NewArrivals from './components/NewArrivals'
import Contact from './components/Contact'
import TopTrending from './components/TopTrending'
// import ProductSlider from './components/ProductSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      {/* <ProductSlider/> */}
      <NewArrivals/>
      <TopTrending/>
      <Contact/>
    </div>
  )
}

export default App
