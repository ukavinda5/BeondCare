package com.beondcare.web_app.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Provider {
    @Id
    private String email;
    private String Name;
    private String Name2;
    private long mobile;
    private long mobile2;
    private String gender;
    private int age;
    private String specialization;
    private String nic;
    private String experiences;
    private String location;
    private String address3;
    private String address1;
    private String address2;
    private  String role ;


    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private List<Job> jobs;
}
