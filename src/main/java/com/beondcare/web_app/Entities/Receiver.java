package com.beondcare.web_app.Entities;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity
public class Receiver {
    @Id
    private String email;
    private String name1;
    private String name2;
    private long mobile1;
    private long mobile2;
    private String role;
    private String nic;
    private String address3;
    private String address1;
    private String address2;



}
