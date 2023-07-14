import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.svg'


export default function Nav() {
  return (
    <div className='flex flex-row mb-20'>
        <Image src={logo} alt='logo' className=' w-20 h-6 mx-8 mt-6'/>
        <ul className='flex flex-row justify-end'>
            <li className='ml-4 mt-5'>
                <Link href='/'>Features</Link>
            </li>
            <li className='ml-4 mt-5'>
                <Link href='/'>Team</Link>
            </li>
            <li className='ml-4 mt-5'>
                <Link href='/'>Sign-in</Link>
            </li>
        </ul>
    </div>
  )
}
