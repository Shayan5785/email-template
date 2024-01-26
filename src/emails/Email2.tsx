import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email2 = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className=''>
                    <Img className='block mx-auto my-7' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/blueLogo.svg?t=2024-01-26T06%3A40%3A10.351Z' alt='blue logo' />
                </Section>

                <Section className='text-[#2F29C4]'>
                    <Text className='text-center mx-5 text-[1rem]'>Choose the ideal outsourcing company. Save costs, time, and boost efficiency for success.</Text>
                    <Text className='text-center mx-5  text-4xl font-bold'>Reasons why you should consider outsourcing</Text>
                    <Text className='text-center mx-5 text-[1rem]'>At Outsource 2EU, we specialize in connecting you with the right service provider for your business quickly and efficiently. We understand that time is of the essence, which is why we strive to match you with a provider in just 10 days or less.</Text>
                    <Section className='text-center'>
                        <Button href='www.google.com' className='mx-auto my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Contact Us</Button>
                    </Section>
                    <Text className='text-center mx-5  text-4xl font-bold'>Build your headhunting
                        in Europe</Text>

                    {/* hero image */}
                    <Section>
                        <Img className='block mx-auto my-8' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/email2.png?t=2024-01-26T07%3A45%3A14.458Z' />
                    </Section>

                    <Text className='text-center mx-5 text-[1rem]'>Looking for top talent to drive your business forward? Outsource2Eu headhunting services can help you find and attract the best candidates in your industry.</Text>
                    <Section className='text-center'>
                        <Button href='www.google.com' className='mx-auto  my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Get in Touch</Button>
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

export default Email2