

import "./App.css"
import { useState } from "react"
import PricingTwo from "./components/pricing-two.jsx"
import PricingComparison from "./components/Pricing3.jsx"
import PricingCards from "./components/pricing4.jsx"
import Pricing5 from "./components/Pricing5.jsx"
import Pricing6 from "./components/Pricing6.jsx"
import Pricing7 from "./components/Pricing7.jsx"
import DatePicker from "./components/DatePicker1.jsx"
import Pagination from "./components/Pegination.jsx"
import  Pagination2  from "./components/Pagination2.jsx"
import Pagination3 from "./components/Pegination3.jsx"
import FeatureCard1 from "./components/FeatureCards/FeatureCard1.jsx"
import FeatureCard2 from "./components/FeatureCards/FeatureCard2.jsx"
import FeatureCard3 from "./components/FeatureCards/FeatureCard3.jsx"
import DiscountCard from "./components/FeatureCards/DiscountCard.jsx"
import FreePlanCard from "./components/SinglePricingCard1.jsx"
import GooglePlayButton from "./components/StoreButtons/Google.jsx"
import AppStoreButton from "./components/StoreButtons/Apple.jsx"
import WindowsStoreButton from "./components/StoreButtons/Windows.jsx"
import LinearProgress from "./components/ProgressBar/ProgressBar.jsx"
import CircularProgress from "./components/ProgressBar/ProgressBar2.jsx"
// import SteppedProgress from "./components/ProgressBar/ProgressBar3.jsx"
import LoadingIndicator from "./components/ProgressBar/ProgressBar3.jsx"
import SteppedProgress from "./components/ProgressBar/ProgressBar4.jsx"
import Pricing from "./components/Pricing-card.jsx"
import Hero from "./components/HeroDesign5.jsx"
import Input from "./components/button1.jsx"



function App() {
  // let counter = 5

  // const addValue = ()=>{
  //   console.log()
  // }
  const [selectedDate, setSelectedDate] = useState(new Date() )
  return (
    <>
      {/* <h1>Chai Aur React</h1>
      <h2>Counter Value is: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button> */}

      {/* <PricingTwo/>
      {/* <PricingComparison/> */}

      {/* <PricingCards/>
        <Pricing5/>/ */}
        {/* <Pricing6/> */}

      {/* <Pricing7/> */ }
      {/* <DatePicker/> */}
      {/* <Pagination/> */}
      {/* <Pagination2/> */}
      {/* <Pagination3/> */}
      {/* <DatePicker/> */}
      {/* <FeatureCard1/>
      <FeatureCard2/>
      <FeatureCard3/>
      <DiscountCard/>
      <FreePlanCard/>
      <GooglePlayButton/>
      <AppStoreButton/>
      <WindowsStoreButton/>
      <LinearProgress/>
      <CircularProgress/>
      <LoadingIndicator/>
      <SteppedProgress/>
      <Pricing/>
      <Hero/> */}
      <Input/>
      {selectedDate && <div className="mt-4 text-center">Selected date: {selectedDate.toLocaleDateString()}</div>}

    </>
  )
}

export default App
