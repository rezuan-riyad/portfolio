export default function (req, res) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.dummyEmail,
      pass: process.env.password,
    },
    secure: true,
  })

  // Email sender data
  const mailData = {
    from: process.env.dummyEmail,
    to: 'riyadh040695@yahoo.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html:  `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err){
      res.statusCode = 400
      res.send("Error")
    }
    else{
      res.statusCode = 200
      res.send("success")
    }
  })
}