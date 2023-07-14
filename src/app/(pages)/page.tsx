import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/images/logo.svg'
import intro from '../../../public/images/illustration-intro.png'
import iconAnyWhere from '../../../public/images/icon-access-anywhere.svg'
import iconSecurity from '../../../public/images/icon-security.svg'
import iconCollaboration from '../../../public/images/icon-collaboration.svg'
import iconStore from '../../../public/images/icon-any-file.svg'
import stayProductive from '../../../public/images/illustration-stay-productive.png'
import quotes from '../../../public/images/bg-quotes.png'
import satish from '../../../public/images/profile-1.jpg'
import bruce from '../../../public/images/profile-2.jpg'
import iva from '../../../public/images/profile-3.jpg'

export default function Home() {

  
  return (
    
    <main className="mx-6">
      <section className='text-center'>
        <Image src={intro} alt='pic' className='mb-10'></Image>
        <h2 className=' font-semibold text-xl mb-6'>
          All your files in one secure <br /> location, accessible <br /> anywhere.
        </h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className=' bg-cyan-500 rounded-2xl w-48 h-9 my-8'>Get Started</button>
      </section>
      <section className='text-center'>
        <ul>
          <li>
            <Image src={iconAnyWhere} alt='svg'></Image>
            <h3>Access your files,anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
            </p>
          </li>
          <li>
            <Image src={iconSecurity} alt='svg'></Image>
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
            </p>
          </li>
          <li>
            <Image src={iconCollaboration} alt='svg'></Image>
            <h3>Real-time collection</h3>
            <p>
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </p>
          </li>
          <li>
            <Image src={iconStore} alt='svg'></Image>
            <h3>Store any type of file</h3>
            <p>
              Whether you&apos;re sharing holidays photos or work documents,
              Fylo has you covered allowing for all file types to be securely stored and shared.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <Image src={stayProductive} alt='what'></Image>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <Link href='/'></Link>
      </section>
      <section>
        <Image src={quotes} alt='whata'></Image>
        <ul>
          <li>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <Image src={satish} alt='yes'></Image>
              <h3>Satish Patel</h3>
              <p>Founder & CEO, Huddle </p>
            </div>
          </li>
          <li>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <Image src={bruce} alt='yes'></Image>
              <h3>Bruce McKenzie</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </li>
          <li>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div>
              <Image src={iva} alt='yes'></Image>
              <h3>Iva Boyd</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous.
          If you have any questions, our support team would be happy to help  you.
        </p>
        <input placeholder='example@email.com' type="text" />
        <button>Get Started For Free</button>
      </section>
      <section>
        <Image src={logo} alt='a logo' />
      </section>
    </main>
  )
}
