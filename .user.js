// ==UserScript==
// @name         AutoTrimps-Ray+Quiaaaa
// @version      6.0.0.0
// @namespace    https://jesperls.github.io/AutoTrimps
// @downloadURL  https://jesperls.github.io/AutoTrimps/.user.js
// @updateURL    https://jesperls.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Psycho-Ray, livercat, Quiaaaa
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Zorn192.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Ray-Quiaaaa-Beta';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://github-cdn.vercel.app/jesperls/AutoTrimps/beta/';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
