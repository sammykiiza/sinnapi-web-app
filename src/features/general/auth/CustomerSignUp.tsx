import { Link, useNavigate } from "react-router-dom"
import Banner from "../banners/other-pages/Banner"
import { useAppDispatch } from "../../../app/hooks"
import { authState, setUserType } from "../../../services/auth/authSlice"

function CustomerSignUp() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className="grid grid-rows-[repeat(auto-fill,minmax(300px,1fr))]">
      <div className="col-span-1 row-span-1">
        <Banner pageTitle="Customer Sign Up" />
      </div>
      <form className="grid grid-cols-2 gap-y-4 pb-14 text-center justify-items-center max-w-7xl mx-auto">
        <div className="col-span-2 flex flex-col">
          <h1 className="px-4 text-theme_secondary font-medium text-xl">
            Register Customer Account Here
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
            placeholder="Password"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
        </div>
        <div className="col-span-2">
          <input
            placeholder="Confirm Password"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
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
          onClick={() => {
            localStorage.setItem("loggedIn", "true")
            dispatch(
              setUserType({ userType: "customer" } as unknown as authState),
            )
            localStorage.setItem("userType", "customer")
            navigate("/customer")
          }}
          className="col-span-2 text-white px-20 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default CustomerSignUp
