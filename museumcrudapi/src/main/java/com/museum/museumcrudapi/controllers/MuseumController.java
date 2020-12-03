package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import com.museum.museumcrudapi.services.MuseumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MuseumController {
  @Autowired
  private MuseumService service;
  @Autowired
  private MuseumRepository repository;

  @PostMapping("/addmuseum")
  public Museum addMuseum(@RequestBody Museum museum) {
    return service.saveMuseum(museum);
  }

  @PostMapping("/addmuseums")
  public List<Museum> addMuseums(@RequestBody List<Museum> museums) {
    return service.saveMuseums(museums);
  }

  @GetMapping("/museums")
  public List<Museum> findAllMuseums() {
    return service.getMuseums();
  }

  @RequestMapping(value = "/museums/{id}", method = RequestMethod.GET)
  public Museum findMuseumById(@PathVariable int id) {
    return service.getMuseumsById(id);
  }

  @RequestMapping(value = "/museumses/{name}", method = RequestMethod.GET)
  public Museum findMuseumByName(@PathVariable String name) {
    return service.getMuseumsByTitle(name);
  }

  @PutMapping("/update")
  public Museum updateMuseum(@RequestBody Museum museum) {
    return service.updateMuseum(museum);
  }

  @DeleteMapping("/delete/{id}")
  public String deleteMuseum(@PathVariable int id) {
    return service.deleteMuseum(id);
  }

  @GetMapping("/getjoinmus/{idmus}")
  public List<MuseumSectionJoinResponse> getSectionJoin(@PathVariable int idmus) {
    return repository.getSectionByIdmus(idmus);
  }

  @GetMapping("/getjoinmuss")
  public List<MuseumSectionJoinResponse> getSectionJoinNoParams() {
    return repository.getSectionByIdmus2();
  }
}
