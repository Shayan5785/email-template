'use client'

import VendorApplication from '@/emails/VendorApplication'
// import UserVerificationEmail from './emails/UserVerificationEmail'
import { FormEvent, useState } from 'react'
import ApplicationApproved from '@/emails/ApplicationApproved'
import VendorRejectEmail from '@/emails/VendorRejectEmail'
import VendorUpdateEmail from '@/emails/VendorUpdateEmail'
import ContactForm from '@/emails/ContactForm'
import Email21 from '@/emails/Email21'
import Email1 from '@/emails/Email1'
import Email2 from '@/emails/Email2'
import Email3 from '@/emails/Email3'

export default function Home() {
  const [user, setuser] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOnSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    setLoading(true)
    e.preventDefault()
    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        user, email
      })
    })
    console.log('send to server')
    setLoading(false)
  }

  return (
    // <main className='flex justify-center items-center h-screen'>
    //   <form className='p-5 border border-slate-500 rounded bg-emerald-300'>
    //     <label htmlFor="">Name</label>
    //     <input placeholder='Enter your Name' className='py-2 px-3 ml-3 border border-black' type="text" value={user} onChange={(e) => setuser(e.target.value)} />
    //     <div className='my-5' />
    //     <label htmlFor="">Email</label>
    //     <input placeholder='Enter your Email' className='py-2 px-3 ml-3 border border-black' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <button className={`${loading ? 'opacity-80' : '' } block bg-black text-white p-3 rounded mx-auto mt-4`} type='submit' onClick={handleOnSubmit}>Email</button>
    //   </form>
    // </main>
    <div>
      {/* <UserVerificationEmail /> */}
      {/* <VendorApplication /> */}
      {/* <ApplicationApproved /> */}
      {/* <VendorRejectEmail /> */}
      {/* <VendorUpdateEmail /> */}
      {/* <ContactForm /> */}
      {/* <ContactForm /> */}
      {/* <Email21 /> */}
      {/* <Email2 /> */}
      <Email3 />
    </div>
  )
}
