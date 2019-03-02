const emailjs = require('emailjs');

let tools = {}

tools.sendVerificationMail = (verificationCode, emailAddress) => {
    const emailInfo = {
        text: `To verify your email please click on http://localhost:3000/veryfy/${verificationCode}`,
        from: 'Futechgroup Co<no-reply@Futechgroup.ir.com>',
        to: emailAddress,
        subject: 'ProjectManager Verification Email',
        attachment: [{
            data: `<html>To verify your email please click on <strong><a href="http://localhost:3000/verify/${verificationCode}">http://localhost:3000/verify/${verificationCode}</a></strong></html>`,
            alternative: true
        }]
    }
    const server = emailjs.server.connect({
        host: "localhost",
        ssl: false
    });

    server.send(emailInfo);
}

module.exports = tools;
