package com.beondcare.web_app.Entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {
        @Id
        private String email;
        private String password;
        private String role;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "dp_id")
        private UserDp userDp;
}
