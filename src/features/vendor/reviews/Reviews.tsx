import RatingComponent from "../../../layouts/reusables/RatingComponent"
import ProgressBar from "../../../layouts/reusables/ProgressBar"
import SelectBox from "../../../layouts/reusables/SelectBox"
import { selectBoxCategories } from "../../../utils/data"
import SearchBar from "../../../layouts/reusables/SearchBar"
import Wysiwyg from "../../../layouts/reusables/wysiwyg/Wysiwyg"
import { Tab } from "@headlessui/react"

function Reviews() {
  return (
    <div>
      <div className="flex flex-col pt-6 space-y-10 shadow-xl mb-4">
        <div className="grid grid-cols-5 items-center p-1 md:p-6 gap-y-4 md:gap-y-0 gap-x-2 bg-white rounded-md">
          <div className="col-span-5 md:col-span-1 flex flex-col justify-center space-y-3">
            <div className="font-theme_secondary_light text-sm">
              Average Ratings
            </div>
            <div className="bg-theme_secondary rounded-md flex flex-col xl:flex-row justify-center items-center space-x-1 py-6 xl:py-8 lg:px-6">
              <div className="text-4xl text-white">3.8</div>
              <div className="flex flex-col items-center xl:items-start">
                <span className="text-xs text-gray-50">out of 5.0</span>
                <RatingComponent />
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-4 flex flex-col space-y-2">
            <div className="font-theme_secondary_bold text-sm">
              Reviews Summary
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
              <div className="col-span-1 flex flex-col space-y-3 text-xs">
                <div className="font-theme_secondary_bold">Quality Service</div>
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
                <div className="font-theme_secondary_bold">Value of money</div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="text-gray-300">4.0</div>
                  <ProgressBar progressValue={4.0} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y-2 rounded-md bg-white">
          <div className="flex flex-col md:flex-row items-center md:justify-between pb-4 md:pb-0">
            <div className="w-full md:w-[30%]">
              <SearchBar className="p-2 md:p-6 w-full container" />
            </div>
            <div className="w-full md:w-[30%]">
              <SelectBox
                data={selectBoxCategories}
                placeHolderLargeScreen="Select Your Listing"
                placeHolderSmallScreen="Select Your Listing"
                classNamePrefix="listing"
                container
                className="p-2 md:p-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 divide-x-2">
            <Tab.Group vertical>
              <Tab.List
                className={
                  "col-span-2 flex flex-col divide-y-2 overflow-y-scroll"
                }
              >
                <Tab
                  className={
                    "hover:bg-gray-100 ui-selected:bg-gray-100 py-6 focus:outline-none focus:ring-0 focus:border-none"
                  }
                >
                  <div className="md:px-6 flex flex-col md:flex-row items-center w-full">
                    <div className="rounded">
                      <img
                        src="/images/vendor/reviews/review-tab.jpg"
                        alt="review-tab"
                        className="h-24 aspect-square object-cover object-center rounded"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-theme_secondary_bold text-theme_secondary text-xs">
                        Malinga Paul
                      </span>
                      <div className="flex flex-col md:flex-row md:gap-x-2 justify-center items-center">
                        <RatingComponent className="md:ml-6" />
                        <span className="text-xs text-gray-400">4.0</span>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  className={
                    "hover:bg-gray-100 ui-selected:bg-gray-100 py-2 focus:outline-none focus:ring-0 focus:border-none"
                  }
                >
                  <div className="md:px-6 flex flex-col md:flex-row items-center w-full">
                    <div className="rounded">
                      <img
                        src="/images/vendor/reviews/review-tab.jpg"
                        alt="review-tab"
                        className="h-24 aspect-square object-cover object-center rounded"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-theme_secondary_bold text-theme_secondary text-xs">
                        Malinga Paul
                      </span>
                      <div className="flex flex-col md:flex-row md:gap-x-2 justify-center items-center">
                        <RatingComponent className="md:ml-6" />
                        <span className="text-xs text-gray-400">4.0</span>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  className={
                    "hover:bg-gray-100 ui-selected:bg-gray-100 py-2 focus:outline-none focus:ring-0 focus:border-none"
                  }
                >
                  <div className="md:px-6 flex flex-col md:flex-row items-center w-full">
                    <div className="rounded">
                      <img
                        src="/images/vendor/reviews/review-tab.jpg"
                        alt="review-tab"
                        className="h-24 aspect-square object-cover object-center rounded"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-theme_secondary_bold text-theme_secondary text-xs">
                        Malinga Paul
                      </span>
                      <div className="flex flex-col md:flex-row md:gap-x-2 justify-center items-center">
                        <RatingComponent className="md:ml-6" />
                        <span className="text-xs text-gray-400">4.0</span>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  className={
                    "hover:bg-gray-100 ui-selected:bg-gray-100 py-2 focus:outline-none focus:ring-0 focus:border-none"
                  }
                >
                  <div className="md:px-6 flex flex-col md:flex-row items-center w-full">
                    <div className="rounded">
                      <img
                        src="/images/vendor/reviews/review-tab.jpg"
                        alt="review-tab"
                        className="h-24 aspect-square object-cover object-center rounded"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-theme_secondary_bold text-theme_secondary text-xs">
                        Malinga Paul
                      </span>
                      <div className="flex flex-col md:flex-row md:gap-x-2 justify-center items-center">
                        <RatingComponent className="md:ml-6" />
                        <span className="text-xs text-gray-400">4.0</span>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tab.List>
              <Tab.Panels className="col-span-3 flex flex-col px-4 py-6">
                <Tab.Panel className={"space-y-10"}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <div className="font-theme_secondary_bold">
                        Facilities
                      </div>
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
                      <div className="font-theme_secondary_bold">
                        Flexibility
                      </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-theme_secondary_bold">
                      Excellent Service
                    </span>
                    <span className="font-theme_secondary_light text-sm text-gray-400">
                      The service delivery was nothing short of exceptional.
                      Absolutely amazing experience. 10/10.
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center font-theme_secondary_light bg-pink-100 rounded-md py-6 md:px-8 mt-4">
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
                        Thank you for leaving this review. It was great
                        providing our services for you. Once again thank you for
                        trusting us with our event..
                      </div>
                    </div>
                  </div>
                  <Wysiwyg />
                  <button className="bg-theme_secondary hover:bg-theme_primary px-3 py-2 rounded-md font-theme_secondary_bold text-white text-sm self-start">
                    Add Your Reply
                  </button>
                </Tab.Panel>
                <Tab.Panel className={"space-y-10"}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <div className="font-theme_secondary_bold">
                        Facilities
                      </div>
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
                      <div className="font-theme_secondary_bold">
                        Flexibility
                      </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-theme_secondary_bold">
                      Excellent Service
                    </span>
                    <span className="font-theme_secondary_light text-sm text-gray-400">
                      The service delivery was nothing short of exceptional.
                      Absolutely amazing experience. 10/10.
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center font-theme_secondary_light bg-pink-100 rounded-md py-6 md:px-8 mt-4">
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
                        Thank you for leaving this review. It was great
                        providing our services for you. Once again thank you for
                        trusting us with our event..
                      </div>
                    </div>
                  </div>
                  <Wysiwyg />
                  <button className="bg-theme_secondary hover:bg-theme_primary px-3 py-2 rounded-md font-theme_secondary_bold text-white text-sm self-start">
                    Add Your Reply
                  </button>
                </Tab.Panel>
                <Tab.Panel className={"space-y-10"}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <div className="font-theme_secondary_bold">
                        Facilities
                      </div>
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
                      <div className="font-theme_secondary_bold">
                        Flexibility
                      </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-theme_secondary_bold">
                      Excellent Service
                    </span>
                    <span className="font-theme_secondary_light text-sm text-gray-400">
                      The service delivery was nothing short of exceptional.
                      Absolutely amazing experience. 10/10.
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center font-theme_secondary_light bg-pink-100 rounded-md py-6 md:px-8 mt-4">
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
                        Thank you for leaving this review. It was great
                        providing our services for you. Once again thank you for
                        trusting us with our event..
                      </div>
                    </div>
                  </div>
                  <Wysiwyg />
                  <button className="bg-theme_secondary hover:bg-theme_primary px-3 py-2 rounded-md font-theme_secondary_bold text-white text-sm self-start">
                    Add Your Reply
                  </button>
                </Tab.Panel>
                <Tab.Panel className={"space-y-10"}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <div className="font-theme_secondary_bold">
                        Facilities
                      </div>
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
                      <div className="font-theme_secondary_bold">
                        Flexibility
                      </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-theme_secondary_bold">
                      Excellent Service
                    </span>
                    <span className="font-theme_secondary_light text-sm text-gray-400">
                      The service delivery was nothing short of exceptional.
                      Absolutely amazing experience. 10/10.
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center font-theme_secondary_light bg-pink-100 rounded-md py-6 md:px-8 mt-4">
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
                        Thank you for leaving this review. It was great
                        providing our services for you. Once again thank you for
                        trusting us with our event..
                      </div>
                    </div>
                  </div>
                  <Wysiwyg />
                  <button className="bg-theme_secondary hover:bg-theme_primary px-3 py-2 rounded-md font-theme_secondary_bold text-white text-sm self-start">
                    Add Your Reply
                  </button>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
