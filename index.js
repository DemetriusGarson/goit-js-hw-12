import{a as b,S as w,i as r}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function h(s,t){return(await b.get("https://pixabay.com/api/",{params:{key:"56435414-266ede0dff7cead03cfc4cf69",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}function f(s){const t=s.map(({largeImageURL:a,webformatURL:c,tags:e,likes:o,views:n,comments:L,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}"
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
        </li>`).join("");i.galleryList.insertAdjacentHTML("beforeend",t),B.refresh()}const B=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function M(){i.galleryList.innerHTML=""}function p(){i.loader.classList.remove("is-hidden")}function m(){i.loader.classList.add("is-hidden")}function y(){i.loadMoreButton.classList.remove("is-hidden")}function g(){i.loadMoreButton.classList.add("is-hidden")}const i={form:document.querySelector(".form"),input:document.querySelector(".form input"),submitButton:document.querySelector(".form button[type=submit]"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-button")};let u=null,l=1;i.form.addEventListener("submit",S);async function S(s){if(s.preventDefault(),M(),g(),i.loadMoreButton.removeEventListener("click",d),l=1,u=i.input.value.trim(),u==="")r.show({message:"Заполните поле",position:"topRight"});else{p();try{const t=await h(u,l);t.hits.length===0?r.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(t.hits),l<Math.ceil(t.totalHits/15)?(console.log("We're sorry, but you've reached the end of search results."),r.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y(),i.loadMoreButton.addEventListener("click",d)))}catch(t){console.log(t),r.error({message:`${t}`,position:"topRight"})}m()}}async function d(){g(),i.loadMoreButton.removeEventListener("click",d),l+=1,p();try{const s=await h(u,l);f(s.hits),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),l<Math.ceil(s.totalHits/15)?(console.log("We're sorry, but you've reached the end of search results."),r.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(y(),i.loadMoreButton.addEventListener("click",d))}catch(s){console.log(s),r.error({message:`${s}`,position:"topRight"})}m()}
//# sourceMappingURL=index.js.map
