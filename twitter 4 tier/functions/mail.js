const nodemailer = require("nodemailer");

async function sendMail(email, digit) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.MAIL_ID,
    to: email,
    subject: "이메일 인증을 해주세요.",
    text: `당신의 인증 번호는 ${digit} 입니다.`,
  };

  await transporter.sendMail(mailOptions);
}

function randomNumber() {
  return Math.floor(Math.random() * (999999 - 100000) + 100000);
}
module.exports = { sendMail, randomNumber };
