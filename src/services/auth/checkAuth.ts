export const checkAuth = (): boolean => {
  const loggedIn = localStorage.getItem("loggedIn")
  if (loggedIn) {
    if (loggedIn === "true") {
      return true
    } else if (loggedIn === "false") {
      return false
    }
  }
  return true
}
