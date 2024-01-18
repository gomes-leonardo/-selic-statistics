import React from 'react'
import Reveal from '../Reveal'

const Table = ({ data }) => {
  return (
    <div className="w-full m-auto">
      <div className=" text-center items-center w-full m-auto">
        <Reveal>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Projeção Inflação <span className="text-gradient">2024</span> {''}
          </h1>
        </Reveal>
        <div className="ss:flex hidden md:mr-4 mr-0"></div>
      </div>
      <div className="overflow-x-auto text-start  mb-[7.5rem] p-9">
        <table
          style={{
            borderRadius: '8px',
            marginTop: '90px',
          }}
          className="  min-w-[80%] m-auto bg-table-gradient box-card"
        >
          <thead>
            <tr>
              <th className="py-5 px-4  text-start">Mês</th>
              <th className="py-5 px-4  text-start">IPCA no Mês</th>
              <th className="py-5 px-4  text-start">IPCA ACUMULADO 12 MESES</th>
              <th className="py-5 px-4  text-start">IPCA ACUMULADO 2024</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? 'bg-[#070915]' : 'bg-table-gradient'
                }
              >
                <td className="py-2 px-4 ">{item.month}</td>
                <td className="py-2 px-4 ">{item.inflationRate}</td>
                <td className="py-2 px-4 ">{item.inflationRate}</td>
                <td className="py-2 px-4 ">{item.inflationRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
