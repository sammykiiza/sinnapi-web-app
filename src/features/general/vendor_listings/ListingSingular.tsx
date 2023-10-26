import { useRef, useState } from "react"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import CustomIcon from "../../../layouts/reusables/icons/CustomIcon"
import { Link } from "react-router-dom"
import RatingComponent from "../../../layouts/reusables/RatingComponent"
import ProgressBar from "../../../layouts/reusables/ProgressBar"
import SelectBox from "../../../layouts/reusables/SelectBox"
import { sortingByData, topEventsListings } from "../../../utils/data"
import Map from "../../../layouts/reusables/map/Map"
import CustomDatePicker from "../../../layouts/reusables/CustomDatePicker"
import CustomCalendar from "../../../layouts/reusables/Calendar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import ListingsCarousel from "../../../layouts/reusables/ListingsCarousel"
import SliderBanner from "./SliderBanner"
import TopEventsListingsCard from "../../../layouts/reusables/TopEventsListingsCard"

function ListingSingular() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<any>(null)
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid grid-cols-4 place-content-center">
        <div className="hidden md:block col-span-1">
          <img
            src="/images/general/listings/singular/banner-image-1.jpg"
            alt="listing-singular-banner-left"
            className="object-cover object-center aspect-square w-full h-96 2xl:h-[30rem]"
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <SliderBanner />
        </div>
        <div className="hidden md:block col-span-1">
          <img
            src="/images/general/listings/singular/banner-image-3.jpg"
            alt="listing-singular-banner-right"
            className="object-cover object-center aspect-square w-full h-96 2xl:h-[30rem]"
          />
        </div>
      </div>
      <div className="bg-gray-100 px-2">
        <div className="flex flex-col gap-y-2 font-theme_secondary_light max-w-7xl mx-auto">
          <div className="flex flex-col mt-4 space-y-2">
            <h1 className="text-2xl text-theme_primary font-theme_secondary_bold capitalize">
              Muliika Events Photography
            </h1>
            <div className="flex flex-row items-center text-gray-400 text-xs space-x-2">
              <CustomIcon type={"faLocationDot" as unknown as IconDefinition} />
              <span>Kampala</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-row items-center space-x-2">
              <span className="bg-theme_secondary rounded-md p-1 space-x-1 text-xs">
                <CustomIcon
                  type={"faStar" as unknown as IconDefinition}
                  className="text-yellow-400"
                />
                <span className="text-gray-50">3.9</span>
              </span>
              <div className="text-xs text-theme_black">
                <span>8 Reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:flex flex-row gap-x-2">
              <div className="flex flex-row text-xs items-center bg-white border border-gray-200 rounded-md space-x-2 px-2 py-1">
                <CustomIcon
                  type={"faHeart" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span className="text-theme_secondary">Favourite</span>
              </div>
              <div className="flex flex-row text-xs items-center bg-white border border-gray-200 rounded-md space-x-2 px-2 py-1">
                <CustomIcon
                  type={"faShare" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span className="text-theme_secondary">Share</span>
              </div>
              <div className="flex flex-row text-xs items-center bg-white border border-gray-200 rounded-md space-x-2 px-2 py-1">
                <CustomIcon
                  type={"faEnvelope" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span className="text-theme_secondary">Inbox</span>
              </div>
              <div className="flex flex-row text-xs items-center bg-theme_secondary border border-gray-200 rounded-md space-x-2 px-3 py-2">
                <CustomIcon
                  type={"faCheck" as unknown as IconDefinition}
                  className="text-white"
                />
                <span className="text-gray-50">Claim Listing</span>
              </div>
            </div>
          </div>
          <div
            id="listing-singular-navigation"
            className="grid grid-cols-2 gap-y-2 md:grid-cols-6 xl:grid-cols-12 md:gap-x-10 py-4 px-4 rounded-lg bg-white w-full shadow-xl md:-mb-6"
          >
            <Link
              to={"#description"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faFileInvoice" as unknown as IconDefinition} />
              <span>Description</span>
            </Link>
            <Link
              to={"#ammenities"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faList" as unknown as IconDefinition} />
              <span>Ammenities</span>
            </Link>
            <Link
              to={"#gallery"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faImage" as unknown as IconDefinition} />
              <span>Galllery</span>
            </Link>
            <Link
              to={"#video"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faVideo" as unknown as IconDefinition} />
              <span>Videos</span>
            </Link>
            <Link
              to={"#reviews"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faStar" as unknown as IconDefinition} />
              <span>Reviews</span>
            </Link>
            <Link
              to={"#location"}
              className="flex flex-row items-center space-x-2 uppercase text-xs text-gray-400 hover:text-theme_secondary"
            >
              <CustomIcon type={"faLocationDot" as unknown as IconDefinition} />
              <span>Location</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 px-2 gap-x-8 mt-16 mb-10 font-theme_secondary_light max-w-7xl mx-auto">
        <div className="col-span-4 lg:col-span-2 xl:col-span-3 flex flex-col gap-y-10">
          <div
            id="description"
            className="bg-white rounded-md drop-shadow-2xl divide-y-2"
          >
            <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
              <CustomIcon
                type={"faFileInvoice" as unknown as IconDefinition}
                className="text-theme_secondary"
              />
              <span className="font-theme_secondary_bold">Description</span>
            </div>
            <div className="p-4 text-gray-500">
              <p>
                At Mulika Events Photography, we specialize in transforming your
                special occasions into timeless memories through the art of
                photography. Our dedicated team of skilled photographers is
                passionate about capturing the essence, emotions and excitement
                of every event.
              </p>
            </div>
          </div>
          <div
            id="ammenities"
            className="bg-white rounded-md drop-shadow-2xl divide-y-2"
          >
            <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
              <CustomIcon
                type={"faList" as unknown as IconDefinition}
                className="text-theme_secondary"
              />
              <span className="font-theme_secondary_bold">Ammenities</span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:flex flex-row justify-evenly px-4 py-10 text-gray-500">
              <div className="flex flex-col items-center">
                <CustomIcon
                  type={"faClock" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div>24 Hours</div>
              </div>
              <div className="flex flex-col items-center">
                <CustomIcon
                  type={"faWifi" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div>Wi-Fi</div>
              </div>
              <div className="flex flex-col items-center">
                <CustomIcon
                  type={"faBookmark" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div>Online Interaction</div>
              </div>
              <div className="flex flex-col items-center">
                <CustomIcon
                  type={"faPhone" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div>Reservation</div>
              </div>
            </div>
          </div>
          <div
            id="gallery"
            className="bg-white rounded-md drop-shadow-2xl divide-y-2"
          >
            <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
              <CustomIcon
                type={"faImage" as unknown as IconDefinition}
                className="text-theme_secondary"
              />
              <span className="font-theme_secondary_bold">Gallery</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-4 p-4">
              <div>
                <img
                  src="/images/general/listings/singular/gallery/gallery-1.jpg"
                  alt="gallery"
                  className="object-cover object-center aspect-video rounded-md"
                />
              </div>
              <div>
                <img
                  src="/images/general/listings/singular/gallery/gallery-2.jpg"
                  alt="gallery"
                  className="object-cover object-center aspect-video rounded-md"
                />
              </div>
              <div>
                <img
                  src="/images/general/listings/singular/gallery/gallery-3.jpg"
                  alt="gallery"
                  className="object-cover object-center aspect-video rounded-md"
                />
              </div>
              <div>
                <img
                  src="/images/general/listings/singular/gallery/gallery-4.jpg"
                  alt="gallery"
                  className="object-cover object-center aspect-video rounded-md"
                />
              </div>
              <div className="col-span-1 md:col-span-4 justify-self-center flex flex-row items-center space-x-2 bg-theme_secondary hover:bg-theme_primary rounded-full cursor-pointer">
                <CustomIcon
                  type={"faChevronDown" as unknown as IconDefinition}
                  className="text-theme_secondary bg-white p-1 rounded-[50%]"
                />
                <span className="px-2 text-gray-50 text-xs">3 More</span>
              </div>
            </div>
          </div>
          <div>
            <div
              id="video"
              className="bg-white rounded-md drop-shadow-2xl divide-y-2"
            >
              <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
                <CustomIcon
                  type={"faVideo" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span className="font-theme_secondary_bold">Video</span>
              </div>
              <div className="relative p-6 grid">
                <div className="absolute place-self-center cursor-pointer">
                  <CustomIcon
                    type={"faPlay" as unknown as IconDefinition}
                    className={
                      (videoPlaying === true ? "hidden" : "inline") +
                      " text-white text-6xl rounded-[50%] border border-white px-5 py-3 cursor-pointer"
                    }
                    onClick={() => {
                      videoRef.current?.play()
                      setVideoPlaying(true)
                    }}
                  />
                  <CustomIcon
                    type={"faPause" as unknown as IconDefinition}
                    className={
                      (videoPlaying === true ? "inline" : "hidden") +
                      " text-white text-6xl rounded-[50%] border border-white px-6 py-3 cursor-pointer"
                    }
                    onClick={() => {
                      videoRef.current?.pause()
                      setVideoPlaying(false)
                    }}
                  />
                </div>
                <video
                  poster="/images/general/listings/singular/video/video-poster.jpg"
                  className="w-full aspect-video object-cover object-center -z-10"
                  ref={videoRef}
                >
                  <source
                    src="/images/general/listings/singular/video/test-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div
            id="reviews"
            className="bg-white flex flex-col rounded-md drop-shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-2 md:gap-y-0 py-3 px-4 capitalize">
              <div className="flex flex-row md:items-center md:space-x-2 text-base">
                <CustomIcon
                  type={"faStar" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span className="font-theme_secondary_bold text-center md:text-left">
                  Reviews for Muliika Events Photography
                </span>
              </div>
              <div className="self-center w-full md:w-auto text-center md:self-auto bg-theme_black text-gray-50 font-theme_secondary_light rounded-md px-3 py-1 text-sm cursor-pointer">
                Write a review
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row p-6">
              <div className="bg-theme_secondary rounded-md flex flex-col justify-center items-center py-6 px-8">
                <div className="text-4xl text-white">3.8</div>
                <div className="flex flex-col items-center whitespace-nowrap">
                  <span className="text-xs text-gray-50">out of 5.0</span>
                  <RatingComponent />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mx-4">
                <div className="col-span-1 flex flex-col space-y-3 text-xs">
                  <div className="font-theme_secondary_bold">
                    Quality Service
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="text-gray-300">4.9</div>
                    <ProgressBar progressValue={4.9} />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col space-y-3 text-xs">
                  <div className="font-theme_secondary_bold">Facilities</div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="text-gray-300">3.7</div>
                    <ProgressBar progressValue={3.7} />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col space-y-3 text-xs">
                  <div className="font-theme_secondary_bold">Staff</div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="text-gray-300">4.0</div>
                    <ProgressBar progressValue={4.0} />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col space-y-3 text-xs">
                  <div className="font-theme_secondary_bold">Flexibility</div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="text-gray-300">3.7</div>
                    <ProgressBar progressValue={3.7} />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col space-y-3 text-xs">
                  <div className="font-theme_secondary_bold">
                    Value of money
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="text-gray-300">4.0</div>
                    <ProgressBar progressValue={4.0} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-3 md:gap-y-0 px-3 py-1">
              <div className="font-theme_secondary_light text-sm text-center md:text-left">
                19 Reviews for{" "}
                <span className="font-theme_secondary_bold">
                  Muliika Events Photography
                </span>
              </div>
              <div className="flex flex-row items-center space-x-2 font-theme_secondary_light text-theme_black text-sm">
                <span>Sort by</span>
                <SelectBox
                  data={sortingByData}
                  placeHolderLargeScreen="Rating: Highest"
                  placeHolderSmallScreen="Rating: Highest"
                  classNamePrefix="sorting"
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-8 border border-gray-200 rounded-md p-4 m-4">
              <div className="rounded w-fit">
                <img
                  src="/images/vendor/reviews/review-tab.jpg"
                  alt="review-tab"
                  className="h-24 aspect-square object-cover object-center rounded"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-center md:items-start justify-center">
                  <span className="font-theme_secondary_bold text-theme_secondary text-xs">
                    Mugalu David
                  </span>
                  <div className="flex flex-row items-center">
                    <RatingComponent className="" />
                    <span className="text-xs text-gray-400">4.0</span>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col py-2">
                  <span className="font-theme_secondary_bold text-sm text-theme_black">
                    Best weekend ever
                  </span>
                  <p className="font-theme_secondary_light text-sm text-gray-600">
                    I would like to express my heartfelt gratitude to the
                    incredible team of photographers who made my recent weekend
                    absolutely unforgettable. Every moment was captured
                    beautifully thanks to Mulika Events Photography
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center font-theme_secondary_light bg-yellow-50 rounded-md py-6 md:px-8 mt-4">
                  <img
                    src="/images/vendor/reviews/review-detail.jpg"
                    alt="review-detail"
                    className="h-16 aspect-square object-cover object-center rounded-md"
                  />
                  <div className="flex flex-col px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="font-theme_secondary_bold text-theme_secondary text-sm">
                        Murungi Florence
                      </div>
                      <div className="text-xs">17, Jul, 2023</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Thank you for making us your first choice, or at least
                      your final choice!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mx-auto my-3 bg-theme_secondary hover:bg-theme_primary font-theme_secondary_bold text-sm text-white rounded-full px-3 py-2">
              See more reviews
            </button>
          </div>
          <div className="bg-white rounded-md drop-shadow-2xl">
            <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
              <CustomIcon
                type={"faPencil" as unknown as IconDefinition}
                className="text-theme_secondary"
              />
              <span className="font-theme_secondary_bold">
                Write Your Review
              </span>
            </div>
            <hr />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6 px-8">
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Quality Service</div>
                <div className="flex flex-row items-center">
                  <RatingComponent />
                </div>
              </div>
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Facilities</div>
                <div className="flex flex-row items-center">
                  <RatingComponent />
                </div>
              </div>
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Staff</div>
                <div className="flex flex-row items-center">
                  <RatingComponent />
                </div>
              </div>
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Flexibility</div>
                <div className="flex flex-row items-center">
                  <RatingComponent />
                </div>
              </div>
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Value of money</div>
                <div className="flex flex-row items-center">
                  <RatingComponent />
                </div>
              </div>
            </div>
            <form className="grid grid-cols-2 gap-6 p-4">
              <textarea
                name="review-comment"
                className="bg-gray-100 border border-gray-300 rounded-md text-gray-500 text-sm focus:border-gray-300 focus:outline-none focus:ring-0 col-span-2 h-44"
                placeholder="Comments"
              ></textarea>
              <div className="col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="reviewer-name"
                  placeholder="Your Name"
                  className="bg-gray-100 border border-gray-300 rounded-md text-gray-500 text-sm focus:border-gray-300 focus:outline-none focus:ring-0 w-full"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  type="email"
                  name="reviewer-email"
                  placeholder="Your Email"
                  className="bg-gray-100 border border-gray-300 rounded-md text-gray-500 text-sm focus:border-gray-300 focus:outline-none focus:ring-0 w-full"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-theme_secondary hover:bg-theme_primary text-white whitespace-nowrap font-theme_secondary_bold text-sm px-3 py-2 md:justify-self-start"
              >
                Submit Review
              </button>
            </form>
          </div>
          <div id="location" className="bg-white rounded-md drop-shadow-2xl">
            <div className="flex flex-row items-center space-x-2 capitalize text-base py-3 px-4">
              <CustomIcon
                type={"faLocationDot" as unknown as IconDefinition}
                className="text-theme_secondary"
              />
              <span className="font-theme_secondary_bold">Location</span>
            </div>
            <hr />
            <div className="border border-theme_black rounded-md m-4">
              <Map
                height={350}
                className="rounded-md"
                popUpComponent
                popUpComponentData={{
                  imageUrl:
                    "/images/general/listings/singular/banner-image-2.jpg",
                  vendorName: "Muliika Events",
                  vendorCategory: "Photography",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 flex flex-col gap-y-10">
          <div className="bg-white rounded-md drop-shadow-2xl space-y-8 p-4">
            <h3 className="font-theme_secondary_bold text-theme_secondary">
              Message Vendor
            </h3>
            <form className="flex flex-col space-y-4 font-theme_secondary_light">
              <div>
                <input
                  type="text"
                  className="w-full rounded bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:ring-0 focus:border-gray-200"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full rounded bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:ring-0 focus:border-gray-200"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full rounded bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:ring-0 focus:border-gray-200"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full">
                <CustomDatePicker />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full rounded bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:ring-0 focus:border-gray-200"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  className="w-full rounded bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:ring-0 focus:border-gray-200 h-32"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-theme_secondary capitalize">
                  Preferred Contact Method
                </span>
                <div className="flex flex-row gap-x-10">
                  <div className="flex gap-x-2 font-theme_secondary_bold text-xs items-center">
                    <input
                      type="radio"
                      id="call"
                      className="h-3 w-3 checked:bg-theme_secondary checked:hover:bg-theme_primary checked:focus:bg-theme_secondary focus:outline-none focus:ring-0"
                    />
                    <label htmlFor="call">Call</label>
                  </div>
                  <div className="flex gap-x-2 font-theme_secondary_bold text-xs items-center">
                    <input
                      type="radio"
                      id="email-radio"
                      className="h-3 w-3 checked:bg-theme_secondary checked:hover:bg-theme_primary checked:focus:bg-theme_secondary focus:outline-none focus:ring-0"
                    />
                    <label htmlFor="email-radio">Email</label>
                  </div>
                  <div className="flex gap-x-2 font-theme_secondary_bold text-xs items-center">
                    <input
                      type="radio"
                      id="video-call"
                      className="h-3 w-3 checked:bg-theme_secondary checked:hover:bg-theme_primary checked:focus:bg-theme_secondary focus:outline-none focus:ring-0"
                    />
                    <label htmlFor="video-call">Video Call</label>
                  </div>
                </div>
              </div>
              <span className="text-sm">
                By clicking{" "}
                <span className="text-theme_secondary">"Request pricing",</span>{" "}
                I agree to Sinnapi's <u>Privacy Policy</u> and{" "}
                <u>Terms of Use</u>
              </span>
              <button
                type="submit"
                className="self-start my-6 font-theme_secondary_bold text-sm text-white bg-theme_secondary hover:bg-theme_primary px-3 py-2 rounded-md"
              >
                Request Pricing
              </button>
            </form>
          </div>
          <div className="bg-white flex flex-col rounded-md drop-shadow-2xl space-y-8 p-4">
            <h3 className="font-theme_secondary_bold text-theme_primary ">
              Availability
            </h3>
            <div className="w-full">
              <CustomCalendar />
            </div>
          </div>
          <div className="flex flex-col bg-white drop-shadow-xl rounded-md p-4">
            <div className="text-theme_primary font-theme_secondary_bold">
              Categories
            </div>
            <div className="font-theme_secondary_bold text-sm p-6">
              Photography
            </div>
          </div>
          <div className="flex flex-col bg-white drop-shadow-xl rounded-md p-4">
            <div className="text-theme_primary font-theme_secondary_bold">
              Statistics
            </div>
            <div className="grid grid-cols-2 my-4 gap-4 font-theme_secondary_bold">
              <div className="flex flex-row items-center gap-x-2 text-sm">
                <CustomIcon
                  type={"faEye" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span>7521</span>
              </div>
              <div className="flex flex-row items-center gap-x-2 text-sm">
                <CustomIcon
                  type={"faStar" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span>8 Rating</span>
              </div>
              <div className="flex flex-row items-center gap-x-2 text-sm">
                <CustomIcon
                  type={"faShareNodes" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span>24 Share</span>
              </div>
              <div className="flex flex-row items-center gap-x-2 text-sm">
                <CustomIcon
                  type={"faHeart" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <span>99 Favourite</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 bg-white drop-shadow-xl rounded-md p-4">
            <div className="text-theme_primary font-theme_secondary_bold">
              Working Hours
            </div>
            <div className="flex flex-col text-sm space-y-2 font-theme_secondary_bold">
              <div className="flex flex-row justify-between">
                <div>Monday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  09:00 AM - 07:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Tuesday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  09:00 AM - 07:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Wednesday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  09:00 AM - 07:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Thursday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  09:00 AM - 07:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Friday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  09:00 AM - 07:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Saturday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  10:00 AM - 09:00 AM
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Sunday</div>
                <div className="font-theme_secondary_light text-gray-400 border border-gray-200 rounded px-2 py-1">
                  10:00 AM - 09:00 AM
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white drop-shadow-xl gap-y-4 rounded-md flex flex-col">
            <div className="text-theme_primary font-theme_secondary_bold p-6">
              Author Profile
            </div>
            <div className="flex flex-row items-center gap-x-4 font-theme_secondary_light px-6">
              <img
                src="/images/general/listings/singular/author-profile.jpg"
                alt="author-profile"
                className="object-cover object-center aspect-square h-20 rounded-[50%]"
              />
              <div className="flex flex-col text-xs">
                <div>Added By</div>
                <div className="font-theme_secondary_bold text-theme_secondary capitalize text-sm">
                  Kato Charles
                </div>
              </div>
            </div>
            <div className="text-xs px-6">
              I am the owner of Mulika Events. Checkout our services. Contact me
              for any and all enquiries.
            </div>
            <div className="flex flex-col justify-between gap-y-6 text-sm px-6">
              <div className="flex flex-row items-center gap-x-4">
                <CustomIcon
                  type={"faPhone" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div className="font-theme_secondary_bold">+256 751 882145</div>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <CustomIcon
                  type={"faEnvelope" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div className="font-theme_secondary_bold">
                  katocharles34@gmail.com
                </div>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <CustomIcon
                  type={"faGlobe" as unknown as IconDefinition}
                  className="text-theme_secondary"
                />
                <div className="font-theme_secondary_bold">
                  https://photome.com
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row  items-center justify-around py-4 text-theme_secondary">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-theme_secondary"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-theme_secondary"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-theme_secondary"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-theme_secondary"
              />
            </div>
          </div>
          <div className="drop-shadow-2xl rounded-md bg-white pt-4 pb-10 px-8">
            <ListingsCarousel />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-items-center bg-gray-100 space-y-3 px-2 py-16">
        <h1 className="uppercase text-2xl text-theme_primary font-theme_primary_bold">
          similar vendors
        </h1>
        <span className="text-xs text-center text-theme_black font-theme_primary_light">
          Here are vendors who offer similar services
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topEventsListings.slice(0, 3).map((listing, i) => (
            <TopEventsListingsCard
              imageUrl={listing.imageUrl}
              vendorCategory={listing.vendorCategory}
              vendorLocation={listing.vendorLocation}
              vendorName={listing.vendorLocation}
              reviews={listing.reviews}
              iconName={listing.iconName}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListingSingular
