using API.Entities;

namespace API.Interfaces
{
    //interface: contract that anything using this interfeace gets its properties
    //doesn't hold any logic
    //makes it easier to test application
    //could implement without interface
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}