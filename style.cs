
:root{--bg:#10151f;--panel:#182030;--ink:#eef2f7;--mute:#8e9bb0;
--k0:#ff5d73;--k1:#ff9b3d;--k2:#4fb8ff;--k3:#7a8cff;--k4:#35d6a4;--k5:#c6e84a;--k6:#ffd23f;--k7:#d36bff;--k8:#ff6bb5;--k9:#a77b5a}
*{box-sizing:border-box}
body{margin:0;padding:24px 16px 48px;background:radial-gradient(circle at 20% 0,#1b2740,var(--bg) 55%);color:var(--ink);font-family:"Bricolage Grotesque",system-ui,sans-serif;min-height:100vh}
h1{margin:0 0 4px;font-size:clamp(1.6rem,4vw,2.6rem);font-weight:800;letter-spacing:-.02em}
.sub{margin:0 0 20px;color:var(--mute)}
.scroll{overflow-x:auto;padding-bottom:12px}
.pt{display:grid;grid-template-columns:repeat(18,minmax(54px,1fr));gap:5px;min-width:1050px;max-width:1500px;margin:auto}
.el{all:unset;box-sizing:border-box;cursor:pointer;aspect-ratio:1/1.05;padding:5px 6px;border-radius:10px;background:var(--panel);border:1px solid color-mix(in srgb,var(--c) 55%,transparent);display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;opacity:0;animation:pop .5s cubic-bezier(.2,1.4,.4,1) forwards;transition:transform .2s,box-shadow .2s,background .2s,opacity .2s,filter .2s}
.el::before{content:"";position:absolute;inset:auto 0 0 0;height:3px;background:var(--c);transition:height .25s}
.el:hover,.el:focus-visible{transform:translateY(-6px) scale(1.18);z-index:5;background:color-mix(in srgb,var(--c) 28%,var(--panel));box-shadow:0 10px 24px color-mix(in srgb,var(--c) 55%,transparent)}
.el:hover::before,.el:focus-visible::before{height:100%;opacity:.15}
.el:focus-visible{outline:2px solid var(--ink)}
.el .z{font-size:.6rem;color:var(--mute);position:relative}
.el .s{font-size:1.25rem;font-weight:800;color:var(--c);position:relative;text-align:center}
.el .n{font-size:.52rem;text-align:center;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dim{opacity:.15!important;filter:grayscale(1)}
@keyframes pop{from{opacity:0;transform:scale(.4) rotate(-8deg)}to{opacity:1;transform:none}}
.info{grid-column:3/13;grid-row:1/4;background:var(--panel);border:1px solid color-mix(in srgb,var(--c,#4fb8ff) 60%,transparent);border-radius:18px;padding:16px 22px;display:grid;grid-template-columns:auto 1fr;gap:6px 24px;align-items:center;transition:border-color .3s;position:relative;overflow:hidden}
.info::after{content:"";position:absolute;right:-60px;top:-60px;width:220px;height:220px;border-radius:50%;background:var(--c,#4fb8ff);opacity:.12;transition:background .3s;animation:breathe 4s ease-in-out infinite}
@keyframes breathe{50%{transform:scale(1.25)}}
.big{font-size:clamp(3.5rem,7vw,5.5rem);font-weight:800;line-height:1;color:var(--c,#4fb8ff);transition:color .3s}
.big small{display:block;font-size:.9rem;color:var(--mute);font-weight:400}
.info h2{margin:0;font-size:1.6rem}
.info p{margin:4px 0 0;color:var(--mute);font-size:.85rem;line-height:1.4}
.facts{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.facts span{background:#0d1320;border-radius:20px;padding:3px 10px;font-size:.72rem}
.info.flip .big,.info.flip h2{animation:swap .35s}
@keyframes swap{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.legend{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:22px 0 10px}
.legend button{all:unset;cursor:pointer;padding:6px 14px;border-radius:30px;border:1px solid var(--c);font-size:.8rem;transition:background .2s,transform .2s}
.legend button:hover,.legend button:focus-visible{background:color-mix(in srgb,var(--c) 30%,transparent);transform:translateY(-2px)}
h3{text-align:center;color:var(--mute);font-weight:400;margin:26px 0 4px;font-size:.9rem}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.el{opacity:1}}
