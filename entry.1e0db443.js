import{y as c,_ as s,e as o}from"./chunks/chunk.f2a7d7ab.js";import"./chunks/chunk.6ea55026.js";const m=({})=>{const[l,t]=c(0);return s(()=>{const e=()=>{const n=document.body.scrollTop||document.documentElement.scrollTop;var r=document.documentElement.scrollHeight-document.documentElement.clientHeight;t(n/r*100)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),o("div",{onScroll:()=>console.log("this works!"),class:"fixed top-[60px] w-full h-1",children:o("div",{style:`width: ${l}%;`,class:"bg-lime-500 h-full"})})};export{m as default};
