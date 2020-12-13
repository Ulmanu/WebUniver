package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Payment;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import com.museum.museumcrudapi.repositories.PaymentRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
  @Autowired
  private PaymentRepository repository;

  public Payment savePayment(Payment payment,Integer iduser) {
    payment.setIduser(iduser);
    return repository.save(payment);
  }

  public List<Payment> savePayments(List<Payment> payments) {
    return repository.saveAll(payments);
  }

  public List<Payment> getPayments() {
    return repository.findAll();
  }

  public Payment getPaymentsById(int id) {
    return repository.findById(id).orElse(null);
  }



  public String deletePayment(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Payment updatePayment(Payment payment) {
    Payment existingmPayment = repository.findById((payment.getIdpay())).orElse(null);
    existingmPayment.setCardnumber(payment.getCardnumber());
    existingmPayment.setAmount(payment.getAmount());
    existingmPayment.setIduser(payment.getIduser());

    return repository.save(existingmPayment);
  }
}
