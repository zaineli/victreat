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
            user: "abbasaskari797@gmail.com",
            pass: process.env.PASSWORD
        }
    });
}


async function send(subject: string, message: string) {
    const postsDirectory = path.join(process.cwd(), '../../public/')
    const filenames = await fs.readdir(postsDirectory)
    console.log(filenames);
    
    const mailOptions = {
        from: 'zali.bscs22seecs@seecs.edu.pk',
        to: 'xaineli9@gmail.com',
        subject,
        text: message,
        attachments: [
            {
                filename: 'Document',
                path: cancer_data
            },
        ]
    };

    // 2) Create a transport and send email
    await newTransport().sendMail(mailOptions);
}

export async function POST(req: Request) {
    const { first_name, last_name, email, phone, cover, position } = await req.json() as unknown as {
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        cover: string,
        position: string
    };
    const message = `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\n${cover}`;
    const subject = `New Job Application from ${first_name} ${last_name} for ${position}`;
    await send(subject, message);
    return new Response('Hello World', { status: 200 });
}