import FileUploaderCircleWithText from "../../../layouts/reusables/file-uploaders/FileUploaderCircleWithText"

function Profile() {
  return (
    <div className="flex flex-col gap-y-14 mt-2 lg:mt-0 mb-20 md:px-10 xl:px-32">
      <div>
        <h1 className="text-3xl px-2 md:px-0 text-theme_primary font-theme_secondary_bold">
          My Profile
        </h1>
      </div>
      <div className="bg-white md:rounded-md flex flex-col py-4 divide-y-2 shadow-xl">
        <div className="text-lg px-6 py-4 font-theme_secondary_bold font-bold">
          Customer Profile
        </div>
        <div className="flex flex-col md:px-6 pb-8">
          <FileUploaderCircleWithText />
          <form className="w-full grid grid-cols-6 px-2 md:px-0 gap-4">
            <div className="col-span-6 md:col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full profile-input"
              />
            </div>
            <div className="col-span-6 md:col-span-2">
              <input
                type="text"
                placeholder="Email"
                className="w-full profile-input"
              />
            </div>
            <div className="col-span-6 md:col-span-2">
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full profile-input"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                placeholder="Address"
                className="w-full profile-input"
              />
            </div>
            <div className="col-span-6">
              <textarea
                className="w-full rounded-md bg-gray-100 border-gray-300 placeholder:text-gray-400 text-sm px-4 focus:outline-none focus:ring-0 focus:border-gray-300"
                placeholder="About me"
                name=""
                rows={10}
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-3 md:col-span-2 xl:col-span-1 font-theme_secondary_bold text-xs md:px-3 py-2 whitespace-nowrap text-center rounded-full text-white bg-theme_secondary hover:bg-theme_primary"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
