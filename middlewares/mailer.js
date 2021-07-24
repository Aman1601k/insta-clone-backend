const nodemailer = require('nodemailer');

module.exports = (email, message, subject, html) => {
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    secure: false,
    auth: {
      user: 'insta-clone@outlook.com',
      pass: 'instaclone321',
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: 'insta-clone@outlook.com',
    to: email,
    subject: `${subject}`,
    text: `${message}`,
    html: `${html}`,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Email sent to ' + info.response);
    }
  });
};