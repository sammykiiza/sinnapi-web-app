import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import {
  CustomerRoutes,
  GeneralRoutes,
  VendorRoutes,
  indexRoute,
} from "./layouts/routes"
import NoMatch from "./features/error-components/NoMatch"
import { indexRouteCustomer } from "./layouts/routes/cutomer/indexRoute"
import { indexRouteVendor } from "./layouts/routes/vendor/indexRouteVendor"
import { checkAuth } from "./services/auth/useAuth"

export default function App() {
  const userTypeLocaStorage = localStorage.getItem("userType")
  const userType = userTypeLocaStorage ? userTypeLocaStorage : "customer"
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
      {userType === "customer" && checkAuth() ? (
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
      ) : (
        <Route
          path="/customer/*"
          element={<Navigate to={"/login"} replace />}
        />
      )}
      {userType === "vendor" && checkAuth() ? (
        <Route
          path={VendorRoutes[0].path}
          element={indexRouteVendor.component()}
        >
          {VendorRoutes.map((route, key) => (
            <Route
              index={route.path === "/vendor" ? true : false}
              path={route.path}
              element={route.component()}
              key={key}
            />
          ))}
        </Route>
      ) : (
        <Route path="/vendor/*" element={<Navigate to={"/login"} replace />} />
      )}

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
