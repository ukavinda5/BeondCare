package com.beondcare.web_app.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Payments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long payid;
    private String status;
    private int ratings;
    private String subject;
    private String complain;

    @ManyToOne
    @JoinColumn(name ="provider_id")
    private Provider provider;

    @ManyToOne
    @JoinColumn(name="receiver_id")
    private Receiver receiver;
}
