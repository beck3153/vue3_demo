(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7893"],{"76db":function(t,e,c){"use strict";c.r(e);var s=c("7a23");const a={class:"container"},l={class:"row mt-4"},o={class:"col-md-7"},i={class:"table align-middle"},d=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th",null,"圖片"),Object(s["h"])("th",null,"商品名稱"),Object(s["h"])("th",null,"價格"),Object(s["h"])("th")])],-1),n={style:{width:"200px"}},r={href:"#",class:"text-dark"},b={key:0,class:"h5"},u={key:1,class:"h6"},h={key:2,class:"h5"},O={class:"btn-group btn-group-sm"},j=["onClick"],p=["disabled","onClick"],m={key:0,class:"spinner-grow text-danger spinner-grow-sm",role:"status"},g=Object(s["h"])("span",{class:"visually-hidden"},"Loading...",-1),f=[g],k=Object(s["j"])(" 加到購物車 "),v={class:"col-md-5"},y={class:"sticky-top"},x={class:"table align-middle"},C=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th"),Object(s["h"])("th",null,"品名"),Object(s["h"])("th",{style:{width:"110px"}},"數量"),Object(s["h"])("th",null,"單價")])],-1),V=["disabled","onClick"],I=Object(s["h"])("i",{class:"bi bi-x"},null,-1),$=[I],_={key:0,class:"text-success"},w={class:"input-group input-group-sm"},z=["disabled","onChange","onUpdate:modelValue"],L={class:"input-group-text"},U={class:"text-end"},q={key:0,class:"text-success"},K=Object(s["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),F={class:"text-end"},H={key:0},P=Object(s["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),S={class:"text-end text-success"},E={class:"input-group mb-3 input-group-sm"},M={class:"input-group-append"},J={class:"my-5 row justify-content-center"},T={class:"mb-3"},A=Object(s["h"])("label",{for:"email",class:"form-label"},"Email",-1),B={class:"mb-3"},D=Object(s["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),G={class:"mb-3"},N=Object(s["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),Q={class:"mb-3"},R=Object(s["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),W={class:"mb-3"},X=Object(s["h"])("label",{for:"message",class:"form-label"},"留言",-1),Y=Object(s["h"])("div",{class:"text-end"},[Object(s["h"])("button",{class:"btn btn-danger"},"送出訂單")],-1);function Z(t,e,c,g,I,Z){const tt=Object(s["H"])("Loading"),et=Object(s["H"])("Field"),ct=Object(s["H"])("ErrorMessage"),st=Object(s["H"])("Form");return Object(s["z"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(tt,{active:t.isLoading},null,8,["active"]),Object(s["h"])("div",a,[Object(s["h"])("div",l,[Object(s["h"])("div",o,[Object(s["h"])("table",i,[d,Object(s["h"])("tbody",null,[(Object(s["z"])(!0),Object(s["g"])(s["a"],null,Object(s["F"])(I.products,t=>(Object(s["z"])(),Object(s["g"])("tr",{key:t.id},[Object(s["h"])("td",n,[Object(s["h"])("div",{style:Object(s["t"])([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),Object(s["h"])("td",null,[Object(s["h"])("a",r,Object(s["K"])(t.title),1)]),Object(s["h"])("td",null,[t.price?Object(s["f"])("",!0):(Object(s["z"])(),Object(s["g"])("div",b,Object(s["K"])(t.origin_price)+" 元",1)),t.price?(Object(s["z"])(),Object(s["g"])("del",u,"原價 "+Object(s["K"])(t.origin_price)+" 元",1)):Object(s["f"])("",!0),t.price?(Object(s["z"])(),Object(s["g"])("div",h,"現在只要 "+Object(s["K"])(t.price)+" 元",1)):Object(s["f"])("",!0)]),Object(s["h"])("td",null,[Object(s["h"])("div",O,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:e=>Z.getProduct(t.id)}," 查看更多 ",8,j),Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger",disabled:this.status.loadingItem===t.id,onClick:e=>Z.addCart(t.id)},[this.status.loadingItem===t.id?(Object(s["z"])(),Object(s["g"])("div",m,f)):Object(s["f"])("",!0),k],8,p)])])]))),128))])])]),Object(s["h"])("div",v,[Object(s["h"])("div",y,[Object(s["h"])("table",x,[C,Object(s["h"])("tbody",null,[I.cart.carts?(Object(s["z"])(!0),Object(s["g"])(s["a"],{key:0},Object(s["F"])(I.cart.carts,e=>(Object(s["z"])(),Object(s["g"])("tr",{key:e.id},[Object(s["h"])("td",null,[Object(s["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:I.status.loadingItem===e.id,onClick:t=>Z.removeCartItem(e.id)},$,8,V)]),Object(s["h"])("td",null,[Object(s["j"])(Object(s["K"])(e.product.title)+" ",1),e.coupon?(Object(s["z"])(),Object(s["g"])("div",_," 已套用優惠券 ")):Object(s["f"])("",!0)]),Object(s["h"])("td",null,[Object(s["h"])("div",w,[Object(s["U"])(Object(s["h"])("input",{type:"number",class:"form-control",disabled:I.status.loadingItem===e.id,onChange:t=>Z.updateCart(e),"onUpdate:modelValue":t=>e.qty=t},null,40,z),[[s["O"],e.qty,void 0,{number:!0}]]),Object(s["h"])("div",L,"/ "+Object(s["K"])(e.product.unit),1)])]),Object(s["h"])("td",U,[I.cart.final_total!==I.cart.total?(Object(s["z"])(),Object(s["g"])("small",q,"折扣價：")):Object(s["f"])("",!0),Object(s["j"])(" "+Object(s["K"])(t.$filters.currency(e.final_total)),1)])]))),128)):Object(s["f"])("",!0)]),Object(s["h"])("tfoot",null,[Object(s["h"])("tr",null,[K,Object(s["h"])("td",F,Object(s["K"])(t.$filters.currency(I.cart.total)),1)]),I.cart.final_total!==I.cart.total?(Object(s["z"])(),Object(s["g"])("tr",H,[P,Object(s["h"])("td",S,Object(s["K"])(t.$filters.currency(I.cart.final_total)),1)])):Object(s["f"])("",!0)])]),Object(s["h"])("div",E,[Object(s["U"])(Object(s["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>I.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[s["O"],I.coupon_code]]),Object(s["h"])("div",M,[Object(s["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=(...t)=>Z.addCouponCode&&Z.addCouponCode(...t))}," 套用優惠碼 ")])])])])]),Object(s["h"])("div",J,[Object(s["k"])(st,{class:"col-md-6",onSubmit:Z.createOrder},{default:Object(s["T"])(({errors:t})=>[Object(s["h"])("div",T,[A,Object(s["k"])(et,{id:"email",name:"email",type:"email",class:Object(s["s"])(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:I.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>I.form.user.email=t)},null,8,["class","modelValue"]),Object(s["k"])(ct,{name:"email",class:"invalid-feedback"})]),Object(s["h"])("div",B,[D,Object(s["k"])(et,{id:"name",name:"姓名",type:"text",class:Object(s["s"])(["form-control",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:I.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=t=>I.form.user.name=t)},null,8,["class","modelValue"]),Object(s["k"])(ct,{name:"姓名",class:"invalid-feedback"})]),Object(s["h"])("div",G,[N,Object(s["k"])(et,{id:"tel",name:"電話",type:"tel",class:Object(s["s"])(["form-control",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:I.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>I.form.user.tel=t)},null,8,["class","modelValue"]),Object(s["k"])(ct,{name:"電話",class:"invalid-feedback"})]),Object(s["h"])("div",Q,[R,Object(s["k"])(et,{id:"address",name:"地址",type:"text",class:Object(s["s"])(["form-control",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:I.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>I.form.user.address=t)},null,8,["class","modelValue"]),Object(s["k"])(ct,{name:"地址",class:"invalid-feedback"})]),Object(s["h"])("div",W,[X,Object(s["U"])(Object(s["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=t=>I.form.message=t)},null,512),[[s["O"],I.form.message]])]),Y]),_:1},8,["onSubmit"])])])],64)}var tt={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/beck-api/products/all";this.isLoading=!0,this.$http.get(t).then(t=>{this.products=t.data.products,console.log("products:",t),this.isLoading=!1})},getProduct(t){this.$router.push("/user/product/"+t)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/beck-api/cart";this.status.loadingItem=t;const c={product_id:t,qty:1};this.$http.post(e,{data:c}).then(t=>{this.status.loadingItem="",console.log(t),this.getCart()})},getCart(){const t="https://vue3-course-api.hexschool.io/api/beck-api/cart";this.isLoading=!0,this.$http.get(t).then(t=>{console.log(t),this.cart=t.data.data,this.isLoading=!1})},updateCart(t){const e="https://vue3-course-api.hexschool.io/api/beck-api/cart/"+t.id;this.isLoading=!0,this.status.loadingItem=t.id;const c={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:c}).then(t=>{console.log(t),this.isLoading=!1,this.status.loadingItem="",this.getCart()})},removeCartItem(t){this.status.loadingItem=t;const e="https://vue3-course-api.hexschool.io/api/beck-api/cart/"+t;this.isLoading=!0,this.$http.delete(e).then(t=>{this.$httpMessageState(t,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1})},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/beck-api/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then(t=>{this.$httpMessageState(t,"加入優惠券"),this.getCart(),this.isLoading=!1})},createOrder(){const t="https://vue3-course-api.hexschool.io/api/beck-api/order",e=this.form;this.$http.post(t,{data:e}).then(t=>{console.log(t),this.$router.push({path:"/user/checkout/"+t.data.orderId})})}},created(){this.getProducts(),this.getCart()}},et=c("6b0d"),ct=c.n(et);const st=ct()(tt,[["render",Z]]);e["default"]=st}}]);
//# sourceMappingURL=chunk-2d0d7893.296b77ff.js.map