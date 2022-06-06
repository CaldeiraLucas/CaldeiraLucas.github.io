import{_ as w}from"./index.e5e5e0cc.js";import{o as i,c as o,a as t,g as B,l as m,t as b,m as N,b as f,w as d,F as v,n as k,u as h,e as C,f as W}from"./vendor.ac0a54a7.js";const S={class:"item"},$={class:"details"},q={setup(y){function l(s,e){let a=s.path[1].children[1],n=s.target.className,c=a.scrollLeft;n=="left"&&(a.scrollBy({left:-a.offsetWidth-10,behavior:"smooth"}),c=c-a.offsetWidth-10),n=="right"&&(a.scrollBy({left:a.offsetWidth+10,behavior:"smooth"}),c=c+a.offsetWidth+10),c>0?s.path[1].children[0].style.visibility="visible":s.path[1].children[0].style.visibility="hidden",c+a.offsetWidth>=a.scrollWidth?s.path[1].children[2].style.visibility="hidden":s.path[1].children[2].style.visibility="visible"}return(s,e)=>(i(),o("div",S,[t("div",$,[t("h3",null,[B(s.$slots,"heading",{},void 0,!0)]),t("div",null,[t("a",{class:"left",onClick:e[0]||(e[0]=a=>l(a))},"\u276E"),B(s.$slots,"default",{},void 0,!0),t("a",{class:"right",onClick:e[1]||(e[1]=a=>l(a))},"\u276F")])])]))}};var j=w(q,[["__scopeId","data-v-591b5f69"]]);const A={key:0,id:"myModal",class:"modal"},M={class:"modal-content"},V={class:"mySlides"},G={class:"numbertext"},I=["src"],L={key:0,class:"caption-container"},P={id:"caption"},D=C("Reprodu\xE7\xF5es"),R={class:"row",id:"copies"},F=["onClick"],T=["src"],z=C("Papel + l\xE1pis, etc"),E={class:"row"},J=["onClick"],K=["src"],O=C("Digitais (total ou parcial)"),U={class:"row"},Y=["onClick"],H=["src"],Q={setup(y){const l=m(!1),s=m(""),e=m(0),a=m({});function n(_,p){l.value=!l.value,e.value=p,a.value=_,s.value=_[p]}function c(_){e.value=_,e.value<0&&(e.value=a.value.length-1),e.value>a.value.length-1&&(e.value=0),s.value=a.value[e.value]}let u={copies:[{path:"src/assets/arts/ilust/saber_lily.jpg",caption:"Saber Lily (Fate/Unlimited Codes)"},{path:"src/assets/arts/ilust/red_arc.jpg",caption:"Red Arcueid (Melty Blood)"},{path:"src/assets/arts/ilust/white_len.jpg",caption:"White Len (Melty Blood)"},{path:"src/assets/arts/ilust/kurisutina.png",caption:"Makise Kurisu (Steins;Gate)"},{path:"src/assets/arts/ilust/reproducao1.png",caption:"C\xF3pia de cena do Bruce Lee feita com papel vegetal e l\xE1pis B, 3B e 6B"},{path:"src/assets/arts/ilust/reproducao2.png",caption:"C\xF3pia de fotografia de um Gaio-azul (Cyanocitta cristata) feita com papel vegetal e caneta nanquim"},{path:"src/assets/arts/ilust/reproducao3.png",caption:"C\xF3pia de fotografia feita com papel vegetal e caneta nanquim"},{path:"src/assets/arts/ilust/ca\xE7amig.jpg",caption:"C\xF3pia de fotografia de um ca\xE7a Mig29 feita com papel vegetal, caneta nanquim e r\xE9gua"}],trads:[{path:"src/assets/arts/ilust/Girassol.jpg",caption:"Ao inv\xE9s de apenas desenhar um girassol, pensei que seria interessante imitar um quadro tamb\xE9m"},{path:"src/assets/arts/ilust/draw2.jpg"},{path:"src/assets/arts/ilust/draw3.png"},{path:"src/assets/arts/ilust/draw8.png"},{path:"src/assets/arts/ilust/girl2.png"},{path:"src/assets/arts/ilust/drawpaola.png"},{path:"src/assets/arts/ilust/rain.png"},{path:"src/assets/arts/ilust/lightshot_1585342830.jpeg"},{path:"src/assets/arts/ilust/lightshot_1585340065.jpeg",caption:"Personagem imaginada para uma hist\xF3ria minha que ainda n\xE3o foi para o papel"},{path:"src/assets/arts/ilust/lightshot_1585339944.jpeg"},{path:"src/assets/arts/ilust/lightshot_1585339318.jpeg"},{path:"src/assets/arts/ilust/char.jpg"},{path:"src/assets/arts/ilust/dancarina.jpeg",caption:"um solit\xE1rio trabalho com l\xE1pis, caneta nanquim e l\xE1pis de cor"},{path:"src/assets/arts/ilust/treino 001.jpg",caption:"Primeira e por enquanto \xFAnica tentativa de ilustrar algo com giz de cera"}],digis:[{path:"src/assets/arts/ilust/Stella.png",caption:"Desenhado a l\xE1pis mas colorido digitalmente, por isso est\xE1 aqui"},{path:"src/assets/arts/ilust/PaolaNY.jpg"},{path:"src/assets/arts/ilust/Ayame.png",caption:"Retrabalho da personagem Ayame, originalmente criada por Bigorados"},{path:"src/assets/arts/ilust/Muslim.jpg",caption:"Inspirado numa fotografia da National Geographic. N\xE3o ficou t\xE3o bonita quanto, mas um bom treino"},{path:"src/assets/arts/ilust/New Canvas.png",caption:"De dia uma pessoa comum, de noite uma jogadora de rpg. Ilustrado para uma apresenta\xE7\xE3o sobre tecnologia VR."},{path:"src/assets/arts/ilust/ferraria.jpg",caption:"Desenho n\xE3o usado para um projeto de jogo de tabuleiro com tem\xE1tica medieval"},{path:"src/assets/arts/ilust/WTLD.jpg",caption:"Ilustra\xE7\xE3o para o conto de natal 'When the lights are down' (Noveland)"},{path:"src/assets/arts/ilust/Vanessa.jpg",caption:"Vanessa (The King of Fighters 2002)"},{path:"src/assets/arts/ilust/Ciel.png",caption:"Ciel (Tsukihime remake style)"},{path:"src/assets/arts/ilust/JackPark.jpg",caption:"Ilustra\xE7\xE3o para Jack Park e o Mist\xE9rio das Realidades Alternativas, web novel de Lupe Sano"},{path:"src/assets/arts/ilust/akiha_chibi.jpg"},{path:"src/assets/arts/ilust/rabisco8001_comparacao.png",caption:"Mensurando minha evolu\xE7\xE3o, parte 1"},{path:"src/assets/arts/ilust/draw9_comparacao.png",caption:"Mensurando minha evolu\xE7\xE3o, parte 2"},{path:"src/assets/arts/ilust/maid.jpg",caption:"'Nanyan?!'"},{path:"src/assets/arts/ilust/summer_woman.jpg",caption:"9 de 10 especialistas afirmaram que se expor ao sol regularmente faz bem \xE0 saude. O d\xE9cimo n\xE3o foi encontrado, deve estar na praia"}]};return(_,p)=>(i(),o(v,null,[l.value==!0?(i(),o("div",A,[t("span",{class:"close",onClick:n},"\xD7"),t("div",M,[t("div",V,[t("div",G,b(e.value+1)+" / "+b(a.value.length),1),t("img",{src:s.value.path},null,8,I),a.value[e.value].caption?(i(),o("div",L,[t("p",P,b(a.value[e.value].caption),1)])):N("",!0)]),t("a",{class:"prev",onClick:p[0]||(p[0]=r=>c(--e.value))},"\u276E"),t("a",{class:"next",onClick:p[1]||(p[1]=r=>c(++e.value))},"\u276F")])])):N("",!0),f(j,null,{heading:d(()=>[D]),default:d(()=>[t("div",R,[t("ul",null,[(i(!0),o(v,null,k(h(u).copies,(r,g)=>(i(),o("li",{key:r,onClick:x=>n(h(u).copies,g)},[t("img",{src:r.path},null,8,T)],8,F))),128))])])]),_:1}),f(j,null,{heading:d(()=>[z]),default:d(()=>[t("div",E,[t("ul",null,[(i(!0),o(v,null,k(h(u).trads,(r,g)=>(i(),o("li",{key:r,onClick:x=>n(h(u).trads,g)},[t("img",{src:r.path},null,8,K)],8,J))),128))])])]),_:1}),f(j,null,{heading:d(()=>[O]),default:d(()=>[t("div",U,[t("ul",null,[(i(!0),o(v,null,k(h(u).digis,(r,g)=>(i(),o("li",{key:r,onClick:x=>n(h(u).digis,g)},[t("img",{src:r.path},null,8,H)],8,Y))),128))])])]),_:1})],64))}};var X=w(Q,[["__scopeId","data-v-7799cd80"]]);const Z={setup(y){return(l,s)=>(i(),W(X))}};const ss={setup(y){function l(){var s=document.createElement("div");s.style.visibility="hidden",s.style.width="100px",s.style.msOverflowStyle="scrollbar",document.body.appendChild(s);var e=s.offsetWidth;s.style.overflow="scroll";var a=document.createElement("div");a.style.width="100%",s.appendChild(a);var n=a.offsetWidth;return s.parentNode.removeChild(s),e-n}return console.log(l()),(s,e)=>(i(),o("main",null,[f(Z)]))}};var es=w(ss,[["__scopeId","data-v-ee0e524a"]]);export{es as default};