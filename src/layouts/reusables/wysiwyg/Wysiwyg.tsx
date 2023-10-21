import React from "react"
import { Editor } from "@tinymce/tinymce-react"

function Wysiwyg() {
  return (
    <Editor
      apiKey="98md64m0qkcinvd8qwa38otxxcg083cu9t6dynbmstcctk5g"
      init={{
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
