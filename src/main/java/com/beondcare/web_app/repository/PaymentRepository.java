package com.beondcare.web_app.repository;

import com.beondcare.web_app.Entities.Payments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payments,Long> {

}
