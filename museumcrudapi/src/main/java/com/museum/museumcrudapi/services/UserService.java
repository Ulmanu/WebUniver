package com.museum.museumcrudapi.services;

import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.User;
import com.museum.museumcrudapi.repositories.GalleryRepository;
import com.museum.museumcrudapi.repositories.MuseumRepository;
import com.museum.museumcrudapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  @Autowired
  private UserRepository repository;

  public User saveUser(User user) {
    return repository.save(user);
  }

  public List<User> saveUsers(List<User> users) {
    return repository.saveAll(users);
  }

  public List<User> getUsers() {
    return repository.findAll();
  }

  public User getUsersById(int id) {
    return repository.findById(id).orElse(null);
  }

  public User getUsersByName(String title) {
    return (User) repository.findByName(title).orElse(null);
  }

  public String deleteUser(int id) {
    repository.deleteById(id);
    return "product removed !!" + id;
  }

  public User updateUser(User user) {
    User existingmUser = repository.findById((user.getIduser())).orElse(null);
    existingmUser.setName(user.getName());
    existingmUser.setEmail(user.getEmail());
    existingmUser.setImage(user.getImage());
    existingmUser.setPassword(user.getPassword());
    existingmUser.setRole(user.getRole());
    return repository.save(existingmUser);
  }
}
