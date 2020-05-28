package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Provider;
import com.beondcare.web_app.Entities.Receiver;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {
    public Provider saveProvider(Provider provider) {
        return provider ;
    }
}
