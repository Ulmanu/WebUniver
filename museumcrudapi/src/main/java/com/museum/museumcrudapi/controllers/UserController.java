package com.museum.museumcrudapi.controllers;

import com.museum.museumcrudapi.models.Exponat;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.ExponatRepository;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import com.museum.museumcrudapi.services.ExponatService;
import com.museum.museumcrudapi.services.GalleryService;
import com.museum.museumcrudapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.List;

@RestController
public class UserController {
  @Autowired
  private UserService service;
  @Autowired
  private UserRepository sectionRepository;
  private EntityManager em;


  @PostMapping("/adduser")
  public User adduser(@RequestBody User user) {

      return service.saveUser(user);



  }

  @PostMapping("/addusers")
  public List<User> addusers(@RequestBody List<User> users) {
    return service.saveUsers(users);
  }

  @GetMapping("/users")
  public List<User> findAllusers() {
    return service.getUsers();
  }

  @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
  public User finduserById(@PathVariable int id) {
    return service.getUsersById(id);
  }

  @RequestMapping(value = "/userses/{name}", method = RequestMethod.GET)
  public User finduserByName(@PathVariable String name) {
    return service.getUsersByName(name);
  }

  @PutMapping("/updateuser")
  public User updateuser(@RequestBody User user) {
    return service.updateUser(user);
  }

  @DeleteMapping("/deleteuser/{id}")
  public String deleteexponat(@PathVariable int id) {
    return service.deleteUser(id);

  }
}
