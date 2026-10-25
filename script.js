const D="H Hydrogen 1.008;He Helium 4.0026;Li Lithium 6.94;Be Beryllium 9.0122;B Boron 10.81;C Carbon 12.011;N Nitrogen 14.007;O Oxygen 15.999;F Fluorine 18.998;Ne Neon 20.180;Na Sodium 22.990;Mg Magnesium 24.305;Al Aluminium 26.982;Si Silicon 28.085;P Phosphorus 30.974;S Sulfur 32.06;Cl Chlorine 35.45;Ar Argon 39.948;K Potassium 39.098;Ca Calcium 40.078;Sc Scandium 44.956;Ti Titanium 47.867;V Vanadium 50.942;Cr Chromium 51.996;Mn Manganese 54.938;Fe Iron 55.845;Co Cobalt 58.933;Ni Nickel 58.693;Cu Copper 63.546;Zn Zinc 65.38;Ga Gallium 69.723;Ge Germanium 72.630;As Arsenic 74.922;Se Selenium 78.971;Br Bromine 79.904;Kr Krypton 83.798;Rb Rubidium 85.468;Sr Strontium 87.62;Y Yttrium 88.906;Zr Zirconium 91.224;Nb Niobium 92.906;Mo Molybdenum 95.95;Tc Technetium 98;Ru Ruthenium 101.07;Rh Rhodium 102.91;Pd Palladium 106.42;Ag Silver 107.87;Cd Cadmium 112.41;In Indium 114.82;Sn Tin 118.71;Sb Antimony 121.76;Te Tellurium 127.60;I Iodine 126.90;Xe Xenon 131.29;Cs Caesium 132.91;Ba Barium 137.33;La Lanthanum 138.91;Ce Cerium 140.12;Pr Praseodymium 140.91;Nd Neodymium 144.24;Pm Promethium 145;Sm Samarium 150.36;Eu Europium 151.96;Gd Gadolinium 157.25;Tb Terbium 158.93;Dy Dysprosium 162.50;Ho Holmium 164.93;Er Erbium 167.26;Tm Thulium 168.93;Yb Ytterbium 173.05;Lu Lutetium 174.97;Hf Hafnium 178.49;Ta Tantalum 180.95;W Tungsten 183.84;Re Rhenium 186.21;Os Osmium 190.23;Ir Iridium 192.22;Pt Platinum 195.08;Au Gold 196.97;Hg Mercury 200.59;Tl Thallium 204.38;Pb Lead 207.2;Bi Bismuth 208.98;Po Polonium 209;At Astatine 210;Rn Radon 222;Fr Francium 223;Ra Radium 226;Ac Actinium 227;Th Thorium 232.04;Pa Protactinium 231.04;U Uranium 238.03;Np Neptunium 237;Pu Plutonium 244;Am Americium 243;Cm Curium 247;Bk Berkelium 247;Cf Californium 251;Es Einsteinium 252;Fm Fermium 257;Md Mendelevium 258;No Nobelium 259;Lr Lawrencium 266;Rf Rutherfordium 267;Db Dubnium 268;Sg Seaborgium 269;Bh Bohrium 270;Hs Hassium 277;Mt Meitnerium 278;Ds Darmstadtium 281;Rg Roentgenium 282;Cn Copernicium 285;Nh Nihonium 286;Fl Flerovium 289;Mc Moscovium 290;Lv Livermorium 293;Ts Tennessine 294;Og Oganesson 294".split(";").map(e=>e.split(" "));

const CATS=[
 ["Alkali metal","Soft, shiny and extremely reactive. Each has one outer electron and reacts vigorously with water."],
 ["Alkaline earth metal","Fairly reactive metals with two outer electrons. Harder and denser than the alkali metals."],
 ["Transition metal","Strong, conductive metals that form colorful compounds and several different ions."],
 ["Post-transition metal","Softer metals with lower melting points than the transition metals."],
 ["Metalloid","Sits between metals and nonmetals, which makes it useful in semiconductors."],
 ["Reactive nonmetal","Essential for life and chemistry. Forms many compounds, often by sharing electrons."],
 ["Halogen","Very reactive nonmetals that readily form salts with metals."],
 ["Noble gas","Almost completely unreactive because the outer electron shell is full."],
 ["Lanthanide","Silvery rare-earth metals used in magnets, lasers and lighting."],
 ["Actinide","Heavy radioactive metals. Many are made only in laboratories."]
];
const has=(a,z)=>a.includes(z), rng=(a,b,z)=>z>=a&&z<=b;
function cat(z){
 if(has([3,11,19,37,55,87],z))return 0;
 if(has([4,12,20,38,56,88],z))return 1;
 if(rng(57,71,z))return 8; if(rng(89,103,z))return 9;
 if(has([5,14,32,33,51,52],z))return 4;
 if(has([1,6,7,8,15,16,34],z))return 5;
 if(has([9,17,35,53,85,117],z))return 6;
 if(has([2,10,18,36,54,86,118],z))return 7;
 if(has([13,31,49,50,81,82,83,84,113,114,115,116],z))return 3;
 return 2;
}
function pos(z){ 
 if(z==1)return[1,1,1,1]; if(z==2)return[1,18,1,18];
 let p,g;
 if(z<=4){p=2;g=z-2}else if(z<=10){p=2;g=z+8}
 else if(z<=12){p=3;g=z-10}else if(z<=18){p=3;g=z}
 else if(z<=36){p=4;g=z-18}else if(z<=54){p=5;g=z-36}
 else if(z<=56){p=6;g=z-54}else if(z==71){p=6;g=3}else if(z<=86){p=6;g=z-68}
 else if(z<=88){p=7;g=z-86}else if(z==103){p=7;g=3}else{p=7;g=z-100}
 if(rng(57,70,z))return[6,null,9,z-57+3];
 if(rng(89,102,z))return[7,null,10,z-89+3];
 return[p,g,p,g];
}
function state(z){
 if(z>=109)return"Unknown (predicted solid)";
 if(has([1,2,7,8,9,10,17,18,36,54,86],z))return"Gas";
 if(has([35,80],z))return"Liquid";
 return"Solid";
}
function block(z,g){
 if(rng(57,70,z)||rng(89,102,z))return"f"; if(z==2||g<=2)return"s"; if(g>=13)return"p"; return"d";
}

const pt=document.getElementById("pt"), info=document.getElementById("info");

function show(z){
  const [sym,name,mass]=D[z-1], c=cat(z), [p,g]=pos(z), cat_=CATS[c];
  const color=`var(--k${c})`;
  info.style.setProperty("--c",color);
  info.classList.remove("flip"); void info.offsetWidth; info.classList.add("flip");
  info.innerHTML=`<div class="big">${sym}<small>No. ${z}</small></div>
  <div><h2>${name}</h2><p>${cat_[1]}</p>
  <div class="facts"><span>Mass ${mass}</span><span>${cat_[0]}</span><span>Period ${p}</span>
  <span>${g?"Group "+g:"f-block"}</span><span>${block(z,g||0)}-block</span><span>${state(z)}</span></div></div>`;
}

D.forEach((e,i)=>{
  const z=i+1, c=cat(z), [,, r, col]=pos(z);
  const b=document.createElement("button");
  b.className="el"; b.dataset.c=c; b.type="button";
  b.style.cssText=`--c:var(--k${c});grid-row:${r};grid-column:${col};animation-delay:${z*12}ms`;
  b.setAttribute("aria-label",`${e[1]}, atomic number ${z}`);
  b.innerHTML=`<span class="z">${z}</span><span class="s">${e[0]}</span><span class="n">${e[1]}</span>`;
  b.onmouseenter=b.onfocus=()=>show(z);
  pt.appendChild(b);
});

[["La–Lu",9],["Ac–Lr",10]].forEach(([t,r])=>{
  const l=document.createElement("div");
  l.style.cssText=`grid-row:${r};grid-column:1/3;align-self:center;text-align:right;color:var(--mute);font-size:.75rem;padding-right:6px`;
  l.textContent=t; pt.appendChild(l);
});
const gap=document.createElement("div"); gap.style.cssText="grid-row:8;height:10px"; pt.appendChild(gap);

const lg=document.getElementById("legend");
CATS.forEach((c,i)=>{
  const b=document.createElement("button");
  b.type="button"; b.textContent=c[0]; b.style.setProperty("--c",`var(--k${i})`);
  const on=()=>pt.querySelectorAll(".el").forEach(el=>el.classList.toggle("dim",el.dataset.c!=i));
  const off=()=>pt.querySelectorAll(".el").forEach(el=>el.classList.remove("dim"));
  b.onmouseenter=b.onfocus=on; b.onmouseleave=b.onblur=off;
  lg.appendChild(b);
});

show(1);
