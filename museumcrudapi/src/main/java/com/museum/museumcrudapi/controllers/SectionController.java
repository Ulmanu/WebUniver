package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.dto.CountSectionType;
import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.dto.SectionGalleryJoin;
import com.museum.museumcrudapi.models.Section;
import com.museum.museumcrudapi.repositories.SectionRepository;
import com.museum.museumcrudapi.services.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class SectionController {


  @Autowired
  private SectionService service;
  @Autowired
  private SectionRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/addsection/{idmus}")
  public Section addsection(@RequestBody Section section, @PathVariable int idmus) {
    return service.saveSection(section,idmus);
  }

  @PostMapping("/addsections")
  public List<Section> addsections(@RequestBody List<Section> sections) {
    return service.saveSections(sections);
  }

  @GetMapping("/sections")
  public List<Section> findAllsections() {
    return service.getSections();
  }

  @RequestMapping(value = "/sections/{id}", method = RequestMethod.GET)
  public Section findsectionById(@PathVariable int id) {
    return service.getSectionsById(id);
  }

  @RequestMapping(value = "/sectionses/{name}", method = RequestMethod.GET)
  public Section findsectionByName(@PathVariable String name) {
    return service.getSectionsByTitle(name);
  }

  @PutMapping("/updatesec")
  public Section updatesection(@RequestBody Section section) {
    return service.updateSection(section);
  }

  @DeleteMapping("/deletesec/{id}")
  public String deletesection(@PathVariable int id) {
    return service.deleteSection(id);

  }

  @GetMapping("/getjoinsect/{idsect}")
  public List<SectionGalleryJoin> getSectionJoin(@PathVariable int idsect) {
    return sectionRepository.getGalleryByIdsect(idsect);
  }

  @GetMapping("/getjoinsects")
  public List<SectionGalleryJoin> getSectionJoinNoParams() {
    return sectionRepository.getGalleryByIdsect2();
  }

  @GetMapping("/count")
  public List<CountSectionType> getCount(){return sectionRepository.getCount();}

}
