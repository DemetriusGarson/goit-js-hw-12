import{a as p,S as d,i as n}from"./assets/vendor-BGqwtSVv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function h(o){return p.get("https://pixabay.com/api/",{params:{key:"56435414-266ede0dff7cead03cfc4cf69",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>Promise.reject(t))}function y(o){const t=[];for(const a of o){const{largeImageURL:s,webformatURL:e,tags:i,likes:r,views:c,comments:u,downloads:f}=a,m=`<li class="gallery-item">
          <a class="gallery-link" href="${s}"
            ><img
              src="${e}"
              alt="${i}"
              width="360"
              height="152"
            />
            <ul class="info">
              <li class="info-list">
                <h3 class="info-list-title">Likes</h3>
                <p class="info-list-value">${r}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Views</h3>
                <p class="info-list-value">${c}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Comments</h3>
                <p class="info-list-value">${u}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Downloads</h3>
                <p class="info-list-value">${f}</p>
              </li>
            </ul></a
          >
        </li>`;t.push(m)}l.galleryList.innerHTML=t.join(""),g.refresh()}const g=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function L(){l.galleryList.innerHTML=""}function b(){l.loader.classList.remove("is-hidden")}function w(){l.loader.classList.add("is-hidden")}const l={form:document.querySelector(".form"),input:document.querySelector(".form input"),submitButton:document.querySelector(".form button[type=submit]"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",v);function v(o){o.preventDefault(),L();const t=l.input.value.trim();t===""?n.show({message:"Заполните поле",position:"topRight"}):(b(),h(t).then(s=>{s.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(s.hits)}).catch(s=>{console.log(s),n.show({message:`${s}`,position:"topRight"})}).finally(()=>w()))}
//# sourceMappingURL=index.js.map
