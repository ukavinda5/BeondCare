package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Payments;

import java.util.Optional;

public interface IPaymentService {
    Payments dPayments(Payments payments);
    Optional<Payments> checkExists(String providerId,String receiverId);
}
