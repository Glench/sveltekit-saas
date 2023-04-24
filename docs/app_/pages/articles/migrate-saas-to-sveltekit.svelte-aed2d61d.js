import{S as So,i as _o,s as Eo,k as h,e as o,t as i,L as Ko,d as t,m as f,c as s,a as r,h as l,f as T,b as u,M as _a,g as d,J as a,K as Ea}from"../../chunks/vendor-ba5e527f.js";import{a as ue}from"../../chunks/paths-396f020f.js";function Ao(Io){let O,E,me,rt,xe,g,nt,M,dt,ht,Le,I,ft,C,ut,mt,je,S,pt,z,ct,wt,He,K,B,vt,yt,Re,N,bt,Te,F,kt,Oe,w,gt,pe,It,St,ce,_t,Et,Me,D,Kt,Ce,A,G,P,Ka,ze,J,At,Be,x,U,L,Aa,Ne,q,Pt,Fe,W,xt,De,X,Lt,Ge,j,Q,H,Pa,Je,V,jt,Ue,v,Ht,we,Rt,Tt,ve,Ot,Mt,qe,Y,Ct,We,Z,zt,Xe,$,Bt,Qe,ee,Nt,Ve,p,ye,Ft,Dt,be,Gt,Jt,b,Ut,ke,qt,Wt,te,Xt,Qt,Vt,ge,Yt,Zt,R,$t,Ie,ea,ta,Ye,ae,aa,Ze,m,Se,oa,ia,_e,sa,la,Ee,ra,na,Ke,da,ha,Ae,fa,ua,k,ma,oe,pa,ca,Pe,ie,wa,va,$e,se,ya,et,le,ba,tt,_,ka,re,ga,Ia;return{c(){O=h(),E=o("header"),me=o("h1"),rt=i("Reflections on Migrating my SaaS To SvelteKit"),xe=h(),g=o("p"),nt=i("I run "),M=o("a"),dt=i("ExtensionPay"),ht=i(", a service to monetize Chrome extensions by letting developers easily add payments to their extensions."),Le=h(),I=o("p"),ft=i("Because I seriously enjoy working with "),C=o("a"),ut=i("Svelte"),mt=i(", I built ExtensionPay on top of a custom framework based around Svelte that would take care of all the server-side rendering, server/client communication, code-splitting, file minimizing, stylesheets, etc."),je=h(),S=o("p"),pt=i("The framework was pretty nice for something I cobbled together, but had issues. One big one was startup time. My service would go down for way too long after restarting the app. Another issue was imports. It was difficult or impossible to import libraries client-side so I had to do annoying workarounds and that made me want to work on the code less. A custom framework can also be a businesses liability. So when "),z=o("a"),ct=i("SvelteKit 1.0 was announced"),wt=i(" I really wanted to switch over."),He=h(),K=o("p"),B=o("a"),vt=i("SvelteKit"),yt=i(" is the framework I\u2019ve dreamed about since I started full stack development in 2010. It not only takes care of all the nitty gritty details of code-splitting, stylesheets, minimization, caching, client-side code, server-side code, server-side rendering, client-side hydration, CSRF, performance, etc, but is basically boilerplate-free. SvelteKit is apparently a lot like Next or Nuxt, but built on top of Svelte so it's blazing fast and a delight to work with."),Re=h(),N=o("p"),bt=i("Working very slowly, it took me a few months to migrate ExtensionPay from my old custom framework to SvelteKit by hand. I deployed the new version on April 2, 2023. Here are some results."),Te=h(),F=o("h2"),kt=i("Lines of code"),Oe=h(),w=o("p"),gt=i("Here\u2019s a count of the lines of code in my "),pe=o("code"),It=i("routes/"),St=i(" directory using "),ce=o("code"),_t=i("cloc"),Et=i("."),Me=h(),D=o("p"),Kt=i("Before (my custom framework):"),Ce=h(),A=o("figure"),G=o("a"),P=o("img"),ze=h(),J=o("p"),At=i("After (SvelteKit):"),Be=h(),x=o("figure"),U=o("a"),L=o("img"),Ne=h(),q=o("p"),Pt=i("Around 600 lines removed after the migration. That\u2019s about a 12% reduction in code. My framework was already pretty lean so that's impressive."),Fe=h(),W=o("p"),xt=i("Some of the code reduction was because there was a little duplicate code between pages, but most of it was just because SvelteKit removed the need for a lot of code. This is really great. As a solo founder, fewer lines of code to maintain and understand is a huge help."),De=h(),X=o("h2"),Lt=i("Performance"),Ge=h(),j=o("figure"),Q=o("a"),H=o("img"),Je=h(),V=o("p"),jt=i("I launched the SvelteKit-based app near that black line on the plot. It\u2019s a little hard to see with the spikes, but the overall performance of the SvelteKit-based app is a tiny bit worse. Before, the midday usage would pretty consistently top out around 20% CPU. Now midday usage is typically around 30%. Not a big deal, but will probably mean I need to upgrade the server sooner. So the SvelteKit team owes me some money \u{1F61B} jk"),Ue=h(),v=o("p"),Ht=i("I was actually concerned the performance would be much worse. In my local load testing with the "),we=o("code"),Rt=i("ab"),Tt=i(" command-line utility the SvelteKit app had about "),ve=o("em"),Ot=i("half"),Mt=i(" the performance of my previous app for basic routes. Luckily in practice that didn\u2019t happen. Maybe my test was flawed."),qe=h(),Y=o("h2"),Ct=i("Feelings"),We=h(),Z=o("p"),zt=i("Overall, the migration and deploy went fairly smoothly. It was a lot of work to basically rewrite the app and make sure everything still worked, but I\u2019m happy I did it."),Xe=h(),$=o("p"),Bt=i("Having switched over, I feel like my app is on a lot more solid foundation with SvelteKit. I feel fantastic developing with the framework and my app feels fantastic to use."),Qe=h(),ee=o("p"),Nt=i("A few pain points I ran into working with SvelteKit:"),Ve=h(),p=o("ul"),ye=o("li"),Ft=i("It was surprisingly difficult to get a REPL working nicely with SvelteKit. For business reasons I often have the need to run custom one-off commands in a REPL or script, but because of various import issues, creating a REPL that knew about my app and database was a challenge. I eventually got it to work, but it wasn\u2019t easy."),Dt=h(),be=o("li"),Gt=i("Related to the above, SvelteKit is pretty new so there\u2019s not a lot about it on the internet yet. When I run into issues, there\u2019s less material I can search for that might have fixes. Luckily there was enough and the SvelteKit team was actually crazy responsive to bugs or forum posts I made, and this problem will diminish over time."),Jt=h(),b=o("li"),Ut=i("One small but annoying issue is that when I load 3rd-party libraries in the "),ke=o("code"),qt=i("<head>"),Wt=i(" of a SvelteKit route over http(s), the script loads in a blocking way when rendered from the server and in a non-blocking way when rendered via client-side navigation. This caused my code to fail during client-side navigation but not server-side navigation and it\u2019s only through luck that I caught the failure before launch. "),te=o("a"),Xt=i("I made an issue about this"),Qt=i(" that was closed as \u201Cwell that\u2019s just how it works\u201D and a nice suggestion about how I might achieve my goals instead. Still, It was kind of tricky to figure out how to make a workaround that worked in all cases."),Vt=h(),ge=o("li"),Yt=i("As demonstrated earlier, real-world performance is a little worse than my previous custom framework. I\u2019m not sure why this is. Maybe it's SvelteKit or maybe it's something I'm doing. Either way, it\u2019s not so bad."),Zt=h(),R=o("li"),$t=i("The naming conventions for routes is a little bonkers. Now when I\u2019m working on my app I have like 10 tabs open that all have the name "),Ie=o("code"),ea=i("+page.server.ts"),ta=i(". \u{1F644} Does anyone know how I can make this better in vim?"),Ye=h(),ae=o("p"),aa=i("Some pleasures of working with SvelteKit:"),Ze=h(),m=o("ul"),Se=o("li"),oa=i("The developer experience is phenomenal. Hot reloading is so much nicer than what I was using previously and all the built-in commands for testing work great."),ia=h(),_e=o("li"),sa=i("I\u2019m really happy that SvelteKit allows parts of your app to be pre-rendered and others to be dynamic. I now pre-render my marketing pages (like this post!) which is great for performance. And the client-side routing also still works."),la=h(),Ee=o("li"),ra=i("Speaking of which, the client-side routing was a real unexpected pleasure. I assumed it was just extraneous, but it really does make my app feel a lot snappier and it\u2019s just included automatically in SvelteKit without me having to do anything."),na=h(),Ke=o("li"),da=i("Another unexpected pleasure was using TypeScript for static types and Playwright for end-to-end testing. Both give me an extra layer of confidence that my app is working as intended which is so important as a solo developer. Heck, I didn't set out to use Typescript or Playwright at all, but SvelteKit made them so easy to add that I just did it . And I'm so glad I did because I feel a lot more confident deploying code now."),ha=h(),Ae=o("li"),fa=i("SvelteKit\u2019s documentation is already quite good, and I know the team is also working on an interactive tutorial which is great. Good reference documentation is so helpful."),ua=h(),k=o("li"),ma=i("I really love how forms work in SvelteKit. For whatever reason, working with forms in any other framework always felt so tedious to me. But the "),oe=o("a"),pa=i("form actions API"),ca=i(" means it\u2019s so easy to make boilerlate-free forms that work without client-side JavaScript but can be easily upgraded to AJAX with basically no extra code using "),Pe=o("code"),ie=o("a"),wa=i("enhance"),va=i(". Before the migration, I was getting a surprising number of error notification emails about people submitting forms on my site that didn\u2019t have JavaScript enabled. Now I get none, and all my forms work work with and without client-side JavaScript by default. And I actually enjoy creating them."),$e=h(),se=o("p"),ya=i("Having my app on SvelteKit also comes with some other potential benefits. If I ever want to bring in another developer, it will be much easier to get them up to speed with SvelteKit than my own custom framework. And for the same reason, if I ever want to sell my app I imagine it will be an easier sell that it\u2019s built on something well-supported and documented. Of course, this would be true for any well-known framework, but as I mentioned earlier I really love Svelte and dislike React so for me it\u2019s an easy choice."),et=h(),le=o("p"),ba=i("Overall, I\u2019m really happy with SvelteKit and want to extend my sincere thanks for the SvelteKit team for working so hard on it, taking our feedback, and sharing it with us for free. It really is amazing."),tt=h(),_=o("p"),ka=i("I love it so much, in fact, that I'm taking what I've learned in my own app and developing a "),re=o("a"),ga=i("SvelteKit SaaS starter template"),Ia=i("."),this.h()},l(e){Ko('[data-svelte="svelte-g9dflq"]',document.head).forEach(t),O=f(e),E=s(e,"HEADER",{style:!0});var xa=r(E);me=s(xa,"H1",{});var La=r(me);rt=l(La,"Reflections on Migrating my SaaS To SvelteKit"),La.forEach(t),xa.forEach(t),xe=f(e),g=s(e,"P",{});var at=r(g);nt=l(at,"I run "),M=s(at,"A",{href:!0});var ja=r(M);dt=l(ja,"ExtensionPay"),ja.forEach(t),ht=l(at,", a service to monetize Chrome extensions by letting developers easily add payments to their extensions."),at.forEach(t),Le=f(e),I=s(e,"P",{});var ot=r(I);ft=l(ot,"Because I seriously enjoy working with "),C=s(ot,"A",{href:!0});var Ha=r(C);ut=l(Ha,"Svelte"),Ha.forEach(t),mt=l(ot,", I built ExtensionPay on top of a custom framework based around Svelte that would take care of all the server-side rendering, server/client communication, code-splitting, file minimizing, stylesheets, etc."),ot.forEach(t),je=f(e),S=s(e,"P",{});var it=r(S);pt=l(it,"The framework was pretty nice for something I cobbled together, but had issues. One big one was startup time. My service would go down for way too long after restarting the app. Another issue was imports. It was difficult or impossible to import libraries client-side so I had to do annoying workarounds and that made me want to work on the code less. A custom framework can also be a businesses liability. So when "),z=s(it,"A",{href:!0});var Ra=r(z);ct=l(Ra,"SvelteKit 1.0 was announced"),Ra.forEach(t),wt=l(it," I really wanted to switch over."),it.forEach(t),He=f(e),K=s(e,"P",{});var Sa=r(K);B=s(Sa,"A",{href:!0});var Ta=r(B);vt=l(Ta,"SvelteKit"),Ta.forEach(t),yt=l(Sa," is the framework I\u2019ve dreamed about since I started full stack development in 2010. It not only takes care of all the nitty gritty details of code-splitting, stylesheets, minimization, caching, client-side code, server-side code, server-side rendering, client-side hydration, CSRF, performance, etc, but is basically boilerplate-free. SvelteKit is apparently a lot like Next or Nuxt, but built on top of Svelte so it's blazing fast and a delight to work with."),Sa.forEach(t),Re=f(e),N=s(e,"P",{});var Oa=r(N);bt=l(Oa,"Working very slowly, it took me a few months to migrate ExtensionPay from my old custom framework to SvelteKit by hand. I deployed the new version on April 2, 2023. Here are some results."),Oa.forEach(t),Te=f(e),F=s(e,"H2",{});var Ma=r(F);kt=l(Ma,"Lines of code"),Ma.forEach(t),Oe=f(e),w=s(e,"P",{});var ne=r(w);gt=l(ne,"Here\u2019s a count of the lines of code in my "),pe=s(ne,"CODE",{});var Ca=r(pe);It=l(Ca,"routes/"),Ca.forEach(t),St=l(ne," directory using "),ce=s(ne,"CODE",{});var za=r(ce);_t=l(za,"cloc"),za.forEach(t),Et=l(ne,"."),ne.forEach(t),Me=f(e),D=s(e,"P",{});var Ba=r(D);Kt=l(Ba,"Before (my custom framework):"),Ba.forEach(t),Ce=f(e),A=s(e,"FIGURE",{style:!0});var Na=r(A);G=s(Na,"A",{href:!0});var Fa=r(G);P=s(Fa,"IMG",{style:!0,src:!0,alt:!0}),Fa.forEach(t),Na.forEach(t),ze=f(e),J=s(e,"P",{});var Da=r(J);At=l(Da,"After (SvelteKit):"),Da.forEach(t),Be=f(e),x=s(e,"FIGURE",{style:!0});var Ga=r(x);U=s(Ga,"A",{href:!0});var Ja=r(U);L=s(Ja,"IMG",{style:!0,src:!0,alt:!0}),Ja.forEach(t),Ga.forEach(t),Ne=f(e),q=s(e,"P",{});var Ua=r(q);Pt=l(Ua,"Around 600 lines removed after the migration. That\u2019s about a 12% reduction in code. My framework was already pretty lean so that's impressive."),Ua.forEach(t),Fe=f(e),W=s(e,"P",{});var qa=r(W);xt=l(qa,"Some of the code reduction was because there was a little duplicate code between pages, but most of it was just because SvelteKit removed the need for a lot of code. This is really great. As a solo founder, fewer lines of code to maintain and understand is a huge help."),qa.forEach(t),De=f(e),X=s(e,"H2",{});var Wa=r(X);Lt=l(Wa,"Performance"),Wa.forEach(t),Ge=f(e),j=s(e,"FIGURE",{style:!0});var Xa=r(j);Q=s(Xa,"A",{href:!0});var Qa=r(Q);H=s(Qa,"IMG",{src:!0,style:!0,alt:!0}),Qa.forEach(t),Xa.forEach(t),Je=f(e),V=s(e,"P",{});var Va=r(V);jt=l(Va,"I launched the SvelteKit-based app near that black line on the plot. It\u2019s a little hard to see with the spikes, but the overall performance of the SvelteKit-based app is a tiny bit worse. Before, the midday usage would pretty consistently top out around 20% CPU. Now midday usage is typically around 30%. Not a big deal, but will probably mean I need to upgrade the server sooner. So the SvelteKit team owes me some money \u{1F61B} jk"),Va.forEach(t),Ue=f(e),v=s(e,"P",{});var de=r(v);Ht=l(de,"I was actually concerned the performance would be much worse. In my local load testing with the "),we=s(de,"CODE",{});var Ya=r(we);Rt=l(Ya,"ab"),Ya.forEach(t),Tt=l(de," command-line utility the SvelteKit app had about "),ve=s(de,"EM",{});var Za=r(ve);Ot=l(Za,"half"),Za.forEach(t),Mt=l(de," the performance of my previous app for basic routes. Luckily in practice that didn\u2019t happen. Maybe my test was flawed."),de.forEach(t),qe=f(e),Y=s(e,"H2",{});var $a=r(Y);Ct=l($a,"Feelings"),$a.forEach(t),We=f(e),Z=s(e,"P",{});var eo=r(Z);zt=l(eo,"Overall, the migration and deploy went fairly smoothly. It was a lot of work to basically rewrite the app and make sure everything still worked, but I\u2019m happy I did it."),eo.forEach(t),Xe=f(e),$=s(e,"P",{});var to=r($);Bt=l(to,"Having switched over, I feel like my app is on a lot more solid foundation with SvelteKit. I feel fantastic developing with the framework and my app feels fantastic to use."),to.forEach(t),Qe=f(e),ee=s(e,"P",{});var ao=r(ee);Nt=l(ao,"A few pain points I ran into working with SvelteKit:"),ao.forEach(t),Ve=f(e),p=s(e,"UL",{});var y=r(p);ye=s(y,"LI",{});var oo=r(ye);Ft=l(oo,"It was surprisingly difficult to get a REPL working nicely with SvelteKit. For business reasons I often have the need to run custom one-off commands in a REPL or script, but because of various import issues, creating a REPL that knew about my app and database was a challenge. I eventually got it to work, but it wasn\u2019t easy."),oo.forEach(t),Dt=f(y),be=s(y,"LI",{});var io=r(be);Gt=l(io,"Related to the above, SvelteKit is pretty new so there\u2019s not a lot about it on the internet yet. When I run into issues, there\u2019s less material I can search for that might have fixes. Luckily there was enough and the SvelteKit team was actually crazy responsive to bugs or forum posts I made, and this problem will diminish over time."),io.forEach(t),Jt=f(y),b=s(y,"LI",{});var he=r(b);Ut=l(he,"One small but annoying issue is that when I load 3rd-party libraries in the "),ke=s(he,"CODE",{});var so=r(ke);qt=l(so,"<head>"),so.forEach(t),Wt=l(he," of a SvelteKit route over http(s), the script loads in a blocking way when rendered from the server and in a non-blocking way when rendered via client-side navigation. This caused my code to fail during client-side navigation but not server-side navigation and it\u2019s only through luck that I caught the failure before launch. "),te=s(he,"A",{href:!0});var lo=r(te);Xt=l(lo,"I made an issue about this"),lo.forEach(t),Qt=l(he," that was closed as \u201Cwell that\u2019s just how it works\u201D and a nice suggestion about how I might achieve my goals instead. Still, It was kind of tricky to figure out how to make a workaround that worked in all cases."),he.forEach(t),Vt=f(y),ge=s(y,"LI",{});var ro=r(ge);Yt=l(ro,"As demonstrated earlier, real-world performance is a little worse than my previous custom framework. I\u2019m not sure why this is. Maybe it's SvelteKit or maybe it's something I'm doing. Either way, it\u2019s not so bad."),ro.forEach(t),Zt=f(y),R=s(y,"LI",{});var st=r(R);$t=l(st,"The naming conventions for routes is a little bonkers. Now when I\u2019m working on my app I have like 10 tabs open that all have the name "),Ie=s(st,"CODE",{});var no=r(Ie);ea=l(no,"+page.server.ts"),no.forEach(t),ta=l(st,". \u{1F644} Does anyone know how I can make this better in vim?"),st.forEach(t),y.forEach(t),Ye=f(e),ae=s(e,"P",{});var ho=r(ae);aa=l(ho,"Some pleasures of working with SvelteKit:"),ho.forEach(t),Ze=f(e),m=s(e,"UL",{});var c=r(m);Se=s(c,"LI",{});var fo=r(Se);oa=l(fo,"The developer experience is phenomenal. Hot reloading is so much nicer than what I was using previously and all the built-in commands for testing work great."),fo.forEach(t),ia=f(c),_e=s(c,"LI",{});var uo=r(_e);sa=l(uo,"I\u2019m really happy that SvelteKit allows parts of your app to be pre-rendered and others to be dynamic. I now pre-render my marketing pages (like this post!) which is great for performance. And the client-side routing also still works."),uo.forEach(t),la=f(c),Ee=s(c,"LI",{});var mo=r(Ee);ra=l(mo,"Speaking of which, the client-side routing was a real unexpected pleasure. I assumed it was just extraneous, but it really does make my app feel a lot snappier and it\u2019s just included automatically in SvelteKit without me having to do anything."),mo.forEach(t),na=f(c),Ke=s(c,"LI",{});var po=r(Ke);da=l(po,"Another unexpected pleasure was using TypeScript for static types and Playwright for end-to-end testing. Both give me an extra layer of confidence that my app is working as intended which is so important as a solo developer. Heck, I didn't set out to use Typescript or Playwright at all, but SvelteKit made them so easy to add that I just did it . And I'm so glad I did because I feel a lot more confident deploying code now."),po.forEach(t),ha=f(c),Ae=s(c,"LI",{});var co=r(Ae);fa=l(co,"SvelteKit\u2019s documentation is already quite good, and I know the team is also working on an interactive tutorial which is great. Good reference documentation is so helpful."),co.forEach(t),ua=f(c),k=s(c,"LI",{});var fe=r(k);ma=l(fe,"I really love how forms work in SvelteKit. For whatever reason, working with forms in any other framework always felt so tedious to me. But the "),oe=s(fe,"A",{href:!0});var wo=r(oe);pa=l(wo,"form actions API"),wo.forEach(t),ca=l(fe," means it\u2019s so easy to make boilerlate-free forms that work without client-side JavaScript but can be easily upgraded to AJAX with basically no extra code using "),Pe=s(fe,"CODE",{});var vo=r(Pe);ie=s(vo,"A",{href:!0});var yo=r(ie);wa=l(yo,"enhance"),yo.forEach(t),vo.forEach(t),va=l(fe,". Before the migration, I was getting a surprising number of error notification emails about people submitting forms on my site that didn\u2019t have JavaScript enabled. Now I get none, and all my forms work work with and without client-side JavaScript by default. And I actually enjoy creating them."),fe.forEach(t),c.forEach(t),$e=f(e),se=s(e,"P",{});var bo=r(se);ya=l(bo,"Having my app on SvelteKit also comes with some other potential benefits. If I ever want to bring in another developer, it will be much easier to get them up to speed with SvelteKit than my own custom framework. And for the same reason, if I ever want to sell my app I imagine it will be an easier sell that it\u2019s built on something well-supported and documented. Of course, this would be true for any well-known framework, but as I mentioned earlier I really love Svelte and dislike React so for me it\u2019s an easy choice."),bo.forEach(t),et=f(e),le=s(e,"P",{});var ko=r(le);ba=l(ko,"Overall, I\u2019m really happy with SvelteKit and want to extend my sincere thanks for the SvelteKit team for working so hard on it, taking our feedback, and sharing it with us for free. It really is amazing."),ko.forEach(t),tt=f(e),_=s(e,"P",{});var lt=r(_);ka=l(lt,"I love it so much, in fact, that I'm taking what I've learned in my own app and developing a "),re=s(lt,"A",{href:!0});var go=r(re);ga=l(go,"SvelteKit SaaS starter template"),go.forEach(t),Ia=l(lt,"."),lt.forEach(t),this.h()},h(){document.title="How to Deploy SvelteKit Apps to Github Pages",T(E,"padding","0"),u(M,"href","https://extensionpay.com"),u(C,"href","https://svelte.dev/"),u(z,"href","https://svelte.dev/blog/announcing-sveltekit-1.0"),u(B,"href","https://kit.svelte.dev"),T(P,"width","645px"),_a(P.src,Ka=""+(ue+"/articles/migrate-saas-sveltekit/lines_of_code_before.png"))||u(P,"src",Ka),u(P,"alt","Screenshot of cloc showing 4975 lines of code total"),u(G,"href",""+(ue+"/articles/migrate-saas-sveltekit/lines_of_code_before.png")),T(A,"width","645px"),T(L,"width","647px"),_a(L.src,Aa=""+(ue+"/articles/migrate-saas-sveltekit/lines_of_code_after.png"))||u(L,"src",Aa),u(L,"alt","Screenshot of cloc output showing 4397 lines of code total"),u(U,"href",""+(ue+"/articles/migrate-saas-sveltekit/lines_of_code_after.png")),T(x,"width","647px"),_a(H.src,Pa=""+(ue+"/articles/migrate-saas-sveltekit/performance.png"))||u(H,"src",Pa),T(H,"width","815px"),u(H,"alt","Plot of CPU performance over time. On April 2 there is a black vertical line indicating the time the new SvelteKit was deployed."),u(Q,"href",""+(ue+"/articles/migrate-saas-sveltekit/performance.png")),T(j,"width","815px"),u(te,"href","https://github.com/sveltejs/kit/issues/9096"),u(oe,"href","https://kit.svelte.dev/docs/form-actions"),u(ie,"href","https://kit.svelte.dev/docs/form-actions#progressive-enhancement"),u(re,"href","https://sveltekitsaas.com")},m(e,n){d(e,O,n),d(e,E,n),a(E,me),a(me,rt),d(e,xe,n),d(e,g,n),a(g,nt),a(g,M),a(M,dt),a(g,ht),d(e,Le,n),d(e,I,n),a(I,ft),a(I,C),a(C,ut),a(I,mt),d(e,je,n),d(e,S,n),a(S,pt),a(S,z),a(z,ct),a(S,wt),d(e,He,n),d(e,K,n),a(K,B),a(B,vt),a(K,yt),d(e,Re,n),d(e,N,n),a(N,bt),d(e,Te,n),d(e,F,n),a(F,kt),d(e,Oe,n),d(e,w,n),a(w,gt),a(w,pe),a(pe,It),a(w,St),a(w,ce),a(ce,_t),a(w,Et),d(e,Me,n),d(e,D,n),a(D,Kt),d(e,Ce,n),d(e,A,n),a(A,G),a(G,P),d(e,ze,n),d(e,J,n),a(J,At),d(e,Be,n),d(e,x,n),a(x,U),a(U,L),d(e,Ne,n),d(e,q,n),a(q,Pt),d(e,Fe,n),d(e,W,n),a(W,xt),d(e,De,n),d(e,X,n),a(X,Lt),d(e,Ge,n),d(e,j,n),a(j,Q),a(Q,H),d(e,Je,n),d(e,V,n),a(V,jt),d(e,Ue,n),d(e,v,n),a(v,Ht),a(v,we),a(we,Rt),a(v,Tt),a(v,ve),a(ve,Ot),a(v,Mt),d(e,qe,n),d(e,Y,n),a(Y,Ct),d(e,We,n),d(e,Z,n),a(Z,zt),d(e,Xe,n),d(e,$,n),a($,Bt),d(e,Qe,n),d(e,ee,n),a(ee,Nt),d(e,Ve,n),d(e,p,n),a(p,ye),a(ye,Ft),a(p,Dt),a(p,be),a(be,Gt),a(p,Jt),a(p,b),a(b,Ut),a(b,ke),a(ke,qt),a(b,Wt),a(b,te),a(te,Xt),a(b,Qt),a(p,Vt),a(p,ge),a(ge,Yt),a(p,Zt),a(p,R),a(R,$t),a(R,Ie),a(Ie,ea),a(R,ta),d(e,Ye,n),d(e,ae,n),a(ae,aa),d(e,Ze,n),d(e,m,n),a(m,Se),a(Se,oa),a(m,ia),a(m,_e),a(_e,sa),a(m,la),a(m,Ee),a(Ee,ra),a(m,na),a(m,Ke),a(Ke,da),a(m,ha),a(m,Ae),a(Ae,fa),a(m,ua),a(m,k),a(k,ma),a(k,oe),a(oe,pa),a(k,ca),a(k,Pe),a(Pe,ie),a(ie,wa),a(k,va),d(e,$e,n),d(e,se,n),a(se,ya),d(e,et,n),d(e,le,n),a(le,ba),d(e,tt,n),d(e,_,n),a(_,ka),a(_,re),a(re,ga),a(_,Ia)},p:Ea,i:Ea,o:Ea,d(e){e&&t(O),e&&t(E),e&&t(xe),e&&t(g),e&&t(Le),e&&t(I),e&&t(je),e&&t(S),e&&t(He),e&&t(K),e&&t(Re),e&&t(N),e&&t(Te),e&&t(F),e&&t(Oe),e&&t(w),e&&t(Me),e&&t(D),e&&t(Ce),e&&t(A),e&&t(ze),e&&t(J),e&&t(Be),e&&t(x),e&&t(Ne),e&&t(q),e&&t(Fe),e&&t(W),e&&t(De),e&&t(X),e&&t(Ge),e&&t(j),e&&t(Je),e&&t(V),e&&t(Ue),e&&t(v),e&&t(qe),e&&t(Y),e&&t(We),e&&t(Z),e&&t(Xe),e&&t($),e&&t(Qe),e&&t(ee),e&&t(Ve),e&&t(p),e&&t(Ye),e&&t(ae),e&&t(Ze),e&&t(m),e&&t($e),e&&t(se),e&&t(et),e&&t(le),e&&t(tt),e&&t(_)}}}class Lo extends So{constructor(O){super();_o(this,O,null,Ao,Eo,{})}}export{Lo as default};
