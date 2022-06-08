import { server } from './lib/server.js';

const app = {};

// programa inicijuosime panaudojus f-jas:

app.init = () => {
    // Susikurti reikiamus busimus FOLDERIUS;
    // susikurti reikiamus busimus FAILUS;
    // prisijungti prie duomenu bazes (DB);
    // paleisti pacio serverio logika (perduodame prisijungima prie BD);
    server.init();
    // paleidziami papildomi nuolatiniai procesai:
    // * istrinami nereikalingi failai;
    // * suarchivuojami retai naudojami failai;
    // * prasukami reikiami API (3th-party info, pvz: valiutu kursai, orai);
    // * pasitikrinama ar nera tokiu vartotoju, kurie yra prisijunge neturedami tam teises, o jei tokiu yra - atjungti!
}

// paleidziame programa:

app.init();

export default app;
