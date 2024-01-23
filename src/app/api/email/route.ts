// import ApplicationApproved from '@/emails/ApplicationApproved';
// import VendorApplication from '@/emails/VendorApplication';
// import VendorRejectEmail from '@/emails/VendorRejectEmail';
// import ContactForm from '@/emails/ContactForm';
// import VendorUpdateEmail from '@/emails/VendorUpdateEmail';
// import Email1 from '@/emails/Email1';
// import Email2 from '@/emails/Email2';
import Email3 from '@/emails/Email3';
// import Email21 from '@/emails/Email21';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
// import { DropboxResetPasswordEmail } from '@/emails/Template';
// import userVerificationEmail from '../../../emails/UserVerificationEmail';

const resend = new Resend(process.env.RESEND_APIKEY);

export async function GET() {
    console.log('making req')
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'shayanaffandi5785@gmail.com',
        subject: 'test',
        react: Email3()
    });
    console.log('req sent')
    return NextResponse.json({
        status: 'OK'
    })
}







// export async function POST(request: Request) {
//     const { user, email } = await request.json()
//     console.log( user, email)
//     console.log('making req')
//     await resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'shayanaffandi5785@gmail.com',
//         subject: 'test',
//         react: userVerificationEmail()
//     });
//     console.log('req sent')
//     return NextResponse.json({
//         status: 'OK'
//     })
// }










// export async function POST(request: Request) {
//     const { user, email } = await request.json()
//     console.log( user, email)
//     console.log('making req')
//     await resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'shayanaffandi5785@gmail.com',
//         subject: 'test',
//         react: DropboxResetPasswordEmail({user:user})
//     });
//     console.log('req sent')
//     return NextResponse.json({
//         status: 'OK'
//     })
// }