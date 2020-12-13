package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Purchase;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.PurchaseRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.PurchaseService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class PurchaseController {
  @Autowired
  private PurchaseService service;
  @Autowired
  private PurchaseRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addpurchase/{id}/{idsouv}")
  public Purchase addpurchase(@RequestBody Purchase purchase,
                              @PathVariable Integer id,
                              @PathVariable Integer idsouv) {
    return service.savePurchase(purchase,id,idsouv);
  }

  @PostMapping("/addpurchases")
  public List<Purchase> addpurchases(@RequestBody List<Purchase> purchases) {
    return service.savePurchases(purchases);
  }

  @GetMapping("/purchases")
  public List<Purchase> findAllpurchases() {
    return service.getPurchases();
  }

  @RequestMapping(value = "/purchases/{id}", method = RequestMethod.GET)
  public Purchase findpurchaseById(@PathVariable int id) {
    return service.getPurchasesById(id);
  }

  @PutMapping("/updatepurchase")
  public Purchase updatepurchase(@RequestBody Purchase purchase) {
    return service.updatePurchase(purchase);
  }

  @DeleteMapping("/deletepurchase/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deletePurchase(id);

  }
}
