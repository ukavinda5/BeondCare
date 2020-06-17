package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Receiver;
import com.beondcare.web_app.repository.ReceiverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceiverServiceImpl implements ReceiverService {

    @Autowired
    ReceiverRepository receiverRepository;

    @Override
    public Receiver save(Receiver receiver) {
       return receiverRepository.save(receiver) ;
    }

    @Override
    public List<Receiver> findAll(){
        return receiverRepository.findAll();
    }

    @Override
    public Optional<Receiver> findOne(Integer id){
        return receiverRepository.findById(id);
    }

    @Override
    public Optional<Receiver> update(Receiver receiver){
        Optional<Receiver> optional = receiverRepository.findById(receiver.getId());
        if(optional.isPresent()){
            receiverRepository.save(receiver);
        }
        return optional;
    }

    @Override
    public void delete(Receiver receiver){
        Optional<Receiver> optional = receiverRepository.findById(receiver.getId());
        if(optional.isPresent()){
            receiverRepository.delete(receiver);
        }
    }

}
