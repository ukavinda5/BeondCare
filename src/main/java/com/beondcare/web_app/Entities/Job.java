package com.beondcare.web_app.Entities;

import com.beondcare.web_app.Entities.Provider;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Job {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private String email;
    private Integer salary;
    private String workAs;
    private String workHours;
    private String petFriendly;
    private String details;
    private String availability;

    @OneToMany(mappedBy = "jobs", cascade = CascadeType.ALL)
    private List<Provider> providers;
}
