import { CustomerComponents } from "../../../features/customer"

export const CustomerRoutes = [
  {
    path: "/customer/",
    component: CustomerComponents.Dashboard,
  },
  {
    path: "/customer/profile",
    component: CustomerComponents.Profile,
  },
  {
    path: "/customer/vendor-manager",
    component: CustomerComponents.VendorManager,
  },
]
