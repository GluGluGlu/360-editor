import{R as u,j as e,c as S,u as k,_ as T}from"./index-8ec2fe94.js";import{b as C,c as D,L as Y}from"./tour-494bbceb.js";import{c as g,A as L,m as A,G as N,_ as H,s as v,e as M}from"./PulseLoader-ed56ee3b.js";import{B}from"./index.esm-0fda889a.js";import{a as R,d as J}from"./dayjs.min-e0489955.js";const E={hidden:{opacity:0,top:100,transition:{duration:.2}},show:{opacity:1,top:50,transition:{duration:.2}}},P=[10,25,50,100],G=({defaultvalue:t,rows:c=P,onChange:i})=>{const[r,m]=u.useState(!1),o=()=>m(x=>!x),l=x=>()=>{i(x),o()};return e.jsxs("div",{className:"relative",children:[e.jsx("button",{type:"button",onClick:o,className:g("form-select rounded-lg w-[4rem] h-8 md:h-10 md:w-[5rem] text-gray-500 flex justify-center items-center","border-gray-300 focus:border-gray-300 focus:ring-0"),children:t}),e.jsx(L,{children:r&&e.jsx(A.div,{className:"absolute bg-white rounded-md shadow-md w-[6rem] top-14 z-10","aria-label":"row-select-wrapper",variants:E,initial:"hidden",animate:"show",exit:"hidden",children:c.map((x,y)=>e.jsx("div",{role:"button",onClick:l(x),tabIndex:0,className:g("flex items-center justify-between px-3 py-2 text-[1.1rem]",t===x?"bg-blue-100/50 text-black":"text-gray-400"),children:e.jsx("span",{children:x})},y))})})]})},O=({row:t,onChangeRow:c,onChangeSearch:i})=>e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between","aria-label":"filtering",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm md:text-base","aria-label":"filtering__row-select",children:[e.jsx("p",{className:"text-gray-700",children:"Tampilkan"}),e.jsx(G,{defaultvalue:t,onChange:r=>c(r)}),e.jsx("p",{className:"text-gray-700",children:"Masukan"})]}),e.jsxs("div",{className:"relative w-full md:w-4/12 lg:w-2/12 my-5","aria-label":"filtering__input-search",children:[e.jsx("input",{className:g("border-gray-300 focus:border-gray-300 focus:ring-0 px-4 text-gray-900","focus:outline-none w-full tracking-wide rounded-lg","placeholder:font-medium placeholder:tracking-wide placeholder:text-gray-400 text-sm md:text-base","peer/search"),onChange:i,type:"search",placeholder:"Cari nama tour"}),e.jsx(B,{className:"absolute top-3 right-4 peer-focus/search:hidden peer-hover/search:hidden"})]})]});function V(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7 10l5 5 5-5H7z"}}]})(t)}function $(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7 14l5-5 5 5H7z"}}]})(t)}var z={exports:{}};(function(t,c){(function(i,r){t.exports=r(R)})(S,function(i){function r(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var m=r(i),o={name:"id",weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),weekStart:1,formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},ordinal:function(l){return l+"."}};return m.default.locale(o,null,!0),o})})(z);function K(){return[async(c,i)=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),i("failed"),!1;try{return await navigator.clipboard.writeText(c),i("success"),!0}catch(r){return console.warn("Copy failed",r),i("failed"),!1}}]}const U=["Tanggal di buat","Nama Tour","Action"],q=({data:t})=>{const{mutate:c,status:i}=C(),r=k(),[m,o]=u.useState("Nama Tour"),[l,x]=u.useState("asc"),[y]=K(),p=u.useMemo(()=>["Tanggal di buat"].includes(m)?t.sort((n,s)=>{const d=new Date(n.created_at).getTime(),_=new Date(s.created_at).getTime();return l==="asc"?d-_:_-d}):["Nama Tour"].includes(m)?t==null?void 0:t.sort((n,s)=>{var d,_;return l==="asc"?(d=n.name)==null?void 0:d.localeCompare(s.name):(_=s.name)==null?void 0:_.localeCompare(n.name)}):t,[t,m,l]),b=n=>()=>{x(s=>s==="asc"?"desc":"asc"),o(n)},f=n=>()=>r(`/tour/${n}`),a=n=>()=>r(`/editor/${n}`),h=n=>()=>{const s=window.location.host;y(`${s}/tour/${n}`,d=>{if(d==="success"){v({message:"Behasil copy to clipboard"});return}M({message:"Gagal copy to clipboard"})})},j=n=>()=>{confirm("Yakin ingin menghapus tour ?")&&c({tour_id:n},{onSuccess:()=>{v({message:"Berhasil menghapus tour"})},onError:()=>{M({message:"Gagal mengapus tour"})}})};return e.jsx("div",{className:"overflow-x-auto","aria-label":"table-container",children:e.jsxs("table",{className:"w-full border-collapse min-w-[1500px]",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-blue-700 text-white",children:U.map((n,s)=>e.jsx("th",{className:"w-1/6 font-medium py-2 lg:py-3 cursor-pointer text-sm md:text-base",children:e.jsxs("div",{className:"w-max mx-auto flex items-center",onClick:b(n),children:[n,e.jsx("div",{className:"flex flex-col opacity-60 hover:opacity-100",children:n!=="Action"&&e.jsxs(e.Fragment,{children:[e.jsx($,{className:"translate-y-1"}),e.jsx(V,{className:"-translate-y-1"})]})})]})},s))})}),e.jsxs("tbody",{children:[p==null?void 0:p.map((n,s)=>e.jsxs("tr",{className:g((s+1)%2===0?"bg-blue-500/10":""),children:[e.jsx("td",{className:"w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base",children:J(n.created_at).locale("id").format("ddd D MMM YYYY")}),e.jsx("td",{className:"w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base",children:n.name}),e.jsx("td",{className:"w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base",children:e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx(w,{onClick:f(n.id),children:"Jelajahi"}),e.jsx(w,{onClick:a(n.id),children:"Edit"}),e.jsx(w,{onClick:h(n.id),children:"Share"}),e.jsx(w,{disabled:i==="loading",onClick:j(n.id),children:i==="loading"?e.jsx(H,{color:"skyblue",size:10}):"Hapus"})]})})]},s)),e.jsx("tr",{})]})]})})},w=({children:t,...c})=>e.jsx("button",{...c,className:g("transition px-5 md:px-7 py-[.30rem] md:py-[.35rem] rounded-md","text-base bg-white text-blue-600","border md:border-2 border-blue-600","text-sm md:text-base","hover:bg-blue-600 hover:text-white"),type:"button",children:t});function Q(t,c){const[i,r]=u.useState(t);return u.useEffect(()=>{const m=setTimeout(()=>r(t),c||500);return()=>{clearTimeout(m)}},[t,c]),i}const W=({data:t,row:c,page:i,rowInfo:r,onSetPage:m})=>{const o=u.useMemo(()=>[...Array(Math.ceil(((t==null?void 0:t.length)??1)/c))].map((h,j)=>j+1),[t==null?void 0:t.length,c]),l=Math.ceil(((t==null?void 0:t.length)??1)/c)>5?5:Math.ceil(((t==null?void 0:t.length)??1)/c),x=[...Array(l)].map((a,h)=>h+Math.max(i-Math.floor(l/2),1)),y=a=>()=>m(a),p=()=>m(a=>Math.max(1,a-1)),b=()=>m(a=>Math.min(a+1,o.length)),f=x.map(a=>{if(a<=o.length)return e.jsx("button",{className:g("font-normal tracking-wide rounded-md w-10 text-sm md:text-base",i===a?"text-white border bg-blue-500 h-[2.1rem]":"text-blue-500 border border-blue-500 h-9"),onClick:y(a),children:a},a)});return e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-y-4 mt-8 md:mt-4",children:[e.jsx("div",{"aria-label":"information",children:e.jsxs("p",{className:"text-sm md:text-base",children:["Menampilkan ",r==null?void 0:r.start," sampai ",r==null?void 0:r.end," dari"," ",r==null?void 0:r.length," masukan"]})}),e.jsxs("div",{className:"flex items-center gap-3 tracking-wide text-sm md:text-base","aria-label":"pagination-button",children:[e.jsx("button",{onClick:p,className:g("text-gray-500 bg-gray-100 py-2 px-4 rounded-lg",i===1&&"cursor-not-allowed"),children:"Sebelumnya"}),f,e.jsx("button",{onClick:b,className:g("text-gray-500 bg-gray-100 py-2 px-4 rounded-lg",i===o.length&&"cursor-not-allowed"),children:"Selanjutnya"})]})]})};function te(){const{data:t,status:c,refetch:i}=D(),[r,m]=u.useState(""),o=Q(r,1e3),[l,x]=u.useState(10),[y,p]=u.useState({start:0,end:0,length:0}),[b,f]=u.useState(1),a=u.useMemo(()=>{var s;return(s=t==null?void 0:t.data)==null?void 0:s.filter(d=>d.name.toLowerCase().includes(o.toLowerCase()))},[o,t==null?void 0:t.data]),h=u.useMemo(()=>{let s,d;return o.length?(s=(b-1)*l,d=s+l,p({start:a!=null&&a.length?s+1:0,end:d>((a==null?void 0:a.length)??0)?(a==null?void 0:a.length)??0:d,length:(a==null?void 0:a.length)??0})):(s=(b-1)*l,d=s+l,p({start:s+1,end:d>((t==null?void 0:t.data.length)??0)?(t==null?void 0:t.data.length)??0:d,length:(t==null?void 0:t.data.length)??0})),a==null?void 0:a.slice(s,d)},[o.length,a,b,l,t==null?void 0:t.data.length]),j=u.useCallback(s=>{x(s),f(1)},[]),n=u.useCallback(s=>{m(s.target.value),f(1)},[]);return e.jsx(Y,{children:e.jsxs("div",{className:"mx-5 my-4",children:[c==="loading"?e.jsx("div",{className:"h-[calc(100vh_-_100px)] flex justify-center items-center",children:e.jsxs("div",{className:"w-max mx-auto p-2","aria-label":"groups-loader",children:[e.jsx(T,{color:"blue",width:200,height:3}),e.jsx("p",{className:"text-sm md:text-base mt-2 text-gray-500 text-center",children:"Mengambil data tour ..."})]})}):null,c==="success"?(h==null?void 0:h.length)===0?e.jsx("div",{className:"py-10",children:e.jsx("p",{className:"text-center text-lg font-light",children:"Tidak ada data"})}):e.jsxs(e.Fragment,{children:[e.jsx(O,{row:l,onChangeRow:j,onChangeSearch:n}),e.jsx(q,{data:h??[]}),e.jsx(W,{page:b,row:l,rowInfo:y,onSetPage:f,data:o?a:t==null?void 0:t.data})]}):null,c==="error"?e.jsx("div",{className:"h-[calc(100vh_-_100px)] flex justify-center items-center",children:e.jsxs("div",{className:"w-max mx-auto my-4 flex flex-col items-center justify-center gap-3",children:[e.jsx("p",{className:"text-sm md:text-base mt-2 text-gray-500",children:"Gagal mengambil data tour"}),e.jsx("button",{className:g("transition px-5 md:px-7 py-[.30rem] md:py-[.35rem] text-base border md:border-2 border-[#1F3DBD] bg-white rounded-md text-[#1F3DBD]","text-sm md:text-base"),type:"button",onClick:()=>i(),children:"Muat ulang"})]})}):null]})})}export{te as default};
