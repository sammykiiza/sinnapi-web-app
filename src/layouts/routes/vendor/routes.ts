import { VendorComponents } from "../../../features/vendor"

export const VendorRoutes = [
  {
    path: "/vendor",
    component: VendorComponents.Dashboard,
  },
  {
    path: "profile",
    component: VendorComponents.Profile,
  },
  {
    path: "listings",
    component: VendorComponents.Listings.MyListings,
  },
  {
    path: "reviews",
    component: VendorComponents.Reviews,
  },
]
