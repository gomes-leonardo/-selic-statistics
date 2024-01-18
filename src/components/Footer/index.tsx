import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from '../../style'

const Footer = () => {
  return (
    <footer className={`${styles.paddingY} text-white bg-[#070915]`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-center gap-[25px]">
        <p className={`${styles.paragraph} font-poppins mb-4 md:mb-0`}>
          © 2024 Leonardo Rodrigues Gomes
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/gomess-leonardo/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-300" />
          </a>
          <a
            href="https://github.com/gomes-leonardo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
