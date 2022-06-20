import { PageTemplate } from "../lib/Page.Template.js";


class Page404 extends PageTemplate {
  constructor() {
    super()
    this, title = '404 | server';
  }

  mainHTML() {
    return `<div class="row">
                <h1>404 page ⛔</h1>
            </div>`
  }

}

export { Page404 };