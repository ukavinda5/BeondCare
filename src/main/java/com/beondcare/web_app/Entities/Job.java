package com.beondcare.web_app.Entities;

import com.beondcare.web_app.Entities.Provider;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer salary;
    private String specialization;
    private Integer workHours;
    private String petFriendliness;

    @OneToMany(mappedBy = "jobs", cascade = CascadeType.ALL)
    private List<Provider> providers;
}
