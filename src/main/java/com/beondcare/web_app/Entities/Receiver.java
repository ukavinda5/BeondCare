package com.beondcare.web_app.Entities;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity
public class Receiver {
    @Id
    private Integer id;
    private String name;
    private long mobile;
    private String gender;
    private int age;
    private String specialization;
    private String nic;
    private String experiences;
    private String location;
    private String address;
    private String email;

}
