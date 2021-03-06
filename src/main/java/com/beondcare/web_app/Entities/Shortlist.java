package com.beondcare.web_app.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
@Data
@Entity
public class Shortlist {
    @Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long sid;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="receiver_id")
    private Receiver receiver;

    @ManyToOne
    @JoinColumn(name="job_id")
    private Job job;
}



