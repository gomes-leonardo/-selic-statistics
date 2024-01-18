import React from 'react'
import styles from '../../style'
import animation from '../../assets/phone.json'
import Lottie from 'lottie-react'
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Projeção <br className="sm:block hidden" />{' '}
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Histórico
            </h1>
            <span className="text-gradient">SELIC</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-8`}>
          Bem-vindo à sua visão personalizada da projeção e histórico da Taxa
          Selic. Explore as tendências futuras e reviva os acontecimentos do
          último ano que influenciaram a principal taxa de juros da economia
          brasileira.
        </p>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <a
              href="https://www.bcb.gov.br/controleinflacao/taxaselic"
              target="_blank"
              rel="noreferrer"
            >
              Saiba mais sobre a taxa Selic
            </a>
          </p>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Lottie animationData={animation} />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  )
}

export default Hero
