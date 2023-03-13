import React, { useState, useEffect } from "react"
import shortener_img from "../images/bg-boost-desktop.svg"

export default () => {
  const [url, setUrl] = useState("")
  const [data, setData] = useState({})
  const [buttonClicked, setButtonClicked] = useState(false)
  const [links, setLinks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [buttonStatus, setButtonStatus] = useState({})

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links"))
    if (storedLinks) {
      setLinks(storedLinks)
    }
  }, [])

  const handleButtonClick = async () => {
    if (url.trim().length !== 0) {
      setIsLoading(true)
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url.trim()}`
      )
      const data = await response.json()
      setData(data)
      const newLinks = [...links, data.result]
      setLinks(newLinks)
      localStorage.setItem("links", JSON.stringify(newLinks))
      setIsLoading(false)
      setError("")
      setUrl("")
    } else {
      setError("Please add a link")
      return
    }
  }

  const handleRemoveLink = (index) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      const newLinks = links.filter((_, i) => i !== index)
      setLinks(newLinks)
      localStorage.setItem("links", JSON.stringify(newLinks))
    }
  }

  const handleCopyLink = async (link, index) => {
    try {
      await navigator.clipboard.writeText(link)
      setButtonStatus({ ...buttonStatus, [index]: "Copied!" })
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="bg-gray-200 relative flex justify-center align-middle p-5 h-fit">
      <div
        className={`absolute -top-24 flex bg-DarkViolet bg-dark-violet-pattern bg-cover items-center p-10 m-3 rounded-xl justify-center w-fit  max-sm:flex-wrap max-sm:p-7 max-sm:m-5 max-sm:items-center`}
      >
        <input
          className={`bg-white p-5 font-medium text-lg rounded-xl w-[48rem] h-16 max-sm:w-full max-sm:mb-3 max-sm:h-14  ${
            error ? "border-red-500 border-4 italic" : ""
          }`}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL here"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-Cyan hover:bg-cyan-300 text-white rounded-xl p-5 px-12 font-bold text-xl m-3 max-sm:m-0 max-sm:mt-3 max-sm:p-3 max-sm:w-full"
          onClick={handleButtonClick}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Shorten URL"}
        </button>
      </div>
      <div className="mt-16 w-5/6 max-sm:mt-20 max-sm:w-full">
        {links.map((link, index) => (
          <div
            key={index}
            className="my-5 p-5 bg-white flex flex-row text-xl justify-between rounded-xl w-full items-center max-sm:h-fit max-sm:text-sm max-sm:flex-col max-sm:p-5"
          >
            <p className="font-medium max-sm:break-all">{link.original_link}</p>
            <div className="flex flex-row max-sm:flex-wrap items-center">
              <p className="text-Cyan font-bold max-sm:p-2">
                {link.full_short_link}
              </p>
              <button
                className={`rounded-lg ${
                  buttonStatus[index]
                    ? "bg-DarkViolet"
                    : "bg-Cyan hover:bg-cyan-300"
                } text-white p-3 mx-3 max-sm:p-2 max-sm:mx-1`}
                onClick={() => handleCopyLink(link.full_short_link, index)}
                disabled={buttonStatus[index]}
              >
                {buttonStatus[index] || "Copy"}
              </button>
              <button
                className="hover:text-red-600"
                onClick={() => handleRemoveLink(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
