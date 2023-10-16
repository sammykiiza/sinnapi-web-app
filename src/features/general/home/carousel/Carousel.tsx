import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { useCallback, useEffect, useState } from "react"

export default function Carousel({
  slides,
}: {
  slides: { source: string; headerText: string; subHeaderText: string }[]
}) {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    const isFirstSlide = current === 0
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1
    setCurrent(newIndex)
  }

  let nextSlide = useCallback(() => {
    const isLastSlide = current === slides.length - 1
    const newIndex = isLastSlide ? 0 : current + 1
    setCurrent(newIndex)
  }, [current, slides.length])

  const goToSlide = (slideIndex: number) => {
    setCurrent(slideIndex)
  }

  useEffect(() => {
    const runNextSlide = setTimeout(() => nextSlide(), 2000)
    return () => clearTimeout(runNextSlide)
  }, [nextSlide])

  return (
    <div className="overflow-hidden relative xl:h-96 rounded-none xl:rounded-md">
      <div
        className={`flex justify-center items-center transition-all ease-out duration-500`}
      >
        <div className="absolute xl:mb-44 text-white px-5 text-3xl text-center">
          <div>
            <h1>{slides[current].headerText}</h1>
          </div>
          <div>
            <p className="text-sm">{slides[current].subHeaderText}</p>
          </div>
        </div>
        <img
          src={slides[current].source}
          alt={`slide-${current}`}
          className="object-cover object-center h-full"
        />
      </div>

      <div className="absolute bottom-0 h-full w-full justify-between items-center flex text-white px-5 text-3xl">
        <button
          onClick={previousSlide}
          className="bg-gray-700 bg-opacity-50 rounded-full p-3"
        >
          <ArrowLeftIcon className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 bg-opacity-50 rounded-full p-3"
        >
          <ArrowRightIcon className="h-4 w-4 text-white" />
        </button>
      </div>

      <div className="absolute -bottom-4 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <FontAwesomeIcon
              key={i}
              icon={faMinus}
              onClick={() => goToSlide(i)}
              className="text-white cursor-pointer text-xl"
            />
          )
        })}
      </div>
    </div>
  )
}
