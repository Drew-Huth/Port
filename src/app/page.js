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
        <link rel="icon" type="image/svg" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240px%22%20height%3D%2240px%22%20fillRule%3D%22evenodd%22%20fill%3D%22%23c59b5e%22%20clipRule%3D%22evenodd%22%20imageRendering%3D%22optimizeQuality%22%20shapeRendering%3D%22geometricPrecision%22%20textRendering%3D%22geometricPrecision%22%20viewBox%3D%220%200%20500000%20512000%22%20id%3D%22d-letter%22%3E%3Cpath%20className%3D'pathPad'%20d%3D%22M210146%20178812h92282s68195%208244%2068195%2077188-66696%2078686-66696%2078686h-93781V178812zm-99564%20271563v465h203836s92178-7494%20143136-66696%2050209-125148%2050209-125148%206744-87678-64449-149129c-39905-34445-86633-45579-120003-48712h-44114l-69145%20306H4065v115383h81685v273530h24833z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"></link>
          <NavBar/>
          <LandingPage/>
          <AboutMe/>
          <ExperiencePage/>
          <ContactMe/>
      </div>
    )
}
