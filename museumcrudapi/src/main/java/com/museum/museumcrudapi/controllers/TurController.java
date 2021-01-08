package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Tur;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.TurRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.TurService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class TurController {
  @Autowired
  private TurService service;
  @Autowired
  private TurRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addtur/{id}/{idturtype}")
  public Tur addtur(@RequestBody Tur tur, @PathVariable Integer id,
                    @PathVariable Integer idturtype) {
    return service.saveTur(tur,id,idturtype);
  }

  @PostMapping("/addturs")
  public List<Tur> addturs(@RequestBody List<Tur> turs) {
    return service.saveTurs(turs);
  }

  @GetMapping("/turs")
  public List<Tur> findAllturs() {
    return service.getTurs();
  }

  @RequestMapping(value = "/turs/{id}", method = RequestMethod.GET)
  public Tur findturById(@PathVariable int id) {
    return service.getTursById(id);
  }


  @PutMapping("/updatetur")
  public Tur updatetur(@RequestBody Tur tur) {
    return service.updateTur(tur);
  }

  @DeleteMapping("/deletetur/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteTur(id);

  }
}
