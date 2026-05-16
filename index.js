import{a as w,S as v,i as n}from"./assets/vendor-B0XWlCgv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="55722728-5222ef7377493ccc442ddaf60",q="https://pixabay.com/api/";async function f(s,t){const o={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await w.get(q,{params:o})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function B(){m.innerHTML=""}function g(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function b(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const $=document.querySelector(".form"),I=document.querySelector(".load-more");let a=1,i="",u=0;$.addEventListener("submit",async s=>{if(s.preventDefault(),i=s.target.elements.searchText.value.trim(),!!i){a=1,B(),d(),g();try{const t=await f(i,a);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),u>15?b():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}});I.addEventListener("click",async()=>{a+=1,g(),d();try{const s=await f(i,a);y(s.hits),a*15>=u?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
