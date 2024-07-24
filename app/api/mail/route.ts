import { createRequire } from "module";
import { attachReactRefresh } from "next/dist/build/webpack-config";
import fs from 'fs/promises';

import path from 'path';
const nodemailer = require('nodemailer');

let cancer_data = createRequire(import.meta.url)('../../../public/cancer_data.json');


function newTransport() {
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
<<<<<<< HEAD
            user: "abbasaskari797@gmail.com",
            pass: process.env.PASSWORD
=======
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
        }
    });
}


<<<<<<< HEAD
async function send(subject: string, message: string, email: string, attachments: {filename: string; content: Buffer}[]) {
=======
async function send(subject: string, message: string, email: string, attachments: { filename: string; content: Buffer }[]) {
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
    const mailOptions = {
        from: email,
        to: 'jobs@victreat.com',
        subject,
        text: message,
        attachments
    };

    // 2) Create a transport and send email
    await newTransport().sendMail(mailOptions);
}

export async function POST(req: Request) {
    const data = await req.formData();
<<<<<<< HEAD
    const { first_name, last_name, email, phone, cover, position, linkedin, cv } = Object.fromEntries(data.entries()) as unknown as {
=======
    const { first_name, last_name, email, phone, cover, position, linkedin, cv, salary_expectations } = Object.fromEntries(data.entries()) as unknown as {
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        cover: string,
        position: string,
        linkedin: string,
<<<<<<< HEAD
        cv: File
    };
    // console.log()
    const message = `Name: ${first_name} ${last_name}\nEmail: ${email}\nLinkedIn: ${linkedin}\nPhone: ${phone}\nPosition: ${position}\n\n${cover}`;
=======
        cv: File,
        salary_expectations: string
    };
    // console.log()
    const message = `Name: ${first_name} ${last_name}\nEmail: ${email}\nLinkedIn: ${linkedin}\nPhone: ${phone}\nSalary Expectations: ${salary_expectations}\nPosition: ${position}\n\n${cover}`;
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
    const subject = `New Job Application from ${first_name} ${last_name} for ${position}`;
    await send(subject, message, email, [{
        filename: cv.name,
        content: Buffer.from(await cv.arrayBuffer())
    }]);
    return new Response('Hello World', { status: 200 });
}
