package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Provider;
import com.beondcare.web_app.Entities.Receiver;
import com.beondcare.web_app.Services.ProviderService;
import com.beondcare.web_app.Services.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    ReceiverService receiverService;
    @Autowired
    ProviderService providerService;



    @PostMapping(value="/reg_recever")
    public Receiver reg_recever(@RequestBody Receiver receiver) {
        return receiverService.saveReceiver(receiver);
    }

    @PostMapping(value="/reg_provider")
    public Provider reg_provider(@RequestBody Provider provider ) {
        return providerService.saveProvider(provider);
    }


}
