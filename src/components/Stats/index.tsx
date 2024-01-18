import React from 'react'
import styles from '../../style'
import { stats as statsData } from '../../constants'
import Reveal from '../Reveal'

interface StatsItem {
  id: string
  title: string
  value: string
}

const Stats: React.FC = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {statsData.map((stat: StatsItem) => (
        <div
          key={stat.id}
          className={`flx-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs-text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs-text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}

      <div className="flex flex-row justify-between items-center w-full mt-[30%]">
        <Reveal>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Projeção e Histórico {''}
            <span className="text-gradient">SELIC</span>{' '}
          </h1>
        </Reveal>
        <div className="ss:flex hidden md:mr-4 mr-0"></div>
      </div>
    </section>
  )
}

export default Stats
