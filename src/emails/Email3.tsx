import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email3 = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='my-7 mx-5' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/white-logo.png' alt='blue logo' />
                </Section>
                <Section className='bg-[#2F29C4] text-white'>
                    <Text className='mx-5 mt-14 text-4xl font-semibold'>5 trusted companies that are right for your business.</Text>
                    <Text className='mx-5  text-3xl'>In the event that none of the companies we recommend work, we will provide you with 5 more or refund your money.</Text>
                    <Text className='mx-5  text-5xl font-semibold'>For $299</Text>
                    <Button href='www.google.com' className='mx-5  my-5 text-[1rem] py-4 px-12 text-[#2F29C4] bg-white rounded font-semibold'>Get in touch</Button>
                </Section>

                {/* footer */}
                <Section className='bg-[#2F29C4] text-white text-[1rem] text-center'>
                    <Section className='my-20'>
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
                </Section>
            </Tailwind>
        </Html>
    )
}

export default Email3