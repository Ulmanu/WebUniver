package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {
  @Autowired
  private GalleryRepository repository;

  public Gallery saveGallery(Gallery gallery,Integer idsect) {
    gallery.setIdsect(idsect);
    return repository.save(gallery);
  }

  public List<Gallery> saveGallerys(List<Gallery> galleries) {
    return repository.saveAll(galleries);
  }

  public List<Gallery> getGallerys() {
    return repository.findAll();
  }

  public Gallery getGallerysById(int id) {
    return repository.findById(id).orElse(null);
  }

  public Gallery getGallerysByTitle(String title) {
    return (Gallery) repository.findByTitle(title).orElse(null);
  }

  public String deleteGallery(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public Gallery updateGallery(Gallery gallery) {
    Gallery existingmGallery = repository.findById((gallery.getIdgal())).orElse(null);
    existingmGallery.setTitle(gallery.getTitle());
    existingmGallery.setDescription(gallery.getDescription());
    existingmGallery.setImage(gallery.getImage());
    existingmGallery.setIdsect(gallery.getIdsect());
    return repository.save(existingmGallery);
  }
}
