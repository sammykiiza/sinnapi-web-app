import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  ListingsData,
  TopEventsLisitingsCardProps,
  TopEventsVendorsCardProps,
} from "./types"

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
// {
//   imageUrl: "/images/home/events-vendors/car-hire-services.jpg",
//   vendorCategory: "Car Hire Services",
//   vendorLocation: "Kampala",
//   iconName: "faCar" as unknown as IconDefinition,
// },

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

// {
//   imageUrl: "/images/home/events-listing/items/cars.jpg",
//   vendorCategory: "Car Hire Services",
//   vendorLocation: "Kampala",
//   iconName: "faCar" as unknown as IconDefinition,
//   vendorName: "V&M Cars",
//   reviews: 22,
// },

export const vendorCategoriesSelectData = [
  { value: "wedding-gowns", label: "Wedding Gowns" },
  { value: "cakes", label: "Cakes" },
  { value: "venues", label: "Venues" },
  { value: "music-systems", label: "Music Systems" },
  { value: "decoration", label: "Decoration" },
  { value: "jewellers", label: "Jewellers" },
  { value: "car-hire-services", label: "Car Hire Services" },
  { value: "catering-services", label: "Catering Services" },
  { value: "bridal-salons", label: "Bridal Salons" },
  { value: "suits", label: "Suits" },
  { value: "photography", label: "Photography" },
  { value: "make-up-services", label: "Make-Up Services" },
]

export const ratingSelectDropDown = [{ value: "top-rated", label: "Top Rated" }]

export const selectBoxCategories = [
  { value: "photography", label: "Photography" },
  { value: "decoration", label: "Decoration" },
]

export const listingsData: ListingsData[] = [
  {
    imageUrl: "/images/vendor/listings/listing-1.jpg",
    title: "Muliika Events Photography",
    location: "Kampala",
    dateAdded: "January 18, 2023",
    status: "Pending",
  },
  {
    imageUrl: "/images/vendor/listings/listing-2.jpg",
    title: "KML Car Hire Services",
    location: "Fort Portal",
    dateAdded: "March 20, 2023",
    status: "Publish",
  },
  {
    imageUrl: "/images/vendor/listings/listing-3.jpg",
    title: "Kavumba Recreation",
    location: "Wakiso",
    dateAdded: "April 15, 2023",
    status: "Draft",
  },
  {
    imageUrl: "/images/vendor/listings/listing-4.jpg",
    title: "Eternal Spark Jewels",
    location: "Kabale",
    dateAdded: "May 27, 2023",
    status: "Awaiting Approval",
  },
  {
    imageUrl: "/images/vendor/listings/listing-5.jpg",
    title: "Sugar Bliss Confectionary",
    location: "Wakiso",
    dateAdded: "June 13, 2023",
    status: "Removed",
  },
]
