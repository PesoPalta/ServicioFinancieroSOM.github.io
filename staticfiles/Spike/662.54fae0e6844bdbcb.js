"use strict";(self.webpackChunktestApp=self.webpackChunktestApp||[]).push([[662],{662:(S,d,n)=>{n.r(d),n.d(d,{AuthenticationModule:()=>E});var c=n(8498),p=n(177),f=n(9213),s=n(5596),l=n(9631),g=n(2765),a=n(8834),e=n(9417),k=n(4912),h=n(5509),t=n(4438),m=n(6467);const v=()=>["/dashboard"],u=()=>["/"],F=()=>["/authentication/register"],w=()=>["/dashboard"],j=()=>["/"],y=()=>["/authentication/login"],x=[{path:"",children:[{path:"login",component:(()=>{class o{constructor(){}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-login"]],decls:41,vars:8,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light-primary"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/dark-logo.svg","alt","logo",1,"align-middle","m-2"],[1,"row","m-t-24","custom-row"],[1,"col-12","col-sm-6"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center"],["src","/assets/images/svgs/google-icon.svg","alt","google","width","16",1,"m-r-8"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["src","/assets/images/svgs/facebook-icon.svg","alt","facebook","width","40",1,"m-r-4"],[1,"or-border","m-t-30"],[1,"m-t-30"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","password"],[1,"d-flex","align-items-center","m-b-12"],["color","primary"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["mat-flat-button","","color","primary",1,"w-100",3,"routerLink"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(i,L){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t.nrm(7,"img",7),t.k0s()(),t.j41(8,"div",8)(9,"div",9)(10,"button",10)(11,"div",11),t.nrm(12,"img",12),t.EFF(13," Sign in with Google "),t.k0s()()(),t.j41(14,"div",9)(15,"button",13)(16,"div",11),t.nrm(17,"img",14),t.EFF(18," Sign in with FB "),t.k0s()()()(),t.j41(19,"div",15),t.EFF(20,"or sign in with"),t.k0s(),t.j41(21,"form",16)(22,"mat-label",17),t.EFF(23,"Username"),t.k0s(),t.j41(24,"mat-form-field",18),t.nrm(25,"input",19),t.k0s(),t.j41(26,"mat-label",17),t.EFF(27,"Password"),t.k0s(),t.j41(28,"mat-form-field",18),t.nrm(29,"input",20),t.k0s(),t.j41(30,"div",21)(31,"mat-checkbox",22),t.EFF(32,"Remember this Device"),t.k0s(),t.j41(33,"a",23),t.EFF(34,"Forgot Password ?"),t.k0s()(),t.j41(35,"a",24),t.EFF(36," Sign In "),t.k0s()(),t.j41(37,"span",25),t.EFF(38,"New to Spike? "),t.j41(39,"a",26),t.EFF(40," Create an account"),t.k0s()()()()()()()),2&i&&(t.R7$(6),t.Y8G("routerLink",t.lJ4(4,v)),t.R7$(27),t.Y8G("routerLink",t.lJ4(5,u)),t.R7$(2),t.Y8G("routerLink",t.lJ4(6,u)),t.R7$(4),t.Y8G("routerLink",t.lJ4(7,F)))},dependencies:[c.Wk,s.RN,s.m2,l.fg,m.rl,m.nJ,g.So,a.It,a.$z,e.qT,e.cb,e.cV],encapsulation:2})}return o})()},{path:"register",component:(()=>{class o{constructor(r){this.router=r,this.form=new e.gE({uname:new e.MJ("",[e.k0.required,e.k0.minLength(6)]),email:new e.MJ("",[e.k0.required]),password:new e.MJ("",[e.k0.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboard"])}static#t=this.\u0275fac=function(i){return new(i||o)(t.rXU(c.Ix))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-register"]],decls:40,vars:6,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light-primary"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/dark-logo.svg","alt","logo",1,"align-middle","m-2"],[1,"row","m-t-24","custom-row"],[1,"col-12","col-sm-6"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center"],["src","/assets/images/svgs/google-icon.svg","alt","google","width","16",1,"m-r-8"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["src","/assets/images/svgs/facebook-icon.svg","alt","facebook","width","40",1,"m-r-4"],[1,"or-border","m-t-30"],[1,"m-t-30"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","email"],["matInput","","type","password"],["mat-flat-button","","color","primary",1,"w-100",3,"routerLink"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(i,L){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t.nrm(7,"img",7),t.k0s()(),t.j41(8,"div",8)(9,"div",9)(10,"button",10)(11,"div",11),t.nrm(12,"img",12),t.EFF(13," Sign in with Google "),t.k0s()()(),t.j41(14,"div",9)(15,"button",13)(16,"div",11),t.nrm(17,"img",14),t.EFF(18," Sign in with FB "),t.k0s()()()(),t.j41(19,"div",15),t.EFF(20,"or sign up with"),t.k0s(),t.j41(21,"form",16)(22,"mat-label",17),t.EFF(23,"Name"),t.k0s(),t.j41(24,"mat-form-field",18),t.nrm(25,"input",19),t.k0s(),t.j41(26,"mat-label",17),t.EFF(27,"Email Adddress"),t.k0s(),t.j41(28,"mat-form-field",18),t.nrm(29,"input",20),t.k0s(),t.j41(30,"mat-label",17),t.EFF(31,"Password"),t.k0s(),t.j41(32,"mat-form-field",18),t.nrm(33,"input",21),t.k0s(),t.j41(34,"a",22),t.EFF(35," Sign Up "),t.k0s()(),t.j41(36,"span",23),t.EFF(37,"Already have an Account? "),t.j41(38,"a",24),t.EFF(39," Sign In"),t.k0s()()()()()()()),2&i&&(t.R7$(6),t.Y8G("routerLink",t.lJ4(3,w)),t.R7$(28),t.Y8G("routerLink",t.lJ4(4,j)),t.R7$(4),t.Y8G("routerLink",t.lJ4(5,y)))},dependencies:[c.Wk,s.RN,s.m2,l.fg,m.rl,m.nJ,a.It,a.$z,e.qT,e.cb,e.cV],encapsulation:2})}return o})()}]}];let E=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({imports:[p.MD,c.iI.forChild(x),f.m_,s.Hu,l.fS,g.g7,a.Hl,e.YN,e.X1,k.X4.pick(h)]})}return o})()}}]);