"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{8474:function(e,t,s){var l=s(5893);let r=e=>{let{size:t=20}=e;return(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)("div",{className:"animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-game-gray-superlight"})})};t.Z=r},5874:function(e,t,s){var l=s(5893),r=s(7465),a=s(7294),n=s(2841),i=s.n(n);let o=e=>{var t;let{game:s,lane:n,color:o,name:c,setBetWindowOpen:d}=e,[g,x,m]=i()([]),[u,h,p]=i()(0),[f,y,j]=i()(0),[b,v,N]=(0,a.useContext)(r._),w="hamster-yellow.svg";"red"===o&&(w="hamster-red.svg"),"blue"===o&&(w="hamster-blue.svg"),"green"===o&&(w="hamster-green.svg");let k=(e,t)=>"House"!==e?e.substring(0,t)+"..."+e.substring(e.length-t,e.length):e;return(0,a.useEffect)(()=>{let e=N.current.game;console.log("tmpGame",e,N.current.user);let t=e.bets["lane"+n].sort((e,t)=>e.wallet_address===b.user.wallet_address?-1:t.wallet_address===b.user.wallet_address?1:t.amount-e.amount);console.log("sortedBets",t),x(t)},[null==N?void 0:null===(t=N.current)||void 0===t?void 0:t.game.bets]),(0,l.jsxs)("div",{className:"flex items-center justify-center flex-col gap-2 mt-2",children:[(0,l.jsxs)("div",{className:"flex flex-row lg:gap-0 gap-2 lg:flex-col",children:[(0,l.jsx)("span",{className:"font-extrabold text-xs lg:text-2xl",children:c}),(0,l.jsx)("img",{src:"images/"+w,className:"h-4 lg:h-10"})]}),(0,l.jsx)("div",{onClick:()=>{d({name:c,color:o,lane:n})},className:"rounded-md bg-game-gray-dark font-extrabold text-white   hover:opacity-75 cursor-pointer px-4 lg:px-10 border  text-sm border-game-gray-superlight",children:"PLACE BET"}),(0,l.jsx)("div",{className:"w-full items-center flex flex-col h-auto px-4",children:(0,l.jsx)("div",{className:"bg-game-gray-dark h-[100px] gap-1 flex flex-col overflow-y-auto w-full p-2 rounded-md border border-game-gray-superlight",children:0===g.length?(0,l.jsx)("div",{className:"text-[10px] flex items-center justify-center text-white",children:"No bets placed yet"}):g.map((e,t)=>{let s=!1;return e.wallet_address===b.user.wallet_address&&(s=!0),(0,l.jsxs)("div",{className:"w-full ".concat(s&&"bg-game-gray-superlight"," border-game-gray-superlight rounded-full h-6 grid grid-cols-[1fr_1px_1fr_1px_1fr]"),children:[(0,l.jsx)("span",{className:"text-[8px] lg:text-[12px] items-center justify-center lg:hidden flex text-white",children:k(e.wallet_address,3)}),(0,l.jsx)("span",{className:"text-[8px] lg:text-[12px] items-center justify-center lg:flex hidden text-white",children:k(e.wallet_address,4)}),(0,l.jsx)("div",{className:"h-full w-[1px] bg-game-gray-superlight "}),(0,l.jsxs)("span",{className:"text-[8px] lg:text-[12px] flex text-white items-center justify-center gap-1 text-center",children:[Number(e.amount).toFixed(2)," ",(0,l.jsx)("span",{className:"lg:inline-block hidden",children:"BUSD"})," ",(0,l.jsx)("img",{className:"h-[12px]",src:"images/busd-logo.svg"})]}),(0,l.jsx)("div",{className:"h-full w-[1px] bg-game-gray-superlight"}),(0,l.jsx)("span",{className:"text-[8px] lg:text-[12px] flex  items-center justify-center gap-1 text-game-green",children:Number(e.potential_win_amount).toFixed(2)})]},t)})})})]})};t.Z=o},271:function(e,t,s){s.d(t,{Z:function(){return m}});var l=s(5893),r=s(7465),a=s(7294);s(120);let{DateTime:n}=s(8565),{useState:i,useEffect:o,useContext:c}=s(7294),d=e=>{let t,s,a,{type:d,msg:g,from:x,time:m}=e,[u,h]=i("Loading..."),[p,f]=i(!1),[y,j]=c(r._);o(()=>{h(n.fromISO(m).toLocaleString(n.DATETIME_MED))},[]);let b={ADMIN:"text-game-orange",SERVER:"text-game-green",USER:"text-game-gray-almostwhite"};return(0,l.jsxs)("div",{className:"border border-game-gray-superlight rounded-md p-2 flex flex-col relative",children:[(0,l.jsxs)("div",{className:"text-xs text-game-gray-almostwhite flex justify-between",children:[(0,l.jsx)("div",{onClick:()=>f(!0),className:"hover:opacity-75 cursor-pointer hover:underline",children:(t=x.substring(0,6),s=x.substring(x.length-4,x.length),a={address:x,type:"USER"},"ADMIN"===x||"Admin"===d||"Mod"===d?(a.type="ADMIN",a.color=b.ADMIN,"Admin"===d||"Mod"===d?a.address=t+"..."+s:a.address="ADMIN"):"SERVER"===x?(a.type="SERVER",a.color=b.SERVER,a.address="SERVER"):(a.type="USER",a.color=b.USER,a.address=t+"..."+s),(0,l.jsx)("span",{className:"text-xs ".concat(a.color),children:a.address}))}),(0,l.jsx)("div",{children:u})]}),(0,l.jsx)("div",{className:"text-sm break-words",children:g}),!0===p&&(0,l.jsxs)("div",{className:"absolute grid grid-cols-2 grid-rows-3 select-none bg-game-gray-dark border border-game-gray-superlight gap-1 top-4 z-50 p-2 h-auto w-full left-0",children:[("Admin"===y.user.type||"Mod"===y.user.type)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"bg-game-gray-superlight h-full w-full flex items-center justify-center text-[13px]  hover:opacity-75 cursor-pointer",children:"\uD83D\uDD34 BAN"}),(0,l.jsx)("div",{className:"bg-game-gray-superlight h-full w-full flex items-center justify-center text-[13px]  hover:opacity-75 cursor-pointer",children:"\uD83D\uDD07 MUTE"}),(0,l.jsx)("div",{className:"bg-game-gray-superlight h-full w-full flex items-center justify-center text-[13px]  hover:opacity-75 cursor-pointer",children:"\uD83D\uDC7B BAN"})]}),(0,l.jsx)("div",{className:"bg-game-gray-superlight h-full w-full flex items-center justify-center text-[13px]  hover:opacity-75 cursor-pointer",children:"\uD83D\uDCB5 TIP"}),(0,l.jsx)("div",{onClick:()=>f(!1),className:"w-full flex items-center justify-center col-start-1 col-end-3 bg-game-lane-red hover:opacity-75 cursor-pointer",children:"CLOSE"})]})]})};var g=s(5667);let x=e=>{var t;let{chatHidden:s}=e,[n,i]=(0,a.useContext)(r._),[o,c]=(0,a.useState)(!1),[x,m]=(0,a.useState)(""),u=(0,a.useRef)(),{stayScrolled:h}=(0,g.Z)(u);(0,a.useLayoutEffect)(()=>{h()},[null==n?void 0:null===(t=n.chatMessages)||void 0===t?void 0:t.length]),(0,a.useEffect)(()=>{console.log("Socket: ",n.socket),null!==n.socket&&n.socket},[n.socket]);let p=e=>{n.socket.emit("chat",{token:localStorage.getItem("token"),message:e}),m("")},f=e=>{"Enter"===e.key&&""!==x&&p(x)};return(0,l.jsxs)("div",{className:"h-full overflow-y-auto w-full bg-game-gray-dark border-l border-game-gray-superlight relative ".concat(!0===s?"hidden":"visible"),children:[(0,l.jsx)("div",{ref:u,className:"absolute top-0  h-[calc(100%-100px)] overflow-y-auto scroll-smooth hover:scroll-auto w-full bg-game-gray-dark p-2 flex flex-col gap-1",children:n.chatMessages.map((e,t)=>(0,l.jsx)(d,{index:t,type:e.type,from:e.address,time:e.time,msg:e.message},t))}),(0,l.jsxs)("div",{className:"absolute bottom-0 w-full h-[100px] border-t  border-game-gray-light flex flex-col items-end justify-end px-2 pt-2 pb-2",children:[(0,l.jsx)("input",{onKeyDown:f,onChange:e=>{m(e.target.value)},value:x,placeholder:"Your message here",className:"bg-game-gray-light mb-2 w-full outline-none rounded-sm resize-none text-sm p-2 text-game-gray-almostwhite",type:"text"}),(0,l.jsxs)("div",{className:"flex justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,l.jsx)("span",{className:"bg-game-green animate-pulse w-2 h-2 rounded-full"}),null==n?void 0:n.onlineUsers," online"]}),(0,l.jsx)("div",{onClick:e=>{""!==x&&p(x)},className:"px-2 hover:cursor-pointer hover:opacity-75 text-game-gray-dark font-extrabold rounded-sm bg-game-green mb-2",children:"SEND"})]})]})]})};var m=x},3592:function(e,t,s){var l=s(5893),r=s(7465),a=s(9417),n=s(7814),i=s(1163),o=s(7294),c=s(8474),d=s(2920);s(1399);let g=()=>{let e=(0,i.useRouter)(),[t,s]=(0,o.useContext)(r._),[g,x]=(0,o.useState)(null);return(0,o.useEffect)(()=>{void 0!==t.socket&&x(t.socket)},[t.socket]),(0,o.useEffect)(()=>{null!==g&&(console.log("socket is not null"),g.on("betPlaced",e=>{console.log(e),(0,d.Am)("Bet placed",{type:d.Am.TYPE.INFO,data:{name:"test"}})}),g.on("betWon",e=>{console.log(e),(0,d.Am)("Bet Won",{type:d.Am.TYPE.SUCCESS,data:{name:"test"}})}),g.on("betLost",e=>{console.log(e),(0,d.Am)("Bet lost",{type:d.Am.TYPE.ERROR,data:{name:"test"}})}),g.on("notification",e=>{console.log(e),(0,d.Am)(e.message,{type:d.Am.TYPE.INFO,data:{name:"test"}})}))},[g]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"bg-game-gray-light border-b grid border-game-gray-superlight w-full z-50 grid-cols-[1fr_1fr_1fr] lg:grid-cols-[100px_1fr_auto] items-center px-4 lg:px-10 h-[100px]  select-none",children:[(0,l.jsx)("img",{src:"images/logo.svg",onClick:()=>{e.push("/")},className:"h-[70px] hover:animate-pulse hover:animate-spin cursor-pointer"}),(0,l.jsx)("div",{className:"flex gap-4 ml-10 justify-self-end mr-10",children:!0===t.user.loggedIn&&(0,l.jsxs)("div",{className:"w-[160px] flex items-center justify-center flex-col",children:[(0,l.jsx)("span",{className:"lg:block hidden font-normal text-white text-xs",children:"BALANCE"}),(0,l.jsxs)("div",{className:"bg-game-gray-dark text-center text-white justify-center w-full rounded-md gap-1 h-8 text-xs lg:text-sm flex items-center",children:[(0,l.jsx)("img",{src:"images/busd-logo.svg",className:"h-4 text- ml-2 animate-pulse"}),Number(t.user.balance_busd).toFixed(2)," BUSD"]}),(0,l.jsxs)("div",{className:"flex w-full mt-2 gap-1",children:[(0,l.jsx)("div",{onClick:()=>{e.push("/deposit")},className:"text-lg hover:opacity-75 cursor-pointer flex items-center justify-center w-1/2 bg-game-green h-5 rounded-full font-extrabold text-game-gray-dark",children:"+"}),(0,l.jsx)("div",{onClick:()=>{e.push("/withdraw")},className:"text-lg hover:opacity-75 cursor-pointer flex items-center justify-center w-1/2 bg-game-orange h-5 rounded-full font-extrabold text-game-gray-dark",children:"-"})]})]})}),(0,l.jsx)("div",{className:"flex-grow justify-end items-end flex",children:["/","/deposit","/withdraw","/bets","/token","/referrals"].includes(e.pathname)&&!0===t.user.loggedIn?(0,l.jsxs)("div",{onClick:()=>{e.push("/play")},className:"bg-game-gray-dark gap-2 rounded-full w-16 lg:w-auto h-16 flex items-center justify-center  text-white text-center italic font-extrabold px-4  lg:px-10  text-md lg:text-3xl hover:opacity-75 transition-all cursor-pointer",children:[(0,l.jsx)("span",{className:"lg:inline-block text-white hidden",children:"PLAY"}),(0,l.jsx)(n.G,{icon:a.RJo})]}):(0,l.jsxs)("div",{onClick:()=>{e.push("/deposit")},className:"bg-game-gray-dark gap-2 rounded-full  w-16 lg:w-auto h-16 flex items-center justify-center text-center italic font-extrabold px-4  text-white lg:px-10 text-md lg:text-3xl hover:opacity-75 transition-all cursor-pointer",children:[!0===t.user.loggedIn?(0,l.jsx)("span",{className:"lg:inline-block  hidden",children:"MENU"}):(0,l.jsx)("span",{className:"lg:inline-block hidden",children:"SIGN IN"}),!0===t.user.loggedIn?(0,l.jsx)(n.G,{icon:a.syN}):(0,l.jsx)(n.G,{icon:a.ILF})]})})]}),!0===t.isSigningMessage&&(0,l.jsxs)("div",{className:"absolute flex-col top-0 w-full backdrop-blur-3xl z-[999999] h-full flex items-center justify-center ",children:[(0,l.jsx)("span",{className:"text-6xl font-extrabold italic animate-pulse mb-4 text-white",children:"SIGNING WALLET"}),(0,l.jsx)(c.Z,{size:20})]}),(0,l.jsx)(d.Ix,{})]})};t.Z=g},4477:function(e,t,s){s(5893)},9471:function(e,t,s){var l=s(5893),r=s(7294);let a=e=>{let{setGameReplayWindow:t,name:s,color:a,race:n}=e,[i,o]=(0,r.useState)(!1);return(0,l.jsxs)("div",{onClick:()=>{t(n)},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"bg-game-gray-dark h-7 flex items-center justify-between w-auto px-1 lg:px-2 shadow-xl hover:opacity-75 gap-1 cursor-pointer  transition-all rounded-xl text-center ",children:[(0,l.jsx)("img",{src:"images/hamster-"+a+".svg",className:"h-2 lg:h-4 ml-1 lg:ml-2 ".concat(i?"animate-pulse":"")}),(0,l.jsx)("span",{className:"transition-all text-[10px] lg:text-xs truncate flex items-center justify-center  mr-1 lg:mr-2",children:String(s).toUpperCase()})]})};t.Z=a}}]);