const Store = new (class {
  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      return value
    } catch (err) {
      console.error(err)
      return value
    }
  }

  get(key, defaultValue) {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch (err) {
      console.error(err)
      return defaultValue
    }
  }
})()
export default Store
