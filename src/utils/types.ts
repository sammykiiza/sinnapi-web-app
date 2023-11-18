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

export type LoginResponse = string[]

export interface LoginData {
  email: string
  password: string
}

export interface BusinessProfileUpdate {
  businessId: number
  businessName: string | null | undefined
  businessDescription: string | null | undefined
  businesssWebsite: string | null | undefined
  latitude: number | null | undefined
  longitude: number | null | undefined
  businessVideo: string | null | undefined
  brandImage: string | null | undefined
  profileImage: string | null | undefined
  galleryImages: string | string[] | null | undefined
}

export interface VendorRegisterData {
  email: string
  fullName: string
  phoneNumber: string
  password: string
  businessName: string
  categoryName: string
  address: string
  nationalId: File | null
  certificateOfIncorporation: File | null
}
