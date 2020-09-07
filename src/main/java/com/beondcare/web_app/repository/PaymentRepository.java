package com.beondcare.web_app.repository;

import com.beondcare.web_app.Entities.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payments,Long> {
    @Query(value = "SELECT * FROM beondcaredb.payments p WHERE p.receiver_id=:receiver_id and p.provider_id=:provider_id",nativeQuery = true)
    Optional<Payments> checkExist(@Param("receiver_id") String receiver_id, @Param("provider_id") String provider_id);

    List<Payments> findByType(int type);
}
