package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Souvenirsamount;
import com.museum.museumcrudapi.repositories.SouveniramountRepository;
import com.museum.museumcrudapi.services.SouveniramountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class SouveniramountController {
  @Autowired
  private SouveniramountService service;
  @Autowired
  private SouveniramountRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addsouveniramount/{idsuv}")
  public Souvenirsamount addsouveniramount(@RequestBody Souvenirsamount souvenirsamount,@PathVariable Integer idsuv) {
    return service.saveSouveniramount(souvenirsamount,idsuv);
  }

  @PostMapping("/addsouveniramounts")
  public List<Souvenirsamount> addsouveniramounts(@RequestBody List<Souvenirsamount> souvenirsamounts) {
    return service.saveSouveniramounts(souvenirsamounts);
  }

  @GetMapping("/souveniramounts")
  public List<Souvenirsamount> findAllsouveniramounts() {
    return service.getSouveniramounts();
  }

  @RequestMapping(value = "/souveniramounts/{id}", method = RequestMethod.GET)
  public Souvenirsamount findsouveniramountById(@PathVariable int id) {
    return service.getSouveniramountsById(id);
  }

  @PutMapping("/updatesouveniramount")
  public Souvenirsamount updatesouveniramount(@RequestBody Souvenirsamount souvenirsamount) {
    return service.updateSouveniramount(souvenirsamount);
  }

  @DeleteMapping("/deletesouveniramount/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteSouveniramount(id);

  }
}
