package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.User;
import com.beondcare.web_app.Services.UserServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class LogController {
    @Autowired
    UserServiceimpl userService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public User userUpsert(@RequestBody User user){
        return  userService.upsertUser(user);
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public User authenticate(@RequestBody User user){
        return  userService.authenticate(user);
    }
}
