package com.beondcare.web_app.Entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
@Data
@Entity
public class User {
        @Id
        private String email;
        private String password;
        private String role;
}
