package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Turtype;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.TurtypeRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.TurtypeService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class TurtypeController {
  @Autowired
  private TurtypeService service;
  @Autowired
  private TurtypeRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addturtype/{idmus}")
  public Turtype addturtype(@RequestBody Turtype turtype,@PathVariable int idmus) {
    return service.saveTurtype(turtype,idmus);
  }

  @PostMapping("/addturtypes")
  public List<Turtype> addturtypes(@RequestBody List<Turtype> turtypes) {
    return service.saveTurtypes(turtypes);
  }

  @GetMapping("/turtypes")
  public List<Turtype> findAllturtypes() {
    return service.getTurtypes();
  }

  @RequestMapping(value = "/turtypes/{id}", method = RequestMethod.GET)
  public Turtype findturtypeById(@PathVariable int id) {
    return service.getTurtypesById(id);
  }

  @PutMapping("/updateturtype")
  public Turtype updateturtype(@RequestBody Turtype turtype) {
    return service.updateTurtype(turtype);
  }

  @DeleteMapping("/deleteturtype/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteTurtype(id);

  }
}
