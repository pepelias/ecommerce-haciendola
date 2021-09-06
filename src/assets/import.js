const assets = require.context('./', true)
const Assets = (file) => {
  return assets(file.replaceAll(' ', '-')).default
}
export default Assets
