// comntrolller

const nodemailer = require('nodemailer');

async function sendCreatedReservationMail(to, dataOrder, house) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {

      user: process.env.SMTP_USER_SHARE,
      pass: process.env.SMTP_USER_PASSWORD,
    },
  });

  const mail = await transporter.sendMail({
    from: process.env.SMTP_USER_SHARE,
    to,
    subject: `Подтверждение бронирования в EcoPark с сайта ${process.env.API_CLIENT_URL}`,
    text: '...',
    html: `
      <div>
        <h1>Вы успешно забронировали!</h1>
        <p>Ваш домик: ${house.name}</p>
        <p>Дата заезда: ${dataOrder.dataIn}</p>
        <p>Дата выезда: ${dataOrder.dataOut}</p>
        <p>Общая сумма: ${dataOrder.summa}</p>
        <p>Ждем Вас для лучшего отдыха!</p>
      </div>
      `,
  });
  return mail;
}

module.exports = { sendCreatedReservationMail };
