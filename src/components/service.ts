export const getMockData = () => {
  const currentYear = new Date().getFullYear()
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const mockData = months.map((month) => ({
    month: `${month.substring(0, 3)} de ${String(currentYear).substring(2)}`,
    inflationRate: (Math.random() * 1.5 - 0.5).toFixed(2),
  }))

  return mockData
}
