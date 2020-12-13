package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.*;
import com.museum.museumcrudapi.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SouvenirsService {
  @Autowired
  private SouvenirsRepository repository;

  public Souvenirs saveSouvenirs(Souvenirs souvenirs) {
    return repository.save(souvenirs);
  }

  public List<Souvenirs> saveSouvenirss(List<Souvenirs> souvenirss) {
    return repository.saveAll(souvenirss);
  }

  public List<Souvenirs> getSouvenirss() {
    return repository.findAll();
  }

  public Souvenirs getSouvenirssById(int id) {
    return repository.findById(id).orElse(null);
  }


  public String deleteSouvenirs(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Souvenirs updateSouvenirs(Souvenirs souvenirs) {
    Souvenirs existingmSouvenirs = repository.findById((souvenirs.getIdsuv())).orElse(null);
    existingmSouvenirs.setName(souvenirs.getName());
    existingmSouvenirs.setPrice(souvenirs.getPrice());
    existingmSouvenirs.setImage(souvenirs.getImage());


    return repository.save(existingmSouvenirs);
  }
}
