package com.beondcare.web_app.Entities;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity
public class Receiver {
    @Id
    private String email;
    private String name;
    private long mobile;
    private String role;
    private String address3;
    private String address1;
    private String address2;



}
