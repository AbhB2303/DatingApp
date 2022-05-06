using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Collections.Generic;
using API.Entities;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext context; //context of database

        //to get data for use: dependency injection
        public UsersController(DataContext context)
        {
            this.context = context; //controller defined by given context for database
        }

        //This is synchronous coude
        //complex query would constantly block threads
        //modern servers are multithreaded
        //apps more scalable as asynchronous
        // [HttpGet]
        // public ActionResult<IEnumerable<AppUser>> GetUsers()
        // {
        //     var users = this.context.Users.ToList();

        //     return users;
        // }
        //IEnumerable: Simple List with nothing else to the class 
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await this.context.Users.ToListAsync();
        }

        // api/users/3 with 3 being the id is the path retrieved
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await this.context.Users.FindAsync(id);
        }
    }
}