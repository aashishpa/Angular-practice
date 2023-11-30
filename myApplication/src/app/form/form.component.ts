
export class MyFormComponent {
  user = { name: '', email: '' };

  onSubmit() {
    console.log('Form submitted:', this.user);
  }
}
