package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Purchase;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {
  @Autowired
  private PurchaseRepository repository;
  @Autowired
  private SouvenirsService serv;


  public Purchase savePurchase(Purchase purchase, Integer id, Integer idsouv) {
    if (serv.getSouvenirssById(idsouv).getStatus().equalsIgnoreCase("unavailable")) {
      return null;

    } else {
      purchase.setId(id);
      purchase.setIdsouvam(idsouv);
      purchase.setCost(serv.getSouvenirssById(idsouv).getPrice() * purchase.getQty());

      return repository.save(purchase);
    }

  }

  public List<Purchase> savePurchases(List<Purchase> purchases) {
    return repository.saveAll(purchases);
  }

  public List<Purchase> getPurchases() {
    return repository.findAll();
  }

  public Purchase getPurchasesById(int id) {
    return repository.findById(id).orElse(null);
  }


  public String deletePurchase(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Purchase updatePurchase(Purchase purchase) {
    Purchase existingmPurchase = repository.findById((purchase.getIdpur())).orElse(null);
    existingmPurchase.setId(purchase.getId());

    existingmPurchase.setIdsouvam(purchase.getIdsouvam());
    existingmPurchase.setDate(purchase.getDate());
    existingmPurchase.setQty(purchase.getQty());

    return repository.save(existingmPurchase);
  }
}
