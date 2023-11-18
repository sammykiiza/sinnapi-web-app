import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import Banner from "../banners/other-pages/Banner"
import { LoginData } from "../../../utils/types"
import { useVendorLoginMutation } from "../../../services/auth/authApi"
import { toast } from "react-toastify"

function Login() {
  const [login] = useVendorLoginMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>()

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    await login(data)
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
    <div className="grid grid-rows-2">
      <div className="row-span-1">
        <Banner pageTitle="Login" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-4 -mt-8 pb-14 text-center justify-items-center max-w-7xl mx-auto"
      >
        <h1 className="text-theme_secondary font-medium text-xl">
          Log into your account
        </h1>
        <div className="flex flex-col gap-y-2">
          <input
            placeholder="Email"
            className="bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="self-start text-red-500 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <input
            placeholder="Password"
            type="password"
            className="bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="self-start text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <Link
          to={"/"}
          className="text-sm hover:text-theme_primary text-theme_secondary"
        >
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="text-white px-20 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm"
        >
          Login
        </button>
        <div className="flex text-sm">
          <p>Are you a Customer?</p>
          <Link
            to={"/customer-signup"}
            className="hover:text-theme_primary text-theme_secondary"
          >
            Join now
          </Link>
        </div>
        <div className="flex text-sm">
          <p>Are you a Vendor?</p>
          <Link
            to={"/vendor-signup"}
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
