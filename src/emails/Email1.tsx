import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email1 = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='text-[#2F29C4]'>
                    <Text className='text-center mx-5  text-4xl font-bold'>Reasons why you should consider outsourcing</Text>
                    <Text className='text-center mx-5 text-[1rem]'>We provide professional and cost-effective solutions to help you reach your goals faster. Our experienced SEO team is dedicated to helping you get the most out of your investment in Sweden. Fill out this form so we can help you find the right solution.</Text>
                    <Section className='text-center'>
                        <Button href='www.google.com' className='mx-auto  my-5 text-[1rem] py-4 px-7 bg-[#2F29C4] text-white rounded'>Contact Us</Button>
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

export default Email1