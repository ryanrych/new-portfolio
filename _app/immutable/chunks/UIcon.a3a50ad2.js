import{t as U,a as D,S as I,i as B}from"./index.b564379a.js";import{u as E,s as L,f as H,g as K,h as Q,d as N,j as q,i as V,n as C}from"./scheduler.531a5046.js";import{w as G}from"./index.320ff911.js";import{b as O}from"./paths.6a48310e.js";function se(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function te(s,t){U(s,1,1,()=>{t.delete(s.key)})}function ne(s,t,a,n,c,i,r,b,m,v,g,h){let d=s.length,u=i.length,f=d;const S={};for(;f--;)S[s[f].key]=f;const y=[],k=new Map,x=new Map,M=[];for(f=u;f--;){const o=h(c,i,f),l=a(o);let p=r.get(l);p?n&&M.push(()=>p.p(o,t)):(p=v(l,o),p.c()),k.set(l,y[f]=p),l in S&&x.set(l,Math.abs(f-S[l]))}const _=new Set,F=new Set;function j(o){D(o,1),o.m(b,g),r.set(o.key,o),g=o.first,u--}for(;d&&u;){const o=y[u-1],l=s[d-1],p=o.key,w=l.key;o===l?(g=o.first,d--,u--):k.has(w)?!r.has(p)||_.has(p)?j(o):F.has(w)?d--:x.get(p)>x.get(w)?(F.add(p),j(o)):(_.add(w),d--):(m(l,r),d--)}for(;d--;){const o=s[d];k.has(o.key)||m(o,r)}for(;u;)j(y[u-1]);return E(M),y}const R="@riadh-adrani-theme",W=s=>{localStorage.setItem(R,JSON.stringify(s))},T=G(!1),A=s=>T.update(t=>{var n;const a=typeof s=="boolean"?s:!t;return W(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ae=()=>{const s=localStorage.getItem(R);s?A(JSON.parse(s)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?A(!0):A(!1)},J=s=>`${O}/logos/${s}`,e=(s,t)=>t?{dark:J(t),light:J(s)}:J(s),oe={AWS:e("aws.svg"),Bootstrap:e("bootstrap.svg"),C:e("c.svg"),Cpp:e("cpp.svg"),Celery:e("celery.svg"),Django:e("django.svg"),FastApi:e("fastapi.svg"),Flask:e("flask.svg"),Go:e("go.svg"),Kafka:e("kafka.svg"),Neo4j:e("neo4j.svg"),Nginx:e("nginx.svg"),Github:e("github.svg"),Heroku:e("heroku.svg"),Boomi:e("boomi.svg"),PowerAutomate:e("PowerAutomate_scalable.svg"),Numpy:e("numpy.svg"),Pandas:e("pandas.svg"),RabbitMQ:e("rabbitmq.svg"),Rust:e("rust.svg","rust-dark.png"),Scrapy:e("scrapy.png"),Selenium:e("selenium.png"),Docker:e("docker.svg"),Kubernetes:e("kubernetees.svg"),Csharp:e("csharp.svg"),Xamarin:e("xamarin.svg"),TypeScript:e("ts.png"),VueJs:e("vue.png"),ReactJs:e("react.svg"),Dart:e("dart.png"),Kotlin:e("kotlin.png"),Python:e("python.webp"),NodeJs:e("node.png"),Deno:e("deno.png","deno-dark.png"),Svelte:e("svelte.png"),ExpressJs:e("express.png"),JavaScript:e("js.png"),Fastify:e("fastify.svg","fastify-dark.png"),NestJs:e("nest.svg"),Quasar:e("quasar.svg"),SolidJs:e("solid.svg"),Electron:e("electron.png"),Flutter:e("flutter.svg"),Java:e("java.png"),AdonisJs:e("adonis.png"),Android:e("android.png"),Angular:e("angular.png"),PostgreSQL:e("postgres.png"),Firebase:e("firebase.png"),Sass:e("sass.png"),Unknown:e("no-img.svg"),MongoDB:e("mongodb.svg"),MySql:e("mysql.svg"),Redis:e("redis.svg"),Tailwind:e("tailwind.svg"),HTML:e("html.svg"),Premiere:e("premiere.svg"),Photoshop:e("photoshop.svg"),CSS:e("css.svg"),AfterEffects:e("after-effects.svg"),Illustrator:e("illustrator.svg"),Nuxt:e("nuxt.png"),Vite:e("vite.png"),Vitest:e("vitest.svg"),Jest:e("jest.png"),Unocss:e("unocss.svg"),Ruvy:e("ruvy.svg"),Postcss:e("postcss.svg"),Fairways:e("fairways.svg"),FairwayFinder:e("fairwayfinder.jpeg"),Math:e("math.svg"),CS:e("cs.svg"),SBU:e("sbu.webp"),RJ:e("rj.jpg"),nghq:e("nextgen.webp"),icc:e("icc.jpg"),primex:e("primex.png"),dbeaver:e("dbeaver.png"),kivy:e("kivy.png"),expo:e("expo.png"),javafx:e("javafx.png"),koyeb:e("koyeb.png"),cauda:e("cauda.png"),tweepy:e("tweepy.png"),ensta:e("ensta.webp")};let P;T.subscribe(s=>P=s);const ie=s=>typeof s=="string"?s:P?s.dark:s.light;globalThis&&globalThis.__awaiter;function X(s){let t,a;return{c(){t=H("i"),this.h()},l(n){t=K(n,"I",{class:!0}),Q(t).forEach(N),this.h()},h(){q(t,"class",a=`${s[0]} ${s[1]}`)},m(n,c){V(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&q(t,"class",a)},i:C,o:C,d(n){n&&N(t)}}}function z(s,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return s.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,c=i.classes)},[n,c]}class ge extends I{constructor(t){super(),B(this,t,z,X,L,{icon:0,classes:1})}}export{oe as A,ge as U,te as a,se as e,ie as g,ae as o,T as t,ne as u};