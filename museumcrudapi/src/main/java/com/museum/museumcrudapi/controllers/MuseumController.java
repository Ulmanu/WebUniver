package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.services.MuseumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MuseumController {
    @Autowired
    private MuseumService service;

    @PostMapping("/addmuseum")
    public Museum addMuseum(@RequestBody Museum museum) {
        return service.saveMuseum(museum);
    }

    @RequestMapping(value = "/addmuseums", method = RequestMethod.GET)
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

    @RequestMapping(value = "/deletemus/{id}", method = RequestMethod.GET)
    public String deleteMuseum(@PathVariable int id) {
        return service.deleteMuseum(id);
    }
}
