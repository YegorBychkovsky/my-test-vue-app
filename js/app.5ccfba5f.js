(function(){"use strict";var e={1629:function(e,t,s){var l=s(9242),r=s(3396),a=s(4870),i=s.p+"img/arrowsDown.e79fbc60.svg",n=s(7139);const o={class:"bg-primaryBlue text-white font-raleway px-12 py-3 rounded-[40px] font-[16px]"};var c={__name:"Button",props:{buttonText:String},setup(e){return(t,s)=>((0,r.wg)(),(0,r.iD)("button",o,(0,n.zw)(e.buttonText),1))}};const d=c;var x=d,u=s(4161);const p=["onSubmit"],b=(0,r._)("p",{class:"font-[e-Ukraine] text-[23px] font-[700] mb-[20px] 375:text-start pr-[80px]"},[(0,r.Uk)(" Залиште заявky, і ми підберемо для "),(0,r._)("br"),(0,r.Uk)(" вас yмови зі знижkою ")],-1),v={class:"mb-4"},f=(0,r._)("label",{for:"firstName",class:"block text-sm font-medium text-gray-700 375:text-start"},"Ваше ім'я",-1),m={class:"mb-4"},g=(0,r._)("label",{for:"lastName",class:"block text-sm font-medium text-gray-700 375:text-start"},"Номер телефону",-1),w={class:"mb-4"},_=(0,r._)("label",{for:"email",class:"block text-sm font-medium text-gray-700 375:text-start"},"Ваш e-mail",-1),y={key:0,class:"text-red-600"},k={key:1,class:"text-green-600"};var h={__name:"Form",setup(e){const t=(0,a.iH)(""),s=(0,a.iH)(""),i=(0,a.iH)(""),o=(0,a.iH)(null),c=(0,a.iH)(null);async function d(){try{const e=await u.Z.post("https://7eminar.ua/api/clients/campaign/test",{email:i.value,name:`${t.value} ${s.value}`,phone:s.value});200===e.status?(c.value="Данные успешно отправлены!",o.value=null):(o.value="Ошибка при отправке данных.",c.value=null)}catch(e){e.response?o.value=e.response.data.message:o.value="Произошла ошибка. Попробуйте позже.",c.value=null}}return(e,a)=>((0,r.wg)(),(0,r.iD)("form",{onSubmit:(0,l.iM)(d,["prevent"]),class:"pr-[70px] 375:px-[30px]"},[b,(0,r._)("div",v,[f,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"Ваше ім'я",type:"text",id:"firstName",class:"mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[l.nr,t.value]])]),(0,r._)("div",m,[g,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),placeholder:"Введіть Ваш номер телефону",type:"number",id:"lastName",class:"mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[l.nr,s.value]])]),(0,r._)("div",w,[_,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),placeholder:"Ваш e-mail",type:"email",id:"email",class:"mt-1 p-4 block w-full rounded-full border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[l.nr,i.value]])]),o.value?((0,r.wg)(),(0,r.iD)("div",y,(0,n.zw)(o.value),1)):(0,r.kq)("",!0),c.value?((0,r.wg)(),(0,r.iD)("div",k,(0,n.zw)(c.value),1)):(0,r.kq)("",!0),(0,r.Wm)(x,{type:"submit",class:"btn-primary",buttonText:"Зареєструватись"})],40,p))}};const D=h;var U=D;const C={class:"grid grid-cols-2 375:grid-cols-1 text-center"},F=(0,r.uE)('<div class="pl-[70px] 375:px-[40px] mt-[30px]"><p class="font-[e-Ukraine] text-[23px] font-[700] 375:text-start"> З передплатою Аkадемії ви <br>отримаєте: </p><div class="grid grid-cols-2"><div><p class="text-[63px] text-primaryBlue 375:text-[43px]">8+</p><p>професійних курсів</p></div><div><p class="text-[63px] text-primaryBlue 375:text-[43px]">12</p><p>закритих клубних лекцій</p></div><div><p class="text-[63px] text-primaryBlue 375:text-[43px]">48</p><p>нових вебінарів та тренінгів</p></div><div><p class="text-[63px] text-primaryBlue 375:text-[43px]">∞</p><p> Безлімітні відповіді <br>на запитання протягом <br> навчання </p></div></div><div class="mb-[200px]"><p class="text-[39px] font-[700] text-primaryBlue 375:text-[24px] text-start"> Тестові та практичні <span class="text-[17px] font-[400] text-black block">завдання зі зворотним зв&#39;язком</span></p></div></div>',1);var S={__name:"Footer",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("footer",C,[(0,r.Wm)(U),F]))}};const T=S;var W=T,H=s.p+"img/features.c819678c.svg",j=s(7248);const A={class:"pl-[17vw] pt-[30px]"},B={class:"-py-[60px]"},M=(0,r._)("div",{class:"bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-left bg-cover"},null,-1),E=(0,r._)("div",{class:"bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-center bg-cover"},null,-1),O=(0,r._)("div",{class:"bg-[url('~@/assets/features.svg')] w-[260px] h-[540px] bg-right bg-cover"},null,-1),z=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 80 80"},[(0,r._)("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"black","stroke-width":"2"}),(0,r._)("polygon",{points:"0,40 25,25 25,55",fill:"transparent",stroke:"black","stroke-width":"2",transform:"translate(23, 0)"})],-1),L=[z],q=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 80 80"},[(0,r._)("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"black","stroke-width":"2"}),(0,r._)("polygon",{points:"45,40 25,25 25,55",fill:"transparent",stroke:"black","stroke-width":"2",transform:"translate(8, 0)"})],-1),N=[q];var P={__name:"Swiper",setup(e){const t={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},s=(0,a.iH)(null),l=e=>{s.value=e},i=()=>{},n=()=>{null!==s.value&&s.value.slidePrev()},o=()=>{null!==s.value&&s.value.slideNext()};(0,r.Fl)((()=>s.value?.isBeginning)),(0,r.Fl)((()=>s.value?.isEnd));return(e,c)=>((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",B,[(0,r.Wm)((0,a.SU)(j.tq),{options:t,ref_key:"mySwiper",ref:s,modules:e.modules,"slides-per-view":1,onSwiper:l,onSlideChange:i},{default:(0,r.w5)((()=>[(0,r.Wm)((0,a.SU)(j.o5),{class:""},{default:(0,r.w5)((()=>[M])),_:1}),(0,r.Wm)((0,a.SU)(j.o5),null,{default:(0,r.w5)((()=>[E])),_:1}),(0,r.Wm)((0,a.SU)(j.o5),null,{default:(0,r.w5)((()=>[O])),_:1})])),_:1},8,["modules"])]),(0,r._)("div",{class:"flex space-x-2 justify-center pr-[22%] pt-[20px]"},[(0,r._)("button",{class:"",onClick:n},L),(0,r._)("button",{class:"",onClick:o},N)])]))}};const V=P;var $=V;const Y={class:"mb-[48] text-center relative"},I=(0,r._)("p",{class:"font-raleway text-base font-medium leading-5 tracking-normal text-center mb-[40px] 375:text-[18px]"}," Вища Бухгалтерська Online-Академія ",-1),K=(0,r._)("h1",{class:"font-[e-UkraineHeadBold] text-5xl font-bold leading-3xl tracking-normal text-center 375:text-[24px]"},[(0,r.Uk)(" Підвищення "),(0,r._)("br",{class:"hidden 375:inline"}),(0,r.Uk)(" кваліфікації "),(0,r._)("br"),(0,r.Uk)(" та профперепідготовка "),(0,r._)("br",{class:"hidden 375:inline"}),(0,r.Uk)(" для бухгалтерів ")],-1),Z={class:"flex justify-center items-center mt-10 375:hidden"},G=["src"],J=(0,r._)("p",{class:"text-2xl font-bold mt-10 375:text-[16px] text-center"},[(0,r.Uk)(" Разом дешевше! Купуйте "),(0,r._)("br",{class:"hidde 375:inline"}),(0,r.Uk)(" передплату на Вищу Бухгалтерську "),(0,r._)("br"),(0,r.Uk)(" Online-Академію "),(0,r._)("a",{href:"#",class:"text-primaryBlue"},[(0,r.Uk)("8 професій за "),(0,r._)("br",{class:"hidde 375:inline"}),(0,r.Uk)(" ціною 2")])],-1);var Q={__name:"Header",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("header",Y,[I,K,(0,r.Wm)(x,{class:"mt-10",buttonText:"Обрати навчання >>"}),(0,r._)("div",Z,[(0,r._)("img",{src:(0,a.SU)(H),alt:"",class:"max-w-full"},null,8,G)]),(0,r.Wm)($,{class:"hidden 375:block"}),J]))}};const R=Q;var X=R;const ee={class:"flex justify-center mt-[40px]"},te=(0,r.uE)('<div class="flex flex-col items-center mr-[10px]"><div class="text-xs font-semibold text-gray-600 text-center mt-[57px]"> 21 серпня </div><div class="text-xs font-semibold text-gray-600 text-center mt-[100px]"> 1 вересня </div><div class="text-xs font-semibold text-gray-600 text-center mt-[100px]"> 15 вересня </div><div class="text-xs font-semibold text-gray-600 text-center mt-[27px]"> 3 жовтня </div></div>',1),se={class:"relative flex flex-col items-center"},le=(0,r.uE)('<div class="w-[10px] bg-[#F6F6F6]"><div class="relative h-[350px] flex flex-col justify-between"><div class="h-[2px] bg-black w-full absolute bottom-0"></div><div class="basis-[15%] w-[10px] bg-[#F6F6F6] mx-auto"><div class="h-[2px] bg-black w-full"></div></div><div class="basis-[30%] w-[10px] bg-[#F6F6F6] mx-auto"><div class="h-[2px] bg-black w-full"></div></div><div class="basis-[30%] w-[10px] bg-[#F6F6F6] mx-auto"><div class="h-[2px] bg-black w-full"></div></div><div class="basis-[15%] w-[10px] bg-[#F6F6F6] mx-auto"><div class="h-[2px] bg-black w-full"></div></div></div></div>',1),re=(0,r._)("div",{class:"relative w-2 h-2 z-1 bg-black rounded-full mt-[4px] ml-[4px]"},null,-1),ae=[re],ie=(0,r.uE)('<div class="flex flex-col items-center ml-[10px]"><div class="text-xs font-[400] text-gray-600 text-start mt-[0px]"> Ціни раннього <br> бронювання </div><div class="text-xs font-[400] text-gray-600 text-start mt-[80px]"> Подорожчання <br> на 10% </div><div class="text-xs font-[400] text-gray-600 text-start mt-[80px]"> Подорожчання <br>на 15% </div><div class="text-xs font-[400] text-gray-600 text-start mt-[60px]"> Можливо квитки <br>вже закінчаться </div></div>',1);var ne={__name:"MobileScale",setup(e){const t=(0,a.iH)("");return(0,r.bv)((()=>{const e=new Date,s=new Date("2023-08-31"),l=new Date("2023-10-03");if(e>=s&&e<=l){const r=l-s,a=e-s;t.value=(a/r*100).toFixed(0)}})),(e,s)=>((0,r.wg)(),(0,r.iD)("div",ee,[te,(0,r._)("div",se,[le,(0,r._)("div",{class:"absolute w-[20px] h-[20px] ml-[0px] border-2 border-black bg-yellow rounded-full mt-4",style:(0,n.j5)({top:t.value+"%"})},ae,4)]),ie]))}};const oe=ne;var ce=oe,de=s.p+"img/newOrder.43c219d2.svg";const xe=[{id:1,name:"Поглиблені професійні курси підвищення <br/> кваліфікації <a href='#'>(8 курсів/рік)</a>",firstCourse:!0,secondCourse:!0},{id:2,name:`<img style="display: inline" src="${de}" alt="" /> Практичні курси автоматизації <br/>  (робота в BAS, Medoc, Excel, ЕК)`,firstCourse:!0,secondCourse:!0},{id:2,name:`<img style="display: inline" src="${de}" alt="" /> Закриті клубні лекції з експертами <br/> <a href='#'>(1 р./ міс.)</a>`,firstCourse:!0,secondCourse:!0},{id:3,name:"Майстер-класи зі змін у законодавстві <br/> <a href='#'>(4+ р./міс.)</a>",firstCourse:!0,secondCourse:!0},{id:4,name:"Безлімітні відповіді на запитання під час <br/> онлайн-навчання",firstCourse:!0,secondCourse:!0},{id:5,name:"Тестові та практичні завдання зі зворотним <br/> зв'язком ",firstCourse:!0,secondCourse:!0},{id:6,name:"Роздатковий матеріал (корисні файли, <br/> брошури, презентації)",firstCourse:!0,secondCourse:!0},{id:7,name:"Клуб однодумців у Viber та підтримка <br/> куратора ",firstCourse:!0,secondCourse:!0},{id:8,name:"Сертифікати після проходження <br/> курсів ",firstCourse:!0,secondCourse:!0},{id:9,name:"Доступ до <br/> <a href='#'>Бухгалтерської Відеоплатформи №1:</a>",firstCourse:!1,secondCourse:!0},{id:10,name:"Відеокурси і вебінари <br/> <a href='#'>(1100+ вже та 20+ щомісяця)</a>",firstCourse:!1,secondCourse:!0},{id:11,name:"Безлімітні швидкі консультації від експертів <br/> (сервіс ОК)",firstCourse:!1,secondCourse:!0},{id:12,name:"Бланки та зразки документів <br/> <a href='#'>(2000+ вже та 30+ щомісяця)</a>",firstCourse:!1,secondCourse:!0},{id:13,name:"Консультант з пошуку та підготовки <br/> документів  <a href='#'>(безлімітно, щодня)</a>",firstCourse:!1,secondCourse:!0},{id:14,name:"Калькулятори",firstCourse:!1,secondCourse:!0},{id:15,name:"Довідники",firstCourse:!1,secondCourse:!0}];var ue=xe,pe=s.p+"img/checkSymbol.60744adc.svg",be=s.p+"img/crossSymbol.b6ab0032.svg";const ve={class:"min-w-full bg-white"},fe={class:"text-[15px]"},me={key:0,class:"w-[16.5%] pl-[30px]"},ge=["src"],we=["src"],_e={key:1,class:"text-center pl-[30px]"},ye=["src"],ke=["src"],he=["innerHTML"];var De={__name:"MobileTable",props:{firstCourse:Boolean,secondCourse:Boolean},setup(e){return(t,s)=>((0,r.wg)(),(0,r.iD)("table",ve,[(0,r._)("tbody",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(ue),(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[e.firstCourse?((0,r.wg)(),(0,r.iD)("td",me,[t.firstCourse?((0,r.wg)(),(0,r.iD)("img",{key:0,src:(0,a.SU)(pe),alt:""},null,8,ge)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:(0,a.SU)(be),alt:""},null,8,we))])):(0,r.kq)("",!0),e.secondCourse?((0,r.wg)(),(0,r.iD)("td",_e,[t.secondCourse?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"ml-[40%]",src:(0,a.SU)(pe),alt:""},null,8,ye)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:(0,a.SU)(be),alt:"Крестик"},null,8,ke))])):(0,r.kq)("",!0),(0,r._)("td",{class:"w-[55%] text-start 375:pr-[10px]",innerHTML:t.name},null,8,he)])))),128))])]))}};const Ue=De;var Ce=Ue;const Fe={class:"w-full"},Se=(0,r.uE)('<div class="flex mb-2 items-center"><div class="basis-[20%]"><span class="text-xs inline-block py-1 px-2"> Ціни раннього бронювання </span></div><div class="basis-[35%]"><span class="text-xs inline-block py-1 px-2"> Подорожчання <br> на 10% </span></div><div class="basis-[35%]"><span class="text-xs inline-block py-1 px-2"> Подорожчання <br>на 15% </span></div><div class="basis-[10%]"><span class="text-xs inline-block py-1 px-2"> Квитки вже закінчаться </span></div></div><div class="flex h-2 mb-4 overflow-hidden text-xs bg-[#0000000D] relative"><div style="flex-grow:2;flex-shrink:1;flex-basis:15%;" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"><div class="border-l border-[#0000000D] absolute h-full left-0"></div></div><div style="flex-grow:5;flex-shrink:1;flex-basis:35%;" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"><div class="border-l border-[#0000000D] absolute h-full left-0"></div></div><div style="flex-grow:5;flex-shrink:1;flex-basis:35%;" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"><div class="border-l border-[#0000000D] absolute h-full left-0"></div></div><div style="flex-grow:2;flex-shrink:1;flex-basis:15%;" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0000000D] border-r border-black relative"><div class="border-l border-[#0000000D] absolute h-full left-0"></div></div></div>',2),Te={class:"relative pt-1"},We={class:"flex mb-2 items-end"},He=(0,r.uE)('<div class="text-xs font-semibold inline-block w-8 text-gray-600 text-center"></div><div class="text-xs font-semibold inline-block basis-[20%] flex-shrink-0 w-8 text-gray-600 text-end"><b class="text-center">21 серпня</b></div><div class="text-xs font-semibold inline-block basis-[35%] flex-shrink-0 w-8 text-gray-600 text-end"><b class="text-center">1 вересня</b></div><div class="text-xs font-semibold inline-block basis-[35%] flex-shrink-0 w-8 text-gray-600 text-end"><b class="text-center">15 вересня</b></div><div class="text-xs font-semibold inline-block basis-[10%] flex-shrink-0 w-8 text-gray-600 text-end"><b class="text-center">3 жовтня</b></div>',5),je=(0,r._)("div",{class:"relative w-2 h-2 z-1 bg-black rounded-full mt-[2px] ml-[2px]"},null,-1),Ae=[je];var Be={__name:"Scale",setup(e){const t=(0,a.iH)("");return(0,r.bv)((()=>{const e=new Date,s=new Date("2023-08-31"),l=new Date("2023-10-03");if(e>=s&&e<=l){const r=l-s,a=e-s;t.value=(a/r*100).toFixed(0)}})),(e,s)=>((0,r.wg)(),(0,r.iD)("div",Fe,[Se,(0,r._)("div",Te,[(0,r._)("div",We,[He,(0,r._)("div",{class:"absolute -top-7 w-4 h-4 bg-yellow-400 border-2 border-black bg-yellow rounded-full",style:(0,n.j5)({left:t.value+"%"})},Ae,4)])])]))}};const Me=Be;var Ee=Me;const Oe={class:"min-w-full bg-[#FAFAFA]"},ze={class:"text-[15px]"},Le=["innerHTML"],qe={class:"border-b border-gray-100 border-opacity-50 w-[16.5%]"},Ne=["src"],Pe=["src"],Ve={class:"border-b border-gray-200 bg-[#60AFFE0D] text-center"},$e=["src"],Ye=["src"];var Ie={__name:"Table",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("table",Oe,[(0,r._)("tbody",ze,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(ue),(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",{class:"border-b border-gray-200 w-[55%]",innerHTML:e.name},null,8,Le),(0,r._)("td",qe,[e.firstCourse?((0,r.wg)(),(0,r.iD)("img",{key:0,src:(0,a.SU)(pe),alt:""},null,8,Ne)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:(0,a.SU)(be),alt:""},null,8,Pe))]),(0,r._)("td",Ve,[e.secondCourse?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"ml-[40%]",src:(0,a.SU)(pe),alt:""},null,8,$e)):((0,r.wg)(),(0,r.iD)("img",{key:1,src:(0,a.SU)(be),alt:"Крестик"},null,8,Ye))])])))),128))])]))}};const Ke=Ie;var Ze=Ke;const Ge={class:"col-span-2 text-center mt-[21px] bg-[#60AFFE0D] rounded-t-3xl"},Je={class:"text-md font-extrabold"},Qe={class:"text-md mr-[15px] inline"},Re=["src"],Xe=["innerHTML"],et=(0,r._)("p",{class:"line-through text-gray text-[13px]"},"1079 грн/міс.",-1),tt=(0,r._)("p",{class:"text-[17px] font-bold"},"679 грн/міс.",-1),st=(0,r._)("br",null,null,-1),lt=(0,r._)("a",{class:"text-gray underline",href:""},"Оплатити частинами",-1);var rt={__name:"Tariff",props:{h3Text:String,description:String},setup(e){return(t,s)=>((0,r.wg)(),(0,r.iD)("div",Ge,[(0,r._)("div",Je,[(0,r._)("div",Qe,[(0,r._)("h3",null,(0,n.zw)(e.h3Text),1)]),(0,r._)("img",{class:"inline pb-[3px]",src:t.discount,alt:""},null,8,Re)]),(0,r._)("p",{class:"text-[13px]",innerHTML:e.description},null,8,Xe),et,tt,(0,r.Wm)(x,{buttonText:"Оплатити карткою"}),(0,r.Uk)(),st,lt]))}};const at=rt;var it=at;const nt={id:"timer",class:"col-span-3 pt-[20px] text-primaryBlue font-[400] 375:text-center mb-[30px]"},ot={class:"text-3xl opacity-100"},ct={class:"text-3xl opacity-100"},dt={class:"text-3xl opacity-100"},xt=(0,r._)("div",{class:"flex space-x-4 opacity-100 375:text-center 375:justify-center"},[(0,r._)("span",null,"год"),(0,r._)("span",null,"хв"),(0,r._)("span",null,"сек")],-1),ut=(0,r._)("p",{class:"text-sm text-gray"},[(0,r.Uk)(" (для діючих передплатників "),(0,r._)("br"),(0,r.Uk)(" додаткова знижка 10%) ")],-1);var pt={__name:"Timer",setup(e){const t=new Date("2023-10-03T17:00:00Z").getTime(),s=(0,a.iH)("00"),l=(0,a.iH)("00"),i=(0,a.iH)("00"),o=()=>{const e=(new Date).getTime(),r=t-e;if(r<=0)s.value="00",l.value="00",i.value="00";else{const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),a=Math.floor(r%6e4/1e3);s.value=e.toString().padStart(2,"0"),l.value=t.toString().padStart(2,"0"),i.value=a.toString().padStart(2,"0")}};return(0,r.bv)((()=>{o(),setInterval(o,1e3)})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",nt,[(0,r._)("span",ot,(0,n.zw)(s.value),1),(0,r.Uk)(" : "),(0,r._)("span",ct,(0,n.zw)(l.value),1),(0,r.Uk)(" : "),(0,r._)("span",dt,(0,n.zw)(i.value),1),xt,ut]))}};const bt=pt;var vt=bt;const ft={class:"font-raleway mx-[250px] 375:m-[0px] bg-[#FAFAFA]"},mt={class:"mt-10 mb-80 text-center"},gt=(0,r._)("p",{class:"text-5xl font-semibold 375:text-[24px]"},[(0,r.Uk)(" Навчання, яке працює! "),(0,r._)("br"),(0,r.Uk)("Відкрийте для себе найпопулярніші курси ")],-1),wt={class:"-mt-[180px] mb-[180px]"},_t=(0,r._)("div",{class:"text-center"},[(0,r._)("p",{class:"text-5xl font-semibold 375:text-[24px]"},[(0,r.Uk)(" Передплата на вищу Бухгалтерську "),(0,r._)("br"),(0,r.Uk)(" Онлайн-Академію ")]),(0,r._)("br"),(0,r._)("p",{class:"font-xl font-bold mb-[300px] 375:mb-[20px]"}," Оберіть свій тарифний пакет: ")],-1),yt={class:"grid grid-cols-7 375:grid-cols-1 justify-center items-center"},kt={class:"col-span-2 text-center 375:justify-center mb-[40px]"},ht={class:"text-[13px] bg-yellow rounded-t-2xl font-[700] py-[3px] px-[10px]"},Dt=["src"],Ut=["src"],Ct={class:"col-span-2"},Ft={class:"overflow-x-auto"},St={class:"grid grid-cols-7 375:hidden"},Tt=(0,r._)("div",{class:"col-span-3"},null,-1),Wt={class:"col-span-2 text-center"},Ht=(0,r._)("p",{class:"line-through text-gray text-[13px] mt-[50px]"}," 1079 грн/міс. ",-1),jt=(0,r._)("p",{class:"text-[17px] font-bold"},"679 грн/міс.",-1),At=(0,r._)("br",null,null,-1),Bt={class:"col-span-2 text-center bg-[#60AFFE0D] rounded-b-xl pb-[10px]"},Mt=(0,r._)("p",{class:"line-through text-gray text-[13px] mt-[50px]"}," 1079 грн/міс. ",-1),Et=(0,r._)("p",{class:"text-[17px] font-bold"},"679 грн/міс.",-1),Ot=(0,r._)("br",null,null,-1),zt=(0,r._)("p",{class:"text-center mt-[40px]"},[(0,r.Uk)(" Оплачуйте пакети "),(0,r._)("b",null,"частинами без комісії!"),(0,r.Uk)(),(0,r._)("br"),(0,r.Uk)(" Натискайте на кнопку "),(0,r._)("b",null,"Оплатити карткою "),(0,r.Uk)(" та оформлюйте розстрочку "),(0,r._)("br"),(0,r.Uk)(" через PrivatBank або Monobank ")],-1);var Lt={__name:"MainPage",setup(e){const t=(0,r.Fl)((()=>window.innerWidth<=1600));return console.log(t.value),console.log(window.innerWidth),(e,t)=>((0,r.wg)(),(0,r.iD)("div",ft,[(0,r.Wm)(X),(0,r._)("div",mt,[gt,(0,r.Wm)(ce,{class:"hidden 375:flex"}),(0,r.Wm)(Ee,{class:"mt-[60px] 375:hidden"})]),(0,r._)("div",wt,[_t,(0,r._)("div",yt,[(0,r.Wm)(vt),(0,r._)("div",kt,[(0,r._)("div",ht,[(0,r._)("img",{class:"inline pb-[3px] mx-[5px]",src:(0,a.SU)(i),alt:""},null,8,Dt),(0,r.Uk)(" ХІТ ПРОДАЖУ "),(0,r._)("img",{class:"inline pb-[3px] mx-[5px]",src:(0,a.SU)(i),alt:""},null,8,Ut)]),(0,r.Wm)(it,{class:"bg-[#FAFAFA]",h3Text:"СУПЕРПРОФЕСІОНАЛ",description:"8 професійних курсів <br/> за ціною 2 "}),(0,r.Wm)(Ce,{class:"hidden 375:block",firstCourse:!0,secondCourse:!1})]),(0,r._)("div",Ct,[(0,r.Wm)(it,{class:"mt-[30px] 375:bg-white",h3Text:"ПРЕМIУМ",description:"8 професійних курсів за ціною 2 + <br/> Бухгалтерська Відеоплатформа\n      №1"}),(0,r.Wm)(Ce,{class:"hidden 375:block",firstCourse:!0,secondCourse:!1})])]),(0,r._)("div",null,[(0,r._)("div",Ft,[(0,r.Wm)(Ze,{class:"375:hidden"}),(0,r._)("div",St,[Tt,(0,r._)("div",Wt,[Ht,jt,(0,r.Wm)(x,{buttonText:"Завантажити рахунок"}),At]),(0,r._)("div",Bt,[Mt,Et,(0,r.Wm)(x,{buttonText:"Завантажити рахунок"}),(0,r.Uk)(),Ot])]),zt])])]),(0,r.Wm)(W)]))}};const qt=Lt;var Nt=qt;const Pt={id:"app",class:"bg-[#FAFAFA]"};var Vt={__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",Pt,[(0,r.Wm)(Nt,{msg:"Welcome to Your Vue.js App"})]))}};const $t=Vt;var Yt=$t;(0,l.ri)(Yt).mount("#app")}},t={};function s(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,l,r,a){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],r=e[d][1],a=e[d][2];for(var n=!0,o=0;o<l.length;o++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](l[o])}))?l.splice(o--,1):(n=!1,a<i&&(i=a));if(n){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,r,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/my-test-vue-app/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,a,i=l[0],n=l[1],o=l[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(o)var d=o(s)}for(t&&t(l);c<i.length;c++)a=i[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},l=self["webpackChunkmy_test_vue_app"]=self["webpackChunkmy_test_vue_app"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=s.O(void 0,[998],(function(){return s(1629)}));l=s.O(l)})();
//# sourceMappingURL=app.5ccfba5f.js.map