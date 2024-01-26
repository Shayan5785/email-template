import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const VendorRejectEmail = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-7' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/white-logo.png' alt='blue logo' />
                </Section>

                {/* hero image */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-8' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/rejectEmail.svg' />
                </Section>
                <Section className='bg-[#2F29C4] text-white'>
                    <Text className='mx-5  text-4xl font-bold'>Vendor Reject Email</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for your interest in becoming a vendor with [Your Company Name]. </Text>
                    <Text className='mx-5 text-[1rem]'>We appreciate the effort and time you took to submit your application. After careful consideration, we regret to inform you that we are unable to approve your application at this time.</Text>
                    <Text className='mx-5 text-[1rem]'>Our platform maintains specific criteria to ensure the highest quality services to our clients. While we recognize the strengths and capabilities of many applicants, we must make selections based on current needs and market dynamics.

                    </Text>
                    <Text className='mx-5 text-[1rem]'>However, this does not preclude the possibility of future collaborations. We encourage you to reapply after six (6) months or keep an eye on our platform for any updates or changes that might align with your offerings.</Text>
                    <Text className='mx-5 text-[1rem]'>We appreciate your patience and understanding throughout this process. If you have any questions or require further assistance in the meantime, please do not hesitate to reach out to our support team at vendor@outsouce2eu.com.</Text>
                    <Button href='www.google.com' className='m-5 text-[1rem] py-4 px-5 text-[#2F29C4] bg-white'>Email us</Button>
                    <Text className='mx-5 text-[1rem]'>Thank you for your understanding, and we wish you continued success in your endeavors.</Text>
                    <Text className='mx-5 text-[1rem]'>Warm Regards,<br />
                        OUTSOURCE2EU<br />
                        Support Team</Text>
                    <Text className='mx-5 text-[1rem]'></Text>
                </Section>
                
                {/* footer */}
                <Section className='bg-[#2F29C4] text-white text-[1rem] mt-1 text-center'>
                    <img className='block mx-auto my-7' src="https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/white-logo.png" alt="white logo" />
                    <Text className='inline-block  mx-5 mb-1'>
                        <Img className='inline mr-3' src="https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/mail.svg?t=2024-01-26T06%3A51%3A32.702Z" alt="" />
                        contact@outsource2eu.com
                    </Text>
                    <Text className='mx-5 my-1'>
                        <Img className='inline mr-3' src="https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/phone.svg?t=2024-01-26T06%3A53%3A01.470Z" alt="" />
                        +383 49 665 677
                    </Text>
                    <Text className='mb-3 mx-5 mt-1'>
                        <Img className='inline mr-3' src="https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/location.svg?t=2024-01-26T06%3A53%3A13.403Z" alt="" />
                        tr. Nr 5, Zeki Shulemaja, Prishtinë 10000
                    </Text>
                </Section>
            </Tailwind>
        </Html>
    )
}

export default VendorRejectEmail