package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Receiver;

import java.util.List;
import java.util.Optional;

public interface ReceiverService {
    Receiver save(Receiver receiver);

    List<Receiver> findAll();

    Optional<Receiver> findOne(Integer id);

    Optional<Receiver> update(Receiver receiver);

    void delete(Receiver receiver);
}
