package com.beondcare.authserver.Entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "permission")
public @Data class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "name")
    private String name;

}
