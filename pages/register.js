import { PageTemplate } from "../lib/Page.Template.js";


class PageRegister extends PageTemplate {
  constructor(data) {
    super(data);
    this.pageCSSfilename = 'register';

  }
  mainHTML() {
    return `<div class="row">
              <h1>Register</h1>
              <p>Register to get exited!</p>
              <form action="/api/account" method="POST">
                  <label for="fullname">Full Name</label>
                  <input id="fullname" name="fullname" type="text" placeholder="Enter value..." required>
                  <label for="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Enter value..." required>
                  <label for="pass">Password</label>
                  <input id="pass" name="pass" type="password" placeholder="Enter value..." required>
                  <label for="repass">Repeat password</label>
                  <input id="repass" name="repass" type="password" placeholder="Enter value..." required>
                  <button type="submit">Register</button>
              </form>
            </div>`

  }
}

export { PageRegister }; 