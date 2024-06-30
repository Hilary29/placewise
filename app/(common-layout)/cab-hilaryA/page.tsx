"use client";
import Accordion from "@/components/Accordion";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import CheckboxCustom from "@/components/Checkbox";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import { ChangeEvent, useRef, useState } from "react";



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
    const User=[
        {
            image: "/img/team-1.jpg",
            name:"Chris Adama",
            email:"adamaC@gmail.com",
            phone:"+237 600000000",
            description:"I am a driver"  
        },
        {
            image: "/img/team-1.jpg",
            name:"Harry Kone",
            email:"HarryKone@gmail.com",
            phone:"+237 700000000",
            description:"I am client"  
            },

    ]


    const inputFileRef = useRef<HTMLInputElement>(null);



 
    

  return (

    <>
    
    <div className="bg-[var(--bg-2)] mt-10 lg:mt-14 px-3">
      <div className="container">
        {/* Block contenant tous les cadres*/}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 xl:col-span-6">
           
            <div className="flex justify-center items-center p-4 sm:p-8 lg:p-6 bg-white rounded-md mb-10 ">
                                 
                    <div className="grid grid-cols-12 gap-4 px-16"> 
                    <div className="w-[180px] h-[180px]">
                    <Image
                        width={180}
                        height={180}
                        className="rounded-full border-[6px] border-[#F5F5FE] shadow-md "
                        src={User[0].image} alt={""}                    
                    />         
                </div>

                      <div className="col-span-12 pt-8">
                        <ul className="flex justify-between pt-10">
                            <li>
                            <p className="text-xl fontsize-2xl block mb-3">
                                Name 
                            </p>
                            </li>
                            <li>
                            <p className="text-xl font-semibold block mb-3">
                                {User[0].name }
                            </p>
                            </li>
                        </ul>
                      </div>

                      <div className="col-span-12">
                        <ul className="flex flex justify-between">
                            <li>
                            <p className="text-xl font-medium block mb-3">
                                Email
                            </p>
                            </li>
                            <li>
                            <p className="text-xl font-semibold block mb-3">
                                {User[0].email }
                            </p>
                            </li>
                        </ul>              
                      </div>

                      <div className="col-span-12">
                      <ul className="flex flex justify-between">
                            <li>
                            <p className="text-xl font-medium block mb-3">
                                PhoneNumber 
                            </p>
                            </li>
                            <li>
                            <p className="text-xl font-semibold block mb-3">
                                {User[0].phone }
                            </p>
                            </li>
                        </ul>
                      </div>
                    </div>
                  
            </div>

            <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-md mb-8">
                <h4 className="mb-5 text-2xl font-semibold">
                  {" "}
                  Driver details{" "}
                </h4>
                <ul className="flex flex-col gap-4 mb-5">
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Driver Name and Photo: We&apos;ve the driver&apos;s
                        name and photo, so you don&apos;t afraid arrive tour.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Driver rating: You will also be able to view your
                        driver&apos;s rating from other passengers. This
                        rating is based on their driving and customer service
                        skills and can help you determine the quality of your
                        ride.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Contact information: You will be provided with the
                        driver&apos;s phone number, so you can contact them if
                        needed.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>







            
          </div>

          {/* 

          <div className="col-span-12 xl:col-span-6 pb-16">
            <div className="section-space--sm relative">        
              <div className="bg-white rounded-md py-4 px-6 ">
                
                <Accordion
          buttonContent={(open) => (
           <div className="rounded-2xl flex justify-between items-center">
              <p className="mb-4 text-2xl font-bold"> Driver details </p>
              <ChevronDownIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          )}
          initialOpen={true}>
          <div className="pt-4 lg:pt-6">
            <div>
             
              <form action="#" className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                  <label
                    htmlFor="full-name"
                    className="block mb-2 font-medium clr-neutral-500">
                    Full name :
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter name"
                  />
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <label
                    htmlFor="user-email"
                    className="block mb-2 font-medium clr-neutral-500">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="user-email"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-span-12 lg:col-span-12">
                  <label
                    htmlFor="user-phone"
                    className="block mb-2 font-medium clr-neutral-500">
                    Phone (Optional) :
                  </label>
                  <input
                    type="text"
                    id="user-phone"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter number"
                  />
                </div>
                
                
              

                
              </form>
            </div>
          </div>
        </Accordion>
                
                

               
              </div>


              




            </div>
                 
          </div>
*/}

        </div>
      </div>
    </div> 
  </>



  );
};

export default Page;
