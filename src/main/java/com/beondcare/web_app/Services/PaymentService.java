package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Job;
import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService implements IPaymentService {
    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public List<Payments> findAll(){
        return paymentRepository.findAll();
    }

    @Override
    public Payments dPayments(Payments payments) {
        return paymentRepository.save(payments);
    }

    @Override
    public Optional<Payments> checkExists(String providerId, String receiverId) {
        return paymentRepository.checkExist(receiverId,providerId);
    }
}
