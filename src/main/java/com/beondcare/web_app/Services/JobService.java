package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Job;

import java.util.List;
import java.util.Optional;

public interface JobService {
    Job save(Job job);

    List<Job> findAll();

    Optional<Job> findOne(Integer id);

    Optional<Job> update(Job job);

    void delete(Job job);
}
