package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Receiver;
import com.beondcare.web_app.Entities.User;
import com.beondcare.web_app.Entities.UserDp;
import com.beondcare.web_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class UserServiceimpl implements UserService {

    @Autowired
    UserRepository userRepository;

//    @Override
//    public User findUser(String email) {
//        return userRepository.findById(email) ;
//    }
    @Override
    public Optional<User> findUser(String email){
        return userRepository.findById(email);
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

    @Override
    public void uploadDp(String userID,MultipartFile dp) {
        UserDp userDp=null;
        try {
            userDp=new UserDp(
                    StringUtils.cleanPath(dp.getOriginalFilename()),
                    dp.getContentType(),
                    dp.getBytes()
            );
        } catch (IOException e) {
            e.printStackTrace();
        }

        Optional<User> user=userRepository.findById(userID);
        user.get().setUserDp(userDp);
        userRepository.save(user.get());
    }
}
