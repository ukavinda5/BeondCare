package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Provider;
import com.beondcare.web_app.Services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/provider")
public class ProviderController {

    @Autowired
    ProviderService providerService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Provider save(@RequestBody Provider provider){
        return providerService.save(provider);
    }

    @RequestMapping(value = "/find/all", method = RequestMethod.GET)
    public List<Provider> findAll(){
        return providerService.findAll();
    }

    @RequestMapping(value = "/find/byemail/{email}", method = RequestMethod.GET)
    public Optional<Provider> findOne(@PathVariable String email){
        return providerService.findOne(email);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Optional<Provider> update(@RequestParam Provider provider){
        return providerService.update(provider);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public void delete(Provider provider){
        providerService.delete(provider);
    }
}
