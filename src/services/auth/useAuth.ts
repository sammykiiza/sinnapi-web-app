import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const checkAuth = (): boolean => {
  const loggedIn = localStorage.getItem("loggedIn")
  if (loggedIn) {
    if (loggedIn === "true") {
      return true
    } else if (loggedIn === "false") {
      return false
    }
  }
  return false
}

export const useAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/login", { state: { from: location } })
    }
  }, [location, navigate])
}
