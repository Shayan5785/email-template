import { Button, Html, Section, Tailwind, Text } from '@react-email/components'
import React from 'react'

const ContactForm = () => {
    return (
        <Html>
            <Tailwind>
                <Section className='text-[#2F29C4]'>
                    <Text className='mx-5  text-4xl font-bold'>Thank you for reaching us</Text>
                    <Text className='mx-5 text-[1rem]'>Dear [Recipient's Name],</Text>
                    <Text className='mx-5 text-[1rem]'>Thank you for using OUTSOURCE2EU's Partner contact form to reach out to [X Company]. We wanted to confirm that we have forwarded your message to them and will ensure they receive it.</Text>
                    <Text className='mx-5 text-[1rem]'>In our commitment to facilitate effective collaborations and simplify your search, we'd like to introduce you to our Get Matched service. Here's how it can benefit you:</Text>

                    <Text className='mx-5 mt-12 text-5xl font-bold'>Precision Matchmaking</Text>
                    <Text className='mx-5 text-[1rem]'>
                        We'll connect you with a company that has a track record of assisting clients with similar needs. <br />
                        Time & Cost Efficiency: No more spending hours or days finding the right fit. We've got it covered, saving you both time and potential long-term costs.</Text>
                    <Text className='mx-5 text-[1rem] text-2xl font-bold'>Expertise: </Text>
                    <Text className='mx-5 text-[1rem]'>Rely on our knowledge of our partners' strengths, specialties, and successful past collaborations.</Text>
                </Section>
                <Section className='text-[#2F29C4] bg-[#EBEAFA]'>
                    <Text className='mx-5 mt-12 text-3xl font-bold'>For a fee of <span className='text-6xl'>$299</span>,</Text>
                    <Text className='m-5 text-[1rem]'>our Get Matched service provides you a curated connection, ensuring your project gets the best-suited expertise from the start. </Text>
                    <Text className='m-5 text-[1rem]'>Interested?</Text>
                </Section>
                <Section className='text-[#2F29C4]'>
                    <Button href='www.google.com' className='mx-5 my-8 text-[1rem] py-4 px-8 rounded text-xl bg-[#2F29C4] text-white font-semibold'>Get in Touch</Button>
                    <Text className='mx-5 text-[1rem]'>If you have any further questions or need assistance, don't hesitate to contact us.</Text>
                    <Text className='mx-5 text-[1rem]'>Best wishes for a successful collaboration!</Text>
                    <Text className='mx-5 text-[1rem]'>Warm Regards, <br />
                        OUTSOURCE2EU<br />
                        Support Team</Text>
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

export default ContactForm