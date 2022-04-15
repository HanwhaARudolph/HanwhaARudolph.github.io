self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b9y(d){return d.VertexMode},
bHN(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
brV(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.h(B.cG('"positions" and "colors" lengths must match.',v))
u=$.bp6()[d.a]
x=A.bHN(e)
w=B.bmq(f)
u=new A.IV(u,x,v,w,v)
u.zQ(v,y.U)
return u},
bzb(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bGQ(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
IV:function IV(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8b:function a8b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
auN(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.am(0,e)
w=f.am(0,e)
return e.a2(0,w.zL(C.d.F(x.E7(w)/t,0,1)))},
bwD(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.am(0,q),o=e.b,n=o.am(0,q),m=e.d,l=m.am(0,q),k=p.E7(n),j=n.E7(n),i=p.E7(l),h=l.E7(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.auN(d,q,o),A.auN(d,o,x),A.auN(d,x,m),A.auN(d,m,q)]
v=B.c9("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.r_()},
bzB(){var x=new B.bw(new Float64Array(16))
x.tU()
return new A.a8I(x,$.a9())},
bkT(d,e){var x,w,v,u,t,s,r=new B.bw(new Float64Array(16))
r.qO(d)
r.zc(r)
x=e.a
w=e.b
v=new B.cp(new Float64Array(3))
v.uc(x,w,0)
v=r.zG(v)
u=e.c
t=new B.cp(new Float64Array(3))
t.uc(u,w,0)
t=r.zG(t)
w=e.d
s=new B.cp(new Float64Array(3))
s.uc(u,w,0)
s=r.zG(s)
u=new B.cp(new Float64Array(3))
u.uc(x,w,0)
u=r.zG(u)
x=new B.cp(new Float64Array(3))
x.qO(v)
w=new B.cp(new Float64Array(3))
w.qO(t)
v=new B.cp(new Float64Array(3))
v.qO(s)
t=new B.cp(new Float64Array(3))
t.qO(u)
return new A.a5U(x,w,v,t)},
bkg(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.q,w=0;w<4;++w){v=r[w]
u=A.bwD(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.k(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.k(x.a,t)}return A.bci(x)},
bci(d){return new B.k(B.alI(C.d.of(d.a,9)),B.alI(C.d.of(d.b,9)))},
bCU(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.aa:C.x},
KV:function KV(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
RP:function RP(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.pU$=f
_.R$=g
_.a=null
_.b=h
_.c=null},
aT_:function aT_(){},
adE:function adE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8I:function a8I(d,e){var _=this
_.a=d
_.to$=0
_.x1$=e
_.xr$=_.x2$=0
_.y1$=!1},
G5:function G5(d,e){this.a=d
this.b=e},
Wk:function Wk(){},
bzC(){return new A.tA(null)},
tA:function tA(d){this.a=d},
V1:function V1(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.pU$=g
_.R$=h
_.a=null
_.b=i
_.c=null},
b0z:function b0z(d,e){this.a=d
this.b=e},
b0A:function b0A(d){this.a=d},
b0G:function b0G(d){this.a=d},
b0F:function b0F(d){this.a=d},
b0E:function b0E(d){this.a=d},
b0D:function b0D(d){this.a=d},
b0C:function b0C(d,e){this.a=d
this.b=e},
b0B:function b0B(d,e,f){this.a=d
this.b=e
this.c=f},
a9W:function a9W(d,e){this.b=d
this.a=e},
aK0:function aK0(d,e){this.a=d
this.b=e},
X_:function X_(){},
b9o(d,e,f,g,h){var x=new A.Yb(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.amH(d,e,f,g,h)
return x},
Yb:function Yb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anq:function anq(d){this.a=d},
anp:function anp(d){this.a=d},
ano:function ano(d){this.a=d},
aK_:function aK_(d){this.a=d
this.c=this.b=null},
aWV:function aWV(d,e){this.a=d
this.b=e},
hc:function hc(d,e,f){this.a=d
this.b=e
this.c=f},
a9X:function a9X(){},
Zg:function Zg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aoO:function aoO(d){this.a=d},
aoN:function aoN(d,e){this.a=d
this.b=e},
zA:function zA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLK:function aLK(d){this.a=d},
a13:function a13(d,e,f){this.c=d
this.d=e
this.a=f},
a5U:function a5U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzQ(d,e,f){var x,w
if($.aR())return A.brV(d,e,f,null,null)
x=A.bzb(f)
w=A.bGQ(e)
if($.HG==null)$.HG=new B.ajB()
return new A.a8b(d,w,x,null)}},B,J,C,D,E,F
A=a.updateHolder(c[84],A)
B=c[0]
J=c[1]
C=c[2]
D=c[123]
E=c[113]
F=c[97]
A.IV.prototype={
yy(){var x=this
return B.bS($.cB.rK(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
Au(){return this.yy()},
vg(d){var x=this.a
if(x!=null)J.o2(x)}}
A.a8b.prototype={}
A.KV.prototype={
G(){var x=null,w=y.z
return new A.RP(new B.ac(x,w),new B.ac(x,w),x,x,C.k)}}
A.RP.prototype={
gLP(){var x=$.P.t$.z.i(0,this.e).gJ()
x.toString
x=y.x.a(x).k1
x.toString
return this.a.e.Gc(new B.C(0,0,0+x.a,0+x.b))},
gNw(){var x=$.P.t$.z.i(0,this.f).gJ()
x.toString
x=y.x.a(x).k1
return new B.C(0,0,0+x.a,0+x.b)},
MJ(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.q)){x=new B.bw(new Float64Array(16))
x.qO(a0)
return x}d.a.toString
w=new B.bw(new Float64Array(16))
w.qO(a0)
w.oY(0,a1.a,a1.b)
v=A.bkT(w,d.gNw())
x=d.gLP()
if(x.gac4(x))return w
x=d.gLP()
u=d.as
t=new B.bw(new Float64Array(16))
t.tU()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.oY(0,q/2,o/2)
t.PS(u)
t.oY(0,-q/2,-o/2)
u=new B.cp(new Float64Array(3))
u.uc(r,x,0)
u=t.zG(u)
q=new B.cp(new Float64Array(3))
q.uc(s,x,0)
q=t.zG(q)
x=new B.cp(new Float64Array(3))
x.uc(s,p,0)
x=t.zG(x)
s=new B.cp(new Float64Array(3))
s.uc(r,p,0)
s=t.zG(s)
r=new Float64Array(3)
new B.cp(r).qO(u)
u=new Float64Array(3)
new B.cp(u).qO(q)
q=new Float64Array(3)
new B.cp(q).qO(x)
x=new Float64Array(3)
new B.cp(x).qO(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cp(new Float64Array(3))
x.uc(m,l,0)
u=new B.cp(new Float64Array(3))
u.uc(k,l,0)
s=new B.cp(new Float64Array(3))
s.uc(k,j,0)
r=new B.cp(new Float64Array(3))
r.uc(m,j,0)
q=new B.cp(new Float64Array(3))
q.qO(x)
x=new B.cp(new Float64Array(3))
x.qO(u)
u=new B.cp(new Float64Array(3))
u.qO(s)
s=new B.cp(new Float64Array(3))
s.qO(r)
i=new A.a5U(q,x,u,s)
h=A.bkg(i,v)
if(h.m(0,C.q))return w
x=w.Qr().a
u=x[0]
x=x[1]
g=a0.L0()
u-=h.a*g
x-=h.b*g
f=new B.bw(new Float64Array(16))
f.qO(a0)
s=new B.cp(new Float64Array(3))
s.uc(u,x,0)
f.a_E(s)
e=A.bkg(i,A.bkT(f,d.gNw()))
if(e.m(0,C.q))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bw(new Float64Array(16))
x.qO(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bw(new Float64Array(16))
s.qO(a0)
r=new B.cp(new Float64Array(3))
r.uc(u,x,0)
s.a_E(r)
return s},
a50(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bw(new Float64Array(16))
x.qO(d)
return x}w=r.d.a.L0()
x=r.gNw()
v=r.gLP()
u=r.gNw()
t=r.gLP()
s=C.d.F(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bw(new Float64Array(16))
x.qO(d)
x.rp(0,s/w)
return x},
azS(d,e,f){var x,w,v,u
if(e===0){x=new B.bw(new Float64Array(16))
x.qO(d)
return x}w=this.d.zF(f)
x=new B.bw(new Float64Array(16))
x.qO(d)
v=w.a
u=w.b
x.oY(0,v,u)
x.PS(-e)
x.oY(0,-v,-u)
return x},
T4(d){switch(d){case D.az9:return!1
case D.uQ:this.a.toString
return!0
case D.mi:case null:this.a.toString
return!0}},
a3u(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uQ
else return D.mi},
az4(d){var x,w=this,v="_controller"
w.a.ax.$1(d)
x=B.c(w.w,v).r
if(x!=null&&x.a!=null){B.c(w.w,v).tm(0)
x=B.c(w.w,v)
x.sl(0,x.a)
x=w.r
if(x!=null)x.a.C(0,w.gMT())
w.r=null}w.x=w.at=null
w.z=w.d.a.L0()
w.y=w.d.zF(d.b)
w.Q=w.as},
aB5(d){var x,w,v,u,t,s,r=this,q=r.d.a.L0(),p=d.c,o=r.d.zF(p),n=r.at
if(n===D.mi)n=r.at=r.a3u(d)
else if(n==null){n=r.a3u(d)
r.at=n}if(!r.T4(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a50(x.a,n*d.d/q))
w=r.d.zF(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.MJ(x,w.am(0,v)))
u=r.d.zF(p)
p=r.y
p.toString
if(!A.bci(p).m(0,A.bci(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.azS(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bCU(n,o)}n=r.y
n.toString
s=o.am(0,n)
n=r.d
n.sl(0,r.MJ(n.a,s))
r.y=r.d.zF(p)
break}r.a.toString},
aB1(d){var x,w,v,u,t,s,r,q=this,p="_controller"
q.a.toString
q.y=q.Q=q.z=null
x=q.r
if(x!=null)x.a.C(0,q.gMT())
x=B.c(q.w,p)
x.sl(0,x.a)
if(!q.T4(q.at)){q.x=null
return}if(q.at!==D.mi||d.a.a.gtI()<50){q.x=null
return}x=q.d.a.Qr().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gtI())
r=Math.log(135e-9)
u=new B.BS(0.0000135,u,w,v.a,C.d1).gJs()
v=new B.BS(0.0000135,t,x,v.b,C.d1).gJs()
t=y.L
q.r=new B.F(B.aH(C.dX,B.c(q.w,p),null),new B.a5(new B.k(w,x),new B.k(u,v),t),t.h("F<W.T>"))
B.c(q.w,p).e=B.dC(0,0,C.d.al(s/r*1000),0,0)
q.r.a.ab(0,q.gMT())
B.c(q.w,p).oP(0)},
az6(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gH5().b===0)return
x=r.a.ax
w=d.gqW(d)
v=d.gvl()
x.$1(new B.DE(w,v,0))
x=d.gH5()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.T4(D.uQ)){r.a.toString
return}x=r.d
x.toString
t=x.zF(d.gvl())
x=r.d
x.sl(0,r.a50(x.a,u))
x=r.d
x.toString
s=x.zF(d.gvl())
x=r.d
x.sl(0,r.MJ(x.a,s.am(0,t)))
r.a.toString}},
aAv(){var x,w,v,u,t=this,s="_controller",r=B.c(t.w,s).r
if(!(r!=null&&r.a!=null)){t.x=null
r=t.r
if(r!=null)r.a.C(0,t.gMT())
t.r=null
r=B.c(t.w,s)
r.sl(0,r.a)
return}r=t.d.a.Qr().a
x=r[0]
r=r[1]
w=t.d.zF(new B.k(x,r))
r=t.d
r.toString
x=t.r
v=x.b
x=x.a
u=r.zF(v.L(0,x.gl(x))).am(0,w)
x=t.d
x.sl(0,t.MJ(x.a,u))},
aBj(){this.D(new A.aT_())},
a3(){var x,w=this,v=null
w.aa()
x=w.a.ch
w.d=x
x.ab(0,w.gU3())
w.w=B.aN(C.w,v,v,v,1,v,w)},
ac(d){var x,w,v=this
v.ao(d)
x=v.a
if(x.ch!==d.ch){x=v.gU3()
v.d.C(0,x)
w=v.a.ch
v.d=w
w.ab(0,x)}},
k(){var x=this
B.c(x.w,"_controller").k()
x.d.C(0,x.gU3())
x.a.toString
x.alD()},
p(d,e){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adE(t.r,v.e,C.t,!0,x,u)
return B.Lp(C.e8,B.cy(C.aO,w,C.B,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaB0(),v.gaz3(),v.gaB4(),u,u,u,u,u,u,u),v.f,u,u,u,v.gaz5(),u)}}
A.adE.prototype={
p(d,e){var x=this,w=B.mf(null,new B.hj(x.c,x.d),x.r,!0)
return B.j_(w,x.e,null)}}
A.a8I.prototype={
zF(d){var x=this.a,w=new B.bw(new Float64Array(16))
if(w.zc(x)===0)B.M(B.i4(x,"other","Matrix cannot be inverted"))
x=new B.cp(new Float64Array(3))
x.uc(d.a,d.b,0)
x=w.zG(x).a
return new B.k(x[0],x[1])}}
A.G5.prototype={
j(d){return"_GestureType."+this.b}}
A.Wk.prototype={
pb(){this.qc()
this.pC()
this.rL()},
k(){var x=this,w=x.R$
if(w!=null)w.C(0,x.grI())
x.R$=null
x.a1()}}
A.tA.prototype={
G(){var x=null
return new A.V1(new B.ac(x,y.z),A.b9o(x,8,1,16,x),A.bzB(),x,x,C.k)}}
A.V1.prototype={
aAw(){var x=this,w="_controllerReset",v=x.r,u=v.b
v=v.a
x.f.sl(0,u.L(0,v.gl(v)))
v=B.c(x.w,w).r
if(!(v!=null&&v.a!=null)){v=x.r
if(v!=null)v.a.C(0,x.gU_())
x.r=null
v=B.c(x.w,w)
v.sl(0,v.a)}},
aB3(d){var x,w=this,v="_controllerReset"
if(B.c(B.c(w.w,v).Q,"_status")===C.aj){B.c(w.w,v).tm(0)
x=w.r
if(x!=null)x.a.C(0,w.gU_())
w.r=null
x=B.c(w.w,v)
x.sl(0,x.a)}},
aBg(d){var x=this,w=x.f.zF(d.a.am(0,B.eX(y.x.a($.P.t$.z.i(0,x.d).gJ()).tr(0,null),C.q)))
x.D(new A.b0z(x,x.e.aPw(w)))},
a3(){var x=null
this.aa()
this.w=B.aN(C.w,x,x,x,1,x,this)},
p(d,e){var x=null,w=B.t(e)
return B.bV(B.cv(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,B.r(B.w(e,C.i,y.s).gba(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.as.b,B.R(x,new B.cW(new A.b0A(this),x),C.h,D.wm,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaQg(),this.gaL9()],y.p),x)},
gaQg(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).as.cy,!0,x,D.a38,x,x,new A.b0G(this),C.M,x,"Reset")},
gaL9(){var x=null,w=this.c
w.toString
return B.c0(B.t(w).as.cy,!0,x,E.om,x,x,new A.b0E(this),C.M,x,"Edit")},
k(){B.c(this.w,"_controllerReset").k()
this.amu()}}
A.a9W.prototype={
az(d,e){this.b.a9(0,new A.aK0(this,d))},
uh(d){return d.b!==this.b}}
A.X_.prototype={
pb(){this.qc()
this.pC()
this.rL()},
k(){var x=this,w=x.R$
if(w!=null)w.C(0,x.grI())
x.R$=null
x.a1()}}
A.Yb.prototype={
amH(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a5(s.d,B.b([new B.k(0,q),new B.k(r,x),new B.k(r,w),new B.k(r,w),new B.k(0,v),new B.k(0,v),new B.k(u,w),new B.k(u,w),new B.k(u,x)],y.g))
if(d!=null)C.b.a5(s.f,d)
else{t=s.a3z(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a3z(t)}}},
go9(d){return new A.aK_(this.f)},
a3E(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.aWV(w,x)},
a3z(d){var x,w,v,u=this
if(d==null)return new A.hc(-u.a,0,D.hN)
x=d.a
w=u.a3E(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hc(x,u.a3E(x).a,D.hN)}return new A.hc(x,v+1,D.hN)},
gvs(d){var x=this.b,w=this.a
return new B.I((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aPw(d){var x=this,w=x.gvs(x),v=d.b-x.gvs(x).b/2,u=x.b,t=new A.hc(C.d.al((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.al(0.6666666666666666*v/u),D.hN)
w=D.O8.gaai().a
v=t.gaai().a
if(C.d.rj(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.G6(x.f,new A.anq(t))},
afh(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.ae(r).h("aC<1,k>"),p=B.av(new B.aC(r,new A.anp(new B.iC(w*v*u+t/2*v*s+x.gvs(x).a/2,1.5*v*s+x.gvs(x).b/2,y.O)),q),!0,q.h("bH.E"))
return A.bzQ(C.Mw,p,B.bI(p.length,e,!1,y.G))},
aKj(d){var x=this
if(J.l(x.e,d))return x
return A.b9o(x.f,x.a,x.c,x.b,d)},
aKi(d,e){var x,w,v=this,u=new A.hc(d.a,d.b,e),t=v.f,s=C.b.P1(t,new A.ano(d))
if(J.l(v.rd(0,s),d)&&d.c.m(0,e))return v
x=B.eG(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.b9o(x,v.a,v.c,v.b,w)},
$iG:1}
A.aK_.prototype={
A(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gT(d){return this.c}}
A.aWV.prototype={}
A.hc.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.ai(e)!==B.T(this))return!1
return e instanceof A.hc&&e.a===this.a&&e.b===this.b},
gK(d){return B.dL(this.a,this.b,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e,C.e)},
gaai(){var x=this.a,w=this.b,v=new B.cp(new Float64Array(3))
v.uc(x,w,-x-w)
return v}}
A.a9X.prototype={}
A.Zg.prototype={
p(d,e){var x=this.c,w=B.i(x).h("lF<e4.E,zA>")
return B.aE(B.av(new B.lF(x,new A.aoO(this),w),!0,w.h("G.E")),C.m,null,C.b6,C.l,null)}}
A.zA.prototype={
p(d,e){var x=null,w=!this.d?x:D.a2p
return B.R(x,B.baZ(!1,w,C.h,C.OW,0,2,!0,this.c,x,4,x,x,8,x,4,x,x,new A.aLK(this),C.dM,x,x),C.h,x,x,x,x,60,x,x,D.a_U,x,x,60)}}
A.a13.prototype={
p(d,e){var x=null,w=B.dW([C.n,C.jL,C.nd,C.wt,D.wm],y.G),v=this.c
return B.a6(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.m3,C.uc,x,x),new A.Zg(w,v.c,this.d,x)],y.p),C.aM,x,C.j,C.l,C.p)}}
A.a5U.prototype={}
var z=a.updateTypes(["~()","~(DE)","J(hc)","~(NL)","~(DD)","~(kQ)","~(jl)","~(hc?)","zA(j)"])
A.aT_.prototype={
$0(){},
$S:0}
A.b0z.prototype={
$0(){var x=this.a
x.e=x.e.aKj(this.b)},
$S:0}
A.b0A.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bw(new Float64Array(16))
x.tU()
w=r.e
w=w.gvs(w)
v=r.e
x.oY(0,t/2-w.a/2,s/2-v.gvs(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.gvs(x)
return B.j_(B.dE(B.cy(C.aO,new A.KV(new B.a0(t,s,t,s),B.bbb(B.he(u,u,u,new A.a9W(r.e,u),x)),0.01,r.gaB2(),r.f,r.d),C.B,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaBf(),u,u,u),C.ao,u,u,u,u),C.t,u)},
$S:776}
A.b0G.prototype={
$0(){var x=this.a
x.D(new A.b0F(x))},
$S:0}
A.b0F.prototype={
$0(){var x,w="_controllerReset",v=this.a,u=B.c(v.w,w)
u.sl(0,u.a)
u=v.f.a
x=v.x
v.r=new B.F(B.c(v.w,w),new B.oJ(u,x),y.d.h("F<W.T>"))
B.c(v.w,w).e=C.hU
v.r.a.ab(0,v.gU_())
B.c(v.w,w).oP(0)},
$S:0}
A.b0E.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bcR(new A.b0D(w),x,y.l)},
$S:0}
A.b0D.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.R(x,new A.a13(v,new A.b0C(w,d),x),C.h,x,x,x,x,150,x,x,C.hW,x,x,1/0)},
$S:777}
A.b0C.prototype={
$1(d){var x=this.a
x.D(new A.b0B(x,d,this.b))},
$S:778}
A.b0B.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aKi(v,this.b)
B.bx(this.c,!1).tp(0,null)},
$S:0}
A.aK0.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.afh(d,B.U(C.d.al(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aR()?B.aQ():new B.aM(new B.aP())
this.b.zk(0,v,C.O6,x)},
$S:z+7}
A.anq.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.anp.prototype={
$1(d){var x=this.a
return new B.k(d.a+x.a,d.b+x.b)},
$S:252}
A.ano.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.aoO.prototype={
$1(d){var x=this.a
return new A.zA(d,d.m(0,x.d),new A.aoN(x,d),null)},
$S:z+8}
A.aoN.prototype={
$0(){this.a.e.$1(this.b)},
$S:13}
A.aLK.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.Wk.prototype
x.alD=x.k
x=A.X_.prototype
x.amu=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.RP.prototype,"gaz3","az4",1)
x(v,"gaB4","aB5",3)
x(v,"gaB0","aB1",4)
x(v,"gaz5","az6",5)
w(v,"gMT","aAv",0)
w(v,"gU3","aBj",0)
w(v=A.V1.prototype,"gU_","aAw",0)
x(v,"gaB2","aB3",1)
x(v,"gaBf","aBg",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.IV,B.hF)
u(B.a_,[A.a8b,A.a9X,A.aWV,A.hc,A.a5U])
u(B.A,[A.KV,A.tA])
u(B.D,[A.Wk,A.X_])
v(A.RP,A.Wk)
u(B.i7,[A.aT_,A.b0z,A.b0G,A.b0F,A.b0E,A.b0B,A.aoN,A.aLK])
u(B.q,[A.adE,A.Zg,A.zA,A.a13])
v(A.a8I,B.c1)
v(A.G5,B.tN)
v(A.V1,A.X_)
v(A.b0A,B.iw)
u(B.d2,[A.b0D,A.b0C,A.aK0,A.anq,A.anp,A.ano,A.aoO])
v(A.a9W,B.oi)
v(A.Yb,A.a9X)
v(A.aK_,B.L_)
x(A.Wk,B.co)
x(A.X_,B.co)
w(A.a9X,B.jb)})()
B.b_(b.typeUniverse,JSON.parse('{"IV":{"hF":["tj"],"fo":["tj"]},"KV":{"A":[],"d":[]},"RP":{"D":["KV"]},"adE":{"q":[],"d":[]},"a8I":{"c1":["bw"],"an":[]},"G5":{"V":[]},"tA":{"A":[],"d":[]},"V1":{"D":["tA"]},"a9W":{"an":[]},"Yb":{"jb":["hc?"],"G":["hc?"],"jb.E":"hc?"},"zA":{"q":[],"d":[]},"Zg":{"q":[],"d":[]},"a13":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a1
return{X:x("hc"),G:x("j"),s:x("B"),h:x("v<hc>"),g:x("v<k>"),p:x("v<d>"),z:x("ac<D<A>>"),d:x("oJ"),O:x("iC<z>"),C:x("rQ"),x:x("y"),U:x("tj"),L:x("a5<k>"),l:x("d")}})();(function constants(){D.hN=new B.j(4291677645)
D.O8=new A.hc(0,0,D.hN)
D.wm=new B.j(4280756007)
D.a_U=new B.a0(2,0,2,0)
D.a15=new B.aB(57686,"MaterialIcons",null,!1)
D.a2p=new B.bC(D.a15,null,C.n,null,null)
D.a1I=new B.aB(58659,"MaterialIcons",null,!1)
D.a38=new B.bC(D.a1I,null,null,null,null)
D.mi=new A.G5(0,"pan")
D.uQ=new A.G5(1,"scale")
D.az9=new A.G5(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bMv","bp6",()=>B.b([B.bn(A.b9y(B.b3()),"Triangles"),B.bn(A.b9y(B.b3()),"TrianglesStrip"),B.bn(A.b9y(B.b3()),"TriangleFan")],B.a1("v<m>")))})()}
$__dart_deferred_initializers__["/wJGBGd0qnIdgW/SKOq4n1JURQA="] = $__dart_deferred_initializers__.current
