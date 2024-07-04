"use client"

import { Tab } from "@headlessui/react";
import Image from "next/image";
import {redirect} from "next/navigation"

import Link from "next/link";
import { useState } from "react";


interface PayementStripeFormProps{
    onSubmitStripe:(payement:PayementStripeData) => void;
}

interface PayementStripeData{
    reservationId:string;
    price:string;
    description:string;

}


interface PayementCoolPayFormProps{
    onSubmitCoolPay:(payement:PayementCoolPayData) => void;
}

interface PayementCoolPayData{
    transaction_amount:string;
    transaction_currency:string;
    transaction_reason:string;
    customer_phone_number:string;
    customer_name:string;
    customer_email:string;
    customer_lang:string;
}

  

  
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

const PayementStripeForm: React.FC<PayementStripeFormProps>=({onSubmitStripe})=> {
    const [reservationId, setReservationId]=useState('');
    const [price, setPrice]=useState('');
    const [description, setDescription]=useState('');

    const handleSubmitStripe= (e:React.FormEvent) => {
        e.preventDefault();
        const payementData: PayementStripeData={reservationId, price, description};
        onSubmitStripe(payementData);
        //Effacer les donnees
        setReservationId('');
        setPrice('');
        setDescription('');
    }


    return (
        <form action="#" onSubmit={handleSubmitStripe} >            
            <label
                htmlFor="review-phoneNumber"
                className="text-xl font-medium block mb-0">
                Phone Number 
                </label>
                <input
                type="text"
                className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                placeholder=""
                id="review-phoneNumber"
                    />
                <button type="submit" className=" inline-flex items-center gap-2 mt-6 lg:mt-8 py-3 px-6 rounded-md bg-primary text-white hover:bg-blue-700 font-semibold text-xl w-full justify-center mb-6 ">
                    Complete payement
                </button>
        </form>            
      )

}

const PayementCoolPayForm: React.FC<PayementCoolPayFormProps>=({onSubmitCoolPay})=> {
    const [transaction_amount, setTransaction_amount]=useState('');
    const [transaction_currency, setTransaction_currency]=useState('');
    const [transaction_reason, setTransaction_reason]=useState('');
    const [customer_phone_number, setCustomer_phone_number]=useState('');
    const [customer_name, setCustomer_name]=useState('');
    const [customer_email, setCustomer_email]=useState('');
    const [customer_lang, setCustomer_lang]=useState('');

    const handleSubmitCoolPay = (e:React.FormEvent) => {
        e.preventDefault();
        const payementData: PayementCoolPayData ={transaction_amount,transaction_currency,transaction_reason,customer_phone_number,customer_name,customer_email,customer_lang};
        onSubmitCoolPay(payementData);
        //Effacer les donnees
        setTransaction_amount('');
        setTransaction_currency('');
        setTransaction_reason('');
        setCustomer_phone_number('');
        setCustomer_name('');
        setCustomer_email('');
        setCustomer_lang('');
    }

    return (
        <form action="#" onSubmit={handleSubmitCoolPay} >
            <div>
                <label
                    htmlFor="transaction_amount"
                    className="text-xl font-medium block mb-0">
                    Montant 
                    </label>
                    <input
                    type="numeric"
                    className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                    id="transaction_amount"
                    name="transaction_amount"
                        />
            </div>
            <div>
                <label
                    htmlFor="transaction_amount"
                    className="text-xl font-medium block mb-0">
                    Montant 
                    </label>
                    <input
                    type="numeric"
                    className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-md py-3 px-5 focus:outline-none"
                    id="transaction_amount"
                        />
            </div>             
            <button type="submit" className=" inline-flex items-center gap-2 mt-6 lg:mt-8 py-3 px-6 rounded-md bg-primary text-white hover:bg-blue-700 font-semibold text-xl w-full justify-center mb-6 ">
                Complete payement
            </button>
        </form>            
      )
    
    }



const Page = () => {
        const handleFormSubmitStripe = (data: PayementStripeData) => {
            console.log('Submitted data:', data);
          };

        const handleFormSubmitCoolPay = (data: PayementCoolPayData) => {
           console.log('Submitted data:', data);
          };


  return (
    <main>
      <div className="py-[10px] lg:py-[40px] bg-[var(--bg-2)] overflow-hidden px-3">
        <div className="container flex items-center justify-center ">

        <div className="bg-white p-4 col-span-8 xl:col-span-2 w-[420px] xl:w-[50%] md:w-[60%]">
            <div className="section-space--sm relative">  

              <div>
                <p className=" mb-8 text-2xl font-bold flex justify-center"> Payement Methods </p>
                
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
                      width={174}
                      height={62}
                      src="/img/CardLogo.png"
                      alt="image"
                      className=""
                    />


                    </Tab>{""}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                      
                      <Image
                      width={183}
                      height={61}
                      src="/img/PaypalLogo.png"
                      alt="image"
                      className=""
                    />
                    </Tab>{" "}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md" : ""
                        )
                      }>
                      
                      <Image
                      width={250}
                      height={64}
                      src="/img/MomoLogo.png"
                      alt="image"
                      className=""
                    />
                    </Tab>{" "}
                   
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "font-medium border-2 border-primary rounded-md " : ""
                        )
                      }>

                      <Image
                      width={274}
                      height={64}
                      src="/img/OMLogo.png"
                      alt="image"
                      className=""
                    />

                    </Tab> 
                  </Tab.List>
                  <Tab.Panels className="tab-content">
                    <Tab.Panel>
                        <div className="flex flex-col gap-4">
                            <PayementStripeForm onSubmitStripe={handleFormSubmitStripe}/>
                        </div>

                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col gap-4">
                            <PayementStripeForm onSubmitStripe={handleFormSubmitStripe}/>
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col gap-5">
                            <PayementCoolPayForm onSubmitCoolPay={handleFormSubmitCoolPay}/>
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                    <div className="flex flex-col gap-5">
                        <PayementCoolPayForm onSubmitCoolPay={handleFormSubmitCoolPay}/>
                    </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                <div>
                <ul className="flex flex-col gap-4 py-8 ">
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Price: 20k
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                       Additionnal Taxes: 30k
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                        <i className="las la-check text-lg text-primary"></i>
                      </div>
                      <span className="inline-block">
                        Total Price: 50k
                      </span>
                    </div>
                  </li>
                </ul>
                </div>               
              </div>
            



            </div>   
          </div>
        </div>
      </div>   
    </main>
  );
};

export default Page;
