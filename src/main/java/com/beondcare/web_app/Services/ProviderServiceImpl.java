package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Provider;
import com.beondcare.web_app.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Email;
import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    ProviderRepository providerRepository;


    @Override
    public Provider save(Provider provider){
        return providerRepository.save(provider);
    }

    @Override
    public List<Provider> findAll(){
        return providerRepository.findAll();
    }

    @Override
    public Optional<Provider> findOne(String email){
        return providerRepository.findById(email);
    }

    @Override
    public Optional<Provider> update(Provider provider){
        Optional<Provider> optional = providerRepository.findById(provider.getEmail());
        if(optional.isPresent()){
            providerRepository.save(provider);
        }
        return optional;
    }

    @Override
    public void delete(Provider provider){
        Optional<Provider> optional = providerRepository.findById(provider.getEmail());
        if(optional.isPresent()){
            providerRepository.delete(provider);
        }
    }



}
