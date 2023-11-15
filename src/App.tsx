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
import { checkAuth } from "./services/auth/checkAuth"

export default function App() {
  const userTypeLocaStorage = localStorage.getItem("userType")
  const userType = userTypeLocaStorage ? userTypeLocaStorage : "customer"
  return (
    <Routes>
      <Route path={indexRoute.path} element={<indexRoute.component />}>
        {GeneralRoutes.map((route, key) => (
          <Route
            index={route.path === "" ? true : false}
            path={route.path}
            element={<route.component />}
            key={key}
          />
        ))}
      </Route>
      {userType === "customer" && checkAuth() === true ? (
        <Route
          path={indexRouteCustomer.path}
          element={<indexRouteCustomer.component />}
        >
          {CustomerRoutes.map((route, key) => (
            <Route
              index={route.path === "customer" ? true : false}
              path={route.path}
              element={<route.component />}
              key={key}
            />
          ))}
        </Route>
      ) : checkAuth() === false ? (
        <Route
          path="/customer/*"
          element={<Navigate to={"/login"} replace />}
        />
      ) : (
        <></>
      )}
      {userType === "vendor" && checkAuth() === true ? (
        <Route
          path={indexRouteVendor.path}
          element={<indexRouteVendor.component />}
        >
          {VendorRoutes.map((route, key) => (
            <Route
              index={route.path === "vendor" ? true : false}
              path={route.path}
              element={<route.component />}
              key={key}
            />
          ))}
        </Route>
      ) : checkAuth() === false ? (
        <Route path="/vendor/*" element={<Navigate to={"/login"} replace />} />
      ) : (
        <></>
      )}

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
