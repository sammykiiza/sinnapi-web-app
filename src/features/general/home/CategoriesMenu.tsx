import { faCakeCandles } from "@fortawesome/free-solid-svg-icons/faCakeCandles"
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons/faCameraRetro"
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis"
import { faGem } from "@fortawesome/free-solid-svg-icons/faGem"
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse"
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../app/hooks"
import {
  setDashboard,
  setIsOpen,
} from "../../../layouts/sidebars/sideBarsSlice"

function CategoriesMenu() {
  const dispatch = useAppDispatch()
  dispatch(setDashboard(false))
  return (
    <div className="flex flex-col gap-y-2 text-theme_black font-theme_secondary_bold text-sm m-4">
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faHouse}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Wedding Gowns</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faCakeCandles}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Cakes</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faHouse}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Venues</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faMusic}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Music Systems</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faGem}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Decoration</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faGem}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Jewellers</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faCar}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Car Hire Services</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Catering Services</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Bridal Salons</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faUserTie}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Suits</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faCameraRetro}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Photography</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Make-Up Services</div>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className="flex flex-row space-x-3"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div>
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-theme_secondary text-lg"
            />
          </div>
          <div>Other Categories</div>
        </Link>
      </div>
    </div>
  )
}

export default CategoriesMenu
