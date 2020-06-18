package com.beondcare.authserver.repositories;

import com.beondcare.authserver.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailsRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUserName(String name);
}
