import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { TopEventsLisitingsCardProps, TopEventsVendorsCardProps } from "./types"

export const topEventsVendors: TopEventsVendorsCardProps[] = [
  {
    imageUrl: "/images/home/events-vendors/photography.jpg",
    vendorCategory: "Photography",
    vendorLocation: "Wakiso",
    iconName: "faCamera" as unknown as IconDefinition,
  },
  {
    imageUrl: "/images/home/events-vendors/decoration.jpg",
    vendorCategory: "Decoration",
    vendorLocation: "Kampala",
    iconName: "faCamera" as unknown as IconDefinition,
  },
  {
    imageUrl: "/images/home/events-vendors/venue.jpg",
    vendorCategory: "Venues",
    vendorLocation: "Kampala",
    iconName: "faPlaceOfWorship" as unknown as IconDefinition,
  },
  {
    imageUrl: "/images/home/events-vendors/jewellers.jpg",
    vendorCategory: "Jewellers",
    vendorLocation: "Kabale",
    iconName: "faGem" as unknown as IconDefinition,
  },
  {
    imageUrl: "/images/home/events-vendors/car-hire-services.jpg",
    vendorCategory: "Car Hire Services",
    vendorLocation: "Kampala",
    iconName: "faCar" as unknown as IconDefinition,
  },
]

export const topEventsListings: TopEventsLisitingsCardProps[] = [
  {
    imageUrl: "/images/home/events-listing/items/fashion.jpg",
    vendorCategory: "Fashion",
    vendorLocation: "Wakiso",
    iconName: "faCamera" as unknown as IconDefinition,
    vendorName: "Happy Events Fashions",
    reviews: 16,
  },
  {
    imageUrl: "/images/home/events-listing/items/photography.jpg",
    vendorCategory: "Photography",
    vendorLocation: "Kampala",
    iconName: "faCamera" as unknown as IconDefinition,
    vendorName: "Cool Photography",
    reviews: 22,
  },
  {
    imageUrl: "/images/home/events-listing/items/decoration.jpg",
    vendorCategory: "Decoration",
    vendorLocation: "Kampala",
    iconName: "faPlaceOfWorship" as unknown as IconDefinition,
    vendorName: "Lotus Florist",
    reviews: 18,
  },
  {
    imageUrl: "/images/home/events-listing/items/suits.jpg",
    vendorCategory: "Suits",
    vendorLocation: "Kabale",
    iconName: "faGem" as unknown as IconDefinition,
    vendorName: "Emerald Suits",
    reviews: 16,
  },
  {
    imageUrl: "/images/home/events-listing/items/cars.jpg",
    vendorCategory: "Car Hire Services",
    vendorLocation: "Kampala",
    iconName: "faCar" as unknown as IconDefinition,
    vendorName: "V&M Cars",
    reviews: 22,
  },
]
