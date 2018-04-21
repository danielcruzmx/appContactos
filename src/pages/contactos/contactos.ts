import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { Contacto } from '../../model/contacto';
 import { ContactoPage } from '../../pages/contacto/contacto';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})

export class ContactosPage {

  titulo: String = 'Administrador de contactos';

  public contactos = [
  		new Contacto(1,"Andrea Gomez","Calle Uno 123","12345","gomez@gmail.com"),
  		new Contacto(2,"Juan Perez", "Calle Dos 456","23456","perez@gmail.com"),
  		new Contacto(3,"Martin Alvarez", "Calle del Pueblo 628","34567","alvarez@gmail.com")
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  verContacto(contacto: Contacto) {
     this.navCtrl.push(ContactoPage, { contacto });
  }

  mostrarEditarContacto(contacto: Contacto) {

  }

  confirmarEliminarContacto(contacto: Contacto){

  }

  eliminarContacto(contacto: Contacto){

  }

  mostrarAgregarContacto(contacto: Contacto){

  }

}

