import { Component } from '@angular/core';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent {
  formData = {
    name: '',
    email: '',
    message: ''

};
submitForm() {
  // Here, you can send the form data to your server or perform any other desired action.
  // You can also navigate to the "Thank You" page.
}
}
