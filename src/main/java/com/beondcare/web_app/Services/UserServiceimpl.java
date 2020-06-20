package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.User;
import com.beondcare.web_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceimpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findUser(String email) {
        return null;
    }

    @Override
    public User upsertUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User authenticate(User user) {

        if(userRepository.findById(user.getEmail()).isPresent()){
            Optional<User> usr=userRepository.findById(user.getEmail());
            if(usr.get().getPassword().equals(user.getPassword())){
                return  usr.get();
            }

        }

        return null;
    }

}
