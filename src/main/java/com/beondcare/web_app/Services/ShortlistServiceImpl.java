package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.Entities.Shortlist;
import com.beondcare.web_app.repository.PaymentRepository;
import com.beondcare.web_app.repository.ShortlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShortlistServiceImpl implements  ShortlistService {
    @Autowired
    ShortlistRepository shortlistRepository;
    @Override
    public Shortlist dShortlist(Shortlist shortlist){
      return shortlistRepository.save(shortlist);
        }
    }

