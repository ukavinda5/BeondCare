package com.beondcare.web_app.Services;

import com.beondcare.web_app.Entities.Provider;

import java.util.List;
import java.util.Optional;

public interface ProviderService {
    Provider save(Provider provider);

    List<Provider> findAll();

    Optional<Provider> findOne(String email);

    Optional<Provider> update(Provider provider);

    void delete(Provider provider);
}
