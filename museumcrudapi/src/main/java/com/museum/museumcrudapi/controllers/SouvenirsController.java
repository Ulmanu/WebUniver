package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Souvenirs;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.SouvenirsRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.SouvenirsService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class SouvenirsController {
  @Autowired
  private SouvenirsService service;
  @Autowired
  private SouvenirsRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addsouvenirs")
  public Souvenirs addsouvenirs(@RequestBody Souvenirs souvenirs) {
    return service.saveSouvenirs(souvenirs);
  }

  @PostMapping("/addsouvenirss")
  public List<Souvenirs> addsouvenirss(@RequestBody List<Souvenirs> souvenirss) {
    return service.saveSouvenirss(souvenirss);
  }

  @GetMapping("/souvenirss")
  public List<Souvenirs> findAllsouvenirss() {
    return service.getSouvenirss();
  }

  @RequestMapping(value = "/souvenirss/{id}", method = RequestMethod.GET)
  public Souvenirs findsouvenirsById(@PathVariable int id) {
    return service.getSouvenirssById(id);
  }

  @PutMapping("/updatesouvenirs")
  public Souvenirs updatesouvenirs(@RequestBody Souvenirs souvenirs) {
    return service.updateSouvenirs(souvenirs);
  }

  @DeleteMapping("/deletesouvenirs/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteSouvenirs(id);

  }
}
