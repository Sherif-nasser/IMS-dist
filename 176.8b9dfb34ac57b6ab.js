"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[176],{2135:(M,C,r)=>{r.d(C,{u:()=>g});var a=r(5879);let g=(()=>{class t{transform(d,c){return d?c?(c=c.toLowerCase(),d.filter(u=>{const h=u.full_name?u.full_name.toLowerCase():"",q=u.last_name?u.last_name.toLowerCase():"",m=u.title?u.title.toLowerCase():"",p=u.name?u.name.toLowerCase():"",_=u.user&&u.user.name?u.user.name.toLowerCase():"",b=u.head?u.head.toLowerCase():"",P=u.description?u.description.toLowerCase():"";return h.includes(c)||q.includes(c)||p.includes(c)||_.includes(c)||b.includes(c)||P.includes(c)||m.includes(c)})):d:[]}static#t=this.\u0275fac=function(c){return new(c||t)};static#e=this.\u0275pipe=a.Yjl({name:"filter",type:t,pure:!0,standalone:!0})}return t})()},1176:(M,C,r)=>{r.r(C),r.d(C,{default:()=>z});var a=r(6814),g=r(846),t=r(5879);let s=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-main-faqs"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(n,o){1&n&&t._UZ(0,"router-outlet")},dependencies:[a.ez,g.lC]})}return i})();var d=r(6223),c=r(8733),u=r(1818),h=r(7728),q=r(2135),m=r(8034),p=r(7700),_=r(4286),b=r(9862),P=r(553),A=r(6996);let O=(()=>{class i{constructor(e,n){this.http=e,this.navService=n,this.faqsListUrl=`${P.N.url}faq`}initializeNavItems(){this.navService.setNavItems([{name:"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629",routerLink:"/dashboard/faqs"},{name:"\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644",routerLink:"/dashboard/faqs/add-faq"}])}GetFaqsList(e){let n=new b.LE;return e&&Object.keys(e).forEach(o=>{n=n.append(o,e[o])}),this.http.get(this.faqsListUrl,{params:n})}GetFaqById(e){return this.http.get(`${this.faqsListUrl}/${e}`)}AddFaq(e,n){let o=new b.LE;n&&Object.keys(n).forEach(l=>{o=o.append(l,n[l])});const f=new FormData;return Object.keys(e).forEach(l=>{f.append(l,e[l])}),this.http.post(this.faqsListUrl,f,{params:o})}UpdateFaq(e,n,o){const f=`${this.faqsListUrl}/${e}`;let l=new b.LE;o&&Object.keys(o).forEach(F=>{l=l.append(F,o[F])});const x=new FormData;return Object.keys(n).forEach(F=>{x.append(F,n[F])}),this.http.post(f,x,{params:l})}DeleteFaq(e){return this.http.delete(`${this.faqsListUrl}/${e}`)}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(b.eN),t.LFG(A.f))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Z(i,v){1&i&&(t.TgZ(0,"div",24)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const L=function(i,v){return[i,v]};function w(i,v){if(1&i){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"div",15),t.NdJ("click",function(){const f=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.viewFaq(f))}),t.TgZ(5,"a",16)(6,"h5",17),t._uU(7),t.qZA()()(),t.TgZ(8,"div",18)(9,"a",19),t.ALo(10,"localize"),t._uU(11,"\u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(12,"button",20),t.NdJ("click",function(){const f=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteFaq(f.id,f.head))}),t._uU(13," \u062d\u0630\u0641 "),t.qZA()()(),t.TgZ(14,"div",1)(15,"div",21),t._UZ(16,"app-truncate-text",22),t.qZA()()()(),t.YNc(17,Z,3,0,"div",23),t.ALo(18,"filter"),t.qZA()}if(2&i){const e=v.$implicit,n=t.oxw();t.xp6(7),t.hij(" ",e.head," "),t.xp6(2),t.Q6J("routerLink",t.WLB(10,L,t.lcZ(10,5,"/dashboard/faqs/add-faq"),e.id)),t.xp6(7),t.Q6J("text",e.answer)("limit",150),t.xp6(1),t.Q6J("ngIf",0===t.xi3(18,7,n.faqsList,n.searchQuery).length&&!n.loading)}}let E=(()=>{class i{constructor(e,n,o,f,l){this.router=e,this.localize=n,this.dialog=o,this._MessagesService=f,this.faqService=l,this.loading=!1,this.faqsList=[],this.searchQuery=""}ngOnInit(){this.getFaqsList(),this.prepareNavItems()}prepareNavItems(){this.faqService.initializeNavItems()}getFaqsList(e=1){this.loading=!0,this.faqService.GetFaqsList({page:e}).subscribe({next:n=>{this.currentPage=n.data.current_page,this.totalPages=n.data.last_page,this.faqsList=n.data.data,this.loading=!1}})}deleteFaq(e,n){this.dialog.open(m.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(f=>{f&&this.faqService.DeleteFaq(e.toString()).subscribe({next:l=>{this.getFaqsList()},error:l=>{console.error("There was an error deleting the faq!",l)}})})}viewFaq(e){if(e){const n=this.localize.translateRoute("/dashboard/faqs/view");this.router.navigate([n,e.id])}else console.error("No employee to view")}onPageChange(e){this.getFaqsList(e)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g.F0),t.Y36(c.An),t.Y36(p.uw),t.Y36(_.K),t.Y36(O))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-faqs-list"]],standalone:!0,features:[t.jDz],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"mb-2","filterForm"],[1,"col-lg-7","mb-lg-2","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6 mb-2",4,"ngFor","ngForOf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2",2,"cursor","pointer",3,"click"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","mx-1","edit",3,"routerLink"],[1,"btn","delete","px-4",3,"click"],[1,"card-text"],[3,"text","limit"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(l){return o.searchQuery=l}),t.qZA()()()()(),t.TgZ(10,"div",1),t.YNc(11,w,19,13,"div",9),t.ALo(12,"filter"),t.qZA(),t.TgZ(13,"pagination",10),t.NdJ("pageChange",function(l){return o.onPageChange(l)}),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("ngModel",o.searchQuery),t.xp6(2),t.Q6J("ngForOf",t.xi3(12,4,o.faqsList,o.searchQuery)),t.xp6(2),t.Q6J("currentPage",o.currentPage)("totalPages",o.totalPages))},dependencies:[a.ez,a.sg,a.O5,d.u5,d._Y,d.Fj,d.JJ,d.JL,d.On,d.F,g.rH,u.Q,q.u,c.fQ,c.lO,h.H],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a}"]})}return i})();const I=function(i,v){return[i,v]};function U(i,v){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"a",10)(5,"h5",11),t._uU(6),t.qZA()()(),t.TgZ(7,"div",12)(8,"a",13),t.ALo(9,"localize"),t._uU(10,"\u062a\u0639\u062f\u064a\u0644 "),t._UZ(11,"i",14),t.qZA(),t.TgZ(12,"button",15),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteFaq(o.faq.id,o.faq.head))}),t._uU(13," \u062d\u0630\u0641 "),t._UZ(14,"i",16),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",17),t._UZ(17,"app-truncate-text",18),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(6),t.hij(" ",e.faq.head," "),t.xp6(2),t.Q6J("routerLink",t.WLB(6,I,t.lcZ(9,4,"/dashboard/faqs/add-faq"),e.faq.id)),t.xp6(9),t.Q6J("text",e.faq.answer)("limit",150)}}function k(i,v){1&i&&(t.TgZ(0,"div",19)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let y=(()=>{class i{constructor(e,n,o,f,l,x){this.router=e,this.localize=n,this.dialog=o,this._MessagesService=f,this.faqService=l,this.activatedRoute=x,this.loading=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const n=e.get("id");n&&(this.faqId=n,this.faqService.GetFaqById(n).subscribe(o=>{o&&o.data&&(console.log(o.data),this.faq=o.data)}))})}navigateTofaqsList(){const e=this.localize.translateRoute("/dashboard/faqs");this.router.navigate([e])}deleteFaq(e,n){this.dialog.open(m.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(f=>{f&&this.faqService.DeleteFaq(e.toString()).subscribe({next:l=>{this.navigateTofaqsList()},error:l=>{console.error("There was an error deleting the faq!",l)}})})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g.F0),t.Y36(c.An),t.Y36(p.uw),t.Y36(_.K),t.Y36(O),t.Y36(g.gz))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-faq"]],standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"col-12","mb-2"],["class","card mb-3 border-0",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","mx-1","edit",3,"routerLink"],[1,"fa-regular","fa-pen-to-square"],[1,"btn","delete","px-4",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"card-text"],[3,"text","limit"],[1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,U,18,9,"div",4),t.YNc(5,k,3,0,"div",5),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",o.faq),t.xp6(1),t.Q6J("ngIf",!o.faq))},dependencies:[a.ez,a.O5,h.H,g.rH,c.fQ,c.lO],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background:var(--danger);color:#fff}.card[_ngcontent-%COMP%]{box-shadow:0 5px 14px #0000000d;color:var(--main)}.attatchmentFiles[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{background-color:var(--dashboard2);color:#fff;border-radius:10px}.attatchmentFiles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:var(--dashboard2)}"]})}return i})();const D=function(i){return[i]};function N(i,v){1&i&&(t.TgZ(0,"div",14)(1,"div",15)(2,"a",16),t.ALo(3,"localize"),t._uU(4,"\u0631\u062c\u0648\u0639"),t.qZA()()()),2&i&&(t.xp6(2),t.Q6J("routerLink",t.VKq(3,D,t.lcZ(3,1,"/dashboard/faqs"))))}function S(i,v){if(1&i&&(t.ynx(0),t.TgZ(1,"div",7)(2,"button",17),t._uU(3," \u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 "),t.qZA()(),t.BQk()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.faqForm.valid)}}function J(i,v){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"button",18),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateFaq())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 "),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.faqForm.valid)}}let T=(()=>{class i{constructor(e,n,o,f,l,x){this.faqService=e,this.localize=n,this.router=o,this.activatedRoute=f,this._MessagesService=l,this.fb=x,this.isEditMode=!1,this.faqId="",this.previewUrl=null,this.faqForm=this.fb.group({head:["",d.kI.required],answer:["",d.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const n=e.get("id");n&&(this.faqId=n,this.isEditMode=!0,this.faqService.GetFaqById(n).subscribe(o=>{o&&o.data&&this.setFormValues(o.data)}))})}setFormValues(e){this.faqForm.controls.head.setValue(e.head),this.faqForm.controls.answer.setValue(e.answer)}get f(){return this.faqForm.controls}navigateTofaqsList(){const e=this.localize.translateRoute("/dashboard/faqs");this.router.navigate([e])}updateFaq(){this.faqForm.valid&&this.faqService.UpdateFaq(this.faqId,{head:this.faqForm.controls.head.value,answer:this.faqForm.controls.answer.value,_method:"PATCH"}).subscribe({next:n=>{this._MessagesService.showSuccessMessage("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b",3e3),this.navigateTofaqsList()},error:n=>{console.error("Failed to edit faq:",n)}})}onSubmit(){this.faqForm.valid&&this.faqService.AddFaq({head:this.faqForm.controls.head.value,answer:this.faqForm.controls.answer.value}).subscribe({next:n=>{console.log("Category added successfully:",n),this.navigateTofaqsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:n=>{console.error("Failed to add faq:",n)}})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(O),t.Y36(c.An),t.Y36(g.F0),t.Y36(g.gz),t.Y36(_.K),t.Y36(d.qu))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-faq"]],standalone:!0,features:[t.jDz],decls:19,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["id","pills-tabContent",1,"tab-content","p-3"],["id","addFaq","role","tabpanel","aria-labelledby","addFaq-tab","tabindex","0",1,""],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","col-12","mb-3"],["for","head",1,"form-label"],["type","text","name","head","id","addCategoryName","formControlName","head",1,"form-control"],["for","answer",1,"form-label"],["name","answer","id","answer","cols","30","rows","10","formControlName","answer",1,"form-control"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"card-body"],[1,"col-12","mb-3","text-end"],[1,"btn","px-4","back",3,"routerLink"],["type","submit",1,"btn","px-5",3,"disabled"],["type","button",1,"btn","px-5",3,"disabled","click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,N,5,5,"div",5),t.TgZ(6,"form",6),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(7,"div",1)(8,"div",7)(9,"label",8),t._uU(10,"\u0627\u0644\u0633\u0624\u0627\u0644"),t.qZA(),t._UZ(11,"input",9),t.qZA(),t.TgZ(12,"div",7)(13,"label",10),t._uU(14,"\u0627\u0644\u0625\u062c\u0627\u0628\u0629"),t.qZA(),t._UZ(15,"textarea",11),t.qZA()(),t.YNc(16,S,4,1,"ng-container",12),t.YNc(17,J,3,1,"ng-template",null,13,t.W1O),t.qZA()()()()()()),2&n){const f=t.MAs(18);t.xp6(5),t.Q6J("ngIf",o.isEditMode),t.xp6(1),t.Q6J("formGroup",o.faqForm),t.xp6(10),t.Q6J("ngIf",!o.isEditMode)("ngIfElse",f)}},dependencies:[a.ez,a.O5,d.u5,d._Y,d.Fj,d.JJ,d.JL,d.UX,d.sg,d.u,g.Bz,g.rH,c.fQ,c.lO],styles:[".tab-content[_ngcontent-%COMP%]{border-radius:4px}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--dashboard1)}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--main);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}form[_ngcontent-%COMP%]   .input-group-vertical[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%]{color:var(--dashboard1);background-color:transparent;border:none}form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:not(.d-inline-block){border:1px solid var(--main);color:var(--dashboard1);width:100%;border-radius:10px}"]})}return i})();const z=[{path:"",component:s,children:[{path:"",component:E},{path:"view/:id",component:y},{path:"add-faq",component:T},{path:"add-faq/:id",component:T}]}]},8034:(M,C,r)=>{r.d(C,{$:()=>c});var a=r(6814),g=r(7700),t=r(2296),s=r(5879),d=r(4286);let c=(()=>{class u{constructor(q,m,p){this.dialogRef=q,this.data=m,this._MessagesService=p}onConfirmClick(){this.dialogRef.close(!0),this._MessagesService.showSuccessMessage("Done",3e3)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(m){return new(m||u)(s.Y36(g.so),s.Y36(g.WI),s.Y36(d.K))};static#e=this.\u0275cmp=s.Xpm({type:u,selectors:[["app-confirm-dialog"]],standalone:!0,features:[s.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(m,p){1&m&&(s.TgZ(0,"div",0)(1,"h2",1),s._uU(2),s.qZA(),s.TgZ(3,"mat-dialog-content"),s._uU(4),s.qZA(),s.TgZ(5,"mat-dialog-actions",2)(6,"button",3),s.NdJ("click",function(){return p.onCancelClick()}),s._uU(7,"\u0627\u0644\u063a\u0627\u0621"),s.qZA(),s.TgZ(8,"button",4),s.NdJ("click",function(){return p.onConfirmClick()}),s._uU(9," \u062a\u0627\u0643\u064a\u062f "),s.qZA()()()),2&m&&(s.xp6(2),s.Oqu(p.data.title),s.xp6(2),s.Oqu(p.data.message))},dependencies:[a.ez,g.Is,g.uh,g.xY,g.H8,t.ot,t.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return u})()},6996:(M,C,r)=>{r.d(C,{f:()=>t});var a=r(5619),g=r(5879);let t=(()=>{class s{constructor(){this.navItemsSubject=new a.X([]),this.navItems$=this.navItemsSubject.asObservable()}setNavItems(c){this.navItemsSubject.next(c)}static#t=this.\u0275fac=function(u){return new(u||s)};static#e=this.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},1818:(M,C,r)=>{r.d(C,{Q:()=>u});var a=r(5879),g=r(6223),t=r(6814);function s(h,q){if(1&h){const m=a.EpF();a.TgZ(0,"li",2)(1,"a",7),a.NdJ("click",function(){const b=a.CHM(m).index,P=a.oxw();return a.KtG(P.navigateTo(b+1))}),a._uU(2),a.qZA()()}if(2&h){const m=q.index,p=a.oxw();a.ekj("active",p.currentPage===m+1),a.xp6(2),a.Oqu(m+1)}}const d=function(){return[]},c={provide:g.JU,useExisting:(0,a.Gpc)(()=>u),multi:!0};let u=(()=>{class h{constructor(){this.pageChange=new a.vpe}navigateTo(m){this.pageChange.emit(m),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}static#t=this.\u0275fac=function(p){return new(p||h)};static#e=this.\u0275cmp=a.Xpm({type:h,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[a._Bn([c]),a.jDz],decls:11,vars:6,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"]],template:function(p,_){1&p&&(a.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),a.NdJ("click",function(){return _.navigateTo(_.currentPage-1)}),a.TgZ(4,"span",4),a._uU(5,"\xab"),a.qZA()()(),a.YNc(6,s,3,3,"li",5),a.TgZ(7,"li",2)(8,"a",6),a.NdJ("click",function(){return _.navigateTo(_.currentPage+1)}),a.TgZ(9,"span",4),a._uU(10,"\xbb"),a.qZA()()()()()),2&p&&(a.xp6(2),a.ekj("disabled",1===_.currentPage),a.xp6(4),a.Q6J("ngForOf",a.DdM(5,d).constructor(_.totalPages)),a.xp6(1),a.ekj("disabled",_.currentPage===_.totalPages))},dependencies:[t.ez,t.sg],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return h})()}}]);