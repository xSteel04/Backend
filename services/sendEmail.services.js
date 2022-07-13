const nodemailer = require("nodemailer");

const getTransporter = function (settings) {
  let transporter;
  transporter = nodemailer.createTransport({
    host: settings.MAIL.MAIL_HOST,
    port: settings.MAIL.MAIL_PORT,
    secure: true,
    auth: {
      user: settings.MAIL.MAIL_ACCOUNT,
      pass: settings.MAIL.MAIL_PASSWORD,
    },
  });
  return transporter;
};

/**
 * [Sending an email to the user ]
 * @return {[transporter]} [Returns mail service object]
 */
exports.sendMessage = async (destinataryEmail, htmlBody, settings) => {
  let transporter = getTransporter(settings);
  await transporter.sendMail({
    from: `<${settings.MAIL.MAIL_ACCOUNT}>`,
    to: `${destinataryEmail}`,
    subject: "Datos",
    html: htmlBody,
  });
  return transporter;
};
