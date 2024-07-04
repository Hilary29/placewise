import { carlistings } from "@/public/data/carlisting";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  
  return (
    <>
      {carlistings.map(({ id, img, price, title, driverName, pass, bag, maxDistance, fuelType, boxType, star, departureCity, arrivalCity, departureDay, arrivalDay, departureHour, arrivalHour }) => (
        <div key={id} className="col-span-12">
          <div className="flex flex-col md:flex-row rounded-2xl p-2 bg-white">
            <div className="bg-[#F5F6FF] rounded-xl shrink">
              <Image
                width={200}
                height={260}
                src={img}
                alt={title}
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="p-3 overflow-hidden flex-grow">
              <div className="property-card__body">
                <div className="grid grid-cols-12 gap-4 lg:gap-6 justify-between">
                  <div className="col-span-12 xl:col-span-8">
                    <div className="flex gap-8 xl:gap-16 mb-2">
                      <p
                        className="pl-0 lg:pl-2 text-[var(--neutral-700)] text-xl font-semibold">
                        {driverName}
                      </p>
                      <div className="pl-0 lg:pl-6 flex items-center shrink-0">
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                        <span className="block text-[var(--neutral-700)]">
                        {star}
                        </span>
                      </div>
                      
                    </div>
                    <ul className="columns-1 lg:columns-2 flex-wrap gap-3 md:ps-2 font-medium ">
                      <li className="py-2">From: <span className="font-semibold">{departureCity}</span> </li>
                      <li className="py-2">{departureDay} </li>
                      <li className="py-2">{departureHour}</li>
                      <li className="py-2">To: <span className="font-semibold">{arrivalCity}</span></li>
                      <li className="py-2">{arrivalDay} </li>
                      <li className="py-2">{arrivalHour}</li>
                    </ul>
                  </div>
                  <div className="col-span-12 xl:col-span-4 xl:text-end">
                    <span className="block mb-4">
                    <span className="text-gray-700 font-semibold text-xl">
                        {price} FCFA
                      </span>{" "}        
                    </span>

                    <span className="block mb-2">
                      <span className="text-gray-700 font-medium text-xl">                     
                      </span>{" "}
                      <span className="text-gray-400"></span>
                    </span>

                    <Link
                      href="reservationHilary2"
                      className="btn-primary hover:bg-blue-700 hover:text-white rounded-md font-semibold">
                      Book Now
                    </Link>

                  </div>
                </div>
                <ul className="flex divide-x divide-dashed mt-8 bg-[#F5FCF8] overflow-x-auto">
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-user-friends text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                    {pass} pass
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-shopping-bag text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      {bag} bags{" "}
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-tachometer-alt text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      {maxDistance} km{" "}
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-gas-pump text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                    {fuelType}
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-cog text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      {boxType}{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <CardPagination /> */}
    </>
  );
};

export default page;
