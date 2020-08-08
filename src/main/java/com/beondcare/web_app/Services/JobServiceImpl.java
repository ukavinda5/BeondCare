package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    JobRepository jobRepository;


    @Override
    public Job save(Job job){
        return jobRepository.save(job);
    }

    @Override
    public List<Job> findAll(){
        return jobRepository.findAll();
    }

    @Override
    public List<String> allLocation(){
        return jobRepository.allLocation();
    }

    @Override
    public Optional<Job> findOne(Integer id){
        return jobRepository.findById(id);
    }

    @Override
    public Optional<Job> update(Job job){
        Optional<Job> optional = jobRepository.findById(job.getId());
        if(optional.isPresent()){
            jobRepository.save(job);
        }
        return optional;
    }

    @Override
    public void delete(Job job){
        jobRepository.delete(job);
    }
 }
