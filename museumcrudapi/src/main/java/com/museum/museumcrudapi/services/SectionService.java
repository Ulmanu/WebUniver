package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Section;
import com.museum.museumcrudapi.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;
@Service
public class SectionService {

  @Autowired
  private SectionRepository repository;

  public Section saveSection(Section section) {
    return repository.save(section);
  }

  public List<Section> saveSections(List<Section> sections) {
    return repository.saveAll(sections);
  }

  public List<Section> getSections() {
    return repository.findAll();
  }

  public Section getSectionsById(int idsect) {
    return repository.findById(idsect).orElse(null);
  }

  public Section getSectionsByTitle(String title) {
    return (Section) repository.findByTitle(title).orElse(null);
  }

  public String deleteSection(int idsect) {
    repository.deleteById(idsect);
    return "product removed !!" + idsect;
  }

  public Section updateSection(Section section) {
    Section existingmSection = repository.findById((section.getIdsect())).orElse(null);
    existingmSection.setTitle(section.getTitle());
    existingmSection.setDescription(section.getDescription());
    existingmSection.setImage(section.getImage());
    existingmSection.setType(section.getType());
    existingmSection.setIdmus(section.getIdmus());
    return repository.save(existingmSection);
  }

}
