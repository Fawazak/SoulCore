import {React} from 'react'

import Intro from '../components/Intro'
import Services from '../components/Service'
import WhoAmI from '../components/WhoAmI'
import GetInContact from '../components/GetInContact'
import Transitions from '../components/Transitions'



const Home = () => {
  
  return (
    <div>
        <Transitions>
        <Intro />
        <Services />
        <WhoAmI />
        <GetInContact />
        </Transitions>
        

    </div>
  )
}

export default Home
