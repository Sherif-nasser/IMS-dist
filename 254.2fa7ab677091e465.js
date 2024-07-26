"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[254],{2135:(O,h,a)=>{a.d(h,{u:()=>m});var e=a(5879);let m=(()=>{class t{transform(v,g){return v?g?(g=g.toLowerCase(),v.filter(l=>{const _=l.full_name?l.full_name.toLowerCase():"",c=l.last_name?l.last_name.toLowerCase():"",u=l.title?l.title.toLowerCase():"",d=l.name?l.name.toLowerCase():"",p=l.user&&l.user.name?l.user.name.toLowerCase():"",b=l.head?l.head.toLowerCase():"",M=l.description?l.description.toLowerCase():"";return _.includes(g)||c.includes(g)||d.includes(g)||p.includes(g)||b.includes(g)||M.includes(g)||u.includes(g)})):v:[]}static#t=this.\u0275fac=function(g){return new(g||t)};static#e=this.\u0275pipe=e.Yjl({name:"filter",type:t,pure:!0,standalone:!0})}return t})()},3046:(O,h,a)=>{a.r(h),a.d(h,{default:()=>L});var e=a(6814),m=a(846),t=a(5879);let i=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-main-category"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(n,r){1&n&&t._UZ(0,"router-outlet")},dependencies:[e.ez,m.lC]})}return s})();var v=a(1818),g=a(2135),l=a(8034),_=a(8733),c=a(6223),u=a(5401),d=a(8383),p=a(7700);const b=function(s,P){return[s,P]};function M(s,P){if(1&s){const o=t.EpF();t.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16),t._UZ(4,"img",17),t.qZA(),t.TgZ(5,"div",18)(6,"div",19)(7,"div",20)(8,"div",21)(9,"a",22)(10,"h5",23),t._uU(11),t.qZA()()(),t.TgZ(12,"div",24)(13,"a",25),t.ALo(14,"localize"),t._uU(15,"\u062a\u0639\u062f\u064a\u0644 "),t._UZ(16,"i",26),t.qZA(),t.TgZ(17,"button",27),t.NdJ("click",function(){const f=t.CHM(o).$implicit,C=t.oxw();return t.KtG(C.deleteCategory(f.id,f.title))}),t._uU(18," \u062d\u0630\u0641 "),t._UZ(19,"i",28),t.qZA()()()()()()()()}if(2&s){const o=P.$implicit;t.xp6(4),t.Q6J("src",o.conversion_urls[0].original,t.LSH)("alt",o.title+" Image"),t.xp6(7),t.Oqu(o.title),t.xp6(2),t.Q6J("routerLink",t.WLB(6,b,t.lcZ(14,4,"/dashboard/categories/add-category"),o.id))}}function x(s,P){1&s&&(t.TgZ(0,"div",29)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let T=(()=>{class s{constructor(o,n,r){this.blogService=o,this.categoriesService=n,this.dialog=r,this.categories=[],this.searchQuery="",this.loading=!1}ngOnInit(){this.blogService.initializeNavItems(),this.getCatList()}getCatList(o=1){this.loading=!0,this.categoriesService.GetCategoriesList({page:o}).subscribe({next:n=>{this.loading=!1,this.categories=n.data.data},error:n=>{this.loading=!1,console.error("Error in categories list",n)}})}deleteCategory(o,n){this.dialog.open(l.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(f=>{f&&this.categoriesService.DeleteCategory(o.toString()).subscribe({next:C=>{this.getCatList()},error:C=>{console.error("There was an error deleting the category!",C)}})})}onPageChange(o){this.getCatList(o)}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(u.Q),t.Y36(d.G),t.Y36(p.uw))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-categories-list"]],standalone:!0,features:[t.jDz],decls:16,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"mb-4","filterForm"],[1,"col-xl-4","col-md-6","mb-lg-2","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mx-0"],["class","col-md-6 mb-1",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-1"],[1,"card","mb-3","border-0"],[1,"row","g-0","align-items-center","p-2"],[1,"col-xl-4","col-md-3","p-2","text-center"],[1,"img-fluid","rounded-start",3,"src","alt"],[1,"col-xl-8","col-md-9"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-6","order-xl-1","order-2"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-6","order-xl-2","order-1","mb-md-0","mb-2","text-end","px-0"],[1,"btn","mx-1","edit",3,"routerLink"],[1,"fa-regular","fa-pen-to-square"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"text-center"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(C){return r.searchQuery=C}),t.qZA()()()()(),t.TgZ(10,"div",9),t.YNc(11,M,20,9,"div",10),t.ALo(12,"filter"),t.YNc(13,x,3,0,"div",11),t.ALo(14,"filter"),t.qZA(),t.TgZ(15,"pagination",12),t.NdJ("pageChange",function(C){return r.onPageChange(C)}),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("ngModel",r.searchQuery),t.xp6(2),t.Q6J("ngForOf",t.xi3(12,5,r.categories,r.searchQuery)),t.xp6(2),t.Q6J("ngIf",0===t.xi3(14,8,r.categories,r.searchQuery).length&&!r.loading),t.xp6(2),t.Q6J("currentPage",r.currentPage)("totalPages",r.totalPages))},dependencies:[e.ez,e.sg,e.O5,v.Q,g.u,m.rH,_.fQ,_.lO,c.u5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a}"]})}return s})();var A=a(553),F=a(4286);function Z(s,P){if(1&s&&(t.TgZ(0,"div",17),t._UZ(1,"img",18),t.qZA()),2&s){const o=t.oxw();t.xp6(1),t.Q6J("src",o.previewUrl,t.LSH)}}function I(s,P){if(1&s&&(t.ynx(0),t.TgZ(1,"div",6)(2,"button",19),t._uU(3," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0633\u0645 "),t.qZA()(),t.BQk()),2&s){const o=t.oxw();t.xp6(2),t.Q6J("disabled",!o.categoryForm.valid)}}function E(s,P){if(1&s){const o=t.EpF();t.TgZ(0,"div",6)(1,"button",20),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.updateCategory())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 "),t.qZA()()}if(2&s){const o=t.oxw();t.xp6(1),t.Q6J("disabled",!o.categoryForm.valid)}}let y=(()=>{class s{constructor(o,n,r,f,C,U,D){this.catService=o,this.localize=n,this.router=r,this.activatedRoute=f,this._MessagesService=C,this.blogService=U,this.fb=D,this.isEditMode=!1,this.categoryId="",this.previewUrl=null,this.categoryForm=this.fb.group({title:["",c.kI.required],description:["",c.kI.required],image:[null,c.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(o=>{const n=o.get("id");n?(this.categoryId=n,this.isEditMode=!0,this.categoryForm.get("image")?.setValidators([]),this.categoryForm.get("image")?.updateValueAndValidity(),this.catService.GetCategoryById(n).subscribe(r=>{r&&r.data&&this.setFormValues(r.data)})):(this.blogService.initializeNavItems(),this.categoryForm.get("image")?.setValidators([c.kI.required]),this.categoryForm.get("image")?.updateValueAndValidity())})}setFormValues(o){this.categoryForm.controls.title.setValue(o.title),this.categoryForm.controls.description.setValue(o.description),o.image&&o.image.length>0&&(this.previewUrl=`${A.N.url}${o.image[0]}`)}get f(){return this.categoryForm.controls}onFileChange(o){if(o.target.files.length>0){const n=o.target.files[0];this.categoryForm.patchValue({image:n});const r=new FileReader;r.onload=()=>{this.previewUrl=r.result},r.readAsDataURL(n)}}navigateToCategoriesList(){const o=this.localize.translateRoute("/dashboard/categories");this.router.navigate([o])}updateCategory(){this.categoryForm.valid&&this.catService.UpdateCategory(this.categoryId,{title:this.categoryForm.controls.title.value,description:this.categoryForm.controls.description.value,image:this.categoryForm.controls.image.value,_method:"PATCH"}).subscribe({next:n=>{this._MessagesService.showSuccessMessage("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0642\u0633\u0645",3e3),this.navigateToCategoriesList()},error:n=>{console.error("Failed to edit category:",n)}})}onSubmit(){this.categoryForm.valid&&this.catService.AddCategory({title:this.categoryForm.controls.title.value,description:this.categoryForm.controls.description.value,image:this.categoryForm.controls.image.value}).subscribe({next:n=>{console.log("Category added successfully:",n),this.navigateToCategoriesList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645",3e3)},error:n=>{console.error("Failed to add category:",n)}})}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(d.G),t.Y36(_.An),t.Y36(m.F0),t.Y36(m.gz),t.Y36(F.K),t.Y36(u.Q),t.Y36(c.qu))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-add-category"]],standalone:!0,features:[t.jDz],decls:23,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["id","pills-tabContent",1,"tab-content","p-3"],["id","addCategory","role","tabpanel","aria-labelledby","addCategory-tab","tabindex","0",1,""],[3,"formGroup","ngSubmit"],[1,"form-group","col-12","mb-3"],["for","title",1,"form-label"],["type","text","name","title","id","addCategoryName","formControlName","title",1,"form-control"],["for","addCategoryDesciption",1,"form-label"],["name","description","id","addCategoryDesciption","cols","30","rows","10","formControlName","description",1,"form-control"],[1,"form-group","col-12","mb-3","uploadImage"],["type","file","id","uploadCategoryImage","hidden","",3,"change"],["for","uploadCategoryImage",1,"py-5","text-center"],["class","text-center mt-2",4,"ngIf"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"text-center","mt-2"],["alt","Image Preview",1,"img-thumbnail",3,"src"],["type","submit",1,"btn","px-5",3,"disabled"],["type","button",1,"btn","px-5",3,"disabled","click"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(6,"div",1)(7,"div",6)(8,"label",7),t._uU(9,"\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645*"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"\u0627\u0644\u0648\u0635\u0641"),t.qZA(),t._UZ(14,"textarea",10),t.qZA(),t.TgZ(15,"div",11)(16,"input",12),t.NdJ("change",function(C){return r.onFileChange(C)}),t.qZA(),t.TgZ(17,"label",13),t._uU(18,"\u0627\u062e\u062a\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0645\u0646 \u0627\u0644\u062c\u0647\u0627\u0632 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643"),t.qZA(),t.YNc(19,Z,2,1,"div",14),t.qZA()(),t.YNc(20,I,4,1,"ng-container",15),t.YNc(21,E,3,1,"ng-template",null,16,t.W1O),t.qZA()()()()()()),2&n){const f=t.MAs(22);t.xp6(5),t.Q6J("formGroup",r.categoryForm),t.xp6(14),t.Q6J("ngIf",r.previewUrl),t.xp6(1),t.Q6J("ngIf",!r.isEditMode)("ngIfElse",f)}},dependencies:[e.ez,e.O5,c.u5,c._Y,c.Fj,c.JJ,c.JL,c.UX,c.sg,c.u],styles:[".tab-content[_ngcontent-%COMP%]{border-radius:4px}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--dashboard1)}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--main);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}form[_ngcontent-%COMP%]   .input-group-vertical[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%]{color:var(--dashboard1);background-color:transparent;border:none}form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:not(.d-inline-block){border:1px solid var(--main);color:var(--dashboard1);width:100%;border-radius:10px}"]})}return s})();const L=[{path:"",component:i,children:[{path:"",component:T},{path:"add-category",component:y,data:{breadcrumbs:[{label:" \u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645",url:"/dashboard/categories/add-category"}]}},{path:"add-category/:id",component:y}]}]},8034:(O,h,a)=>{a.d(h,{$:()=>g});var e=a(6814),m=a(7700),t=a(2296),i=a(5879),v=a(4286);let g=(()=>{class l{constructor(c,u,d){this.dialogRef=c,this.data=u,this._MessagesService=d}onConfirmClick(){this.dialogRef.close(!0),this._MessagesService.showSuccessMessage("Done",3e3)}onCancelClick(){this.dialogRef.close(!1)}static#t=this.\u0275fac=function(u){return new(u||l)(i.Y36(m.so),i.Y36(m.WI),i.Y36(v.K))};static#e=this.\u0275cmp=i.Xpm({type:l,selectors:[["app-confirm-dialog"]],standalone:!0,features:[i.jDz],decls:10,vars:2,consts:[[1,"text-center"],["mat-dialog-title","",1,"text-center"],[1,"m-auto"],["mat-button","",3,"click"],["mat-button","","olor","primary",2,"color","red",3,"click"]],template:function(u,d){1&u&&(i.TgZ(0,"div",0)(1,"h2",1),i._uU(2),i.qZA(),i.TgZ(3,"mat-dialog-content"),i._uU(4),i.qZA(),i.TgZ(5,"mat-dialog-actions",2)(6,"button",3),i.NdJ("click",function(){return d.onCancelClick()}),i._uU(7,"\u0627\u0644\u063a\u0627\u0621"),i.qZA(),i.TgZ(8,"button",4),i.NdJ("click",function(){return d.onConfirmClick()}),i._uU(9," \u062a\u0627\u0643\u064a\u062f "),i.qZA()()()),2&u&&(i.xp6(2),i.Oqu(d.data.title),i.xp6(2),i.Oqu(d.data.message))},dependencies:[e.ez,m.Is,m.uh,m.xY,m.H8,t.ot,t.lW],styles:["mat-dialog-content[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]})}return l})()},6996:(O,h,a)=>{a.d(h,{f:()=>t});var e=a(5619),m=a(5879);let t=(()=>{class i{constructor(){this.navItemsSubject=new e.X([]),this.navItems$=this.navItemsSubject.asObservable()}setNavItems(g){this.navItemsSubject.next(g)}static#t=this.\u0275fac=function(l){return new(l||i)};static#e=this.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1818:(O,h,a)=>{a.d(h,{Q:()=>l});var e=a(5879),m=a(6223),t=a(6814);function i(_,c){if(1&_){const u=e.EpF();e.TgZ(0,"li",2)(1,"a",7),e.NdJ("click",function(){const b=e.CHM(u).index,M=e.oxw();return e.KtG(M.navigateTo(b+1))}),e._uU(2),e.qZA()()}if(2&_){const u=c.index,d=e.oxw();e.ekj("active",d.currentPage===u+1),e.xp6(2),e.Oqu(u+1)}}const v=function(){return[]},g={provide:m.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0};let l=(()=>{class _{constructor(){this.pageChange=new e.vpe}navigateTo(u){this.pageChange.emit(u),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}static#t=this.\u0275fac=function(d){return new(d||_)};static#e=this.\u0275cmp=e.Xpm({type:_,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[e._Bn([g]),e.jDz],decls:11,vars:6,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"]],template:function(d,p){1&d&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),e.NdJ("click",function(){return p.navigateTo(p.currentPage-1)}),e.TgZ(4,"span",4),e._uU(5,"\xab"),e.qZA()()(),e.YNc(6,i,3,3,"li",5),e.TgZ(7,"li",2)(8,"a",6),e.NdJ("click",function(){return p.navigateTo(p.currentPage+1)}),e.TgZ(9,"span",4),e._uU(10,"\xbb"),e.qZA()()()()()),2&d&&(e.xp6(2),e.ekj("disabled",1===p.currentPage),e.xp6(4),e.Q6J("ngForOf",e.DdM(5,v).constructor(p.totalPages)),e.xp6(1),e.ekj("disabled",p.currentPage===p.totalPages))},dependencies:[t.ez,t.sg],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return _})()}}]);