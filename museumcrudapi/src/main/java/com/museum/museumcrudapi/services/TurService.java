package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Tur;
import com.museum.museumcrudapi.repositories.TurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurService {
  @Autowired
  private TurRepository repository;

  public Tur saveTur(Tur tur, Integer id, Integer idturtype) {

    tur.setId(id);

    tur.setIdturtype(idturtype);
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

    existingmTur.setId(tur.getId());
    existingmTur.setDate(tur.getDate());
    existingmTur.setIdturtype(tur.getIdturtype());
    return repository.save(existingmTur);
  }
}
