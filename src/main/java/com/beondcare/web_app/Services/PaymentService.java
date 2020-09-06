package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService implements IPaymentService {
    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public Payments dPayments(Payments payments) {
        return paymentRepository.save(payments);
    }
}
