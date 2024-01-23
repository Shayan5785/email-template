import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const VendorApplication = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='text-[#2F29C4]'>
                    <Text className='mx-5  text-4xl font-bold'>Your Vendor Application at OUTSOURCE2EU</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for submitting your vendor application to Outsource2EU. We have successfully received your information and it is currently under review.
                    </Text>
                </Section>
                <Section className='bg-[#2F29C4] text-white mt-3 mb-1 text-[1rem]'>
                    <Text className='my-5 mx-5'>Please be informed that our review process may take up to five (5) working days. We thoroughly evaluate each application to ensure that our database maintains the highest standards and offers the best companies to our platform.</Text>
                    <Text className='my-5 mx-5'>Once the review is complete, you will receive a notification regarding the status of your application. Should we require any additional information or clarifications during this time, one of our representatives will get in touch with you.
                    </Text>
                </Section>
                <Section style={{background:'#E8E7EE'}}>
                    <Text className='mt-5 mx-5 text-[#2F29C4]'>We appreciate your patience and understanding throughout this process. If you have any questions or require further assistance in the meantime, please do not hesitate to reach out to our support team at </Text>
                    <Button href='www.google.com' className='m-5 text-[1rem] py-4 px-5 bg-[#2F29C4] text-white'>E-mail us</Button>
                </Section>
                <Section className='text-[#2F29C4]'>
                    <Text className='mx-5 text-[1rem]'>Thank you for joining the biggest outsourcing platform in Europe. We look forward to potentially collaborating with you.</Text>
                    <Text className='mx-5 text-[1rem]'>Warm regards,</Text>
                    <Text className='mx-5 text-[1rem]'>OUTSOURCE2EU <br/> Support Team</Text>
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

export default VendorApplication