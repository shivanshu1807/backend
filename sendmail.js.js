const { application } = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER, //sender gmail address
      pass: process.env.APP_PASSWORD, // app password from gmail account
    },
  });

const mailOptions = {
    from: {
        name : 'developer',
        address : process.env.USER
    }, // sender address
    to: ["singhshivanshu455@gmail.com"], // list of receivers
    subject: "nodemailer testing", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    // attachments : [
    //     {
    //         filename : 'test.pdf',
    //         path : path.join(__dirname, 'test.pdf'),
    //         contentType : 'application/pdf'
    //     },
    //     {
    //         filename : 'sample.jpg',
    //         path : path.join(__dirname, 'sample.jpg'),
    //         contentType : 'image/jpg'
    //     },
    // ]
}

const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions)
        console.log("email sent successfully");
    }catch(error){
     console.error(error);
    }
}

sendMail(transporter, mailOptions);