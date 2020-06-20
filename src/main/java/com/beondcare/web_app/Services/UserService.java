package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.User;

public interface UserService {
    User findUser(String email);
    User upsertUser(User user);
    User authenticate(User user);
}

