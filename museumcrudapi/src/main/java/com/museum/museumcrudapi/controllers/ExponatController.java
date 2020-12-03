package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class ExponatController {
  @Autowired
  private ExponatService service;
  @Autowired
  private ExponatRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addexponat")
  public Exponat addexponat(@RequestBody Exponat exponat) {
    return service.saveExponat(exponat);
  }

  @PostMapping("/addexponats")
  public List<Exponat> addexponats(@RequestBody List<Exponat> exponats) {
    return service.saveExponats(exponats);
  }

  @GetMapping("/exponats")
  public List<Exponat> findAllexponats() {
    return service.getExponats();
  }

  @RequestMapping(value = "/exponats/{id}", method = RequestMethod.GET)
  public Exponat findexponatById(@PathVariable int id) {
    return service.getExponatsById(id);
  }

  @RequestMapping(value = "/exponatses/{name}", method = RequestMethod.GET)
  public Exponat findexponatByName(@PathVariable String name) {
    return service.getExponatsByTitle(name);
  }

  @PutMapping("/updateexp")
  public Exponat updateexponat(@RequestBody Exponat exponat) {
    return service.updateExponat(exponat);
  }

  @DeleteMapping("/deleteexp/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteExponat(id);

  }
}
