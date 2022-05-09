namespace API.Entities
{
    public class AppUser
    {
        //properties
        //auto generate with prop (tap tab twice)
        public int Id { get; set; }

        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }


    }
}