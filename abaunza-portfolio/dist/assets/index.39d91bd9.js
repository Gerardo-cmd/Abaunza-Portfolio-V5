import{S as W,P as q,W as C,T as r,M as n,a as s,b as i,c as P,B as A,d as R,e as F,A as N,f as Y}from"./vendor.16fc608d.js";const Z=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const L of t.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&m(L)}).observe(document,{childList:!0,subtree:!0});function u(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(o){if(o.ep)return;o.ep=!0;const t=u(o);fetch(o.href,t)}};Z();const e=new W,c=new q(75,window.innerWidth/window.innerHeight,.1,1e3),g=new C({canvas:document.querySelector("#bg")});g.setPixelRatio(window.devicePixelRatio);g.setSize(window.innerWidth,window.innerHeight);c.position.setZ(30);c.position.setX(-3);g.render(e,c);const M=new r().load("//normal.jpg"),T=new n(new s(42,32,32),new i({color:15393181}));e.add(T);T.position.z=-50;T.position.setX(0);const y=new n(new s(.5,32,32),new i({normalMap:M,color:10847324}));e.add(y);y.position.z=-8;y.position.setX(6);const E=new r().load("/venus.jpg"),x=new n(new s(1.1,32,32),new i({map:E,color:12217616}));e.add(x);x.position.z=-6;x.position.setX(-11);const H=new r().load("/earth.jfif"),h=new n(new s(1.2,32,32),new i({map:H}));e.add(h);h.position.z=0;h.position.setX(-12);const k=new r().load("/moon.jpg"),a=new n(new s(.25,32,32),new i({map:k,normalMap:M}));e.add(a);a.position.z=1.2;a.position.setX(-11);a.position.setY(1);const z=new n(new s(.8,32,32),new i({normalMap:M,color:14701325}));e.add(z);z.position.z=4;z.position.setX(-2);const I=new r().load("/jupiter.png"),X=new n(new s(6,32,32),new i({map:I,color:16764817}));e.add(X);X.position.z=15;X.position.setX(-8);const b=new n(new s(4.5,32,32),new i({color:15064727}));e.add(b);b.position.z=32;b.position.setX(8);const w=new n(new P(7,1.7,2,100),new i({color:8354636}));e.add(w);w.position.z=32;w.position.setX(8);const j=new n(new s(4,32,32),new i({color:11072746}));e.add(j);j.position.z=43;j.position.setX(-10);const v=new n(new P(5.5,.1,6,100),new i({color:14745594}));e.add(v);v.position.z=43;v.position.setX(-10);const S=new n(new s(4,32,32),new i({color:4035839}));e.add(S);S.position.z=64;S.position.setX(2);const K=new r().load("/eating.jpg"),p=new n(new A(3,3,3),new R({map:K}));e.add(p);p.position.setZ(21);p.position.setX(-50);p.position.setY(2);const U=new r().load("/sitting.jpg"),f=new n(new A(3,3,3),new R({map:U}));e.add(f);f.position.setZ(33);f.position.setX(-50);f.position.setY(-1.5);const B=new F(16777215);B.position.set(5,5,5);const D=new N(16777215);e.add(B,D);function J(){const d=new s(.25,24,24),l=new i({color:16777215}),u=new n(d,l),[m,o,t]=Array(3).fill().map(()=>Y.randFloatSpread(100));u.position.set(m,o,t),e.add(u)}Array(200).fill().forEach(J);const Q=new r().load("/space.gif");e.background=Q;const G=()=>{const d=document.body.getBoundingClientRect().top;a.rotation.x+=.005,a.rotation.y+=.005,a.rotation.z+=.005,c.position.z=d*-.005,c.position.x=d*.01,c.rotation.y=d*25e-5};document.body.onscroll=G;G();const O=()=>{requestAnimationFrame(O),y.rotation.y+=.005,x.rotation.y+=.005,h.rotation.y+=.004,z.rotation.y+=.005,X.rotation.y+=.003,b.rotation.y+=.002,w.rotation.x+=.002,w.rotation.y+=.002,v.rotation.y+=.003,a.rotation.x+=.005,p.rotation.y+=-.003,p.rotation.z+=-.003,f.rotation.y+=-.002,g.render(e,c)};O();
