package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface UserService {
    Optional<User> findUser(String email);
    User upsertUser(User user);
    User authenticate(User user);
    void uploadDp(String userID,MultipartFile dp);
}

