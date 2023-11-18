import { createApi } from "@reduxjs/toolkit/query/react"
import baseQuerywithReauth from "../auth/baseQuerywithReauth"
import { BusinessProfileUpdate } from "../../utils/types"

export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: baseQuerywithReauth,
  endpoints: (builder) => ({
    updateBusinessProfile: builder.mutation<any, BusinessProfileUpdate>({
      query(businessProfileUpdate) {
        return {
          url: `vendor/update-business-profile/${businessProfileUpdate.businessId}`,
          method: "PUT",
          body: businessProfileUpdate,
        }
      },
    }),
  }),
})

export const { useUpdateBusinessProfileMutation } = vendorApi
