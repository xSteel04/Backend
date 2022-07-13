const { sendMessage } = require("../services/sendEmail.services");

module.exports = class Email {
  async send(req, res, next) {
    const { htmlBody, email } = req.body;

    if (!htmlBody && !email)
      res.status(401).json({ ERROR: "ERROR EN LOS PARAMETROS" });

    const settings = {
      MAIL: {
        MAIL_HOST: "smtp.gmail.com",
        MAIL_PORT: 465,
        MAIL_ACCOUNT: "hoteldlido46@gmail.com",
        MAIL_PASSWORD: "mmnbejhzodqmdeyo",
      },
    };

    sendMessage(email, htmlBody, settings);

    res.status(200).json({
      success: true,
      msg: "Email Enviado",
    });
  }
  async send2(req, res, next) {
    
    const { htmlBody2, email } = req.body;

    if (!htmlBody2 && !email)
      res.status(401).json({ ERROR: "ERROR EN LOS PARAMETROS" });

    const settings = {
      MAIL: {
        MAIL_HOST: "smtp.gmail.com",
        MAIL_PORT: 465,
        MAIL_ACCOUNT: "hoteldlido46@gmail.com",
        MAIL_PASSWORD: "mmnbejhzodqmdeyo",
      },
    };

    sendMessage(email, htmlBody2, settings);

    res.status(200).json({
      success: true,
      msg: "Email Enviado",
    });
  }
};
