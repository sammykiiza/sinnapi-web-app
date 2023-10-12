import { GeneralComponents } from "../../../features/general"

export const GeneralRoutes = [
  {
    path: "/",
    component: GeneralComponents.Home,
  },
  {
    path: "/contact",
    component: GeneralComponents.Contact,
  },
  {
    path: "/listing-with-map",
    component: GeneralComponents.VendorListings.ListingWithMap,
  },
  {
    path: "/contact-us",
    component: GeneralComponents.Contact,
  },
]
