import {
  useEffect,
  useState,
} from "react"

import Sidebar from "./Sidebar"
import Header from "./Header"

function AdminLayout({
  children,
}) {

  const [darkMode, setDarkMode] =
    useState(() => {

      return (
        localStorage.getItem(
          "aifagen-theme"
        ) === "dark"
      )
    })

  useEffect(() => {

    localStorage.setItem(
      "aifagen-theme",
      darkMode
        ? "dark"
        : "light"
    )

  }, [darkMode])

  return (

    <div
      className={`admin-layout ${
        darkMode
          ? "dark"
          : "light"
      }`}
    >

      <Sidebar
        darkMode={darkMode}
        setDarkMode={
          setDarkMode
        }
      />

      <main className="main-content">

        <Header />

        {children}

      </main>

    </div>

  )
}

export default AdminLayout