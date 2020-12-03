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
public class Payment {

  public int getIdpay() {
    return idpay;
  }

  public void setIdpay(int idpay) {
    this.idpay = idpay;
  }

  public String getCardnumber() {
    return cardnumber;
  }

  public void setCardnumber(String cardnumber) {
    this.cardnumber = cardnumber;
  }

  public float getAmount() {
    return amount;
  }

  public void setAmount(float amount) {
    this.amount = amount;
  }

  public int getIduser() {
    return iduser;
  }

  public void setIduser(int iduser) {
    this.iduser = iduser;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idpay;
  private String cardnumber;
  private float amount;
  private int iduser;
}
