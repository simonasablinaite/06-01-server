import { PageTemplate } from "../lib/Page.Template.js";


class PageHome extends PageTemplate {
  constructor() {
    super();
  }
  mainHTML() {
    return `<div class="row">
              <h1>Home page 🏡</h1>
              <p>Stai kaip atrodo atidarantys (&ltdiv&gt) ir uzdarantys(&ltdiv&gt) DIV tagai</p>
              </div>`

  }
}

export { PageHome }; 