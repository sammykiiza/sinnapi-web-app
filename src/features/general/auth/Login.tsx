import { Link } from "react-router-dom"
import Banner from "../banners/other-pages/Banner"

function Login() {
  return (
    <div className="grid grid-rows-2">
      <div className="col-span-1">
        <Banner pageTitle="Login" />
      </div>
      <form className="grid grid-cols-1 gap-y-4 -mt-8 pb-14 text-center justify-items-center max-w-7xl mx-auto">
        <h1 className="text-theme_secondary font-medium text-xl">
          Log into your account
        </h1>
        <div>
          <input
            placeholder="Email"
            className="bg-gray-100 h-10 rounded px-4 content-center border placeholder:text-xs focus:outline-none"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            className="bg-gray-100 h-10 rounded px-4 content-center border placeholder:text-xs focus:outline-none"
          />
        </div>
        <Link
          to={"/"}
          className="text-sm hover:text-theme_primary text-theme_secondary"
        >
          Forgot your password?
        </Link>
        <button className="text-white px-20 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm">
          Login
        </button>
        <div className="flex text-sm">
          <p>Are you a Customer?</p>
          <Link
            to={"/"}
            className="hover:text-theme_primary text-theme_secondary"
          >
            Join now
          </Link>
        </div>
        <div className="flex text-sm">
          <p>Are you a Vendor?</p>
          <Link
            to={"/"}
            className="hover:text-theme_primary text-theme_secondary"
          >
            Join now
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
