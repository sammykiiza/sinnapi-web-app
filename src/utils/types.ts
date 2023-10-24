import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ComponentProps } from "react"

export interface TopEventsLisitingsCardProps extends TopEventsVendorsCardProps {
  vendorName?: string
  reviews?: number
}

export interface TopEventsVendorsCardProps {
  imageUrl: string
  vendorCategory?: VendorCategory
  vendorLocation?: string
  iconName: IconDefinition
}

export type VendorCategory =
  | "Photography"
  | "Decoration"
  | "Car Hire Services"
  | "Venues"
  | "Jewellers"
  | "Suits"
  | "Fashion"
  | "Cakes"
  | "Wedding Gowns"
  | "Music Systems"

export type FileUPloaderProps = {
  defaultImage?: string
} & ComponentProps<"div">

export interface ListingsData {
  imageUrl: string
  title: string
  location: string
  dateAdded: string
  status: ListingStatus
}

export type ListingStatus =
  | "Pending"
  | "Publish"
  | "Draft"
  | "Awaiting Approval"
  | "Removed"
