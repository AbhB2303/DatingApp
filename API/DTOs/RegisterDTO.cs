using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{

    public class RegisterDto
    {
        //ensures that both are filled when sending request (validation)
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}