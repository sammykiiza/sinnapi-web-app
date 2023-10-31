import { Link, useNavigate } from "react-router-dom"
import Banner from "../banners/other-pages/Banner"
import SelectBox from "../../../layouts/reusables/SelectBox"
import { selectBoxCategories } from "../../../utils/data"
import airtel from "/images/general/auth/vendor-signup/Airtel.png"
import mtn from "/images/general/auth/vendor-signup/MTN.png"

function VendorSignUp() {
  const navigate = useNavigate()
  const handleSignUp = () => {
    localStorage.setItem("loggedIn", "true")
    localStorage.setItem("userType", "vendor")
    navigate("/vendor")
  }
  return (
    <div className="grid grid-rows-[repeat(auto-fill,minmax(300px,1fr))]">
      <div className="col-span-1 row-span-1">
        <Banner pageTitle="Vendor Sign Up" />
      </div>
      <form className="grid grid-cols-2 gap-y-4 pb-14 text-center justify-items-center max-w-7xl mx-auto">
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
        <div className="col-span-2 space-y-4 md:space-x-4">
          <input
            placeholder="Full Name"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
          <input
            placeholder="Email"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
        </div>
        <div className="col-span-2 space-y-4 md:space-x-4">
          <input
            placeholder="Phone Number"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
          <input
            placeholder="Company Name"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none"
          />
        </div>
        <div className="col-span-2 space-y-4 md:space-y-0 md:space-x-4 md:flex md:w-full">
          <input
            placeholder="Company Address"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none"
          />
          <div className="col-span-2 md:col-span-1 w-full">
            <SelectBox
              data={selectBoxCategories}
              classNamePrefix="categories-vendor-signup"
              placeHolderLargeScreen="Category"
              placeHolderSmallScreen="Category"
              container
            />
          </div>
        </div>
        <div className="col-span-2 space-y-4 md:space-x-4">
          <input
            placeholder="Password"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none"
          />
          <input
            placeholder="Confirm Password"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none"
          />
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
          onClick={(e) => {
            e.preventDefault()
            handleSignUp()
          }}
          className="col-span-2 text-white px-20 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default VendorSignUp
