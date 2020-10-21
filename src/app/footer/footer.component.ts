import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
