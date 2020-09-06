package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.User;
import com.beondcare.web_app.Entities.UserDp;
import com.beondcare.web_app.Services.UserServiceimpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

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

//    @RequestMapping(value = "/finduser", method = RequestMethod.GET)
//    public findUser (@RequestBody user user){
//        return  userService.findUser(email);
        @RequestMapping(value = "/find/byemail/{email}", method = RequestMethod.GET)
        public Optional<User> findUser(@PathVariable String email){
            return userService.findUser(email);
        }

        @PostMapping("/uploadDp")
        public void uploadDp(@RequestPart("userId") String userId,@RequestPart("dp") MultipartFile dp) {
            String userEmail= null;

            try {
                userEmail = new ObjectMapper().readValue(userId, String.class);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            userService.uploadDp(userEmail,dp);
        }
    }
//}
