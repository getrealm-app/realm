import React from 'react'
import { Link } from 'react-router-dom';
import '../static/css/App.css'
// import realm from '../static/images/realm.png'
import transparent from '../static/images/transparent.png'

export default function Home() {
    return (

        <div style={{ backgroundColor: "#100e15" }}>
            <div className="absolute z-50 top-40 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[100rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div>
            {/* <div className="absolute z-50 top-60 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[80rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/1-dark@tinypng.e3eb84f764aac4ef698a06d2048839eb.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div> */}
            {/* <div className="absolute z-50 top-10 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[60rem] flex-none flex justify-end">
                    <picture>
                        <source srcSet={"https://tailwindcss.com/_next/static/media/6-dark@tinypng.8d34024cd761e88dc7ab31fa147559b2.png"} type="image/avif" />
                        <img src={"https://tailwindcss.com/_next/static/media/6-dark@tinypng.8d34024cd761e88dc7ab31fa147559b2.png"} alt="" className="w-[150rem] flex-none max-w-none block" />
                    </picture>
                </div>
            </div> */}
            <div className="sticky top-0 w-full backdrop-blur flex-none transition-colors duration-500 z-40 border-b border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent">
                <div className="pb-3 pt-5 border-b border-slate-900/10 px-8 border-0 dark:border-slate-300/10 mx-4 lg:mx-0 items-center justify-center">
                    <div>
                        <div className="px-4 inline-flex items-center justify-center">
                            <img
                                src={transparent}
                                alt="logo"
                                width={28}
                                height={28}
                            />
                            <p className="logo px-2 text-2xl text-white">Realm</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center md:px-10 px-4 md:py-36 py-10" style={{ backgroundColor: "#100e15" }}>
                {/* <div className="p-5">
                    <span className="text-center font-normal text-white pr-4 pl-4 pt-2 pb-2 rounded-full text-3xl" style={{ backgroundColor: "#2b2b2b", fontFamily: "Aeonik,-apple-system,Arial,sans-serif" }}>Realm</span>
                </div> */}




                <div className='md:w-9/12 sm:w-full text-center m-auto py-2'>
                    <h1 className='heading text-white md:text-8xl text-4xl'>
                        {/* Write a hero for a marketing agency */}
                        {/* Growth hack your brand with Tiktok */}

                        {/* If you’re building a brand, you need to get on TikTok */}
                        {/* Save hours of research with our Tiktok influencer database */}
                        {/* Find Tiktok influencers for your marketing campaign */}
                        {/* Save hundreds of hours of research with our Tiktok influencer database */}
                        Brand sponsorships are not just for Tiktok superstars
                    </h1>
                    <div className="md:w-10/12 text-center m-auto py-5 px-2">
                        <h2 className='heading md:text-2xl' style={{ color: '#b7b9c0' }}>
                            Realm enables micro-influencers with less than 10K followers to form partnerships with small online businesses and earn money from posting paid content on Tiktok
                        </h2>
                    </div>

                    {/* <div class="relative overflow-x-auto shadow-md rounded-lg my-10">
                        <table class="w-full text-sm text-left  text-gray-400">
                            <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium  text-white whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class=" border-b bg-gray-800 border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium  text-white whitespace-nowrap">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium  text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium  text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    {/* monetize your Tiktok followers */}
                </div>
                <div className="flex-row items-center">
                    <Link to={'/early-access'}>
                        <button
                            // onClick={() => { handleSubmit() }} 
                            style={{ backgroundColor: "#1c79ed" }} className='heading button text-lg text-white font-bold rounded-full border-none cursor-pointer pt-2 pb-2 pr-5 pl-5 m-1'>Get Early Access</button>
                    </Link>
                </div>
            </div>
            <div className='md:w-7/12 sm:w-full px-5 pt-24' style={{ textAlign: "center", margin: "auto" }}>
                <h1 className='heading' style={{ color: "white", fontSize: 36 }}>Tiktok marketing is the future</h1>
                <div className="py-5 px-1" style={{ maxWidth: "100%", textAlign: "center", margin: "auto" }}>
                    <h2 className='heading' style={{ color: '#b7b9c0', fontSize: 20 }}>
                        We realized that most of GenZ influencers who have less than 10,000 followers have less opportunities to monetize their Tiktok accounts. Similarly, ecommerce shop owners cannot afford big influencers to grow their online business
                        
                    </h2>
                </div>
            </div>
            <div className='md:w-7/12 sm:w-full px-5 py-24' style={{ textAlign: "center", margin: "auto" }}>
                <h1 className='heading' style={{ color: "white", fontSize: 36 }}>We are here to connect the dots</h1>
                <div className="py-5 px-1" style={{ maxWidth: "100%", textAlign: "center", margin: "auto" }}>
                    <h2 className='heading text-lg' style={{ color: '#b7b9c0', fontSize: 20 }}>
                        Our goal is to support both micro-influencers and small ecommerce businesses by creating the best platform that connects the perfect influencer to the perfect business so they can form a partnership that will benefit both parties
                    </h2>
                </div>
            </div>
            <div className="text-center py-8" style={{ backgroundColor: "#100e15" }}>

                {/* <h1 className='heading' style={{ color: "white", fontSize: 36 }}>Built for micro-influencers</h1>
                <div className="py-5 px-2 md:w-9/12 sm:w-1/5" style={{ textAlign: "center", margin: "auto" }}>
                    <h2 className='heading text-lg pb-5 px-5 text-center md:w-9/12 sm:w-full m-auto' style={{ color: '#b7b9c0', fontSize: 20 }}>
                        Our goal is to support micro-influencers and small businesses by creating the best platform that connects the perfect influencer to the perfect business and enables them to form win-win partnerships
                    </h2>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-3 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Realm Verified
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        fair pricing
                        via GCash/Maya
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        post quality
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        coupons/discounts
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        sponsored mentions
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        hashtags
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        likes
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        2k-10k followers
                    </span>
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        emails
                    </span>
                    offers
                    <span class="bg-gray-100 text-gray-800 md:text-2xl sm:text-xs font-medium inline-flex items-center px-2 py-1 rounded-full mr-2 mt-4 dark:bg-gray-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        IG influencers
                    </span>
                </div> */}
                <div className="md:w-7/12 w-11/12 mx-auto">
                    <h1 className='heading md:my-20 my-10' style={{ color: "white", fontSize: 36 }}>Frequently Asked Questions</h1>
                    <div id="accordion-open" data-accordion="open">
                        <h2 id="accordion-open-heading" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex justify-between items-center p-5 w-full rounded-lg font-medium text-left" data-accordion-target="#accordion-open-body" aria-expanded="false" aria-controls="accordion-open-body">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    How does Realm work?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body" class="hidden text-white" aria-labelledby="accordion-open-heading">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">
                                    <ol class="list-decimal list-inside text-left">
                                        <li class="mb-2">Join the waitlist <Link class="text-blue-600" to={'/early-access'}>here</Link>. Our team will notify you in a few days if you are given access to the platform already</li>
                                        <li class="mb-2">If you can already access the platform, you can start creating your profile and linking your Tiktok account</li>
                                        <li class="mb-2">You can search our list of partner businesses (sorted by requirements, industry/category, budget etc.) where you can apply for a partnership</li>
                                        {/* eligibility, category, requirements, budget */}
                                        <li class="mb-2">After accepting the offer partnership offer and posting your content, you will get paid through Gcash/Maya based on performance</li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-1" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex justify-between items-center p-5 w-full rounded-lg font-medium text-left" data-accordion-target="#accordion-open-body-1" aria-expanded="false" aria-controls="accordion-open-body-1">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    Who can use Realm?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" class="hidden text-white" aria-labelledby="accordion-open-heading-1">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">Anyone who is at least 14 years old, lives in the Philippines, an active Tiktok micro-influencer with quality content and solid engagement and has GCash/Maya (or any other ewallets) account to cash out</p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-2" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex rounded-lg justify-between items-center p-5 w-full font-medium text-left" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    Realm sounds too good to be true. Is this real?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-2" class="hidden text-white" aria-labelledby="accordion-open-heading-2">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">
                                    Realm is as real as it gets. We are an innovative Filipino startup that aims to help GenZs achieve financial freedom.
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-3" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex rounded-lg justify-between items-center p-5 w-full font-medium text-left" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    How much money can I (actually) make?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-3" class="hidden text-white" aria-labelledby="accordion-open-heading-3">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">The sky is the limit!</p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-4" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex rounded-lg justify-between items-center p-5 w-full font-medium text-left" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    Does Realm only work with Tiktok?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-4" class="hidden text-white" aria-labelledby="accordion-open-heading-3">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">Yes, just Tiktok for now. We’ll be adding more socials soon!</p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-5" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex rounded-lg justify-between items-center p-5 w-full font-medium text-left" data-accordion-target="#accordion-open-body-5" aria-expanded="false" aria-controls="accordion-open-body-5">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    Is this really 100% free?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-5" class="hidden text-white" aria-labelledby="accordion-open-heading-3">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">Yes. Realm is free to influencers. Brands pay Realm.</p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-6" className="my-2">
                            <button style={{ background: "#16141e" }} type="button" class="flex rounded-lg justify-between items-center p-5 w-full font-medium text-left" data-accordion-target="#accordion-open-body-6" aria-expanded="false" aria-controls="accordion-open-body-6">
                                <span style={{ color: '#b7b9c0' }} class="flex items-center">
                                    <svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    How many followers should I have to use Realm?
                                </span>
                                <svg style={{ color: '#b7b9c0' }} data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-6" class="hidden text-white" aria-labelledby="accordion-open-heading-3">
                            <div class="md:p-5 p-2">
                                <p class="mb-2 text-left">You can use Realm no matter how many followers you have (even if you have less than 10K followers). We do find that people with at least 2k Tiktok followers tend to get the most out of Realm. We have requirements for Realm users:</p>
                                <ul class="list-disc list-inside text-left">
                                    <li class="mb-2">
                                        Your Tiktok account needs to be public.
                                    </li>
                                    <li class="mb-2">
                                        Your post needs to hit the minimum view count threshold which varies from brand to brand which you can see in the Realm platform.
                                    </li>
                                    <li class="mb-2">
                                        Your post must follow the brand guidelines and Realm rules.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-7/12 w-11/12 rounded-3xl mx-auto md:mt-32 mt-20 md:px-26 px-5 md:py-12 py-6' style={{ backgroundColor: "#1c79ed" }}>
                    <h1 className='heading md:text-5xl text-3xl md:px-10' style={{ color: "white" }}>Become a micro-influencer and start earning money today</h1>
                    <h2 className='heading text-white pt-4 text-lg md:text-xl'>
                        No age requirement. No follower count requirement
                    </h2>
                    <div className="md:pt-5 pt-6 px-1" style={{ maxWidth: "100%", margin: "auto" }}>
                        {/* <h2 className='heading text-lg text-white' style={{ fontSize: 20 }}>
                            Our goal is to support both micro-influencers and small ecommerce businesses by creating the best platform that connects the perfect influencer to the perfect business and enable them to form a win-win partnership
                        </h2> */}
                        <Link to={'/early-access'}>
                            <button style={{ color: "#1c79ed" }} className='heading button text-lg bg-white font-bold rounded-full border-none cursor-pointer pt-2 pb-2 pr-5 pl-5 m-1'>Get Early Access</button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-7/12 mx-auto mb-12">
                    <div style={{ backgroundColor: "#16141e" }} className="h-0.5 mt-32"></div>
                    <h1 className='heading text-white md:text-3xl text-2xl text-left ml-6 mt-6'>
                        realm
                    </h1>
                    <h2 className='heading md:text-lg text-sm ml-6 mt-1 text-left md:w-2/4' style={{ color: '#b7b9c0' }}>
                        Connecting brands to micro-influencers
                    </h2>
                </div>
            </div>
        </div>
    );
}


