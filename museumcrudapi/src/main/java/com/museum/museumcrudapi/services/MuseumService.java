package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuseumService {
    @Autowired
    private MuseumRepository repository;

    public Museum saveMuseum(Museum museum) {
        return repository.save(museum);
    }

    public List<Museum> saveMuseums(List<Museum> museums) {
        return repository.saveAll(museums);
    }

    public List<Museum> getMuseums() {
        return repository.findAll();
    }

    public Museum getMuseumsById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Museum getMuseumsByTitle(String title) {
        return (Museum) repository.findByTitle(title).orElse(null);
    }

    public String deleteMuseum(int id) {
        repository.deleteById(id);
        return "product removed !!" + id;
    }

    public Museum updateMuseum(Museum museum) {
        Museum existingmMuseum = repository.findById((museum.getId())).orElse(null);
        existingmMuseum.setTitle(museum.getTitle());
        existingmMuseum.setAddress(museum.getAddress());
        existingmMuseum.setDescription(museum.getDescription());
        existingmMuseum.setImage(museum.getImage());
        existingmMuseum.setLat(museum.getLat());
        existingmMuseum.setLon(museum.getLon());
        return repository.save(existingmMuseum);
    }

}
