class PageTemplate {
  constructor() {
    this.title = 'server';
    this.content = '<h1>Template page 🏡</h1>';
  }

  headHTML() {
    return `<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${this.title}</title>
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" href="/css/pages/home.css">`
  };

  headerHTML() {
    return `<header class="container">
              <div class="row main-header">
              <img src="#" alt="Logo">
                <nav>
                  <a href="/">Home</a>
                  <a href="/404">404</a>
                  <a href="/register">Register</a>
                  <a href="/login">Login</a>
                </nav>
              </div>
            </header>`;
  }
  mainHTML() {
    return `<div class="row">
                MAIN CONTENT
            </div>`;

  }
  footerHTML() {
    const currentYear = (newDate()).getFullYear();
    return `<footer class="container">
                <div class="row main-footer">
                    &copy; ${currentYear}&nbsp; <a href="https://github.com/simonasablinaite/06-01-server" target="_blank">Simona</a>
                </div>
            </footer>`;
  }

  render() {
    return `<!DOCTYPE html>
            <html lang="en">
    
            <head>
                ${this.headHTML()}
            </head>
    
            <body>
                ${this.headerHTML()}
                <main class="container">
                    ${this.mainHTML()}
                </main>
                ${this.footerHTML()}                
            </body>
    
            </html>`;

  }
}

export { PageTemplate }