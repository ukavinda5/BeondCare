package com.beondcare.web_app.repository;

import org.springframework.stereotype.Repository;
import com.beondcare.web_app.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
