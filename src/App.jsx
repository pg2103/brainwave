import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './components/Hero';
import Header from './components/Header';
import  Benefits  from './components/Benefits';
import Collabration from './components/Collabration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
const App=()=> {
  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header/>
      <Hero/>
      <Benefits/>
      <Collabration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
    </div>
    <ButtonGradient />
    
    </>
  )
}
export default App;