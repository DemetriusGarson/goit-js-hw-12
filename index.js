import{a as v,S as b,i as l}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function d(t,r){return(await v.get("https://pixabay.com/api/",{params:{key:"56435414-266ede0dff7cead03cfc4cf69",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function f(t){const r=t.map(({largeImageURL:s,webformatURL:c,tags:e,likes:o,views:a,comments:g,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}"
            ><img
              src="${c}"
              alt="${e}"
              width="360"
              height="152"
            />
            <ul class="info">
              <li class="info-list">
                <h3 class="info-list-title">Likes</h3>
                <p class="info-list-value">${o}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Views</h3>
                <p class="info-list-value">${a}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Comments</h3>
                <p class="info-list-value">${g}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Downloads</h3>
                <p class="info-list-value">${L}</p>
              </li>
            </ul></a
          >
        </li>`).join("");i.galleryList.insertAdjacentHTML("beforeend",r),w.refresh()}const w=new b(".gallery-link",{captionsData:"alt",captionDelay:250});function B(){i.galleryList.innerHTML=""}function p(){i.loader.classList.remove("is-hidden")}function m(){i.loader.classList.add("is-hidden")}function M(){i.loadMoreButton.classList.remove("is-hidden")}function y(){i.loadMoreButton.classList.add("is-hidden")}const i={form:document.querySelector(".form"),input:document.querySelector(".form input"),submitButton:document.querySelector(".form button[type=submit]"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-button")};let u=null,n=1;i.form.addEventListener("submit",S);function S(t){t.preventDefault(),B(),y(),i.loadMoreButton.removeEventListener("click",h),n=1,u=i.input.value.trim(),u===""?l.show({message:"Заполните поле",position:"topRight"}):(p(),d(u,n).then(s=>{s.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(s.hits),Math.ceil(s.totalHits/15<n)?(console.log("We're sorry, but you've reached the end of search results."),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(M(),i.loadMoreButton.addEventListener("click",h)))}).catch(s=>{console.log(s),l.show({message:`${s}`,position:"topRight"})}).finally(()=>m()))}function h(){n+=1,p(),d(u,n).then(t=>{t.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(t.hits),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),Math.ceil(t.totalHits/15<n)&&(console.log("We're sorry, but you've reached the end of search results."),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),y(),i.loadMoreButton.removeEventListener("click",h)))}).catch(t=>{console.log(t),l.show({message:`${t}`,position:"topRight"})}).finally(()=>m())}
//# sourceMappingURL=index.js.map
