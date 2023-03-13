import React from "react"
import brand_recognition_img from "../images/icon-brand-recognition.svg"
import detailed_records_img from "../images/icon-detailed-records.svg"
import fully_customizable_img from "../images/icon-fully-customizable.svg"

export default () => {
  return (
    <section class="bg-gray-200">
      <div className="container">
        <h2 className="font-bold text-center mt-10 text-[2.5rem] max-sm:text-3xl max-sm:py-5">
          Advanced Statistics
        </h2>
        <p className="font-medium text-center opacity-30">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="relative">
          <div
            className="flex flex-row m-10 h-[26rem] 
          line max-sm:h-fit max-sm:mx-0 max-sm:flex-col"
          >
            <div className="card place-self-start">
              <div className="flex max-sm:items-center max-sm:justify-center">
                <div className="card__icon">
                  <img src={brand_recognition_img} alt="" />
                </div>
              </div>
              <h3 className="card__title">Brand Recognition</h3>
              <p className="card__body">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="card place-self-center">
              <div className="flex max-sm:items-center max-sm:justify-center">
                <div className="card__icon">
                  <img src={detailed_records_img} alt="" />
                </div>
              </div>
              <h3 className="card__title">Detailed Records</h3>
              <p className="card__body">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="card place-self-end">
              <div className="flex max-sm:items-center max-sm:justify-center">
                <div className="card__icon">
                  <img src={fully_customizable_img} alt="" />
                </div>
              </div>
              <h3 className="card__title">Fully Customizable</h3>
              <p className="card__body">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
