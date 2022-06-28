import React from 'react'
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
      <body style={{ backgroundColor: "#16141e" }}>
          <Outlet />
      </body>
  )
}
