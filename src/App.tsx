import { Route, Routes, useLocation } from "react-router-dom"
import {
  CustomerRoutes,
  GeneralRoutes,
  VendorRoutes,
  indexRoute,
} from "./layouts/routes"
import Customer from "./features/customer/Customer"
import NoMatch from "./features/error-components/NoMatch"
import { useEffect } from "react"
import { indexRouteCustomer } from "./layouts/routes/cutomer/indexRoute"

export default function App() {
  var pathName = useLocation().pathname
  useEffect(() => {
    if (pathName === "/") {
      pathName = "Home"
    } else if (pathName !== "Home") {
      pathName = pathName.slice(1)
    }
    document.title = `Sinnapi | ${pathName}`
  }, [pathName])
  return (
    <Routes>
      <Route path={GeneralRoutes[0].path} element={indexRoute.component()}>
        {GeneralRoutes.map((route, key) => (
          <Route
            index={route.path === "/" ? true : false}
            path={route.path}
            element={route.component()}
            key={key}
          />
        ))}
      </Route>
      <Route
        path={CustomerRoutes[0].path}
        element={indexRouteCustomer.component()}
      >
        {CustomerRoutes.map((route, key) => (
          <Route
            index={route.path === "/customer" ? true : false}
            path={route.path}
            element={route.component()}
            key={key}
          />
        ))}
      </Route>
      <Route path="/vendor" element={<Customer />}>
        {VendorRoutes.map((route, key) => (
          <Route path={route.path} element={route.component()} key={key} />
        ))}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
