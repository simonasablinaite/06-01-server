import { IsValid } from "../lib/is-valid//IsValid.js";

const handler = {};

handler.account = (data, res) => {
  const acceptableMethods = ['get', 'post', 'put', 'delete'];

  if (acceptableMethods.includes(data.httpMethod)) {
    const httpMethodFunc = handler._innerMethods[data.httpMethod];
    return httpMethodFunc(data, res);
  }

  console.log('netinkamas METHOD');
  return res.end(JSON.stringify('netinkamas METHOD'))
}

handler._innerMethods = {};

//GET
handler._innerMethods.get = (data, res) => {
  return res.end(JSON.stringify('Account get'))
}

// POST - sukuriame paskyra
handler._innerMethods.post = (data, res) => {
  const { payload } = data;     //destrukturizavimas

  // sie trys etapai privalomi visuose serveriuose:

  /*
  1) patikrinti, ar teisinga info (payload):
      - email
      - pass
      - fullname
      - isitikinti, kad atejusiame objekte nera kitu key's apart: emai;, password, fullname;
*/
  if (Object.keys(payload).length > 3) {
    return res.end(JSON.stringify('Atsiustuose duomenyse gali buti tik: fullname, email ir pass'))
  }
  const { fullname, email, pass } = payload;

  const [fullnameErr, fullnamemsg] = IsValid.fullname(fullname);
  if (fullnameErr) {
    return res.end(JSON.stringify(fullnamemsg))
  };

  const [emailErr, emailmsg] = IsValid.email(email);
  if (emailErr) {
    return res.end(JSON.stringify(emailmsg))
  };

  const [passErr, passmsg] = IsValid.password(pass);
  if (passErr) {
    return res.end(JSON.stringify(passMsg))
  }


  /*
    2) ar toks vartotojas jau egzistuoja:
        - jei tap - wrror
        - jei ne - tesiam (zr.3⤵);
  */

  /*
    3) issaugoti duomenis (payload):
        - jei pavyko - paskyra sukurta:
          - issiunciamas patvirtinimo laiskas
        - jei nepavyko - error 
    */

  console.log(payload);
  return res.end(JSON.stringify('Paskyra sukurta'));
}

// PUT (kapitalinis info pakeitimas) / PATCH (vienos dalies info pakeitimas)
handler._innerMethods.put = (data, res) => {
  return res.end(JSON.stringify('Account put'))
}

// DELETE
handler._innerMethods.delete = (data, res) => {
  return res.end(JSON.stringify('Account delete'))
}









export default handler
