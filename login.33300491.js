import{g as Q,h as p,p as R,i as I,j as E,k as U,l as N,m as O,n as j,q as D,s as q,v as G,w as K,d as L,x as M,u as T,y as H,z as J,o as w,A,B as y,a as b,Q as B,C as P,D as F,E as W,F as X,G as Y,b as Z}from"./index.7b52f265.js";const $=Q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(i,{slots:u,emit:c}){const t=D(),d=p(null);let l=0;const a=[];function g(e){const n=[],S=typeof e=="boolean"?e:i.noErrorFocus!==!0,_=++l,V=(m,s)=>{c("validation-"+(m===!0?"success":"error"),s)};for(let m=0;m<a.length;m++){const s=a[m],h=s.validate();if(typeof h.then=="function")n.push(h.then(v=>({valid:v,comp:s}),v=>({valid:!1,comp:s,err:v})));else if(h!==!0){if(i.greedy===!1)return V(!1,s),S===!0&&typeof s.focus=="function"&&s.focus(),Promise.resolve(!1);n.push({valid:!1,comp:s})}}return n.length===0?(V(!0),Promise.resolve(!0)):Promise.all(n).then(m=>{const s=m.filter(z=>z.valid!==!0);if(s.length===0)return _===l&&V(!0),!0;const{valid:h,comp:v,err:k}=s[0];return _===l&&(k!==void 0&&console.error(k),V(!1,v),S===!0&&h!==!0&&typeof v.focus=="function"&&v.focus()),!1})}function f(){l++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function x(e){e!==void 0&&q(e);const n=l+1;g().then(S=>{n===l&&S===!0&&(i.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function C(e){e!==void 0&&q(e),c("reset"),G(()=>{f(),i.autofocus===!0&&i.noResetFocus!==!0&&o()})}function o(){K(()=>{if(d.value===null)return;const e=d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),n=>n.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}R(I,{bindComponent(e){a.push(e)},unbindComponent(e){const n=a.indexOf(e);n>-1&&a.splice(n,1)}});let r=!1;return E(()=>{r=!0}),U(()=>{r===!0&&i.autofocus===!0&&o()}),N(()=>{i.autofocus===!0&&o()}),Object.assign(t.proxy,{validate:g,resetValidation:f,submit:x,reset:C,focus:o,getValidationComponents:()=>a}),()=>O("form",{class:"q-form",ref:d,onSubmit:x,onReset:C},j(u.default))}}),ee=Z("div",{class:"text-h6 text-weight-bolder"},"Login Page",-1),ae=L({__name:"login",setup(i){const u=M(),c=T(),t=p(0),d=p(null),l=p(null),a=p(null),g=p(!1),f=p(!1),x=H({button:["Get code","Confirm Code","Sign in"]}),C=async()=>{try{if(f.value=!0,t.value===0&&await u.getCode(d.value),t.value===1&&(await u.confirmCode(a.value)).response._==="error"&&(a.value=null,t.value--,g.value=!0),t.value===2){if(await u.signIn(l.value),await u.getAuthState()==="authorizationStateReady")return u.isAuth=!0,c.push("/");t.value--}t.value++}catch(o){f.value=!1,console.log(o)}finally{f.value=!1}};return N(async()=>{if(await u.getAuthState()==="authorizationStateReady")return u.isAuth=!0,c.push("/")}),J.on("updateAuthorizationState",o=>{o.update.authorizationState._==="authorizationStateReady"&&c.push("/")}),(o,r)=>(w(),A(Y,{padding:"",class:"flex flex-center"},{default:y(()=>[b(X,null,{default:y(()=>[b(B,null,{default:y(()=>[ee]),_:1}),b(B,null,{default:y(()=>[b($,{onSubmit:C},{default:y(()=>[b(P,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=e=>d.value=e),outlined:"",label:"Phone Number (628xxxxxxx)","stack-label":"",disable:t.value>0,"lazy-rules":"",rules:[e=>e&&e.length||"Phone Number is required",e=>e&&e.length<=15||"Phone Number maximum 15 character",e=>e&&!isNaN(e)||"Phone Number must be a number"]},null,8,["modelValue","disable","rules"]),t.value>0?(w(),A(P,{key:0,modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),outlined:"",label:"Code (Send to telegram message)","stack-label":"",class:"q-mt-sm",disable:t.value>1,"lazy-rules":"",rules:[e=>e&&e.length||"Code is required",e=>e&&!g.value||"Invalid Code"]},null,8,["modelValue","disable","rules"])):F("",!0),t.value>1?(w(),A(P,{key:1,modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=e=>l.value=e),outlined:"",label:"Password (Optional if you set your account password)","stack-label":"",class:"q-mt-sm",type:"password",disable:t.value>2},null,8,["modelValue","disable"])):F("",!0),b(W,{"no-caps":"",unelevated:"",label:x.button[t.value],color:"primary",class:"full-width q-mt-lg",loading:f.value,type:"submit"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1})]),_:1}))}});export{ae as default};
