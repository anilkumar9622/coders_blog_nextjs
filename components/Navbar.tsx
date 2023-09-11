import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav  className='flex items-center justify-between py-6 no-underline'>
       <Link href='/' style={{textDecoration: 'none'}}>
           <div  className='flex items-center cursor-pointer'>
               <Image src="/logo.png" alt="logo" height={35} width={50}  />
               <span className="no-underline font-bold ml-2 text-primary">
                   Coder's blog
                   </span>
               
           </div>
           </Link> 
           <ul className='flex items-center list-none' >
               <li className='mr-6 font-medium text-gray-600 ' style={{textDecoration:'none'}}>
                   <a href="#" className='no-underline text-gray-600 '>Products</a>
               </li>
               <li className='mr-6 font-medium text-grey-600'>
                   <a href="#" className='no-underline text-gray-600'>Pricing</a>
               </li>
               <li className='mr-6 font-medium text-grey-600'>
                   <a href="#" className='no-underline text-gray-600 '>Docs</a>
               </li>
               <li className='mr-6 font-medium text-grey-600 line-through no-underline'>
                   <a href="#" className='no-underline text-gray-600 '>Company</a>
               </li>
               
           </ul>
           <ul className='flex items-center list-none no-underline'>
               <li  className='mr-6 font-medium text-grey-600 list-none'>
                   <a href='' className='no-underline text-gray-600 hover:text-gray-600'>login</a>
               </li>
               <li  className='font-medium text-grey-600 list-none'>
                   <a href='' className='no-underline bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'>
                       Sign up</a>
               </li>
           </ul>
         
    </nav>
  )
}
