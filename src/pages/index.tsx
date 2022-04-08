import type { NextPage } from 'next'
import NavbarComponent from "../components/navbarComponent";
import ScheduleContent from "../components/scheduleContent/scheduleContent";

const Home: NextPage = () => {
  return (
      <>
      <NavbarComponent/>
      <ScheduleContent/>
      </>
  )
}

export default Home
