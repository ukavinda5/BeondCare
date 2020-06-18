package com.beondcare.web_app.Entities;

import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Provider {
    @Id
    private Integer id;
    private String name;
    private long number;
    private String gender;
    private int age;
    private String specialization;
    private String nic;
    private String experiences;
    private String location;
    private String address;
    private String email;

    @ManyToMany(cascade = CascadeType.ALL)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinTable(
            joinColumns = {@JoinColumn(name = "job_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "provider_id", referencedColumnName = "id")}
    )
    private List<Job> jobs;
}
