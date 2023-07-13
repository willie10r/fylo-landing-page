import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <section>
        <div className='flex flex-col'>
            <h3>About Us</h3>
            <Link href='/'>Jobs</Link>
            <Link href='/'>Press</Link>
            <Link href='/'>Blog</Link>
        </div>
        <div className='flex flex-col'>
            <h3>About Us</h3>
            <Link href='/'>Terms</Link>
            <Link href='/'>Privacy</Link>
        </div>
        <div className='flex flex-row'>
            <Image src='' alt='svg logo'/>
            <Image src='' alt='svg logo'/>
            <Image src='' alt='svg logo'/>
        </div>
    </section>
  )
}
