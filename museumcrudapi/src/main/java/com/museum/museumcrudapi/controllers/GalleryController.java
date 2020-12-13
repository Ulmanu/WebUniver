package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.dto.SectionGalleryJoin;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Section;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.SectionRepository;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class GalleryController {
  @Autowired
  private GalleryService service;
  @Autowired
  private GalleryRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addgallery/{idsect}")
  public Gallery addgallery(@RequestBody Gallery gallery,@PathVariable int idsect) {
    return service.saveGallery(gallery,idsect);
  }

  @PostMapping("/addgallerys")
  public List<Gallery> addgallerys(@RequestBody List<Gallery> gallerys) {
    return service.saveGallerys(gallerys);
  }

  @GetMapping("/gallerys")
  public List<Gallery> findAllgallerys() {
    return service.getGallerys();
  }

  @RequestMapping(value = "/gallerys/{id}", method = RequestMethod.GET)
  public Gallery findgalleryById(@PathVariable int id) {
    return service.getGallerysById(id);
  }

  @RequestMapping(value = "/galleryses/{name}", method = RequestMethod.GET)
  public Gallery findgalleryByName(@PathVariable String name) {
    return service.getGallerysByTitle(name);
  }

  @PutMapping("/updategal")
  public Gallery updategallery(@RequestBody Gallery gallery) {
    return service.updateGallery(gallery);
  }

  @DeleteMapping("/deletegal/{id}")
  public String deletegallery(@PathVariable int id) {
    return service.deleteGallery(id);

  }

//  @GetMapping("/getjoinsect/{idsect}")
//  public List<GalleryGalleryJoin> getGalleryJoin(@PathVariable int idsect) {
//    return galleryRepository.getGalleryByIdsect(idsect);
//  }
//
//  @GetMapping("/getjoinsects")
//  public List<GalleryGalleryJoin> getGalleryJoinNoParams() {
//    return sectionRepository.getGalleryByIdsect2();
//  }
}
