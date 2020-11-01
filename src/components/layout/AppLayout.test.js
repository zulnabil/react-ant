import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import { MemoryRouter, useLocation } from "react-router-dom"

import AppLayout from "./AppLayout"

it("navigates home when you click the logo", (async) => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const location = useLocation()
  const root = document.createElement("div")
  document.body.appendChild(root)

  // Render app
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppLayout />
    </MemoryRouter>,
    root
  )

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goToLikn = document.querySelector("#link-1")
    // Click it
    goToLikn.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  })

  // Check correct page content showed up
  expect(location.pathname).toBe("/create-shipment")
})
