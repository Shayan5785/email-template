import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const Email21 = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='text-[#2F29C4]'>
                    <Text className='mx-5  text-4xl font-bold'>Morem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text className='mx-5 text-[1rem]'>Dear [Recipient's Name],</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for reaching out to OUTSOURCE2EU regarding our matchmaking, recruiting, and dedicated teams services. We truly value your interest and are eager to provide solutions tailored to your needs.</Text>
                    <Text className='mx-5 text-[1rem]'> To offer you the best support and insights, we encourage you to sign up directly with OUTSOURCE2EU. By doing so, you'll gain access to our comprehensive directory of companies across Europe, enabling you to explore potential partners and opportunities at your convenience.</Text>
                    <Button href='www.google.com' className='m-5 text-[1rem] py-4 px-5 bg-[#2F29C4] text-white'>Sign up Now and Explore</Button>
                    <Text className='mx-5  text-4xl font-medium'>Beyond the self-serve features, we're here to provide personalized guidance. We recommend scheduling a direct call with one of our specialists to discuss your specific requirements in detail.</Text>
                    <Button href='www.google.com' style={{ border: '1px solid #2F29C4' }} className='m-5 text-[1rem] py-4 px-5 text-[#2F29C4] rounded'>Sign up Now and Explore</Button>
                    <Text className='mx-5 text-[1rem]'>If you're not ready to schedule a call right away, that's perfectly okay. A member of our team will be reaching out to you shortly via email to discuss further steps and answer any questions.</Text>
                    <Text className='mx-5 text-[1rem]'>Joining our platform and directly engaging with potential partners will position you optimally within the European market landscape. We're excited about the prospect of collaborating with you and supporting your endeavors.</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for considering OUTSOURCE2EU. We look forward to connecting soon.</Text>
                    <Text className='mx-5 text-[1rem]'>Warm regards,</Text>
                    <Text className='mx-5 text-[1rem]'>[Your Name or Your Company Representative's Name]</Text>
                    <Text className='mx-5 text-[1rem]'>OUTSOURCE2EU Team</Text>
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

export default Email21