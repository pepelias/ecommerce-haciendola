export const Currency = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

export const isEmail = (text) => {
  const regexp = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
  return regexp.test(text)
}
