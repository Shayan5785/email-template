import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email3 = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='bg-[#2F29C4] text-white'>
                    <Text className='mx-5  text-4xl font-semibold'>5 trusted companies that are right for your business.</Text>
                    <Text className='mx-5  text-3xl'>In the event that none of the companies we recommend work, we will provide you with 5 more or refund your money.</Text>
                    <Text className='mx-5  text-5xl font-semibold'>For $299</Text>
                    <Button href='www.google.com' className='mx-5  my-5 text-[1rem] py-4 px-12 text-[#2F29C4] bg-white rounded font-semibold'>Get in touch</Button>
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

export default Email3