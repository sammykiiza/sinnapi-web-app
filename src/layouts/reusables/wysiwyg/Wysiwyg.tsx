import React, { useEffect, useState } from "react"
import { Editor } from "@tinymce/tinymce-react"

function Wysiwyg() {
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
    <Editor
      apiKey="98md64m0qkcinvd8qwa38otxxcg083cu9t6dynbmstcctk5g"
      init={{
        height: screenWidth < 768 ? 300 : 450,
        menubar: false,
        plugins: ["lists"],
        skin: "tinymce-5",
        toolbar:
          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
      }}
    />
  )
}

export default Wysiwyg
