import{r as o,R as m}from"./index.BQj4W4z3.js";import{j as e}from"./jsx-runtime.DaGCA3ld.js";import{c as Y}from"./clsx.B-dksMZM.js";import{g as Z}from"./index.D8np6H0I.js";var X=i=>i?.offsetWidth,B=i=>i.replace(/\s+$/,""),ee=(i,t,n)=>{if(t===n.length-1)return m.createElement("span",{key:t},i);{let a=m.createElement("br",{key:`${t}br`});return i?[m.createElement("span",{key:t},i),a]:a}},ie=(i,t)=>{let n=document.createElement("div"),a="innerText"in window.HTMLElement.prototype?"innerText":"textContent";n.innerHTML=i?.innerHTML.replace(/\r\n|\r|\n/g,t)||"";let s=n[a],r=document.createElement("div");return r.innerHTML="foo<br/>bar",r[a]?.replace(/\r\n|\r/g,`
`)!==`foo
bar`&&(n.innerHTML=n.innerHTML.replace(/<br.*?[/]?>/gi,`
`),s=n[a]),s||""},te=({end:i,lastLineText:t,fullText:n,targetWidth:a,ellipsisWidth:s,measureWidth:r})=>{let u=t.length,p=Math.abs(i),d=p>u?0:u-p,b=t.slice(0,d),h=d===0?-u:i,f=n.slice(h),_=r(b)+r(f)+s;for(;_>a;)b=b.slice(0,b.length-1),_=r(b)+r(f)+s;return{startFragment:b,endFragment:f}},K=({children:i,ellipsis:t="...",lines:n=1,trimWhitespace:a=!1,width:s=0,separator:r=" ",middle:u=!1,end:p=5,onTruncate:d,...b})=>{let[h,f]=o.useState(),[_,A]=o.useState(),[g,W]=o.useState(0),[w,D]=o.useState(0),U=o.useRef(null),L=o.useRef(null),C=o.useRef(null);o.useEffect(()=>{L&&L.current&&L.current.parentNode&&L.current.parentNode.removeChild(L.current)},[g]);let c=o.useCallback(()=>{if(!U.current?.parentElement)return;let l=s||Math.floor(U.current.parentElement.getBoundingClientRect().width);if(!l)return window.requestAnimationFrame(()=>c());let x=window.getComputedStyle(U.current),M=[x.fontWeight,x.fontStyle,x.fontSize,x.fontFamily].join(" ");h&&(h.font=M,h.letterSpacing=x.letterSpacing),W(l)},[h,s]);o.useEffect(()=>{let l=document.createElement("canvas");f(l.getContext("2d"))},[]),o.useEffect(()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),window.cancelAnimationFrame(w)}),[c,w]);let F=o.useCallback(l=>{typeof d=="function"&&D(window.requestAnimationFrame(()=>{d(l)}))},[d]),R=o.useCallback(l=>h?.measureText(l).width||0,[h]),I=o.useMemo(()=>!Number.isSafeInteger(n)||n<0?0:n,[n]),S=o.useMemo(()=>u?1:I,[I,u]),H=o.useMemo(()=>{let l=Math.abs(p),x=Number.isFinite(l)?Math.floor(l):0;return x>0?-x:x},[p]),z=o.useCallback(()=>{let l=[],x=ie(L.current,r),M=x.split(`
`).map(y=>y.split(r)),$=X(C.current)||0,G=!0;for(let y=1;y<=S;y++){let k=M[0];if(k.length===0){l.push(),M.shift(),y--;continue}let N=k.join(r)||"";if(R(N)<=g&&M.length===1){G=!1,l.push(N);break}if(y===S){let q=k.join(r),v=0,T=q.length-1;for(;v<=T;){let E=Math.floor((v+T)/2),V=q.slice(0,E+1);R(V)+$<=g?v=E+1:T=E-1}let j=q.slice(0,v);if(a)for(j=B(j);!j.length&&l.length;){let E=l.pop();E&&typeof E=="string"&&(j=B(E))}if(u&&H!==0){let{startFragment:E,endFragment:V}=te({end:H,lastLineText:j,fullText:x,targetWidth:g,ellipsisWidth:$,measureWidth:R});N=m.createElement("span",null,E,t,V)}else N=m.createElement("span",null,j,t)}else{let q=0,v=k.length-1;for(;q<=v;){let T=Math.floor((q+v)/2),j=k.slice(0,T+1).join(r);R(j)<=g?q=T+1:v=T-1}if(q===0){y=S-1;continue}N=k.slice(0,q).join(r),M[0].splice(0,q)}l.push(N)}return F(G),l},[r,F,S,R,g,a,H,u,t]);return o.useEffect(()=>{let l=!!(U.current&&g);typeof window<"u"&&l&&(S>0?A(z().map(ee)):(A(i),F(!1)))},[i,S,g,z,F]),m.createElement("span",{...b,ref:U},m.createElement("span",null,_),m.createElement("span",{ref:L},i),m.createElement("span",{ref:C,style:{position:"fixed",visibility:"hidden",top:0,left:0}},t))},oe=o.forwardRef(({children:i,onTruncate:t,...n},a)=>{let{width:s,middle:r,lines:u,...p}=n,[d,b]=o.useState(!1),h=o.useCallback(f=>{f!==d&&b(f)},[d]);return o.useEffect(()=>{typeof t=="function"&&t(d)},[t,d]),m.createElement("div",{ref:a,style:{width:"100%"}},m.createElement(K,{...p,middle:!0,onTruncate:h},i))});oe.displayName="MiddleTruncate";var J=({type:i,label:t,className:n,toggleLines:a})=>{let s=o.useMemo(()=>i==="more"?"... ":" ",[i]);return o.isValidElement(t)?t:m.createElement("span",null,s,m.createElement("a",{href:"#",className:n,onClick:a},t))},ne=o.forwardRef(({lines:i=3,more:t="Expand",less:n="Collapse",anchorClass:a,onToggle:s,onTruncate:r,children:u,...p},d)=>{let{width:b,middle:h,end:f,ellipsis:_,...A}=p,[g,W]=o.useState(!1),[w,D]=o.useState(!1),U=o.useMemo(()=>w?0:i,[w,i]),L=o.useCallback(c=>{c!==g&&W(c)},[g]),C=o.useCallback(c=>{c.preventDefault(),D(F=>!F)},[]);return o.useImperativeHandle(d,()=>({toggleLines:C})),o.useEffect(()=>{typeof s=="function"&&s(w)},[w,s]),m.createElement("div",{style:{width:"100%"}},m.createElement(K,{...A,lines:U,ellipsis:m.createElement(J,{type:"more",label:t,className:a,toggleLines:C}),onTruncate:c=>{L(c),w||r?.(c)}},u),!g&&w&&m.createElement(J,{type:"less",label:n,className:a,toggleLines:C}))});ne.displayName="ShowMore";const ae=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur"," ",e.jsx("a",{href:"https://www.yahoo.com/",className:"my_css_class",rel:"noopener noreferrer",target:"_blank",children:"yahoo.com"})," ","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"," ",e.jsx("a",{href:"https://www.google.bg/",title:"Google",rel:"noopener noreferrer",target:"_blank",children:"www.google.bg"})," ","quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"]}),e.jsx("p",{children:"et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),e.jsx("p",{children:"ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur"}),e.jsx("p",{children:"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}),e.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur"," ",e.jsx("a",{href:"https://www.yahoo.com/",className:"my_css_class",rel:"noopener noreferrer",target:"_blank",children:"yahoo.com"})," ","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"," ",e.jsx("a",{href:"https://www.google.bg/",title:"Google",rel:"noopener noreferrer",target:"_blank",children:"www.google.bg"})," ","quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"]}),e.jsx("p",{children:"do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"})]}),re=()=>e.jsx(e.Fragment,{children:"Lorem ipsum dolor sit amet, consectetur yahoo.com adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, www.google.bg quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur yahoo.com adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, www.google.bg quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}),se=()=>e.jsx(e.Fragment,{children:"Lorem ipsum dolor sit amet, consectetur yahoo.com adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, www.google.bg quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),e.jsx("p",{children:"故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),e.jsx("p",{children:"故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),e.jsx("p",{children:"故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),e.jsx("p",{children:"故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),e.jsx("p",{children:"故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"})]}),me=()=>e.jsx(e.Fragment,{children:"从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),ue=()=>e.jsx(e.Fragment,{children:"从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事，故事讲的是从前有座山，山上有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。"}),fe=100,we=3,Le=!0,Ee=!1,ve=5,O=m.forwardRef(({style:i,children:t,...n},a)=>e.jsx("div",{ref:a,className:"w-full box-border p-3 bg-[var(--sl-color-gray-6)] my-6",style:{border:"1px solid color-mix(in srgb, var(--sl-color-gray-5), transparent 25%)",...i},...n,children:t}));O.displayName="ExampleContainer";const P=({lang:i,labelKey:t})=>{const n=Y("flex flex-shrink-0",i==="zh"?"w-24":"w-34");return e.jsx("span",{className:n,children:Z(i,t)})},Q=({children:i})=>e.jsx("div",{className:"flex items-center gap-3 my-6",children:i}),de="w-100 max-w-3/4 cursor-pointer",ce=({lang:i,labelKey:t,value:n,onChange:a,percentable:s=!0,...r})=>{const u=o.useMemo(()=>`${n}${s?"%":""}`,[s,n]);return e.jsxs(Q,{children:[e.jsx(P,{lang:i,labelKey:t}),e.jsx("input",{className:de,type:"range",onChange:p=>a(+p.target.value),...r}),e.jsx("span",{children:u})]})},pe=({lang:i,labelKey:t,checked:n,onChange:a,...s})=>e.jsxs(Q,{children:[e.jsx(P,{lang:i,labelKey:t}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:r=>a(r.target.checked),...s}),e.jsx("span",{className:"slider round"})]})]}),ge=({isZh:i,html:t=!1,shorter:n=!1})=>i?n?e.jsx(ue,{}):t?e.jsx(le,{}):e.jsx(me,{}):n?e.jsx(se,{}):t?e.jsx(ae,{}):e.jsx(re,{});class je{static Container=O;static Content=ge;static Range=ce;static Switch=pe}export{fe as D,je as E,ne as T,ve as a,Le as b,we as c,Ee as d,oe as u};
