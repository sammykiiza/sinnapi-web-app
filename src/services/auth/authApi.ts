import { createApi } from "@reduxjs/toolkit/dist/query/react"
import baseQuerywithReauth from "./baseQuerywithReauth"
import { LoginData, LoginResponse, VendorRegisterData } from "../../utils/types"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuerywithReauth,
  endpoints: (builder) => ({
    vendorLogin: builder.mutation<LoginResponse, LoginData>({
      query(loginData) {
        return {
          url: "vendor/login",
          method: "POST",
          body: loginData,
        }
      },
      transformResponse: (response: { data: { roles: LoginResponse } }) =>
        response.data.roles,
    }),
    vendorRegister: builder.mutation<any, VendorRegisterData>({
      query(vendorRegisterData) {
        return {
          url: "vendor/register",
          method: "POST",
          body: vendorRegisterData,
        }
      },
    }),
    customerLogin: builder.mutation<LoginResponse, LoginData>({
      query(loginData) {
        return {
          url: "customer/login",
          method: "POST",
          body: loginData,
        }
      },
      transformResponse: (response: { data: { roles: LoginResponse } }) =>
        response.data.roles,
    }),
    adminLogin: builder.mutation<LoginResponse, LoginData>({
      query(loginData) {
        return {
          url: "admin/login",
          method: "POST",
          body: loginData,
        }
      },
      transformResponse: (response: { data: { roles: LoginResponse } }) =>
        response.data.roles,
    }),
  }),
})

export const {
  useVendorLoginMutation,
  useVendorRegisterMutation,
  useCustomerLoginMutation,
  useAdminLoginMutation,
} = authApi
