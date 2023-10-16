import React, { useEffect, useState } from "react"
import Map from "../../layouts/reusables/map/Map"
import CustomIcon from "../../layouts/reusables/icons/CustomIcon"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

function Contact() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateScreenWidth)
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])
  return (
    <div className="grid grid-rows-2">
      <Map key={screenWidth} className="-z-50" height={400} />
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-0 md:gap-x-8 justify-self-center absolute mt-72 max-w-7xl">
        <div className="bg-theme_primary text-white text-sm space-y-2 rounded-md text-center px-2 py-10">
          <CustomIcon
            type={"faPhone" as unknown as IconDefinition}
            className="text-xl"
          />
          <div>
            <p>Customer Support</p>
          </div>
          <div>
            <p>Call our 24-hour helpline</p>
          </div>
          <div className="hover:text-theme_secondary">
            <a href="tel:+256-700-988931">Phone Number: +256-700-988931</a>
          </div>
          <div className="hover:text-theme_secondary">
            <a href="mailto:info@sinnapi.com">Email Us: info@sinnapi.com</a>
          </div>
        </div>
        <div className="bg-theme_primary text-white text-sm space-y-2 rounded-md text-center px-2 py-10">
          <CustomIcon
            type={"faLocationDot" as unknown as IconDefinition}
            className="text-xl"
          />
          <div>
            <p>Our Address</p>
          </div>
          <div>
            <p>Our offices are located in Ntinda</p>
          </div>
          <div>
            <p>Address: TechBuzz Hub, 1st Floor,</p>
          </div>
          <div>
            <p>Ntinda, Kampala - Uganda</p>
          </div>
        </div>
        <div className="bg-theme_primary text-white text-sm space-y-2 rounded-md text-center px-4 py-10">
          <CustomIcon
            type={"faEnvelope" as unknown as IconDefinition}
            className="text-xl"
          />
          <div>
            <p>Other Enquiries</p>
          </div>
          <div>
            <p>Please contact us at the email below for all other enquiries.</p>
          </div>
          <div className="hover:text-theme_secondary">
            <a href="mailto:info@sinnapi.com">Email Us: info@sinnapi.com</a>
          </div>
        </div>
      </div>
      <form className="space-y-4 -mt-16 md:mt-4 mb-16 items-center grid grid-cols-1 justify-items-center max-w-7xl mx-auto">
        <h1 className="text-theme_secondary text-center text-2xl">
          Feel Free To Contact Us
        </h1>
        <h3 className="text-gray-400 text-sm text-center">
          Please fill out the form below and we shall get back to you
        </h3>
        <div className="grid grid-cols-2 w-full px-4 md:px-0 gap-y-2 md:gap-y-0 md:gap-x-4 items-center">
          <input
            placeholder="Full Name"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
          <input
            placeholder="Mobile No."
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
        </div>
        <div className="grid grid-cols-2 w-full px-4 md:px-0 gap-y-2 md:gap-y-0 md:gap-x-4 items-center">
          <input
            placeholder="Email"
            className="col-span-2 md:col-span-1 bg-gray-100 h-10 rounded px-4 content-center border-gray-300 placeholder:text-xs focus:outline-none focus:ring-0 focus:border-gray-300"
          />
          <div className="col-span-2 md:col-span-1 flex flex-row items-center justify-evenly">
            <span className="text-gray-500 text-sm">Category</span>
            <div className="space-x-4 flex">
              <div className="space-x-1">
                <input
                  type="checkbox"
                  id="customer-category"
                  className="h-[0.6rem] checked:accent-theme_secondary focus:outline-none checked:text-white"
                  defaultChecked
                  name="contact-category"
                />
                <label
                  htmlFor="customer-category"
                  className="text-gray-500 text-sm"
                >
                  Customer
                </label>
              </div>
              <div className="space-x-1">
                <input
                  type="checkbox"
                  id="vendor-category"
                  className="h-[0.6rem] checked:accent-theme_secondary focus:outline-none"
                  defaultChecked
                  name="contact-category"
                />
                <label
                  htmlFor="vendor-category"
                  className="text-gray-500 text-sm"
                >
                  Vendor
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:px-0">
          <textarea
            placeholder="Your Message"
            rows={8}
            className="bg-gray-100 w-full p-2 border-gray-300 placeholder:text-xs focus:outline-none  focus:ring-0 focus:border-gray-300"
          />
        </div>
        <button className="text-white px-3 py-2 mx-auto rounded-md bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
