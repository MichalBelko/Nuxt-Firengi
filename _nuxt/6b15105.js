(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{314:function(e,t,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("6ab6a1ba",content,!0,{sourceMap:!1})},327:function(e,t,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("64b43f64",content,!0,{sourceMap:!1})},328:function(e,t,r){"use strict";r(314)},329:function(e,t,r){var n=r(85)(!1);n.push([e.i,".review-card[data-v-433f13fd]{margin-top:1.5rem;align-items:center;display:flex;grid-gap:2rem;gap:2rem}img[data-v-433f13fd]{border-radius:100%}p[data-v-433f13fd]{color:grey;margin-bottom:0;font-size:clamp(.8rem,.5vw + .7rem,1.1rem)}.container[data-v-433f13fd]{padding-left:0!important;padding-right:0!important}",""]),e.exports=n},335:function(e,t,r){"use strict";r.r(t);var n={props:["review"]},o=(r(328),r(59)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review-card"},[r("div",{staticClass:"image-container"},[r("img",{attrs:{src:e.review.picture.large,alt:""}})]),e._v(" "),r("div",{staticClass:"text-container"},[r("h6",[e._v(e._s(e.review.login.username))]),e._v(" "),r("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus\n      quam magni beatae possimus debitis.\n    ")])])])}),[],!1,null,"433f13fd",null);t.default=component.exports},340:function(e,t,r){"use strict";r(327)},341:function(e,t,r){var n=r(85)(!1);n.push([e.i,"h3[data-v-23a9f6cc]{font-size:clamp(1.4rem,.6vw + 1.3rem,1.8rem)}",""]),e.exports=n},353:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(68),r(19),r(31),{data:function(){return{reviewers:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api/?results=5").then((function(e){return e.json()}));case 2:e.reviewers=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),c=(r(340),r(59)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Customer Reviews")]),e._v(" "),e.$fetchState.pending?r("div",[e._v("Loading...")]):r("div",e._l(e.reviewers.results,(function(e){return r("ReviewCard",{key:e.login.uuid,attrs:{review:e}})})),1)])}),[],!1,null,"23a9f6cc",null);t.default=component.exports;installComponents(component,{ReviewCard:r(335).default})}}]);