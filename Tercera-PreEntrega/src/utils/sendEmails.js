const { createTransport } = require("nodemailer");
const { logger, errorLogger, infoLogger } = require("./loggers");
const path = require("path");

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS_MAIL,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailRegistro = async ({ username, nombre, edad, direccion, telefono }) => {
  try {
    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL_TO,
      subject: `Nuevo Usuario Registrado:`,
      html: `
      <h1>REGISTRO EXITOSO</h1>
      <h2>${nombre}, te gradecemos que formes parte de nuestra comunidad. Te dejamos sus datos de registro, los cuales también los podés ver en tu perfil de usuario en la página</h2>
      <p>Usuario: ${username}</p>
      <p>Edad: ${edad}</p>
      <p>Direccion: ${direccion}</p>
      <p>Telefono Celular: ${telefono}</p>
      `,
    };
    const info = await transporter.sendMail(mailOptions);
    logger.info({ message: "mail enviado", info });
  } catch (err) {
    errorLogger.error(err);
  }
};

const sendPurchaseEmail = async (formattedProducts, user) => {
  try {
    const { username, nombre, age, address, phone, image } = user;
    console.log("llegue al mail");
    console.log(process.env.MAIL, process.env.MAIL_TO);
    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL_TO,
      subject: `Nuevo pedido de: ${nombre}, ${username}`,
      html: `
      <h1>NUEVO PEDIDO</h1>
        
      <div>La compra fue la siguiente:</div>
      <div><p>${formattedProducts.join("</p><p>")}</p></div>
      </div>
      `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        errorLogger.error(error);
      } else {
        infoLogger.info({ message: "mail enviado", info });
      }
    });
  } catch (err) {
    errorLogger.error(err);
  }
};

module.exports = { sendEmailRegistro, sendPurchaseEmail };
