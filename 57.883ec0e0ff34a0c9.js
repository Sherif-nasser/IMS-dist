"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[57],{4057:(tt,_,l)=>{l.r(_),l.d(_,{default:()=>H});var u=l(6814),s=l(6223),f=l(8525),h=l(4170),t=l(5879),g=l(8733),p=l(846),A=l(4286),v=l(9862),w=l(553),T=l(6996);let C=(()=>{class n{constructor(o,e){this.http=o,this.navService=e,this.contractsListUrl=`${w.N.url}contract`}initializeNavItems(){this.navService.setNavItems([{name:"\u0627\u0644\u0639\u0642\u0648\u062f",routerLink:"/dashboard/contracts"}])}getContractsList(o){let e=new v.LE;return o&&Object.keys(o).forEach(i=>{e=e.append(i,o[i])}),this.http.get(this.contractsListUrl,{params:e})}GetContractById(o){const e=`${this.contractsListUrl}/${o}`;let i=new v.LE;return this.http.get(e,{params:i})}AddContract(o,e){let i=new v.LE;e&&Object.keys(e).forEach(a=>{i=i.append(a,e[a])});const r=new FormData;return Object.keys(o).forEach(a=>{Array.isArray(o[a])?(console.log(o[a]),o[a].forEach((m,d)=>{r.append(`${a}[${d}]`,m)})):r.append(a,o[a])}),this.http.post(this.contractsListUrl,r,{params:i})}UpdateContract(o,e,i){const r=`${this.contractsListUrl}/${o}`;let a=new v.LE;i&&Object.keys(i).forEach(d=>{a=a.append(d,i[d])});const m=new FormData;return Object.keys(e).forEach(d=>{Array.isArray(e[d])?e[d].forEach((X,W)=>{m.append(`${d}[${W}]`,X)}):m.append(d,e[d])}),this.http.post(r,m,{params:a})}DeleteContract(o){return this.http.delete(`${this.contractsListUrl}/${o}`)}static#t=this.\u0275fac=function(e){return new(e||n)(t.LFG(v.eN),t.LFG(T.f))};static#o=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var b=l(5976),F=l(9409),Z=l(3680);function x(n,c){1&n&&(t.TgZ(0,"div",22),t._uU(1," \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function I(n,c){1&n&&(t.TgZ(0,"div",22),t._uU(1," \u0627\u0644\u0648\u0635\u0641 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function U(n,c){if(1&n&&(t.TgZ(0,"li")(1,"a",25),t._uU(2),t.qZA()()),2&n){const o=c.$implicit;t.xp6(1),t.Q6J("href",o,t.LSH),t.xp6(1),t.Oqu(o)}}function N(n,c){if(1&n&&(t.TgZ(0,"div",10)(1,"label",23),t._uU(2,"\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u062d\u0627\u0644\u064a\u0629:"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,U,3,2,"li",24),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Q6J("ngForOf",o.documentUrls)}}function L(n,c){1&n&&(t.TgZ(0,"div",22),t._uU(1," \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0645\u0637\u0644\u0648\u0628\u0629 "),t.qZA())}function k(n,c){if(1&n&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.word," ")}}function O(n,c){1&n&&(t.TgZ(0,"div",22),t._uU(1," \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0627\u062d\u064a\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 "),t.qZA())}function q(n,c){if(1&n&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.name," ")}}function J(n,c){1&n&&(t.TgZ(0,"div",22),t._uU(1," \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0645\u0637\u0644\u0648\u0628\u0629 "),t.qZA())}function Y(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",10)(2,"button",27),t._uU(3," \u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u062f "),t.qZA()(),t.BQk()),2&n){const o=t.oxw();t.xp6(2),t.Q6J("disabled",!o.contractForm.valid)}}function Q(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",10)(1,"button",28),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.updateContract())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 "),t.qZA()()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("disabled",!o.contractForm.valid)}}let y=(()=>{class n{constructor(o,e,i,r,a,m,d){this.localize=o,this.router=e,this.activatedRoute=i,this._MessagesService=r,this.contractService=a,this.keywords=m,this.divisions=d,this.isEditMode=!1,this.contractId="",this.keywordsOptions=[],this.divisionsOptions=[],this.documentUrls=[],this.contractForm=new s.cw({title:new s.NI("",s.kI.required),description:new s.NI("",s.kI.required),docs:new s.NI([],s.kI.required),keywords:new s.NI([],s.kI.required),divisions:new s.NI([],s.kI.required)})}ngOnInit(){this.contractService.initializeNavItems(),this.getKeyWords(),this.getDivisions(),this.activatedRoute.paramMap.subscribe(o=>{const e=o.get("id");e&&(this.contractForm.get("docs")?.setValidators([]),this.contractForm.get("docs")?.updateValueAndValidity(),this.contractId=e,this.isEditMode=!0,this.contractService.GetContractById(e).subscribe(i=>{i&&i.data&&this.setFormValues(i.data)}))})}navigateToContractsList(){const o=this.localize.translateRoute("/dashboard/contracts");this.router.navigate([o])}setFormValues(o){console.log(o),this.contractForm.controls.title.setValue(o.title),this.contractForm.controls.description.setValue(o.description),o.conversion_urls&&o.conversion_urls.length>0&&(this.documentUrls=o.conversion_urls.map(r=>r.original));const e=this.contractForm.controls.keywords.value||[];o.contract_keyword&&o.contract_keyword.length>0&&(o.contract_keyword.forEach(r=>{e.push(r.id)}),this.contractForm.controls.keywords.setValue(e));const i=this.contractForm.controls.divisions.value||[];o.contract_division&&o.contract_division.length>0&&(o.contract_division.forEach(r=>{i.push(r.id)}),this.contractForm.controls.divisions.setValue(i))}updateContract(){this.contractForm.valid&&this.contractService.UpdateContract(this.contractId,{title:this.contractForm.controls.title.value||"",description:this.contractForm.controls.description.value||"",docs:this.contractForm.controls.docs.value||[],keywords:this.contractForm.controls.keywords.value||[],divisions:this.contractForm.controls.divisions.value||[],_method:"PATCH"}).subscribe({next:e=>{this.navigateToContractsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d",3e3)},error:e=>{console.error("Failed to update contract:",e)}})}onSubmit(){this.contractForm.valid&&this.contractService.AddContract({title:this.contractForm.controls.title.value||"",description:this.contractForm.controls.description.value||"",docs:this.contractForm.controls.docs.value||[],keywords:this.contractForm.controls.keywords.value||[],divisions:this.contractForm.controls.divisions.value||[]}).subscribe({next:e=>{this.navigateToContractsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d",3e3)},error:e=>{console.error("Failed to add contract:",e)}})}getKeyWords(){this.keywords.getKeywordsList().subscribe({next:o=>{o.data.data&&(this.keywordsOptions=o.data.data)},error:o=>{console.error("There was an error!",o)}})}getDivisions(){this.divisions.getDivisionsList().subscribe({next:o=>{this.divisionsOptions=o.data.data},error:o=>{console.error("There was an error!",o)}})}onFileChange(o){const e=o.target.files;if(e.length>0){const i=this.contractForm.controls.docs.value||[];for(let r=0;r<e.length;r++)i.push(e[r]);this.contractForm.controls.docs.setValue(i)}}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(g.An),t.Y36(p.F0),t.Y36(p.gz),t.Y36(A.K),t.Y36(C),t.Y36(b.M),t.Y36(F.E))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-contract"]],standalone:!0,features:[t.jDz],decls:40,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["id","pills-tabContent",1,"tab-content","p-3"],["id","addContract","role","tabpanel","aria-labelledby","addContract-tab","tabindex","0",1,""],[3,"formGroup","ngSubmit"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","name","title","id","title","formControlName","title",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],["name","description","id","description","cols","30","rows","10","formControlName","description",1,"form-control"],["class","form-group col-12 mb-3",4,"ngIf"],["for","docs",1,"form-label"],["type","file","name","docs","id","docs","multiple","",1,"form-control",3,"change"],["appearance","fill",1,"w-100"],["formControlName","keywords","multiple",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","divisions","multiple",""],[4,"ngIf","ngIfElse"],["editButton",""],[1,"text-danger"],[1,"form-label"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"],[3,"value"],["type","submit",1,"btn","px-5",3,"disabled"],["type","button",1,"btn","px-5","edi-btn",3,"disabled","click"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(6,"div",1)(7,"div",6)(8,"label",7),t._uU(9,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646*"),t.qZA(),t._UZ(10,"input",8),t.YNc(11,x,2,0,"div",9),t.qZA(),t.TgZ(12,"div",10)(13,"label",11),t._uU(14,"\u0627\u0644\u0648\u0635\u0641*"),t.qZA(),t._UZ(15,"textarea",12),t.YNc(16,I,2,0,"div",9),t.qZA(),t.YNc(17,N,5,1,"div",13),t.TgZ(18,"div",10)(19,"label",14),t._uU(20,"\u0627\u0644\u0645\u0644\u0641\u0627\u062a*"),t.qZA(),t.TgZ(21,"input",15),t.NdJ("change",function(a){return i.onFileChange(a)}),t.qZA(),t.YNc(22,L,2,0,"div",9),t.qZA(),t.TgZ(23,"div",10)(24,"mat-form-field",16)(25,"mat-label"),t._uU(26,"\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0627\u062d\u064a\u0629*"),t.qZA(),t.TgZ(27,"mat-select",17),t.YNc(28,k,2,2,"mat-option",18),t.qZA(),t.YNc(29,O,2,0,"div",9),t.qZA()(),t.TgZ(30,"div",10)(31,"mat-form-field",16)(32,"mat-label"),t._uU(33,"\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a*"),t.qZA(),t.TgZ(34,"mat-select",19),t.YNc(35,q,2,2,"mat-option",18),t.qZA(),t.YNc(36,J,2,0,"div",9),t.qZA()()(),t.YNc(37,Y,4,1,"ng-container",20),t.YNc(38,Q,3,1,"ng-template",null,21,t.W1O),t.qZA()()()()()()),2&e){const r=t.MAs(39);t.xp6(5),t.Q6J("formGroup",i.contractForm),t.xp6(6),t.Q6J("ngIf",i.contractForm.controls.title.invalid&&(i.contractForm.controls.title.dirty||i.contractForm.controls.title.touched)),t.xp6(5),t.Q6J("ngIf",i.contractForm.controls.description.invalid&&(i.contractForm.controls.description.dirty||i.contractForm.controls.description.touched)),t.xp6(1),t.Q6J("ngIf",i.documentUrls.length>0),t.xp6(5),t.Q6J("ngIf",i.contractForm.controls.docs.invalid&&(i.contractForm.controls.docs.dirty||i.contractForm.controls.docs.touched)),t.xp6(6),t.Q6J("ngForOf",i.keywordsOptions),t.xp6(1),t.Q6J("ngIf",i.contractForm.controls.keywords.invalid&&(i.contractForm.controls.keywords.dirty||i.contractForm.controls.keywords.touched)),t.xp6(6),t.Q6J("ngForOf",i.divisionsOptions),t.xp6(1),t.Q6J("ngIf",i.contractForm.controls.divisions.invalid&&(i.contractForm.controls.divisions.dirty||i.contractForm.controls.divisions.touched)),t.xp6(1),t.Q6J("ngIf",!i.isEditMode)("ngIfElse",r)}},dependencies:[u.ez,u.sg,u.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,f.LD,h.KE,h.hX,f.gD,Z.ey,h.lN],styles:[".edi-btn[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}"]})}return n})();var M=l(8034),S=l(1818),D=l(2135),z=l(7700);const E=function(n,c){return[n,c]};function V(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"div",15)(4,"div",16),t.NdJ("click",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.viewContract(r))}),t.TgZ(5,"a",17)(6,"h3",18),t._uU(7),t.qZA(),t.TgZ(8,"h4",18),t._uU(9),t.qZA()()(),t.TgZ(10,"div",19)(11,"a",20),t.ALo(12,"localize"),t._uU(13,"\u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(14,"button",21),t.NdJ("click",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.deleteContract(r.id,r.title))}),t._uU(15," \u062d\u0630\u0641 "),t.qZA()()()()()()}if(2&n){const o=c.$implicit;t.xp6(7),t.hij(" ",o.title," "),t.xp6(2),t.hij(" ",o.description," "),t.xp6(2),t.Q6J("routerLink",t.WLB(5,E,t.lcZ(12,3,"/dashboard/contracts/update-contract"),o.id))}}function P(n,c){1&n&&(t.TgZ(0,"div",22)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let $=(()=>{class n{constructor(o,e,i,r){this.contractService=o,this.router=e,this.localize=i,this.dialog=r,this.contracts=[],this.rolesDropDown=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getListContracts(),this.contractService.initializeNavItems()}getListContracts(o=1){this.loading=!0,this.contractService.getContractsList({page:o}).subscribe({next:e=>{this.contracts=e.data.data,this.currentPage=e.data.current_page,this.totalPages=e.data.last_page,this.loading=!1},error:e=>{this.loading=!1,console.error("There was an error!",e)}})}deleteContract(o,e){this.dialog.open(M.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${e} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(r=>{r&&this.contractService.DeleteContract(o.toString()).subscribe({next:a=>{this.getListContracts()},error:a=>{console.error("There was an error deleting the contract!",a)}})})}navigateToAddContracts(){const o=this.localize.translateRoute("/dashboard/contracts/add-contracts");this.router.navigate([o])}viewContract(o){if(o){const e=this.localize.translateRoute("/dashboard/contracts/view-contract");this.router.navigate([e,o.id])}else console.error("No contract to view")}onPageChange(o){this.getListContracts(o)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(p.F0),t.Y36(g.An),t.Y36(z.uw))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-contracts-list"]],standalone:!0,features:[t.jDz],decls:16,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],["action","",1,"mb-4","filterForm"],[1,"col-lg-4","col-md-6","mb-lg-0","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","searchContracts","id","searchContracts","placeholder","\u0628\u062d\u062b...",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6 mb-2",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2",2,"cursor","pointer",3,"click"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","mx-1","edit",3,"routerLink"],[1,"btn","delete","px-4",3,"click"],[1,"text-center"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(a){return i.searchQuery=a}),t.qZA()()()()(),t.TgZ(10,"div",1),t.YNc(11,V,16,8,"div",9),t.ALo(12,"filter"),t.YNc(13,P,3,0,"div",10),t.ALo(14,"filter"),t.qZA(),t.TgZ(15,"pagination",11),t.NdJ("pageChange",function(a){return i.onPageChange(a)}),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("ngModel",i.searchQuery),t.xp6(2),t.Q6J("ngForOf",t.xi3(12,5,i.contracts,i.searchQuery)),t.xp6(2),t.Q6J("ngIf",0===t.xi3(14,8,i.contracts,i.searchQuery).length&&!i.loading),t.xp6(2),t.Q6J("currentPage",i.currentPage)("totalPages",i.totalPages))},dependencies:[u.ez,u.sg,u.O5,p.Bz,p.rH,g.fQ,g.lO,S.Q,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,D.u],styles:[".tabs[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a;color:var(--dashboard1)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}a.show[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}"]})}return n})();function K(n,c){if(1&n&&(t.TgZ(0,"li")(1,"a",19),t._uU(2),t.qZA()()),2&n){const o=c.$implicit;t.xp6(1),t.Q6J("href",o,t.LSH),t.xp6(1),t.Oqu(o)}}function G(n,c){if(1&n&&(t.TgZ(0,"div",9)(1,"label",17),t._uU(2,"\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u062d\u0627\u0644\u064a\u0629:"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,K,3,2,"li",18),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Q6J("ngForOf",o.documentUrls)}}function R(n,c){if(1&n&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.word," ")}}function B(n,c){if(1&n&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",o.id),t.xp6(1),t.hij(" ",o.name," ")}}const H=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-maincontract"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},dependencies:[u.ez,p.lC]})}return n})(),children:[{path:"",component:$},{path:"add-contract",component:y},{path:"update-contract/:id",component:y},{path:"view-contract/:id",component:(()=>{class n{constructor(o,e,i,r,a,m,d){this.localize=o,this.router=e,this.activatedRoute=i,this._MessagesService=r,this.contractService=a,this.keywords=m,this.divisions=d,this.isEditMode=!1,this.contractId="",this.keywordsOptions=[],this.divisionsOptions=[],this.documentUrls=[],this.contractForm=new s.cw({title:new s.NI("",s.kI.required),description:new s.NI("",s.kI.required),docs:new s.NI([],s.kI.required),keywords:new s.NI({value:[],disabled:!0},s.kI.required),divisions:new s.NI({value:[],disabled:!0},s.kI.required)})}ngOnInit(){this.contractService.initializeNavItems(),this.getKeyWords(),this.getDivisions(),this.activatedRoute.paramMap.subscribe(o=>{const e=o.get("id");e&&(this.contractForm.get("docs")?.setValidators([]),this.contractForm.get("docs")?.updateValueAndValidity(),this.contractId=e,this.isEditMode=!0,this.contractService.GetContractById(e).subscribe(i=>{i&&i.data&&this.setFormValues(i.data)}))})}navigateToContractsList(){const o=this.localize.translateRoute("/dashboard/contracts");this.router.navigate([o])}setFormValues(o){console.log(o),this.contractForm.controls.title.setValue(o.title),this.contractForm.controls.description.setValue(o.description),o.conversion_urls&&o.conversion_urls.length>0&&(this.documentUrls=o.conversion_urls.map(r=>r.original));const e=this.contractForm.controls.keywords.value||[];o.contract_keyword&&o.contract_keyword.length>0&&(o.contract_keyword.forEach(r=>{e.push(r.id)}),this.contractForm.controls.keywords.setValue(e));const i=this.contractForm.controls.divisions.value||[];o.contract_division&&o.contract_division.length>0&&(o.contract_division.forEach(r=>{i.push(r.id)}),this.contractForm.controls.divisions.setValue(i))}updateContract(){this.contractForm.valid&&this.contractService.UpdateContract(this.contractId,{title:this.contractForm.controls.title.value||"",description:this.contractForm.controls.description.value||"",docs:this.contractForm.controls.docs.value||[],keywords:this.contractForm.controls.keywords.value||[],divisions:this.contractForm.controls.divisions.value||[],_method:"PATCH"}).subscribe({next:e=>{this.navigateToContractsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d",3e3)},error:e=>{console.error("Failed to update contract:",e)}})}getKeyWords(){this.keywords.getKeywordsList().subscribe({next:o=>{o.data.data&&(this.keywordsOptions=o.data.data)},error:o=>{console.error("There was an error!",o)}})}getDivisions(){this.divisions.getDivisionsList().subscribe({next:o=>{this.divisionsOptions=o.data.data},error:o=>{console.error("There was an error!",o)}})}onFileChange(o){const e=o.target.files;if(e.length>0){const i=this.contractForm.controls.docs.value||[];for(let r=0;r<e.length;r++)i.push(e[r]);this.contractForm.controls.docs.setValue(i)}}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(g.An),t.Y36(p.F0),t.Y36(p.gz),t.Y36(A.K),t.Y36(C),t.Y36(b.M),t.Y36(F.E))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-contract"]],standalone:!0,features:[t.jDz],decls:28,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["id","pills-tabContent",1,"tab-content","p-3"],["id","addContract","role","tabpanel","aria-labelledby","addContract-tab","tabindex","0",1,""],[3,"formGroup"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","name","title","id","title","formControlName","title","readonly","",1,"form-control"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],["name","description","id","description","cols","30","rows","10","formControlName","description","readonly","",1,"form-control"],["class","form-group col-12 mb-3",4,"ngIf"],["appearance","fill",1,"w-100"],["formControlName","keywords","multiple",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","divisions","multiple",""],[1,"form-label"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"],[3,"value"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",1)(7,"div",6)(8,"label",7),t._uU(9,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646*"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",9)(12,"label",10),t._uU(13,"\u0627\u0644\u0648\u0635\u0641*"),t.qZA(),t._UZ(14,"textarea",11),t.qZA(),t.YNc(15,G,5,1,"div",12),t.TgZ(16,"div",9)(17,"mat-form-field",13)(18,"mat-label"),t._uU(19,"\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0627\u062d\u064a\u0629*"),t.qZA(),t.TgZ(20,"mat-select",14),t.YNc(21,R,2,2,"mat-option",15),t.qZA()()(),t.TgZ(22,"div",9)(23,"mat-form-field",13)(24,"mat-label"),t._uU(25,"\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a*"),t.qZA(),t.TgZ(26,"mat-select",16),t.YNc(27,B,2,2,"mat-option",15),t.qZA()()()()()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",i.contractForm),t.xp6(10),t.Q6J("ngIf",i.documentUrls.length>0),t.xp6(6),t.Q6J("ngForOf",i.keywordsOptions),t.xp6(6),t.Q6J("ngForOf",i.divisionsOptions))},dependencies:[u.ez,u.sg,u.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,f.LD,h.KE,h.hX,f.gD,Z.ey,h.lN]})}return n})()}]}]}}]);