var nodemailer = require("nodemailer");

export const sendMail = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    transporter.sendMail(mailOptions, function (error: string, info: string) {
        if (error) {
          throw new Error(error);
        } else {
          console.log("Email Sent");
          return true;
        }
      });
}

export default sendMail;
