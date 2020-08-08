package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findUser(String email);
    User upsertUser(User user);
    User authenticate(User user);
}

