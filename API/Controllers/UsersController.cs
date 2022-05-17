using Microsoft.AspNetCore.Mvc;
using API.Data;
using System.Collections.Generic;
using API.Entities;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;
using API.DTOs;
using AutoMapper;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        // private readonly DataContext context; //context of database
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        //to get data for use: dependency injection
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            this.mapper = mapper;
            this.userRepository = userRepository;
            // this.context = context; //controller defined by given context for database

        }

        //This is synchronous code
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

        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await userRepository.GetMembersAsync();

            return Ok(users);
        }

        // api/users/3 with 3 being the id is the path retrieved
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await userRepository.GetMemberAsync(username);
            //return this.mapper.Map<MemberDto>(user);
        }
    }
}