import { PageTemplate } from "../lib/Page.Template.js";


class PageLogin extends PageTemplate {
  constructor() {
    super();
  }
  mainHTML() {
    return `<div class="row">
              <h1>Login page 🔑</h1>
              <p>Stai kaip atrodo atidarantys (&ltdiv&gt) ir uzdarantys(&ltdiv&gt) DIV tagai</p>
              </div>`

  }
}

export { PageLogin }; 