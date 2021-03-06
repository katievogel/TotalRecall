goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50017){
var map__50018 = p__50017;
var map__50018__$1 = (((((!((map__50018 == null))))?(((((map__50018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50018):map__50018);
var m = map__50018__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50021_50278 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50022_50279 = null;
var count__50023_50280 = (0);
var i__50024_50281 = (0);
while(true){
if((i__50024_50281 < count__50023_50280)){
var f_50287 = chunk__50022_50279.cljs$core$IIndexed$_nth$arity$2(null,i__50024_50281);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50287], 0));


var G__50291 = seq__50021_50278;
var G__50292 = chunk__50022_50279;
var G__50293 = count__50023_50280;
var G__50294 = (i__50024_50281 + (1));
seq__50021_50278 = G__50291;
chunk__50022_50279 = G__50292;
count__50023_50280 = G__50293;
i__50024_50281 = G__50294;
continue;
} else {
var temp__5735__auto___50295 = cljs.core.seq(seq__50021_50278);
if(temp__5735__auto___50295){
var seq__50021_50296__$1 = temp__5735__auto___50295;
if(cljs.core.chunked_seq_QMARK_(seq__50021_50296__$1)){
var c__4556__auto___50297 = cljs.core.chunk_first(seq__50021_50296__$1);
var G__50298 = cljs.core.chunk_rest(seq__50021_50296__$1);
var G__50299 = c__4556__auto___50297;
var G__50300 = cljs.core.count(c__4556__auto___50297);
var G__50301 = (0);
seq__50021_50278 = G__50298;
chunk__50022_50279 = G__50299;
count__50023_50280 = G__50300;
i__50024_50281 = G__50301;
continue;
} else {
var f_50302 = cljs.core.first(seq__50021_50296__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50302], 0));


var G__50305 = cljs.core.next(seq__50021_50296__$1);
var G__50306 = null;
var G__50307 = (0);
var G__50308 = (0);
seq__50021_50278 = G__50305;
chunk__50022_50279 = G__50306;
count__50023_50280 = G__50307;
i__50024_50281 = G__50308;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50317], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50317)))?cljs.core.second(arglists_50317):arglists_50317)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50029_50332 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50030_50333 = null;
var count__50031_50334 = (0);
var i__50032_50335 = (0);
while(true){
if((i__50032_50335 < count__50031_50334)){
var vec__50048_50336 = chunk__50030_50333.cljs$core$IIndexed$_nth$arity$2(null,i__50032_50335);
var name_50337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50048_50336,(0),null);
var map__50051_50338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50048_50336,(1),null);
var map__50051_50339__$1 = (((((!((map__50051_50338 == null))))?(((((map__50051_50338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50051_50338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50051_50338):map__50051_50338);
var doc_50340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50051_50339__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50051_50339__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50337], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50341], 0));

if(cljs.core.truth_(doc_50340)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50340], 0));
} else {
}


var G__50346 = seq__50029_50332;
var G__50347 = chunk__50030_50333;
var G__50348 = count__50031_50334;
var G__50349 = (i__50032_50335 + (1));
seq__50029_50332 = G__50346;
chunk__50030_50333 = G__50347;
count__50031_50334 = G__50348;
i__50032_50335 = G__50349;
continue;
} else {
var temp__5735__auto___50350 = cljs.core.seq(seq__50029_50332);
if(temp__5735__auto___50350){
var seq__50029_50351__$1 = temp__5735__auto___50350;
if(cljs.core.chunked_seq_QMARK_(seq__50029_50351__$1)){
var c__4556__auto___50352 = cljs.core.chunk_first(seq__50029_50351__$1);
var G__50353 = cljs.core.chunk_rest(seq__50029_50351__$1);
var G__50354 = c__4556__auto___50352;
var G__50355 = cljs.core.count(c__4556__auto___50352);
var G__50356 = (0);
seq__50029_50332 = G__50353;
chunk__50030_50333 = G__50354;
count__50031_50334 = G__50355;
i__50032_50335 = G__50356;
continue;
} else {
var vec__50059_50358 = cljs.core.first(seq__50029_50351__$1);
var name_50359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50059_50358,(0),null);
var map__50062_50360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50059_50358,(1),null);
var map__50062_50361__$1 = (((((!((map__50062_50360 == null))))?(((((map__50062_50360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50062_50360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50062_50360):map__50062_50360);
var doc_50362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062_50361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062_50361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50359], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50363], 0));

if(cljs.core.truth_(doc_50362)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50362], 0));
} else {
}


var G__50370 = cljs.core.next(seq__50029_50351__$1);
var G__50371 = null;
var G__50372 = (0);
var G__50373 = (0);
seq__50029_50332 = G__50370;
chunk__50030_50333 = G__50371;
count__50031_50334 = G__50372;
i__50032_50335 = G__50373;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50066 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50067 = null;
var count__50068 = (0);
var i__50069 = (0);
while(true){
if((i__50069 < count__50068)){
var role = chunk__50067.cljs$core$IIndexed$_nth$arity$2(null,i__50069);
var temp__5735__auto___50378__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50378__$1)){
var spec_50379 = temp__5735__auto___50378__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50379)], 0));
} else {
}


var G__50380 = seq__50066;
var G__50381 = chunk__50067;
var G__50382 = count__50068;
var G__50383 = (i__50069 + (1));
seq__50066 = G__50380;
chunk__50067 = G__50381;
count__50068 = G__50382;
i__50069 = G__50383;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50066);
if(temp__5735__auto____$1){
var seq__50066__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50066__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50066__$1);
var G__50384 = cljs.core.chunk_rest(seq__50066__$1);
var G__50385 = c__4556__auto__;
var G__50386 = cljs.core.count(c__4556__auto__);
var G__50387 = (0);
seq__50066 = G__50384;
chunk__50067 = G__50385;
count__50068 = G__50386;
i__50069 = G__50387;
continue;
} else {
var role = cljs.core.first(seq__50066__$1);
var temp__5735__auto___50388__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50388__$2)){
var spec_50389 = temp__5735__auto___50388__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50389)], 0));
} else {
}


var G__50390 = cljs.core.next(seq__50066__$1);
var G__50391 = null;
var G__50392 = (0);
var G__50393 = (0);
seq__50066 = G__50390;
chunk__50067 = G__50391;
count__50068 = G__50392;
i__50069 = G__50393;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50398 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50399 = cljs.core.ex_cause(t);
via = G__50398;
t = G__50399;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50088 = datafied_throwable;
var map__50088__$1 = (((((!((map__50088 == null))))?(((((map__50088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50088):map__50088);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50088__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50089 = cljs.core.last(via);
var map__50089__$1 = (((((!((map__50089 == null))))?(((((map__50089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50089):map__50089);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50089__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50090 = data;
var map__50090__$1 = (((((!((map__50090 == null))))?(((((map__50090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50090):map__50090);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50090__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50091 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50091__$1 = (((((!((map__50091 == null))))?(((((map__50091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50091):map__50091);
var top_data = map__50091__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50108 = phase;
var G__50108__$1 = (((G__50108 instanceof cljs.core.Keyword))?G__50108.fqn:null);
switch (G__50108__$1) {
case "read-source":
var map__50109 = data;
var map__50109__$1 = (((((!((map__50109 == null))))?(((((map__50109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50109):map__50109);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50112 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50112);
var G__50112__$2 = (cljs.core.truth_((function (){var fexpr__50113 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50113.cljs$core$IFn$_invoke$arity$1 ? fexpr__50113.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50113.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50112__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50112__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50112__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50115 = top_data;
var G__50115__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50115,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50115);
var G__50115__$2 = (cljs.core.truth_((function (){var fexpr__50119 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50119.cljs$core$IFn$_invoke$arity$1 ? fexpr__50119.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50119.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50115__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50115__$1);
var G__50115__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50115__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50115__$2);
var G__50115__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50115__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50115__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50115__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50115__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50120 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50120,(3),null);
var G__50123 = top_data;
var G__50123__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50123,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50123);
var G__50123__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50123__$1);
var G__50123__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50123__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50123__$2);
var G__50123__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50123__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50123__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50123__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50123__$4;
}

break;
case "execution":
var vec__50124 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50084_SHARP_){
var or__4126__auto__ = (p1__50084_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50128.cljs$core$IFn$_invoke$arity$1 ? fexpr__50128.cljs$core$IFn$_invoke$arity$1(p1__50084_SHARP_) : fexpr__50128.call(null,p1__50084_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50130 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50130__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50130,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50130);
var G__50130__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50130__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50130__$1);
var G__50130__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50130__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50130__$2);
var G__50130__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50130__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50130__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50130__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50130__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50108__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50141){
var map__50151 = p__50141;
var map__50151__$1 = (((((!((map__50151 == null))))?(((((map__50151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50151):map__50151);
var triage_data = map__50151__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50172 = phase;
var G__50172__$1 = (((G__50172 instanceof cljs.core.Keyword))?G__50172.fqn:null);
switch (G__50172__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50173 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50175 = loc;
var G__50176 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50177_50427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50178_50428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50179_50429 = true;
var _STAR_print_fn_STAR__temp_val__50180_50430 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50179_50429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50180_50430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50131_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50131_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50178_50428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50177_50427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50173,G__50174,G__50175,G__50176) : format.call(null,G__50173,G__50174,G__50175,G__50176));

break;
case "macroexpansion":
var G__50199 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50200 = cause_type;
var G__50201 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50202 = loc;
var G__50203 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50199,G__50200,G__50201,G__50202,G__50203) : format.call(null,G__50199,G__50200,G__50201,G__50202,G__50203));

break;
case "compile-syntax-check":
var G__50204 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50205 = cause_type;
var G__50206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50207 = loc;
var G__50208 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50204,G__50205,G__50206,G__50207,G__50208) : format.call(null,G__50204,G__50205,G__50206,G__50207,G__50208));

break;
case "compilation":
var G__50209 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50210 = cause_type;
var G__50211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50212 = loc;
var G__50213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50209,G__50210,G__50211,G__50212,G__50213) : format.call(null,G__50209,G__50210,G__50211,G__50212,G__50213));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50221 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50224 = symbol;
var G__50227 = loc;
var G__50228 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50231_50432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50232_50433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50233_50434 = true;
var _STAR_print_fn_STAR__temp_val__50234_50435 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50233_50434);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50234_50435);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50136_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50136_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50232_50433);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50231_50432);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50221,G__50224,G__50227,G__50228) : format.call(null,G__50221,G__50224,G__50227,G__50228));
} else {
var G__50252 = "Execution error%s at %s(%s).\n%s\n";
var G__50253 = cause_type;
var G__50254 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50255 = loc;
var G__50256 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50252,G__50253,G__50254,G__50255,G__50256) : format.call(null,G__50252,G__50253,G__50254,G__50255,G__50256));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50172__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
