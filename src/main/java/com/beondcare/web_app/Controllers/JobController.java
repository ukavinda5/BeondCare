package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.Entities.Shortlist;
import com.beondcare.web_app.Services.JobService;
import com.beondcare.web_app.Services.PaymentService;
import com.beondcare.web_app.Services.ReportService;
import com.beondcare.web_app.Services.ShortlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ObjectStreamClass;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/job")
public class JobController {

    @Autowired
    JobService jobService;

    @Autowired
    PaymentService paymentService;
    @Autowired
    ShortlistService shortlistService;

    @Autowired
    ReportService reportService;


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Job save(@RequestBody Job job) {
        return jobService.save(job);
    }

    @RequestMapping(value = "/find/all", method = RequestMethod.GET)
    public List<Job> findAll() {
        return jobService.findAll();
    }

    @RequestMapping(value = "/find/byId/{id}", method = RequestMethod.GET)
    public Optional<Job> findOne(@PathVariable("id") Integer id){
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

    @PostMapping("/doPayment")
    public Payments doPayment(@RequestBody Payments payments){
        return  paymentService.dPayments(payments);
    }



    @PostMapping("/doShortlist")
    public Shortlist doShortlist(@RequestBody Shortlist shortlist){
        return  shortlistService.dShortlist(shortlist);
    }

    @RequestMapping(value = "/getReport", method = RequestMethod.GET)
    public ResponseEntity reportService(){
        try {
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType("application/pdf"))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + "report.pdf" + "\"")
                    .body(reportService.generateReportData());

        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }



    @GetMapping("/checkExist")
    @ResponseBody
    public Payments checkExist (@RequestParam("receiver_id") String r_id,@RequestParam("provider_id") String p_id){
        return  paymentService.checkExists(p_id,r_id).get();
    }

}
