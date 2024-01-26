import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const ApplicationApproved = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-7' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/white-logo.png' alt='blue logo' />
                </Section>

                {/* hero image */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-8' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/applicationApproved.svg?t=2024-01-26T06%3A57%3A33.364Z' />
                </Section>
                <Section className='bg-[#2F29C4] text-white'>
                    <Text className='mx-5  text-4xl font-bold'>Your application has been approved</Text>
                    <Button href='www.google.com' className='m-5 text-[1rem] py-4 px-5 text-[#2F29C4] bg-white'>Your profile</Button>
                    <Text className='mx-5 text-[1rem]'>Thank you for submitting your vendor applicanjb ion to Outsource2EU. We have successfully received your information and it is currently under review.
                    </Text>
                </Section>
                <Section className='bg-[#6373E5] text-white'>
                    <Text className='mx-5  text-4xl font-bold'>To unlock the platform's full potential:</Text>
                    <ul className='mx-5 text-[1rem]'>
                        <li>Populate your profile with comprehensive information.</li>
                        <li>Showcase your Case Studies.</li>
                        <li>List esteemed clients you've collaborated with.</li>
                        <li>Ensure the information provided is both accurate and up-to-date.</li>
                    </ul>
                    <Text className='mx-5 text-[1rem]'>Want to stand out? Learn about our Featured Offers and discover how they can elevate your presence.
                    </Text>
                    <Text className='mx-5 text-[1rem]' >If you're looking to maximize your experience with us,  to learn how to best utilize the platform.</Text>
                    <Button href='www.google.com'
                        style={{ border: '1px solid white' }}
                        className='m-5 text-[1rem] py-4 px-5 text-white'>Schedule a call</Button>
                    <Text className='mx-5 text-[1rem]'>We are thrilled that you have joined our platform and we look forward to a productive relationship..</Text>
                </Section>
                <Section className='bg-[#2F29C4] text-white'>
                    <Text className='mx-5 text-[1rem]'>For queries or assistance, don't hesitate to contact our support team at</Text>
                    <Text className='mx-5 text-[1rem]'>Warm Regards,</Text>
                    <Text className='mx-5 text-[1rem]'>
                        OUTSOURCE2EU<br />
                        Support Team
                    </Text>
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

export default ApplicationApproved