package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExponatService {
  @Autowired
  private ExponatRepository repository;

  public Exponat saveExponat(Exponat exponat,Integer idgal) {
    exponat.setIdgal(idgal);
    return repository.save(exponat);
  }

  public List<Exponat> saveExponats(List<Exponat> galleries) {
    return repository.saveAll(galleries);
  }

  public List<Exponat> getExponats() {
    return repository.findAll();
  }

  public Exponat getExponatsById(int id) {
    return repository.findById(id).orElse(null);
  }

  public Exponat getExponatsByTitle(String title) {
    return (Exponat) repository.findByTitle(title).orElse(null);
  }

  public String deleteExponat(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Exponat updateExponat(Exponat exponat) {
    Exponat existingmExponat = repository.findById((exponat.getIdgal())).orElse(null);
    existingmExponat.setTitle(exponat.getTitle());
    existingmExponat.setDescription(exponat.getDescription());
    existingmExponat.setImage(exponat.getImage());
    existingmExponat.setIdgal(exponat.getIdgal());
    existingmExponat.setPrice(exponat.getPrice());
    return repository.save(existingmExponat);
  }
}
