package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.Services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.ObjectStreamClass;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/job")
public class JobController {

    @Autowired
    JobService jobService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Job save(@RequestBody Job job) {
        return jobService.save(job);
    }

    @RequestMapping(value = "/find/all", method = RequestMethod.GET)
    public List<Job> findAll() {
        return jobService.findAll();
    }

    @RequestMapping(value = "/find/byId", method = RequestMethod.GET)
    public Optional<Job> findOne(@PathVariable Integer id){
        return jobService.findOne(id);
    }


    @RequestMapping(value = "/find/location", method = RequestMethod.GET)
    public List<String> getLocations(){
        return jobService.allLocation();
    }


    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Optional<Job> update(@RequestBody Job job){
        return jobService.update(job);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void delete(@RequestBody Job job){
        jobService.delete(job);
    }
}
