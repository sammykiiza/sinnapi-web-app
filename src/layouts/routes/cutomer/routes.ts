import { CustomerComponents } from "../../../features/customer"

export const CustomerRoutes = [
  {
    path: "/customer",
    component: CustomerComponents.Dashboard,
  },
  {
    path: "profile",
    component: CustomerComponents.Profile,
  },
  {
    path: "vendor-manager",
    component: CustomerComponents.VendorManager,
  },
]
