"use client"
import React, { useEffect, useState } from 'react';
import { Tab } from "@headlessui/react";
import { carlistings } from "@/public/data/carlisting";
import { ArrowLongRightIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, CheckIcon, ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}


const page = () => {
  const router= useRouter();
  const { id, img, price, title, driverName, pass, bag, maxDistance, fuelType, boxType, star, departureCity, arrivalCity, departureDay, arrivalDay, departureHour, arrivalHour, travelClass }=
  router.query as unknown as {
    id: string;
    img: string;
    price: number;
    title: string;
    driverName: string;
    pass: number;
    bag: number;
    maxDistance: number;
    fuelType: string;
    boxType: string;
    star: number;
    departureCity: string;
    arrivalCity: string;
    departureDay: string;
    arrivalDay: string;
    departureHour: string;
    arrivalHour: string;
    travelClass: string;
  }

 
 


  const [count, setCount] = useState(1);
  const unitPrice = carlistings[3].price;
  const maxSeats = carlistings[3].pass; 
  const tax = 0; 
  const totalPrice = (unitPrice * count) * (1 + tax / 100);

  const increment = () => {
    if (count < maxSeats) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
       
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="pb-lg-0">    
              <div className="bg-white  rounded-md p-3 sm:p-4 lg:p-6 mb-6">
              <div className="relative flex justify-between items-center: pb-4">
  <h3 className="h3">Travel Informations</h3>
  <Link href="/user-chat" className="link flex items-center relative group">
    <ChatBubbleLeftRightIcon 
      className="duration-100 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary hover:bg-[var(--primary-light)] text-white hover:text-primary" 
    />
    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500">
      Chat
    </span>
  </Link>
</div>

                
        
                <Tab.Group>
                  <Tab.List className="flex gap-3 about-tab mb-7">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                        <Image
                      width={154}
                      height={45}
                      src={"/img/carDescription.png"}
                      alt="image"
                      className=""
                    />
                    </Tab>{""}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-blue-200 rounded-md" : ""
                        )
                      }>                    
                      <Image
                      width={154}
                      height={45}
                      src="/img/driverDescription.png"
                      alt="image"
                      className=""
                    />
                    </Tab>{" "}
                                   
                  </Tab.List>
                  <Tab.Panels className="tab-content">
                    <Tab.Panel>
                    <div className="flex flex-wrap border items-center rounded-md ">
                  <div className="rounded-md p-2">
                    <Image
                      width={200}
                      height={260}
                      src={img}
                      alt="image"
                      className=" w-full rounded-md" />
                  </div>
                  <div className="p-3 overflow-hidden flex-grow">
                    <div className="property-card__body">
                      <div className="grid grid-cols-12 gap-4 lg:gap-6 justify-between">
                        <div className="col-span-12 xl:col-span-8">
                          <div className="flex gap-6 mb-2">
                            <p
                            
                              className="text-[var(--neutral-700) font-semibold text-xl ">
                              {title}
                            </p>
                          </div>
                          <ul className="columns-1 lg:columns-2 ml-4 list-disc flex-wrap gap-3 md:ps-2">
                            <li className="py-2"> Cancel anytime </li>
                            <li className="py-2"> Discount Price </li>
                            <li className="py-2"> Confirmation </li>
                            <li className="py-2"> Liability Insured </li>
                          </ul>
                        </div>
                    
                      </div>
                      <ul className="flex divide-x divide-dashed mt-8 bg-[#F5FCF8] overflow-x-auto">
                        <li className="p-6 m-0 text-center flex-grow">
                          <i className="las text-[#279155] la-user-friends text-[32px] inline-block mb-1"></i>
                          <span className="block text-sm max-width mx-auto">
                            {pass} Pass
                          </span>
                        </li>
                        <li className="p-6 m-0 text-center flex-grow">
                          <i className="las text-[#279155] la-shopping-bag text-[32px] inline-block mb-1"></i>
                          <span className="block text-sm max-width mx-auto">
                            {" "}
                            {bag} Bags{" "}
                          </span>
                        </li>
                        <li className="p-6 m-0 text-center flex-grow">
                          <i className="las la-map-marker text-2xl text-[#22804A]"></i>
                          <span className="block text-sm max-width mx-auto">
                            {" "}
                            Yaounde{" "}
                          </span>
                        </li>
                        <li className="p-6 m-0 text-center flex-grow">
                          <i className="las la-clock text-2xl text-[#22804A]"></i>
                          <span className="block text-sm max-width mx-auto">
                            {" "}
                            8:30 Am
                            {" "}
                          </span>
                        </li>
                        <li className="p-6 m-0 text-center flex-grow">
                          <i className="las la-calendar-alt text-2xl text-[#22804A]"></i>
                          <span className="block text-sm max-width mx-auto">
                            {" "}
                            05/05/24{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                    </Tab.Panel>
                    <Tab.Panel>
                    <div className=" border items-center rounded-md ">
                    <div className=" rounded-md p-2 ">
                <div className="w-32 h-32 border border-[var(--primary)] rounded-md bg-white p-4 grid place-content-center relative mx-auto mb-1">
                  <Image
                    width={96}
                    height={96}
                    src="/img/team-1.jpg"
                    alt="image"
                    className="rounded-full"
                  />
                  <div className="w-8 h-8 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-0 right-0">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-center text-2xl font-semibold mb-4">
                  {" "}
                  Savannah Nguyen{" "}
                </h4>
                <ul className="flex items-center gap-12 justify-center flex-wrap mb-4">
                  <li>
                    <p className="mb-0">
                      ID: <span className="text-primary">235</span>
                    </p>
                  </li>
                  <li className="text-primary text-lg">•</li>
                  <li>
                    <p className="mb-0"> Property: 24 </p>
                  </li>
                  <li className="text-primary text-lg">•</li>
                  <li>
                    <div className="flex gap-1 items-center">
                      <i className="las la-star text-[var(--tertiary)]"></i>
                      <p className="mb-0"> 4.8 </p>
                    </div>
                  </li>
                </ul>
                <div className="text-center pt-4">
                  <Link href="#" className="btn-outline rounded-md font-semibold">
                    See Host Profile
                  </Link>
                </div>
                </div>
                </div>              
                      
                    </Tab.Panel>

                  </Tab.Panels>
                </Tab.Group>
              </div>

            

              
              <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-md mb-10">
                <h4 className="mb-5 text-2xl font-semibold">
                  {" "}
                  Inclusion & Exclusion{" "}
                </h4>
                <div className="mb-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block"> State tax </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block">
                              Driver Allowance
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block">Toll charge</span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block">
                              Pickup and drop
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block"> Internet </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                              <i className="las la-check text-lg text-primary"></i>
                            </div>
                            <span className="inline-block">Car Parking</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                              <i className="las la-times text-lg text-[#9C742B]"></i>
                            </div>
                            <span className="inline-block"> Alarm </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                              <i className="las la-times text-lg text-[#9C742B]"></i>
                            </div>
                            <span className="inline-block"> Pets Allow </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              

              <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-md mb-10">
                  <h4 className="mb-5 text-2xl font-semibold">
                    {" "}
                    Safety Guidelines{" "}
                  </h4>
                  <ul className="flex flex-col gap-4 mb-5">
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Verify your ride: Before entering a cab, verify that
                          the car and driver match the details of your ride
                          booking. Check the license plate number and driver
                          photo on the app and match it with the car and driver
                          in front of you.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Sit in the back seat: Always sit in the back seat of
                          the cab. This will give you more personal space and
                          distance from the driver.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Wear your seatbelt: Always wear your seatbelt during
                          the ride. This is not only required by law in most
                          places, but it is also an important safety measure in
                          case of an accident.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Avoid distractions: Avoid using your phone or other
                          electronic devices during the ride. This will help you
                          stay alert and aware of your surroundings.
                        </span>
                      </div>
                    </li>
                  </ul>
                 
                </div>

            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-md p-3 sm:p-4 lg:p-6 border">
              <h4 className="mb-0 text-2xl font-semibold">Prise en charge</h4>
              <div className="border border-dashed my-8"></div>
              <ul className="gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0"><b>Lieu de départ</b></p>
                  <p className="mb-0 font-medium"><b>Yaoundé</b></p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Jeudi,08 Mai 2023</p>
                  <p className="mb-0 font-medium">10h00</p>
                </li>
                <div className="border border-dashed my-8"></div>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0"><b>Lieu d'arrivé</b></p>
                  <p className="mb-0 font-medium"><b>Douala</b></p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Jeudi,08 Mai 2023</p>
                  <p className="mb-0 font-medium">14h00</p>
                </li>
              </ul>
              
            </div>

            <div className="border border-dashed my-0"></div>
            <div className="bg-white rounded-md p-3 sm:p-4 lg:p-6 border">
              <h4 className="mb-0 text-2xl font-semibold">Pricing Details</h4>
              <div className="border border-dashed my-8"></div>
              <ul className="gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Unit Price</p>
                  <p className="mb-0 font-medium">{carlistings[3].price} FCFA</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Number of Seats</p>
                  <div className="flex items-center">
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        onClick={decrement}
                      >
                        -
                      </button>
                      <span className="px-4">{count}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        onClick={increment}
                      >
                        +
                      </button>
                    </div>       
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Tax</p>
                  <p className="mb-0 font-medium">0%</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Total price</p>
                  <p className="mb-0 font-medium">{totalPrice} FCFA</p>
                </li>
              </ul>
              <div className="border border-dashed my-8"></div>
              <div className="flex items-center justify-between flex-wrap mb-6">
                <p className="mb-0">Payable Now</p>
                <p className="mb-0 font-medium">{totalPrice} FCFA</p>
              </div>
            </div>    
                <Link
              href="./reservationHilary3"
              className="link inline-flex items-center gap-2 lg:mt-8 py-3 px-6 rounded-md bg-primary text-white hover:bg-blue-700 font-semibold w-full text-xl justify-center "> 
              <span className="inline-block"> Proceed Booking </span>
              </Link>
          </div>
        </div>
      </div>
    </div>
</>
);
};

export default page;
