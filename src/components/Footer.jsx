import React from "react"
import facebook_img from "../images/icon-facebook.svg"
import instagram_img from "../images/icon-instagram.svg"
import twitter_img from "../images/icon-twitter.svg"
import pinterest_img from "../images/icon-pinterest.svg"

export default () => {
  return (
    <footer className="bg-VeryDarkViolet text-white">
      <div className="container flex flex-row flex-wrap justify-between max-sm:justify-center">
        <div className="px-5 font-bold text-4xl text-white">Shortly</div>
        <div className="flex flex-row flex-wrap mr-10 max-sm:mr-0 max-sm:flex-col max-sm:justify-center">
          <div className="flex flex-row mr-10 max-sm:flex-col max-sm:my-5 max-sm:mt-10 max-sm:justify-center max-sm:mr-0 ">
            <div className="mx-10">
              <h6 className="text-start max-sm:text-center font-bold">
                Features
              </h6>
              <ul className="py-5 text-start max-sm:text-center [&>*]:py-3">
                <li className="nav-links">Link Shortening</li>
                <li className="nav-links">Branded Links</li>
                <li className="nav-links">Analytics</li>
              </ul>
            </div>
            <div className="mx-10">
              <h6 className="text-start max-sm:text-center font-bold">
                Resources
              </h6>
              <ul className="py-5 text-start max-sm:text-center [&>*]:py-3">
                <li className="nav-links"> Blog</li>
                <li className="nav-links"> Developers</li>
                <li className="nav-links">Support</li>
              </ul>
            </div>
            <div className="mx-10">
              <h6 className="text-start max-sm:text-center font-bold">
                Company
              </h6>
              <ul className="py-5 text-start max-sm:text-center [&>*]:py-3">
                <li className="nav-links">About</li>
                <li className="nav-links"> Our Team</li>
                <li className="nav-links">Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-5 w-fit justify-between max-sm:w-full">
            <img className="socialIcons" src={facebook_img} alt="" srcset="" />
            <img className="socialIcons" src={twitter_img} alt="" srcset="" />
            <img className="socialIcons" src={pinterest_img} alt="" srcset="" />
            <img className="socialIcons" src={instagram_img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
