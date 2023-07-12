import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.svg'


export default function Nav() {
  return (
    <div>
        <Image src={logo} alt='logo'/>
        <ul>
            <li>
                <Link href='/'>Features</Link>
            </li>
            <li>
                <Link href='/'>Team</Link>
            </li>
            <li>
                <Link href='/'>Sign-in</Link>
            </li>
        </ul>
    </div>
  )
}
