goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48201 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48201(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48219 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48219(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46984 = coll;
var G__46985 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46984,G__46985) : shadow.dom.lazy_native_coll_seq.call(null,G__46984,G__46985));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46994 = arguments.length;
switch (G__46994) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47006 = arguments.length;
switch (G__47006) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47009 = arguments.length;
switch (G__47009) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47016 = arguments.length;
switch (G__47016) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47028 = arguments.length;
switch (G__47028) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47040 = arguments.length;
switch (G__47040) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47058){if((e47058 instanceof Object)){
var e = e47058;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47058;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47066 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47067 = null;
var count__47068 = (0);
var i__47069 = (0);
while(true){
if((i__47069 < count__47068)){
var el = chunk__47067.cljs$core$IIndexed$_nth$arity$2(null,i__47069);
var handler_48303__$1 = ((function (seq__47066,chunk__47067,count__47068,i__47069,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47066,chunk__47067,count__47068,i__47069,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48303__$1);


var G__48304 = seq__47066;
var G__48305 = chunk__47067;
var G__48306 = count__47068;
var G__48307 = (i__47069 + (1));
seq__47066 = G__48304;
chunk__47067 = G__48305;
count__47068 = G__48306;
i__47069 = G__48307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47066);
if(temp__5735__auto__){
var seq__47066__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47066__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47066__$1);
var G__48309 = cljs.core.chunk_rest(seq__47066__$1);
var G__48310 = c__4556__auto__;
var G__48311 = cljs.core.count(c__4556__auto__);
var G__48312 = (0);
seq__47066 = G__48309;
chunk__47067 = G__48310;
count__47068 = G__48311;
i__47069 = G__48312;
continue;
} else {
var el = cljs.core.first(seq__47066__$1);
var handler_48314__$1 = ((function (seq__47066,chunk__47067,count__47068,i__47069,el,seq__47066__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47066,chunk__47067,count__47068,i__47069,el,seq__47066__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48314__$1);


var G__48315 = cljs.core.next(seq__47066__$1);
var G__48316 = null;
var G__48317 = (0);
var G__48318 = (0);
seq__47066 = G__48315;
chunk__47067 = G__48316;
count__47068 = G__48317;
i__47069 = G__48318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47083 = arguments.length;
switch (G__47083) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47091 = cljs.core.seq(events);
var chunk__47092 = null;
var count__47093 = (0);
var i__47094 = (0);
while(true){
if((i__47094 < count__47093)){
var vec__47104 = chunk__47092.cljs$core$IIndexed$_nth$arity$2(null,i__47094);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48335 = seq__47091;
var G__48336 = chunk__47092;
var G__48337 = count__47093;
var G__48338 = (i__47094 + (1));
seq__47091 = G__48335;
chunk__47092 = G__48336;
count__47093 = G__48337;
i__47094 = G__48338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47091);
if(temp__5735__auto__){
var seq__47091__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47091__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47091__$1);
var G__48341 = cljs.core.chunk_rest(seq__47091__$1);
var G__48342 = c__4556__auto__;
var G__48343 = cljs.core.count(c__4556__auto__);
var G__48344 = (0);
seq__47091 = G__48341;
chunk__47092 = G__48342;
count__47093 = G__48343;
i__47094 = G__48344;
continue;
} else {
var vec__47113 = cljs.core.first(seq__47091__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47113,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48347 = cljs.core.next(seq__47091__$1);
var G__48348 = null;
var G__48349 = (0);
var G__48350 = (0);
seq__47091 = G__48347;
chunk__47092 = G__48348;
count__47093 = G__48349;
i__47094 = G__48350;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47118 = cljs.core.seq(styles);
var chunk__47119 = null;
var count__47120 = (0);
var i__47121 = (0);
while(true){
if((i__47121 < count__47120)){
var vec__47132 = chunk__47119.cljs$core$IIndexed$_nth$arity$2(null,i__47121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47132,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48358 = seq__47118;
var G__48359 = chunk__47119;
var G__48360 = count__47120;
var G__48361 = (i__47121 + (1));
seq__47118 = G__48358;
chunk__47119 = G__48359;
count__47120 = G__48360;
i__47121 = G__48361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47118);
if(temp__5735__auto__){
var seq__47118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47118__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47118__$1);
var G__48365 = cljs.core.chunk_rest(seq__47118__$1);
var G__48366 = c__4556__auto__;
var G__48367 = cljs.core.count(c__4556__auto__);
var G__48368 = (0);
seq__47118 = G__48365;
chunk__47119 = G__48366;
count__47120 = G__48367;
i__47121 = G__48368;
continue;
} else {
var vec__47137 = cljs.core.first(seq__47118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47137,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48376 = cljs.core.next(seq__47118__$1);
var G__48377 = null;
var G__48378 = (0);
var G__48379 = (0);
seq__47118 = G__48376;
chunk__47119 = G__48377;
count__47120 = G__48378;
i__47121 = G__48379;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47144_48381 = key;
var G__47144_48382__$1 = (((G__47144_48381 instanceof cljs.core.Keyword))?G__47144_48381.fqn:null);
switch (G__47144_48382__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48387 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48387,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48387,"aria-");
}
})())){
el.setAttribute(ks_48387,value);
} else {
(el[ks_48387] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47193){
var map__47194 = p__47193;
var map__47194__$1 = (((((!((map__47194 == null))))?(((((map__47194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47194):map__47194);
var props = map__47194__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47202 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47205 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47205,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47205;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47212 = arguments.length;
switch (G__47212) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47219){
var vec__47220 = p__47219;
var seq__47221 = cljs.core.seq(vec__47220);
var first__47222 = cljs.core.first(seq__47221);
var seq__47221__$1 = cljs.core.next(seq__47221);
var nn = first__47222;
var first__47222__$1 = cljs.core.first(seq__47221__$1);
var seq__47221__$2 = cljs.core.next(seq__47221__$1);
var np = first__47222__$1;
var nc = seq__47221__$2;
var node = vec__47220;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47225 = nn;
var G__47226 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47225,G__47226) : create_fn.call(null,G__47225,G__47226));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47227 = nn;
var G__47228 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47227,G__47228) : create_fn.call(null,G__47227,G__47228));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47232 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47232,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47232,(1),null);
var seq__47235_48412 = cljs.core.seq(node_children);
var chunk__47236_48413 = null;
var count__47237_48414 = (0);
var i__47238_48415 = (0);
while(true){
if((i__47238_48415 < count__47237_48414)){
var child_struct_48417 = chunk__47236_48413.cljs$core$IIndexed$_nth$arity$2(null,i__47238_48415);
var children_48418 = shadow.dom.dom_node(child_struct_48417);
if(cljs.core.seq_QMARK_(children_48418)){
var seq__47272_48419 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48418));
var chunk__47274_48420 = null;
var count__47275_48421 = (0);
var i__47276_48422 = (0);
while(true){
if((i__47276_48422 < count__47275_48421)){
var child_48427 = chunk__47274_48420.cljs$core$IIndexed$_nth$arity$2(null,i__47276_48422);
if(cljs.core.truth_(child_48427)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48427);


var G__48428 = seq__47272_48419;
var G__48429 = chunk__47274_48420;
var G__48430 = count__47275_48421;
var G__48431 = (i__47276_48422 + (1));
seq__47272_48419 = G__48428;
chunk__47274_48420 = G__48429;
count__47275_48421 = G__48430;
i__47276_48422 = G__48431;
continue;
} else {
var G__48432 = seq__47272_48419;
var G__48433 = chunk__47274_48420;
var G__48434 = count__47275_48421;
var G__48435 = (i__47276_48422 + (1));
seq__47272_48419 = G__48432;
chunk__47274_48420 = G__48433;
count__47275_48421 = G__48434;
i__47276_48422 = G__48435;
continue;
}
} else {
var temp__5735__auto___48438 = cljs.core.seq(seq__47272_48419);
if(temp__5735__auto___48438){
var seq__47272_48439__$1 = temp__5735__auto___48438;
if(cljs.core.chunked_seq_QMARK_(seq__47272_48439__$1)){
var c__4556__auto___48440 = cljs.core.chunk_first(seq__47272_48439__$1);
var G__48441 = cljs.core.chunk_rest(seq__47272_48439__$1);
var G__48442 = c__4556__auto___48440;
var G__48443 = cljs.core.count(c__4556__auto___48440);
var G__48444 = (0);
seq__47272_48419 = G__48441;
chunk__47274_48420 = G__48442;
count__47275_48421 = G__48443;
i__47276_48422 = G__48444;
continue;
} else {
var child_48446 = cljs.core.first(seq__47272_48439__$1);
if(cljs.core.truth_(child_48446)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48446);


var G__48448 = cljs.core.next(seq__47272_48439__$1);
var G__48449 = null;
var G__48450 = (0);
var G__48451 = (0);
seq__47272_48419 = G__48448;
chunk__47274_48420 = G__48449;
count__47275_48421 = G__48450;
i__47276_48422 = G__48451;
continue;
} else {
var G__48452 = cljs.core.next(seq__47272_48439__$1);
var G__48453 = null;
var G__48454 = (0);
var G__48455 = (0);
seq__47272_48419 = G__48452;
chunk__47274_48420 = G__48453;
count__47275_48421 = G__48454;
i__47276_48422 = G__48455;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48418);
}


var G__48457 = seq__47235_48412;
var G__48458 = chunk__47236_48413;
var G__48459 = count__47237_48414;
var G__48460 = (i__47238_48415 + (1));
seq__47235_48412 = G__48457;
chunk__47236_48413 = G__48458;
count__47237_48414 = G__48459;
i__47238_48415 = G__48460;
continue;
} else {
var temp__5735__auto___48464 = cljs.core.seq(seq__47235_48412);
if(temp__5735__auto___48464){
var seq__47235_48465__$1 = temp__5735__auto___48464;
if(cljs.core.chunked_seq_QMARK_(seq__47235_48465__$1)){
var c__4556__auto___48466 = cljs.core.chunk_first(seq__47235_48465__$1);
var G__48467 = cljs.core.chunk_rest(seq__47235_48465__$1);
var G__48468 = c__4556__auto___48466;
var G__48469 = cljs.core.count(c__4556__auto___48466);
var G__48470 = (0);
seq__47235_48412 = G__48467;
chunk__47236_48413 = G__48468;
count__47237_48414 = G__48469;
i__47238_48415 = G__48470;
continue;
} else {
var child_struct_48472 = cljs.core.first(seq__47235_48465__$1);
var children_48473 = shadow.dom.dom_node(child_struct_48472);
if(cljs.core.seq_QMARK_(children_48473)){
var seq__47287_48474 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48473));
var chunk__47289_48475 = null;
var count__47290_48476 = (0);
var i__47291_48477 = (0);
while(true){
if((i__47291_48477 < count__47290_48476)){
var child_48479 = chunk__47289_48475.cljs$core$IIndexed$_nth$arity$2(null,i__47291_48477);
if(cljs.core.truth_(child_48479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48479);


var G__48480 = seq__47287_48474;
var G__48481 = chunk__47289_48475;
var G__48482 = count__47290_48476;
var G__48483 = (i__47291_48477 + (1));
seq__47287_48474 = G__48480;
chunk__47289_48475 = G__48481;
count__47290_48476 = G__48482;
i__47291_48477 = G__48483;
continue;
} else {
var G__48484 = seq__47287_48474;
var G__48485 = chunk__47289_48475;
var G__48486 = count__47290_48476;
var G__48487 = (i__47291_48477 + (1));
seq__47287_48474 = G__48484;
chunk__47289_48475 = G__48485;
count__47290_48476 = G__48486;
i__47291_48477 = G__48487;
continue;
}
} else {
var temp__5735__auto___48488__$1 = cljs.core.seq(seq__47287_48474);
if(temp__5735__auto___48488__$1){
var seq__47287_48489__$1 = temp__5735__auto___48488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47287_48489__$1)){
var c__4556__auto___48490 = cljs.core.chunk_first(seq__47287_48489__$1);
var G__48491 = cljs.core.chunk_rest(seq__47287_48489__$1);
var G__48492 = c__4556__auto___48490;
var G__48493 = cljs.core.count(c__4556__auto___48490);
var G__48494 = (0);
seq__47287_48474 = G__48491;
chunk__47289_48475 = G__48492;
count__47290_48476 = G__48493;
i__47291_48477 = G__48494;
continue;
} else {
var child_48495 = cljs.core.first(seq__47287_48489__$1);
if(cljs.core.truth_(child_48495)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48495);


var G__48497 = cljs.core.next(seq__47287_48489__$1);
var G__48498 = null;
var G__48499 = (0);
var G__48500 = (0);
seq__47287_48474 = G__48497;
chunk__47289_48475 = G__48498;
count__47290_48476 = G__48499;
i__47291_48477 = G__48500;
continue;
} else {
var G__48502 = cljs.core.next(seq__47287_48489__$1);
var G__48503 = null;
var G__48504 = (0);
var G__48505 = (0);
seq__47287_48474 = G__48502;
chunk__47289_48475 = G__48503;
count__47290_48476 = G__48504;
i__47291_48477 = G__48505;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48473);
}


var G__48506 = cljs.core.next(seq__47235_48465__$1);
var G__48507 = null;
var G__48508 = (0);
var G__48509 = (0);
seq__47235_48412 = G__48506;
chunk__47236_48413 = G__48507;
count__47237_48414 = G__48508;
i__47238_48415 = G__48509;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47327 = cljs.core.seq(node);
var chunk__47329 = null;
var count__47330 = (0);
var i__47331 = (0);
while(true){
if((i__47331 < count__47330)){
var n = chunk__47329.cljs$core$IIndexed$_nth$arity$2(null,i__47331);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48519 = seq__47327;
var G__48520 = chunk__47329;
var G__48521 = count__47330;
var G__48522 = (i__47331 + (1));
seq__47327 = G__48519;
chunk__47329 = G__48520;
count__47330 = G__48521;
i__47331 = G__48522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47327);
if(temp__5735__auto__){
var seq__47327__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47327__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47327__$1);
var G__48524 = cljs.core.chunk_rest(seq__47327__$1);
var G__48525 = c__4556__auto__;
var G__48526 = cljs.core.count(c__4556__auto__);
var G__48527 = (0);
seq__47327 = G__48524;
chunk__47329 = G__48525;
count__47330 = G__48526;
i__47331 = G__48527;
continue;
} else {
var n = cljs.core.first(seq__47327__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48529 = cljs.core.next(seq__47327__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__47327 = G__48529;
chunk__47329 = G__48530;
count__47330 = G__48531;
i__47331 = G__48532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47341 = arguments.length;
switch (G__47341) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47349 = arguments.length;
switch (G__47349) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47363 = arguments.length;
switch (G__47363) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48566 = arguments.length;
var i__4737__auto___48567 = (0);
while(true){
if((i__4737__auto___48567 < len__4736__auto___48566)){
args__4742__auto__.push((arguments[i__4737__auto___48567]));

var G__48568 = (i__4737__auto___48567 + (1));
i__4737__auto___48567 = G__48568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47383_48570 = cljs.core.seq(nodes);
var chunk__47384_48571 = null;
var count__47385_48572 = (0);
var i__47386_48573 = (0);
while(true){
if((i__47386_48573 < count__47385_48572)){
var node_48574 = chunk__47384_48571.cljs$core$IIndexed$_nth$arity$2(null,i__47386_48573);
fragment.appendChild(shadow.dom._to_dom(node_48574));


var G__48575 = seq__47383_48570;
var G__48576 = chunk__47384_48571;
var G__48577 = count__47385_48572;
var G__48578 = (i__47386_48573 + (1));
seq__47383_48570 = G__48575;
chunk__47384_48571 = G__48576;
count__47385_48572 = G__48577;
i__47386_48573 = G__48578;
continue;
} else {
var temp__5735__auto___48580 = cljs.core.seq(seq__47383_48570);
if(temp__5735__auto___48580){
var seq__47383_48581__$1 = temp__5735__auto___48580;
if(cljs.core.chunked_seq_QMARK_(seq__47383_48581__$1)){
var c__4556__auto___48582 = cljs.core.chunk_first(seq__47383_48581__$1);
var G__48583 = cljs.core.chunk_rest(seq__47383_48581__$1);
var G__48584 = c__4556__auto___48582;
var G__48585 = cljs.core.count(c__4556__auto___48582);
var G__48586 = (0);
seq__47383_48570 = G__48583;
chunk__47384_48571 = G__48584;
count__47385_48572 = G__48585;
i__47386_48573 = G__48586;
continue;
} else {
var node_48590 = cljs.core.first(seq__47383_48581__$1);
fragment.appendChild(shadow.dom._to_dom(node_48590));


var G__48592 = cljs.core.next(seq__47383_48581__$1);
var G__48593 = null;
var G__48594 = (0);
var G__48595 = (0);
seq__47383_48570 = G__48592;
chunk__47384_48571 = G__48593;
count__47385_48572 = G__48594;
i__47386_48573 = G__48595;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47378){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47378));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47402_48597 = cljs.core.seq(scripts);
var chunk__47403_48598 = null;
var count__47404_48599 = (0);
var i__47405_48600 = (0);
while(true){
if((i__47405_48600 < count__47404_48599)){
var vec__47421_48602 = chunk__47403_48598.cljs$core$IIndexed$_nth$arity$2(null,i__47405_48600);
var script_tag_48603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421_48602,(0),null);
var script_body_48604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47421_48602,(1),null);
eval(script_body_48604);


var G__48606 = seq__47402_48597;
var G__48607 = chunk__47403_48598;
var G__48608 = count__47404_48599;
var G__48609 = (i__47405_48600 + (1));
seq__47402_48597 = G__48606;
chunk__47403_48598 = G__48607;
count__47404_48599 = G__48608;
i__47405_48600 = G__48609;
continue;
} else {
var temp__5735__auto___48613 = cljs.core.seq(seq__47402_48597);
if(temp__5735__auto___48613){
var seq__47402_48614__$1 = temp__5735__auto___48613;
if(cljs.core.chunked_seq_QMARK_(seq__47402_48614__$1)){
var c__4556__auto___48615 = cljs.core.chunk_first(seq__47402_48614__$1);
var G__48616 = cljs.core.chunk_rest(seq__47402_48614__$1);
var G__48617 = c__4556__auto___48615;
var G__48618 = cljs.core.count(c__4556__auto___48615);
var G__48619 = (0);
seq__47402_48597 = G__48616;
chunk__47403_48598 = G__48617;
count__47404_48599 = G__48618;
i__47405_48600 = G__48619;
continue;
} else {
var vec__47425_48622 = cljs.core.first(seq__47402_48614__$1);
var script_tag_48623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425_48622,(0),null);
var script_body_48624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47425_48622,(1),null);
eval(script_body_48624);


var G__48630 = cljs.core.next(seq__47402_48614__$1);
var G__48631 = null;
var G__48632 = (0);
var G__48633 = (0);
seq__47402_48597 = G__48630;
chunk__47403_48598 = G__48631;
count__47404_48599 = G__48632;
i__47405_48600 = G__48633;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47430){
var vec__47431 = p__47430;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47431,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47431,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47449 = arguments.length;
switch (G__47449) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47476 = cljs.core.seq(style_keys);
var chunk__47477 = null;
var count__47478 = (0);
var i__47479 = (0);
while(true){
if((i__47479 < count__47478)){
var it = chunk__47477.cljs$core$IIndexed$_nth$arity$2(null,i__47479);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48666 = seq__47476;
var G__48667 = chunk__47477;
var G__48668 = count__47478;
var G__48669 = (i__47479 + (1));
seq__47476 = G__48666;
chunk__47477 = G__48667;
count__47478 = G__48668;
i__47479 = G__48669;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47476);
if(temp__5735__auto__){
var seq__47476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47476__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47476__$1);
var G__48674 = cljs.core.chunk_rest(seq__47476__$1);
var G__48675 = c__4556__auto__;
var G__48676 = cljs.core.count(c__4556__auto__);
var G__48677 = (0);
seq__47476 = G__48674;
chunk__47477 = G__48675;
count__47478 = G__48676;
i__47479 = G__48677;
continue;
} else {
var it = cljs.core.first(seq__47476__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48679 = cljs.core.next(seq__47476__$1);
var G__48680 = null;
var G__48681 = (0);
var G__48682 = (0);
seq__47476 = G__48679;
chunk__47477 = G__48680;
count__47478 = G__48681;
i__47479 = G__48682;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47497,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47507 = k47497;
var G__47507__$1 = (((G__47507 instanceof cljs.core.Keyword))?G__47507.fqn:null);
switch (G__47507__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47497,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47519){
var vec__47521 = p__47519;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47496){
var self__ = this;
var G__47496__$1 = this;
return (new cljs.core.RecordIter((0),G__47496__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47498,other47499){
var self__ = this;
var this47498__$1 = this;
return (((!((other47499 == null)))) && ((this47498__$1.constructor === other47499.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47498__$1.x,other47499.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47498__$1.y,other47499.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47498__$1.__extmap,other47499.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47496){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47547 = cljs.core.keyword_identical_QMARK_;
var expr__47548 = k__4388__auto__;
if(cljs.core.truth_((pred__47547.cljs$core$IFn$_invoke$arity$2 ? pred__47547.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47548) : pred__47547.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47548)))){
return (new shadow.dom.Coordinate(G__47496,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47547.cljs$core$IFn$_invoke$arity$2 ? pred__47547.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47548) : pred__47547.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47548)))){
return (new shadow.dom.Coordinate(self__.x,G__47496,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47496),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47496){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47496,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47500){
var extmap__4419__auto__ = (function (){var G__47562 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47500,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47500)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47562);
} else {
return G__47562;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47500),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47500),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47595,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47629 = k47595;
var G__47629__$1 = (((G__47629 instanceof cljs.core.Keyword))?G__47629.fqn:null);
switch (G__47629__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47595,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47639){
var vec__47640 = p__47639;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47594){
var self__ = this;
var G__47594__$1 = this;
return (new cljs.core.RecordIter((0),G__47594__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47596,other47597){
var self__ = this;
var this47596__$1 = this;
return (((!((other47597 == null)))) && ((this47596__$1.constructor === other47597.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47596__$1.w,other47597.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47596__$1.h,other47597.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47596__$1.__extmap,other47597.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47594){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47700 = cljs.core.keyword_identical_QMARK_;
var expr__47701 = k__4388__auto__;
if(cljs.core.truth_((pred__47700.cljs$core$IFn$_invoke$arity$2 ? pred__47700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47701) : pred__47700.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47701)))){
return (new shadow.dom.Size(G__47594,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47700.cljs$core$IFn$_invoke$arity$2 ? pred__47700.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47701) : pred__47700.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47701)))){
return (new shadow.dom.Size(self__.w,G__47594,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47594),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47594){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47594,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47600){
var extmap__4419__auto__ = (function (){var G__47761 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47600,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47761);
} else {
return G__47761;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47600),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47600),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48894 = (i + (1));
var G__48895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48894;
ret = G__48895;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47813){
var vec__47814 = p__47813;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47824 = arguments.length;
switch (G__47824) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48912 = ps;
var G__48913 = (i + (1));
el__$1 = G__48912;
i = G__48913;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47890 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47890,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47890,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47890,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47896_48917 = cljs.core.seq(props);
var chunk__47897_48918 = null;
var count__47898_48919 = (0);
var i__47899_48920 = (0);
while(true){
if((i__47899_48920 < count__47898_48919)){
var vec__47919_48921 = chunk__47897_48918.cljs$core$IIndexed$_nth$arity$2(null,i__47899_48920);
var k_48922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919_48921,(0),null);
var v_48923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919_48921,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48922);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48922),v_48923);


var G__48929 = seq__47896_48917;
var G__48930 = chunk__47897_48918;
var G__48931 = count__47898_48919;
var G__48932 = (i__47899_48920 + (1));
seq__47896_48917 = G__48929;
chunk__47897_48918 = G__48930;
count__47898_48919 = G__48931;
i__47899_48920 = G__48932;
continue;
} else {
var temp__5735__auto___48933 = cljs.core.seq(seq__47896_48917);
if(temp__5735__auto___48933){
var seq__47896_48935__$1 = temp__5735__auto___48933;
if(cljs.core.chunked_seq_QMARK_(seq__47896_48935__$1)){
var c__4556__auto___48936 = cljs.core.chunk_first(seq__47896_48935__$1);
var G__48937 = cljs.core.chunk_rest(seq__47896_48935__$1);
var G__48938 = c__4556__auto___48936;
var G__48939 = cljs.core.count(c__4556__auto___48936);
var G__48940 = (0);
seq__47896_48917 = G__48937;
chunk__47897_48918 = G__48938;
count__47898_48919 = G__48939;
i__47899_48920 = G__48940;
continue;
} else {
var vec__47928_48941 = cljs.core.first(seq__47896_48935__$1);
var k_48942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47928_48941,(0),null);
var v_48943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47928_48941,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48942);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48942),v_48943);


var G__48944 = cljs.core.next(seq__47896_48935__$1);
var G__48945 = null;
var G__48946 = (0);
var G__48947 = (0);
seq__47896_48917 = G__48944;
chunk__47897_48918 = G__48945;
count__47898_48919 = G__48946;
i__47899_48920 = G__48947;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47952 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952,(1),null);
var seq__47955_48953 = cljs.core.seq(node_children);
var chunk__47957_48954 = null;
var count__47958_48955 = (0);
var i__47959_48956 = (0);
while(true){
if((i__47959_48956 < count__47958_48955)){
var child_struct_48959 = chunk__47957_48954.cljs$core$IIndexed$_nth$arity$2(null,i__47959_48956);
if((!((child_struct_48959 == null)))){
if(typeof child_struct_48959 === 'string'){
var text_48962 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48962),child_struct_48959].join(''));
} else {
var children_48963 = shadow.dom.svg_node(child_struct_48959);
if(cljs.core.seq_QMARK_(children_48963)){
var seq__48015_48964 = cljs.core.seq(children_48963);
var chunk__48017_48965 = null;
var count__48018_48966 = (0);
var i__48019_48967 = (0);
while(true){
if((i__48019_48967 < count__48018_48966)){
var child_48968 = chunk__48017_48965.cljs$core$IIndexed$_nth$arity$2(null,i__48019_48967);
if(cljs.core.truth_(child_48968)){
node.appendChild(child_48968);


var G__48970 = seq__48015_48964;
var G__48971 = chunk__48017_48965;
var G__48972 = count__48018_48966;
var G__48973 = (i__48019_48967 + (1));
seq__48015_48964 = G__48970;
chunk__48017_48965 = G__48971;
count__48018_48966 = G__48972;
i__48019_48967 = G__48973;
continue;
} else {
var G__48974 = seq__48015_48964;
var G__48975 = chunk__48017_48965;
var G__48976 = count__48018_48966;
var G__48977 = (i__48019_48967 + (1));
seq__48015_48964 = G__48974;
chunk__48017_48965 = G__48975;
count__48018_48966 = G__48976;
i__48019_48967 = G__48977;
continue;
}
} else {
var temp__5735__auto___48981 = cljs.core.seq(seq__48015_48964);
if(temp__5735__auto___48981){
var seq__48015_48983__$1 = temp__5735__auto___48981;
if(cljs.core.chunked_seq_QMARK_(seq__48015_48983__$1)){
var c__4556__auto___48984 = cljs.core.chunk_first(seq__48015_48983__$1);
var G__48985 = cljs.core.chunk_rest(seq__48015_48983__$1);
var G__48986 = c__4556__auto___48984;
var G__48987 = cljs.core.count(c__4556__auto___48984);
var G__48988 = (0);
seq__48015_48964 = G__48985;
chunk__48017_48965 = G__48986;
count__48018_48966 = G__48987;
i__48019_48967 = G__48988;
continue;
} else {
var child_48989 = cljs.core.first(seq__48015_48983__$1);
if(cljs.core.truth_(child_48989)){
node.appendChild(child_48989);


var G__48991 = cljs.core.next(seq__48015_48983__$1);
var G__48992 = null;
var G__48993 = (0);
var G__48994 = (0);
seq__48015_48964 = G__48991;
chunk__48017_48965 = G__48992;
count__48018_48966 = G__48993;
i__48019_48967 = G__48994;
continue;
} else {
var G__48996 = cljs.core.next(seq__48015_48983__$1);
var G__48997 = null;
var G__48998 = (0);
var G__48999 = (0);
seq__48015_48964 = G__48996;
chunk__48017_48965 = G__48997;
count__48018_48966 = G__48998;
i__48019_48967 = G__48999;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48963);
}
}


var G__49000 = seq__47955_48953;
var G__49001 = chunk__47957_48954;
var G__49002 = count__47958_48955;
var G__49003 = (i__47959_48956 + (1));
seq__47955_48953 = G__49000;
chunk__47957_48954 = G__49001;
count__47958_48955 = G__49002;
i__47959_48956 = G__49003;
continue;
} else {
var G__49005 = seq__47955_48953;
var G__49006 = chunk__47957_48954;
var G__49007 = count__47958_48955;
var G__49008 = (i__47959_48956 + (1));
seq__47955_48953 = G__49005;
chunk__47957_48954 = G__49006;
count__47958_48955 = G__49007;
i__47959_48956 = G__49008;
continue;
}
} else {
var temp__5735__auto___49010 = cljs.core.seq(seq__47955_48953);
if(temp__5735__auto___49010){
var seq__47955_49011__$1 = temp__5735__auto___49010;
if(cljs.core.chunked_seq_QMARK_(seq__47955_49011__$1)){
var c__4556__auto___49013 = cljs.core.chunk_first(seq__47955_49011__$1);
var G__49014 = cljs.core.chunk_rest(seq__47955_49011__$1);
var G__49015 = c__4556__auto___49013;
var G__49016 = cljs.core.count(c__4556__auto___49013);
var G__49017 = (0);
seq__47955_48953 = G__49014;
chunk__47957_48954 = G__49015;
count__47958_48955 = G__49016;
i__47959_48956 = G__49017;
continue;
} else {
var child_struct_49018 = cljs.core.first(seq__47955_49011__$1);
if((!((child_struct_49018 == null)))){
if(typeof child_struct_49018 === 'string'){
var text_49021 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49021),child_struct_49018].join(''));
} else {
var children_49022 = shadow.dom.svg_node(child_struct_49018);
if(cljs.core.seq_QMARK_(children_49022)){
var seq__48042_49024 = cljs.core.seq(children_49022);
var chunk__48044_49025 = null;
var count__48045_49026 = (0);
var i__48046_49027 = (0);
while(true){
if((i__48046_49027 < count__48045_49026)){
var child_49028 = chunk__48044_49025.cljs$core$IIndexed$_nth$arity$2(null,i__48046_49027);
if(cljs.core.truth_(child_49028)){
node.appendChild(child_49028);


var G__49029 = seq__48042_49024;
var G__49030 = chunk__48044_49025;
var G__49031 = count__48045_49026;
var G__49032 = (i__48046_49027 + (1));
seq__48042_49024 = G__49029;
chunk__48044_49025 = G__49030;
count__48045_49026 = G__49031;
i__48046_49027 = G__49032;
continue;
} else {
var G__49033 = seq__48042_49024;
var G__49034 = chunk__48044_49025;
var G__49035 = count__48045_49026;
var G__49036 = (i__48046_49027 + (1));
seq__48042_49024 = G__49033;
chunk__48044_49025 = G__49034;
count__48045_49026 = G__49035;
i__48046_49027 = G__49036;
continue;
}
} else {
var temp__5735__auto___49037__$1 = cljs.core.seq(seq__48042_49024);
if(temp__5735__auto___49037__$1){
var seq__48042_49038__$1 = temp__5735__auto___49037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48042_49038__$1)){
var c__4556__auto___49039 = cljs.core.chunk_first(seq__48042_49038__$1);
var G__49040 = cljs.core.chunk_rest(seq__48042_49038__$1);
var G__49041 = c__4556__auto___49039;
var G__49042 = cljs.core.count(c__4556__auto___49039);
var G__49043 = (0);
seq__48042_49024 = G__49040;
chunk__48044_49025 = G__49041;
count__48045_49026 = G__49042;
i__48046_49027 = G__49043;
continue;
} else {
var child_49045 = cljs.core.first(seq__48042_49038__$1);
if(cljs.core.truth_(child_49045)){
node.appendChild(child_49045);


var G__49047 = cljs.core.next(seq__48042_49038__$1);
var G__49048 = null;
var G__49049 = (0);
var G__49050 = (0);
seq__48042_49024 = G__49047;
chunk__48044_49025 = G__49048;
count__48045_49026 = G__49049;
i__48046_49027 = G__49050;
continue;
} else {
var G__49051 = cljs.core.next(seq__48042_49038__$1);
var G__49052 = null;
var G__49053 = (0);
var G__49054 = (0);
seq__48042_49024 = G__49051;
chunk__48044_49025 = G__49052;
count__48045_49026 = G__49053;
i__48046_49027 = G__49054;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49022);
}
}


var G__49055 = cljs.core.next(seq__47955_49011__$1);
var G__49056 = null;
var G__49057 = (0);
var G__49058 = (0);
seq__47955_48953 = G__49055;
chunk__47957_48954 = G__49056;
count__47958_48955 = G__49057;
i__47959_48956 = G__49058;
continue;
} else {
var G__49059 = cljs.core.next(seq__47955_49011__$1);
var G__49060 = null;
var G__49061 = (0);
var G__49062 = (0);
seq__47955_48953 = G__49059;
chunk__47957_48954 = G__49060;
count__47958_48955 = G__49061;
i__47959_48956 = G__49062;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49077 = arguments.length;
var i__4737__auto___49078 = (0);
while(true){
if((i__4737__auto___49078 < len__4736__auto___49077)){
args__4742__auto__.push((arguments[i__4737__auto___49078]));

var G__49080 = (i__4737__auto___49078 + (1));
i__4737__auto___49078 = G__49080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48124){
var G__48125 = cljs.core.first(seq48124);
var seq48124__$1 = cljs.core.next(seq48124);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48125,seq48124__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48142 = arguments.length;
switch (G__48142) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__44022__auto___49103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_48158){
var state_val_48159 = (state_48158[(1)]);
if((state_val_48159 === (1))){
var state_48158__$1 = state_48158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48158__$1,(2),once_or_cleanup);
} else {
if((state_val_48159 === (2))){
var inst_48155 = (state_48158[(2)]);
var inst_48156 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48158__$1 = (function (){var statearr_48165 = state_48158;
(statearr_48165[(7)] = inst_48155);

return statearr_48165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48158__$1,inst_48156);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43870__auto__ = null;
var shadow$dom$state_machine__43870__auto____0 = (function (){
var statearr_48168 = [null,null,null,null,null,null,null,null];
(statearr_48168[(0)] = shadow$dom$state_machine__43870__auto__);

(statearr_48168[(1)] = (1));

return statearr_48168;
});
var shadow$dom$state_machine__43870__auto____1 = (function (state_48158){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_48158);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e48170){var ex__43873__auto__ = e48170;
var statearr_48171_49126 = state_48158;
(statearr_48171_49126[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_48158[(4)]))){
var statearr_48173_49128 = state_48158;
(statearr_48173_49128[(1)] = cljs.core.first((state_48158[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49137 = state_48158;
state_48158 = G__49137;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
shadow$dom$state_machine__43870__auto__ = function(state_48158){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43870__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43870__auto____1.call(this,state_48158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43870__auto____0;
shadow$dom$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43870__auto____1;
return shadow$dom$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_48178 = f__44023__auto__();
(statearr_48178[(6)] = c__44022__auto___49103);

return statearr_48178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
