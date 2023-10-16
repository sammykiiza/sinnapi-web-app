import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "/images/footer/logo/logo.png"
import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="bg-theme_black text-white font-theme_secondary_light md:h-96">
      <div className="grid grid-cols-1 md:grid-cols-9 max-md:gap-y-10 max-lg:px-8 max-lg:py-6 content-center md:justify-items-center max-w-7xl mx-auto h-full">
        <div className="col-span-1 md:max-lg:px-3 lg:max-xl:pl-3 w-32 md:max-lg:w-36 lg:w-auto">
          <div className="">
            <img src={logo} alt="sinnapi" />
          </div>
          <div className="text-xs">
            At Sinnapi, our purpose is to help people find great online network
            connecting event suppliers
          </div>
          <div className="mt-3">
            <button className="text-white text-sm font-theme_secondary_bold bg-theme_secondary hover:bg-theme_primary rounded-md px-3 py-2">
              Know More
            </button>
          </div>
        </div>
        <div className="hidden md:block col-span-1 md:col-span-2">
          <h3 className="font-theme_secondary_bold">Categories</h3>
          <ul className="text-gray-400 ml-4 mt-4 space-y-3 text-sm list-image-[url('/images/footer/chevron-right-solid.svg')]">
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Venue</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Suits</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Decoration</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Cakes</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Photography</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Music Systems</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block col-span-1 md:col-span-2">
          <h3 className="font-theme_secondary_bold">Locations</h3>
          <ul className="text-gray-400 ml-4 mt-4 space-y-3 text-sm list-image-[url('/images/footer/chevron-right-solid.svg')]">
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Kampala</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Jinja</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Fort Portal</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Tororo</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Wakiso</Link>
            </li>
            <li className="hover:text-theme_secondary">
              <Link to={"/"}>Kabale</Link>
            </li>
          </ul>
        </div>
        <div className="font-theme_secondary_light col-span-1 md:col-span-2 md:max-lg:px-4">
          <h3 className="font-theme_secondary_bold">Contact Us</h3>
          <div className="text-gray-400 text-sm">
            <p>TechBuzz Hub</p>
            <p>1st Floor</p>
            <p>Ntinda, Kampala - Uganda</p>
          </div>
          <div className="text-gray-400 my-2 text-sm hover:text-theme_secondary">
            <a href="tel:+256 700 988931">Call: +256 700 988931</a>
          </div>
          <div className="text-gray-400 my-2 text-sm hover:text-theme_secondary">
            <a href="mailto:info@sinnapi.com">Mail : info@sinnapi.com</a>
          </div>
          <div className="space-x-1">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="bg-gray-600 hover:bg-theme_secondary py-1 px-2 text-sm"
              />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faXTwitter}
                className="bg-gray-600 hover:bg-theme_secondary p-1 text-sm"
              />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                className="bg-gray-600 hover:bg-theme_secondary p-1 text-sm"
              />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="bg-gray-600 hover:bg-theme_secondary p-1 text-sm"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <div>
            <h3 className="font-theme_secondary_bold">Newsletter</h3>
          </div>
          <div className="text-gray-400 text-xs mt-8">
            Subscribe to our newsletter to receive exclusive offers and events
            tips.
          </div>
          <div className="mt-4">
            <form className="flex flex-col justify-start space-y-2">
              <input
                placeholder="Enter Email Address"
                className="bg-white text-theme_black text-sm rounded-md p-2 placeholder:text-xs placeholder:text-theme_black w-44 focus:ring-0 focus:outline-0"
              />
              <button
                type="submit"
                className="text-white text-xs font-theme_secondary_bold bg-theme_secondary hover:bg-theme_primary w-24 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
