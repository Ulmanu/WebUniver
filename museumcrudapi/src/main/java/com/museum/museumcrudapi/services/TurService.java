package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Tur;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import com.museum.museumcrudapi.repositories.TurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurService {
  @Autowired
  private TurRepository repository;

  public Tur saveTur(Tur tur) {
    return repository.save(tur);
  }

  public List<Tur> saveTurs(List<Tur> turs) {
    return repository.saveAll(turs);
  }

  public List<Tur> getTurs() {
    return repository.findAll();
  }

  public Tur getTursById(int id) {
    return repository.findById(id).orElse(null);
  }



  public String deleteTur(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Tur updateTur(Tur tur) {
    Tur existingmTur = repository.findById((tur.getIdtur())).orElse(null);
    existingmTur.setIdmus(tur.getIdmus());
    existingmTur.setIdsect(tur.getIdsect());
    existingmTur.setIduser(tur.getIduser());
    existingmTur.setDate(tur.getDate());
    existingmTur.setIdturtype(tur.getIdturtype());
    return repository.save(existingmTur);
  }
}
