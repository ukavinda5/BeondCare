package com.beondcare.web_app.Services;

import com.beondcare.web_app.repository.PaymentRepository;
import com.beondcare.web_app.repository.ProviderRepository;
import com.beondcare.web_app.repository.ReceiverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    ProviderRepository providerRepository;
    @Autowired
    ReceiverRepository  receiverRepository;

    public void  generateReportData(){
        int count = paymentRepository.findAll().size();
        int pcount = providerRepository.findAll().size();
        int rcount = receiverRepository.findAll().size();


    }


}
