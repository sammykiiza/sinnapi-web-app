import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

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
