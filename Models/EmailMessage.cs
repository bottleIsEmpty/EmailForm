using System;

namespace EmailForm.Models
{
    public class EmailMessage
    {
        public string Name { get; set; }
        
        public string Surname { get; set; }

        public DateTime Birthdate { get; set; }

        public string EmailAddress { get; set; }

    }
}