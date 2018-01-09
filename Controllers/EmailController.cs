using Microsoft.AspNetCore.Mvc;
using EmailForm.Models;
using System.Net.Mail;
using System.Text;

namespace EmailForm.Controllers
{
    public class EmailController : Controller
    {
        private SmtpClient client;

        public EmailController()
        {
            client = new SmtpClient("smtp.mailtrap.io", 25);
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential("c0577e2f61b145", "40478af74154b4");
        }

        [HttpPost("/api/send")]
        public IActionResult SendEmail(EmailMessage emailMessage)
        {
            MailMessage message = new MailMessage();
            message.From = new MailAddress("sasha.bobko@gmail.com");
            message.To.Add(emailMessage.EmailAddress);
            message.Body = "Привет, тебя зовут " 
                + emailMessage.Name 
                + ", твоя фамилия "
                + emailMessage.Surname
                + ", ты родился в "
                + emailMessage.Birthdate.Year
                + " году.";
            message.Subject = "Тестовое сообщение";

            client.Send(message);
            return Ok(emailMessage);
        }

    }
}