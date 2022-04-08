import type { NextPage } from 'next'
import NavbarComponent from "../components/navbarComponent";
import ScheduleContent from "../components/scheduleContent/scheduleContent";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
      <>
          <NavbarComponent/>
          <ScheduleContent/>
          <Footer/>
      </>
  )
}

export default Home
