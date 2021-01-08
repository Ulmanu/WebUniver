package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Turtype;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import com.museum.museumcrudapi.repositories.TurtypeRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurtypeService {
  @Autowired
  private TurtypeRepository repository;

  public Turtype saveTurtype(Turtype turtype, Integer idmus) {
    turtype.setIdmus(idmus);
    return repository.save(turtype);
  }

  public List<Turtype> saveTurtypes(List<Turtype> turtypes) {
    return repository.saveAll(turtypes);
  }

  public List<Turtype> getTurtypes() {
    return repository.findAll();
  }

  public Turtype getTurtypesById(int id) {
    return repository.findById(id).orElse(null);
  }



  public String deleteTurtype(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Turtype updateTurtype(Turtype turtype) {
    Turtype existingmTurtype = repository.findById((turtype.getIdturtype())).orElse(null);
    existingmTurtype.setNametur(turtype.getNametur());
    existingmTurtype.setDescription(turtype.getDescription());
    existingmTurtype.setPrice(turtype.getPrice());
    existingmTurtype.setIdmus(turtype.getIdmus());
    return repository.save(existingmTurtype);
  }
}
