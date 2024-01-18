import React from 'react'
import styles from './style'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProjectionChart from './components/ProjectionChart'
import HistoryChart from './components/HistoryChart'
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Stats />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} mt-[90px] ${styles.flexStart}`}
      >
        <div
          style={{ borderRadius: '8px' }}
          className={`${styles.boxWidth} text-white lg:flex lg:flex-row lg:space-x-5 p-[30px] bg-[#070915] box-card `}
        >
          <ProjectionChart />
          <HistoryChart />
        </div>
      </div>
    </div>
  )
}

export default App
