import { Link } from "react-router-dom"
import Banner from "../banners/other-pages/Banner"
import { customSelectOptions } from "../../../utils/data"
import airtel from "/images/general/auth/vendor-signup/Airtel.png"
import mtn from "/images/general/auth/vendor-signup/MTN.png"
import CustomSelect from "../../../layouts/reusables/CustomSelect"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { VendorRegisterData } from "../../../utils/types"
import { useVendorRegisterMutation } from "../../../services/auth/authApi"
import { toast } from "react-toastify"

function VendorSignUp() {
  const [category, setCategory] = useState("")
  const [nationalId, setNationalId] = useState<File | null>(null)
  const [certificateOfIncorporation, setCertificateOfIncorporation] =
    useState<File | null>(null)
  const [vendorRegister] = useVendorRegisterMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VendorRegisterData>()

  const handleSignUp: SubmitHandler<VendorRegisterData> = async (data) => {
    data.categoryName = category
    data.nationalId = nationalId
    data.certificateOfIncorporation = certificateOfIncorporation

    const vendorRegisterData: VendorRegisterData = {
      email: data.email,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      password: data.password,
      businessName: data.businessName,
      categoryName: data.categoryName,
      address: data.address,
      nationalId: data.nationalId,
      certificateOfIncorporation: data.certificateOfIncorporation,
    }
    await vendorRegister(vendorRegisterData)
      .unwrap()
      .then(() => {
        reset()
        toast("successfully logged in")
      })
      .catch((error) => {
        toast(error.error)
      })
  }
  return (
    <div className="grid grid-rows-[repeat(auto-fill,minmax(300px,1fr))]">
      <div className="col-span-1 row-span-1">
        <Banner pageTitle="Vendor Sign Up" />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="grid grid-cols-2 gap-y-4 pb-14 text-center justify-items-center max-w-7xl mx-auto"
        encType="multipart/form-data"
      >
        <div className="col-span-2 flex flex-col">
          <h1 className="px-4 text-theme_secondary font-medium text-xl">
            Register Vendor Account Here
          </h1>
          <h3 className="text-gray-400 text-sm text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-theme_secondary">
              Log in
            </Link>
          </h3>
        </div>
        <div className="col-span-2 grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-4">
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Full Name"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300 text-gray-500"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.fullName?.message}
              </div>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Email"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300 text-gray-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.email?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-4">
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Phone Number"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300 text-gray-500"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
            {errors.phoneNumber && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.phoneNumber?.message}
              </div>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Business Name"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none text-gray-500"
              {...register("businessName", {
                required: "Business Name is required",
              })}
            />
            {errors.businessName && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.businessName?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 md:w-full md:-ml-2">
          <div className="col-span-2 md:col-span-1 w-full">
            <input
              placeholder="Business Address"
              className=" bg-gray-100 h-10 rounded border-gray-300 placeholder:text-xs focus:outline-none text-gray-500"
              {...register("address", {
                required: "Business Address is required",
              })}
            />
            {errors.address && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.address?.message}
              </div>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 grd grid-cols-1 md:w-full">
            <CustomSelect
              options={customSelectOptions}
              onChange={(e) => {
                setCategory(e)
              }}
              key={category}
              value={category}
              className="col-span-1 w-full bg-gray-100 h-10 rounded border-gray-300 focus:outline-none text-xs text-gray-500"
            />
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 space-y-4 md:space-y-0 md:space-x-4">
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Password"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none text-gray-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              placeholder="Confirm Password"
              className=" bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none text-gray-500"
            />
          </div>
        </div>
        <div className="col-span-2 md:grid md:grid-cols-2 space-y-4 w-full">
          <div
            className={
              "flex flex-col items-center md:items-start justify-center space-y-2 text-gray-600 text-sm font-theme_secondary_light "
            }
          >
            <label
              htmlFor={`file-upload-id`}
              className="text-gray-800 text-sm self-start md:self-auto px-6 md:px-0 font-theme_secondary_bold"
            >
              National ID
            </label>
            <input
              type="file"
              id={`file-upload-id`}
              {...register("nationalId", {
                required: "National ID is required",
                onChange(event: React.ChangeEvent<HTMLInputElement>) {
                  event.target.files && setNationalId(event.target.files[0])
                },
              })}
            />
            {errors.nationalId && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.nationalId?.message}
              </div>
            )}
          </div>
          <div
            className={
              "flex flex-col items-center md:items-start justify-center space-y-2 text-gray-600 text-sm font-theme_secondary_light "
            }
          >
            <label
              htmlFor={`file-upload-id`}
              className="text-gray-800 text-sm self-start md:self-auto px-6 md:px-0 font-theme_secondary_bold"
            >
              Certificate of Incorporation
            </label>
            <input
              type="file"
              id={`file-upload-certificate`}
              {...register("certificateOfIncorporation", {
                required: "Certificate of Incorporation is required",
                onChange(event: React.ChangeEvent<HTMLInputElement>) {
                  event.target.files &&
                    setCertificateOfIncorporation(event.target.files[0])
                },
              })}
            />
            {errors.certificateOfIncorporation && (
              <div className="text-xs text-red-500 text-left px-2 py-1 font-theme_secondary_light">
                {errors.certificateOfIncorporation.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 justify-self-center md:justify-self-start font-theme_secondary_light flex flex-row px-4 space-x-2 md:space-x-8 items-center justify-stretch">
          <span className="text-theme_black text-sm">
            Subscription Payment:
          </span>
          <div className="space-x-4 flex">
            <div className="flex">
              <input
                type="radio"
                id="vendor-payment-airtel"
                name="vendor-signup-airtel"
              />
              <label htmlFor="vendor-payment-airtel">
                <img src={airtel} alt="airtel" className="h-10" />
              </label>
            </div>
            <div className="space-x-4 flex">
              <input
                type="radio"
                id="vendor-payment-mtn"
                name="vendor-signup-mtn"
              />
              <label
                htmlFor="vendor-payment-mtn"
                className="text-gray-500 text-sm"
              >
                <img src={mtn} alt="mtn" className="h-10" />
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4 flex justify-center font-theme_secondary_light text-theme_black text-sm">
          <p>
            By Clicking 'Sign Up', You agree to Sinnapi's{" "}
            <Link
              to={"/"}
              className="hover:text-theme_primary text-theme_secondary"
            >
              {" "}
              Privacy Policy{" "}
            </Link>{" "}
            and{" "}
            <Link
              to={"/"}
              className="hover:text-theme_primary text-theme_secondary"
            >
              {" "}
              Terms of Use
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="col-span-2 text-white px-20 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default VendorSignUp
