export const Currency = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

export const isEmail = (text) => {
  const regexp = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
  return regexp.test(text)
}

const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]
export const formatDateOfBackend = (str) => {
  const segments = str.split('/')
  return `el ${segments[1]} de ${MONTHS[segments[0]]} del ${segments[2]}`
}
