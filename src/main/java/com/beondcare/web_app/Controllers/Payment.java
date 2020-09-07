package com.beondcare.web_app.Controllers;

import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.Services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class Payment {
    @Autowired
    PaymentService paymentService;

    @RequestMapping(value = "/find/complains", method = RequestMethod.GET)
    public List<Payments> findAll() {
        return paymentService.findAll();
    }
}
