import { Route, Routes } from "react-router-dom"
import {
  CustomerRoutes,
  GeneralRoutes,
  VendorRoutes,
  indexRoute,
} from "./layouts/routes"
import Customer from "./features/customer/Customer"
import NoMatch from "./features/error-components/NoMatch"

export default function App() {
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
      <Route path="/customer" element={<Customer />}>
        {CustomerRoutes.map((route, key) => (
          <Route path={route.path} element={route.component()} key={key} />
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
