import { createTransport } from "nodemailer";
import * as fs from "fs";

try {
  const MAIL = "sabri.rapa@gmail.com";
  const PASS = "scbwrvxwfwopqqhh";

  const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: MAIL,
      pass: PASS,
    },
    tls: {
      rejectUnauthorized: false
   }
  });

  const mailOptions = {
    from: MAIL,
    to: ["sabri.rapa@gmail.com", "sabrina.rapa@hotmail.com"],
    subject: "Mail de prueba desde Node.js",
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
      {
      filename: "gatito.jpg",
      content: fs.createReadStream("gatito.jpg"),
      },
      ],
      
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (err) {
  console.log(err);
}
