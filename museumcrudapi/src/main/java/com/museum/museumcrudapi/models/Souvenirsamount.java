package com.museum.museumcrudapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Souvenirsamount {

  public int getIdsuva() {
    return idsuva;
  }

  public void setIdsuva(int idsuva) {
    this.idsuva = idsuva;
  }

  public int getAmount() {
    return amount;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public int getIdsuv() {
    return idsuv;
  }

  public void setIdsuv(int idsuv) {
    this.idsuv = idsuv;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idsuva;
  private int amount;
  private int idsuv;
}
