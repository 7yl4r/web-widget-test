export class Welcome {
  heading = 'test widget!';
  DSL = 'John';

  previousValue = this.DSL;

  submit() {
    this.previousValue = this.DSL;
    alert(`Welcome, ${this.DSL}!`);
  }
}
