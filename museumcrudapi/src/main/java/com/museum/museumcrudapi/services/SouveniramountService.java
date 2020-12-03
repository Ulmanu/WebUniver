package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.*;
import com.museum.museumcrudapi.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SouveniramountService {
  @Autowired
  private SouveniramountRepository repository;

  public Souvenirsamount saveSouveniramount(Souvenirsamount souvenirs) {
    return repository.save(souvenirs);
  }

  public List<Souvenirsamount> saveSouveniramounts(List<Souvenirsamount> souvenirss) {
    return repository.saveAll(souvenirss);
  }

  public List<Souvenirsamount> getSouveniramounts() {
    return repository.findAll();
  }

  public Souvenirsamount getSouveniramountsById(int id) {
    return repository.findById(id).orElse(null);
  }


  public String deleteSouveniramount(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Souvenirsamount updateSouveniramount(Souvenirsamount souvenirs) {
    Souvenirsamount existingmSouvenirsamount = repository.findById((souvenirs.getIdsuva())).orElse(null);
    existingmSouvenirsamount.setAmount(souvenirs.getAmount());
    existingmSouvenirsamount.setIdsuv(souvenirs.getIdsuv());

    return repository.save(existingmSouvenirsamount);
  }
}
