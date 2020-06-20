package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Receiver;
import com.beondcare.web_app.Services.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/receiver")
public class ReceiverController {

    @Autowired
    ReceiverService receiverService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Receiver save(@RequestBody Receiver receiver){
        return receiverService.save(receiver);
    }

    @RequestMapping(value = "/find/all", method = RequestMethod.GET)
    public List<Receiver> findAll(){
        return receiverService.findAll();
    }

//    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
//    public Optional<Receiver> findOne(@PathVariable Integer id){
//        return receiverService.findOne(id);
//    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Optional<Receiver> update(@RequestParam Receiver receiver){
        return receiverService.update(receiver);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void delete(Receiver receiver){
        receiverService.delete(receiver);
    }
}
