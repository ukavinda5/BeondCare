package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.Services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/find/byemail", method = RequestMethod.GET)
    public Optional<Job> findOne(@PathVariable String email){
        return jobService.findOne(email);
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
