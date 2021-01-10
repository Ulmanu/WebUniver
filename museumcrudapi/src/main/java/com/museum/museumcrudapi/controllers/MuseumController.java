package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.dto.*;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Payment;
import com.museum.museumcrudapi.models.Turtype;
import com.museum.museumcrudapi.repositories.DMLRepository;
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
  @Autowired
  private DMLRepository dml;

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

  @GetMapping("/getjoinmus")
  public List<MuseumDTO> getSectionJoin() {
    return repository.getSectionByIdmus();

  }

  @RequestMapping(value = "/getjoinmus2/{idmus}", method = RequestMethod.GET)
  public List<SectionDTO> getSectionJoin2(@PathVariable int idmus) {
    return repository.getSectionByIdmus2(idmus);
  }

  @RequestMapping(value = "/getjoinmus3/{idmus}", method = RequestMethod.GET)
  public List<TurtypeDTO> getTurtypeJoin2(@PathVariable int idmus) {
    return repository.getTurtypeByIdmus(idmus);
  }

  @RequestMapping(value = "/getjoinmus4/{idgal}", method = RequestMethod.GET)
  public List<GalleryDTO> getGalleryJoin2(@PathVariable int idgal) {
    return repository.getGalleryByIdmus(idgal);
  }

  @RequestMapping(value = "/getjoinmus5/{idgal}", method = RequestMethod.GET)
  public List<ExponatDTO> getExponatJoin2(@PathVariable int idgal) {
    return repository.getExponatByIdmus(idgal);
  }

  @RequestMapping(value = "/getjoinmus6/{id}", method = RequestMethod.GET)
  public List<PaymentDTO> getPaymentJoin2(@PathVariable int id) {
    return repository.getPaymentByIduser(id);
  }

  @RequestMapping(value = "/getjoinmus7/{id}", method = RequestMethod.GET)
  public List<SouvenirsDTO> getSouvenirsJoin2(@PathVariable int id) {
    return repository.getSouvenirsByIduser(id);
  }


  @RequestMapping(value = "/getjoinmus8/{id}", method = RequestMethod.GET)
  public List<TurtypeDTO> getTurtypeJoin23(@PathVariable int id) {
    return repository.getToursByIduser(id);
  }

  @DeleteMapping("/deletejoin1/{id}/{idsouvam}")
  public void deletePurchase(@PathVariable int id,
                               @PathVariable int idsouvam) {
      dml.deletePurchase(id,idsouvam);
  }

  @DeleteMapping("/deletejoin2/{id}/{idtur}")
  public void deleteTur(@PathVariable int id,
                             @PathVariable int idtur) {
    dml.deleteTur(id,idtur);
  }

  @RequestMapping(value = "/getjoinmus9/{id}", method = RequestMethod.GET)
  public List<InfoDTO> getSouvUser(@PathVariable int id) {
    return repository.getSouvUser(id);
  }

  @RequestMapping(value = "/getjoinmus10/{id}", method = RequestMethod.GET)
  public List<InfoDTO> getTourUser(@PathVariable int id) {
    return repository.getTourUser(id);
  }
//  @GetMapping("/getjoinmus1/{id}")
//  public List<MuseumDTO> getSectionJoins(@PathVariable int idmus) {
//    return repository.getSectionByIdmus1(idmus);
//  }
//
//  @GetMapping("/getjoinmuss")
//  public List<MuseumSectionJoinResponse> getSectionJoinNoParams() {
//    return repository.getSectionByIdmus2();
//  }
}
