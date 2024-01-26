import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email1 = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className=''>
                    <Img className='block mx-auto my-7' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/blueLogo.svg?t=2024-01-26T06%3A40%3A10.351Z' alt='blue logo' />
                </Section>

                {/* hero image */}
                <Section>
                    <Img className='block mx-auto my-8' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/email1.png' />
                </Section>
                <Section className='text-[#2F29C4]'>
                    <Text className='text-center mx-5  text-4xl font-bold'>Reasons why you should consider outsourcing</Text>
                    <Text className='text-center mx-5 text-[1rem]'>We provide professional and cost-effective solutions to help you reach your goals faster. Our experienced SEO team is dedicated to helping you get the most out of your investment in Sweden. Fill out this form so we can help you find the right solution.</Text>
                    <Section className='text-center'>
                        <Button href='www.google.com' className='mx-auto  my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Contact Us</Button>
                    </Section>
                </Section>

                {/* footer */}
                <Section className='bg-[#2F29C4] text-white text-[1rem] text-center'>
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

export default Email1