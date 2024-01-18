import React from 'react'
import styles from './style'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ProjectionChart from './components/ProjectionChart'
import HistoryChart from './components/HistoryChart'
import Footer from './components/Footer'
import Table from './components/Table'
const App = () => {
  const inflationData = [
    { month: 'Jan', inflationRate: 3.5 },
    { month: 'Feb', inflationRate: 2.8 },
    { month: 'Mar', inflationRate: 3.2 },
    { month: 'Abr', inflationRate: 4.3 },
    { month: 'Mai', inflationRate: 1.8 },
    { month: 'Jun', inflationRate: 5.2 },
    { month: 'Jul', inflationRate: 5.5 },
    { month: 'Ago', inflationRate: 6.8 },
    { month: 'Set', inflationRate: 4.2 },
    { month: 'Out', inflationRate: 3.5 },
    { month: 'Nov', inflationRate: 3.1 },
    { month: 'Dez', inflationRate: 3.5 },
  ]

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
          className={`${styles.boxWidth} text-white lg:flex lg:flex-row lg:space-x-5 p-[30px] bg-[#070915] box-card mb-32 `}
        >
          <ProjectionChart />
          <HistoryChart />
        </div>
      </div>
      <div
        style={{
          borderRadius: '8px',
          marginTop: '90px',
        }}
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div
          style={{ borderRadius: '8px' }}
          className={`${styles.boxWidth} text-white lg:flex lg:flex-row lg:space-x-5 p-[10px] bg-[#070915] box-card mb-32  `}
        >
          <Table data={inflationData} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
