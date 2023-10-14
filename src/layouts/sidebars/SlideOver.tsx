import React, { useRef } from "react"
import {
  FocusScope,
  OverlayContainer,
  useOverlay,
  useModal,
  useDialog,
} from "react-aria"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons/faX"

function SlideOverContent(props: any) {
  const { onClose, children, title } = props

  const ref = useRef(null)
  const { overlayProps } = useOverlay(props, ref)
  const { modalProps } = useModal(props)
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        ></motion.div>
        {/*@ts-ignore*/}
        <motion.section
          className="absolute inset-y-0 left-0 max-w-full flex"
          aria-labelledby="slide-over-heading"
          ref={ref}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <FocusScope contain restoreFocus>
            <div className="relative w-[60vw] md:w-screen max-w-md">
              <div className="absolute top-0 right-0 -mr-10 p-2 flex sm:-mr-10 -pr-4">
                <button
                  onClick={onClose}
                  className="pt-1 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-theme_primary"
                >
                  <span className="sr-only">Close panel</span>
                  <FontAwesomeIcon
                    icon={faX}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                    {...titleProps}
                  >
                    {title}
                  </h2>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  {children}
                </div>
              </div>
            </div>
          </FocusScope>
        </motion.section>
      </div>
    </div>
  )
}

function SlideOver({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: any
}) {
  return (
    <OverlayContainer>
      <AnimatePresence>
        {isOpen && (
          <SlideOverContent
            title={title}
            onClose={onClose}
            isOpen={isOpen}
            isDismissable
          >
            {children}
          </SlideOverContent>
        )}
      </AnimatePresence>
    </OverlayContainer>
  )
}

export default SlideOver
