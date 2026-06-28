import{a as b,S as w,i}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();async function f(o,t){return(await b.get("https://pixabay.com/api/",{params:{key:"56435414-266ede0dff7cead03cfc4cf69",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}function m(o){const t=o.map(({largeImageURL:c,webformatURL:u,tags:e,likes:s,views:n,comments:L,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${c}"
            ><img
              src="${u}"
              alt="${e}"
              width="360"
              height="152"
            />
            <ul class="info">
              <li class="info-list">
                <h3 class="info-list-title">Likes</h3>
                <p class="info-list-value">${s}</p>
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
        </li>`).join("");r.galleryList.insertAdjacentHTML("beforeend",t),B.refresh()}const B=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function M(){r.galleryList.innerHTML=""}function p(){r.loader.classList.remove("is-hidden")}function y(){r.loader.classList.add("is-hidden")}function g(){r.loadMoreButton.classList.remove("is-hidden")}function h(){r.loadMoreButton.classList.add("is-hidden")}const r={form:document.querySelector(".form"),input:document.querySelector(".form input"),submitButton:document.querySelector(".form button[type=submit]"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-button")};let d=null,l=1;r.form.addEventListener("submit",S);async function S(o){if(o.preventDefault(),M(),h(),r.loadMoreButton.removeEventListener("click",a),l=1,d=r.input.value.trim(),d==="")i.show({message:"Заполните поле",position:"topRight"});else{p();try{const t=await f(d,l);t.hits.length===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t.hits),l>=Math.ceil(t.totalHits/15)?(console.log("We're sorry, but you've reached the end of search results."),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(g(),r.loadMoreButton.addEventListener("click",a)))}catch(t){console.log(t),i.error({message:`${t}`,position:"topRight"})}y()}}async function a(){l+=1,p();try{const o=await f(d,l);o.hits.length===0?(i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h(),r.loadMoreButton.removeEventListener("click",a)):(m(o.hits),window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*2,behavior:"smooth"}),h(),r.loadMoreButton.removeEventListener("click",a),l>=Math.ceil(o.totalHits/15)?(console.log("We're sorry, but you've reached the end of search results."),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(g(),r.loadMoreButton.addEventListener("click",a)))}catch(o){console.log(o),i.error({message:`${o}`,position:"topRight"})}y()}
//# sourceMappingURL=index.js.map
