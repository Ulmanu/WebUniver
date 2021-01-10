package com.museum.museumcrudapi.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentDTO {
  private int idpay;

  public PaymentDTO(int idpay, String cardnumber, float amount, int iduser) {
    this.idpay = idpay;
    this.cardnumber = cardnumber;
    this.amount = amount;
    this.iduser = iduser;
  }

  private String cardnumber;
  private float amount;
  private int iduser;

  int temp;
}
