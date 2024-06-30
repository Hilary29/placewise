import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { flightList } from "@/public/data/flightlist";
import { flightTypes } from "@/public/data/flighttypes";
import { SearchIcon } from "@/public/data/icons";
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
            <div className="py-6 px-8 bg-white rounded-md shadow-lg">
              <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
              <div className="border-t border-dashed my-6"></div>
              <div className="flex items-center justify-between rounded-md border bg-[var(--bg-2)] px-5 py-3">
                <input
                  type="text"
                  className="bg-transparent border-0 w-[180px] focus:outline-none"
                  placeholder="Search by destination name"
                />
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 shrink-0 lh-1">
                  <SearchIcon />
                </button>
              </div>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Category
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="rent-category"
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="rent-category">
                      One Way
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="buy-category"
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="buy-category">
                      Round Trip
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="sell-category"
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="sell-category">
                      Multi City
                    </label>
                  </div>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                No. of Stops
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <CheckboxCustom label="Non Stop" />
                </li>
                <li>
                  <CheckboxCustom label="1 Stop" />
                </li>
                <li>
                  <CheckboxCustom label="2+ Stop" />
                </li>
                <li>
                  <CheckboxCustom label="3+ Stop" />
                </li>
                <li>
                  <CheckboxCustom label="4+ Stop" />
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Departure Time
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Early Morning" />
                  <span>12am - 8am</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Morning" />
                  <span>8am - 12pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Mid Day" />
                  <span>12pm - 4pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Evening Night" />
                  <span>4pm - 8pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Night" />
                  <span>8pm - 12am</span>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Pricing scale
              </p>
              <CustomRangeSlider />
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Types of Airlines
              </p>
              <ul className="flex flex-col gap-3">
                {flightTypes.map(({ id, number, title }) => (
                  <li key={id} className="flex justify-between items-center">
                    <CheckboxCustom label={title} />
                    <span>{number}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <Link
                href="#"
                className="btn-primary rounded-md text-white flex justify-center gap-2">
                <ArrowPathIcon className="w-5 h-5" />
                Read More
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">

              {flightList.map(
                ({
                  id,
                  arrivalTime,
                  depertureTime,
                  from,
                  img,
                  price,
                  title,
                  to,
                }) => (
                  <div key={id} className="col-span-1">
                    <div className="md:flex bg-white border rounded-md mx-3 xl:mx-0">
                      <div className="flex flex-col gap-6 p-0 lg:p-6 flex-grow">
                        <div className="flex flex-col md:flex-row justify-center items-start gap-16">
                          <div className="flex w-full justify-center md:w-auto flex-col gap-3 md:gap-7 text-center md:text-start flex-grow">
                            <div className="grid place-content-center w-32 h-32 rounded-md #f2f2f2 shadow-lg mx-auto ms-md-0">
                              <Image
                                width={100}
                                height={110}
                                src={img}
                                alt="image"
                                className=" w-full rounded-md"
                              />
                            </div>
                            <p className="mb-0 font-medium">{title}</p>
                          </div>
                          <div className="flex md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow w-full md:w-auto">
                            <span className="block text-primary">From</span>
                            <h4 className="mb-0 text-2xl font-semibold">
                            {from}
                            </h4>
                            <span className="block text-[var(--neutral-700)]">
                              {depertureTime}
                            </span>
                          </div>

                          <div className="flex w-full md:w-auto md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow">
                            <span className="block text-primary">To</span>
                            <h4 className="mb-0 text-2xl font-semibold">
                             {to}
                            </h4>
                            <span className="block text-[var(--neutral-700)]">
                            {arrivalTime}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-center text-center gap-3 rounded-xl bg-[#F7F7FE] p-3">
                          <p className="mb-0">
                            Car :
                            <span className="text-amber-700">Boeing 787</span>
                          </p>
                          <p className="text-primary">•</p>
                          <p className="mb-0">
                            Travel Class :
                            <span className="text-primary"> VIP</span>
                          </p>
                        </div>
                        
                      </div>

                      <div className="p-3 lg:p-6 xl:pt-10 xxl:pt-14 bg-[var(--bg-2)] text-center md:text-start rounded-e-2xl">
                        <div className="flex items-center justify-center justify-content-md-start gap-2 mb-6">
                          <h2 className="mb-0 h2 text-[var(--neutral-700)]">
                            {" "}
                            ${price}
                          </h2>
                        </div>
                        <Link
                          href="/cab-hilary2"
                          className=" btn-outline  flex justify-center rounded-md text-primary">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )

              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
