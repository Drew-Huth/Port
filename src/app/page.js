import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/NavBar/index.js'
import LandingPage from './components/LandingPage/index.js'
import AboutMe from './components/AboutMe/index.js'
import ExperiencePage from './components/ExperiencePage/index.js'
import ContactMe from './components/ContactMe/index.js'

export default function Home() {
  return (
      <div className={styles.app}>
          <NavBar/>
          <LandingPage/>
          <AboutMe/>
          <ExperiencePage/>
          <ContactMe/>
      </div>
    )
}
