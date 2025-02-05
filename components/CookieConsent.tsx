"use client"

import { useState } from "react"

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true)

  const handleConsent = () => {
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-500 text-white p-4">
      <div className="flex justify-between items-center">
        <p>
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Cookie Policy
          </a>
          .
        </p>
        <button
          onClick={handleConsent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent

