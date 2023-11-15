import { GeneralComponents } from "../../../features/general"

export const GeneralRoutes = [
  {
    path: "",
    component: GeneralComponents.Home,
  },
  {
    path: "listing-with-map",
    component: GeneralComponents.VendorListings.ListingWithMap,
  },
  {
    path: "listing-singular",
    component: GeneralComponents.VendorListings.ListingSingular,
  },
  {
    path: "vendors",
    component: GeneralComponents.Vendors,
  },
  {
    path: "contact-us",
    component: GeneralComponents.Contact,
  },
  {
    path: "login",
    component: GeneralComponents.Login,
  },
  {
    path: "customer-signup",
    component: GeneralComponents.CustomerSignUp,
  },
  {
    path: "vendor-signup",
    component: GeneralComponents.VendorSignUp,
  },
]
