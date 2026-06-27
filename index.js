import{a as b,S as w,i as r}from"./assets/vendor-CucEYOFD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function h(e,i){return(await b.get("https://pixabay.com/api/",{params:{key:"56435414-266ede0dff7cead03cfc4cf69",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}function f(e){const i=e.map(({largeImageURL:a,webformatURL:c,tags:t,likes:o,views:n,comments:L,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}"
            ><img
              src="${c}"
              alt="${t}"
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
                <p class="info-list-value">${n}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Comments</h3>
                <p class="info-list-value">${L}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Downloads</h3>
                <p class="info-list-value">${v}</p>
              </li>
            </ul></a
          >
        </li>`).join("");s.galleryList.insertAdjacentHTML("beforeend",i),B.refresh()}const B=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function M(){s.galleryList.innerHTML=""}function p(){s.loader.classList.remove("is-hidden")}function m(){s.loader.classList.add("is-hidden")}function y(){s.loadMoreButton.classList.remove("is-hidden")}function g(){s.loadMoreButton.classList.add("is-hidden")}const s={form:document.querySelector(".form"),input:document.querySelector(".form input"),submitButton:document.querySelector(".form button[type=submit]"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-button")};let u=null,l=1;s.form.addEventListener("submit",S);async function S(){if(event.preventDefault(),M(),g(),s.loadMoreButton.removeEventListener("click",d),l=1,u=s.input.value.trim(),u==="")r.show({message:"Заполните поле",position:"topRight"});else{p();try{const e=await h(u,l);e.hits.length===0?r.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(e.hits),Math.ceil(e.totalHits/15)<l?(console.log("We're sorry, but you've reached the end of search results."),r.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y(),s.loadMoreButton.addEventListener("click",d)))}catch(e){console.log(e),r.error({message:`${e}`,position:"topRight"})}m()}}async function d(){g(),s.loadMoreButton.removeEventListener("click",d),l+=1,p();try{const e=await h(u,l);f(e.hits),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),Math.ceil(e.totalHits/15)<l?(console.log("We're sorry, but you've reached the end of search results."),r.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y(),s.loadMoreButton.addEventListener("click",d))}catch(e){console.log(e),r.error({message:`${e}`,position:"topRight"})}m()}
//# sourceMappingURL=index.js.map
