import { Button, Html, Img, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const VendorUpdateEmail = () => {
    return (
        <Html>
            <Tailwind>
                {/* Header */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-7' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/white-logo.png' alt='blue logo' />
                </Section>

                {/* hero image */}
                <Section className='bg-[#2F29C4]'>
                    <Img className='block mx-auto my-8' src='https://eehwmflhrywyozuwcqkw.supabase.co/storage/v1/object/public/images/emails/updateEmail.svg?t=2024-01-26T08%3A15%3A29.153Z' />
                </Section>
                <Section className='text-[#2F29C4]'>
                    <Text className='mx-5  text-4xl font-bold'>Vendor Update Email</Text>
                    <Text className='mx-5 text-[1rem]'>Dear [Vendor Name/Company Name],</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for making updates to your vendor profile on OUTSOURCE2EU. We want to ensure that our platform maintains a high standard of accuracy and professionalism. Therefore, any changes made to vendor profiles undergo a review process before they become visible to users.</Text>
                    <Text className='mx-5 text-[1rem]'>Please be informed that the review of your updates might take some time. We aim to process these as swiftly as possible, but we ask for your patience during this period.</Text>
                    <Text className='mx-5 text-[1rem]'>Once the review is complete and if everything is in order, your updates will be published. If we find any discrepancies or require further information, one of our representatives will reach out to you.</Text>
                    <Text className='mx-5 text-[1rem]'>We understand the importance of ensuring your profile is up-to-date and accurately reflects your offerings. Please rest assured that we're working diligently to process your updates.</Text>
                    <Text className='mx-5 text-[1rem]'>If you have any questions or concerns in the meantime, please don't hesitate to contact our support team at vendor@outsouce2eu.com.</Text>
                    <Button href='www.google.com' className='m-5 text-[1rem] py-4 px-5 bg-[#2F29C4] text-white'>E-mail us</Button>
                    <Text className='mx-5 text-[1rem]'>Thank you for your understanding and cooperation.</Text>
                    <Text className='mx-5 text-[1rem]'>Warm Regards,<br />
                        OUTSOURCE2EU<br />
                        Support Team</Text>
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

export default VendorUpdateEmail