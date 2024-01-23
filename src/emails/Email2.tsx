import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email2 = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='text-[#2F29C4]'>
                    <Text className='text-center mx-5 text-[1rem]'>Choose the ideal outsourcing company. Save costs, time, and boost efficiency for success.</Text>
                    <Text className='text-center mx-5  text-4xl font-bold'>Reasons why you should consider outsourcing</Text>
                    <Text className='text-center mx-5 text-[1rem]'>At Outsource 2EU, we specialize in connecting you with the right service provider for your business quickly and efficiently. We understand that time is of the essence, which is why we strive to match you with a provider in just 10 days or less.</Text>
                    <Section className='text-center'>
                    <Button href='www.google.com' className='mx-auto my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Contact Us</Button>
                    </Section>
                    <Text className='text-center mx-5  text-4xl font-bold'>Build your headhunting
                        in Europe</Text>
                    <Text className='text-center mx-5 text-[1rem]'>Looking for top talent to drive your business forward? Outsource2Eu headhunting services can help you find and attract the best candidates in your industry.</Text>
                    <Section className='text-center'>
                        <Button href='www.google.com' className='mx-auto  my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Get in Touch</Button>
                    </Section>
                </Section>

                {/* footer */}
                <Section className='bg-[#2F29C4] text-white text-[1rem]'>
                    <Text className='mt-3 mx-5 mb-1'>contact@outsource2eu.com</Text>
                    <Text className='mx-5 my-1'>+383 49 665 677</Text>
                    <Text className='mb-3 mx-5 mt-1'>tr. Nr 5, Zeki Shulemaja, Prishtinë 10000</Text>
                </Section>
            </Tailwind>
        </Html>
    )
}

export default Email2