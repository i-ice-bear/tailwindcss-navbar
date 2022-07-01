import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navbar from './Router/Navbar'


export default function Appcomponent({ Component, pageProps }) {
  const [mode, setMode] = React.useState("gray-50")
  const [text, setText] = React.useState("black")
  const [hoverText, setHoverText] = React.useState("white")
  const darkModeToggle = () => {
    if (mode === "gray-50") {
      setMode("gray-900")
      setText("white")
      document.body.style.backgroundColor = "#111827"
      document.body.style.transition = "all 0.3s ease"
      document.body.style.color = "#fff"
    } else {
      setMode("gray-50")
      setText("black")
      setHoverText("white")
      document.body.style.color = "#000"
      document.body.style.transition = "all 0.3s ease"
      document.body.style.backgroundColor = "#fff"
    }
  }
  return (
    <div className="wrapper">
      <Component {...pageProps} />
    <Navbar mode={mode} hoverText={hoverText} text={text} darkModeToggle={darkModeToggle} />
    </div>
  )
}
