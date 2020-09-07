package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.Entities.Payments;

import java.util.List;
import java.util.Optional;

public interface IPaymentService {
    Payments dPayments(Payments payments);
    Optional<Payments> checkExists(String providerId,String receiverId);
    List<Payments> findAll();
}
