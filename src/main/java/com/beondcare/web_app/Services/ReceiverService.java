package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Receiver;
import org.springframework.stereotype.Service;

@Service
public class ReceiverService {

    public Receiver saveReceiver(Receiver receiver) {
       return receiver ;
    }
}
