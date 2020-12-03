package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Payment;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.PaymentRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.PaymentService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class PaymentController {
  @Autowired
  private PaymentService service;
  @Autowired
  private PaymentRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addpayment")
  public Payment addpayment(@RequestBody Payment payment) {
    return service.savePayment(payment);
  }

  @PostMapping("/addpayments")
  public List<Payment> addpayments(@RequestBody List<Payment> payments) {
    return service.savePayments(payments);
  }

  @GetMapping("/payments")
  public List<Payment> findAllpayments() {
    return service.getPayments();
  }

  @RequestMapping(value = "/payments/{id}", method = RequestMethod.GET)
  public Payment findpaymentById(@PathVariable int id) {
    return service.getPaymentsById(id);
  }

  @PutMapping("/updatepayment")
  public Payment updatepayment(@RequestBody Payment payment) {
    return service.updatePayment(payment);
  }

  @DeleteMapping("/deletepayment/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deletePayment(id);

  }
}
