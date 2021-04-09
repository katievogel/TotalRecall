goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52210 = arguments.length;
var i__4737__auto___52211 = (0);
while(true){
if((i__4737__auto___52211 < len__4736__auto___52210)){
args__4742__auto__.push((arguments[i__4737__auto___52211]));

var G__52212 = (i__4737__auto___52211 + (1));
i__4737__auto___52211 = G__52212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51955){
var G__51956 = cljs.core.first(seq51955);
var seq51955__$1 = cljs.core.next(seq51955);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51956,seq51955__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51957 = cljs.core.seq(sources);
var chunk__51958 = null;
var count__51959 = (0);
var i__51960 = (0);
while(true){
if((i__51960 < count__51959)){
var map__51968 = chunk__51958.cljs$core$IIndexed$_nth$arity$2(null,i__51960);
var map__51968__$1 = (((((!((map__51968 == null))))?(((((map__51968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51968):map__51968);
var src = map__51968__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51970){var e_52218 = e51970;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52218);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52218.message)].join('')));
}

var G__52221 = seq__51957;
var G__52222 = chunk__51958;
var G__52223 = count__51959;
var G__52224 = (i__51960 + (1));
seq__51957 = G__52221;
chunk__51958 = G__52222;
count__51959 = G__52223;
i__51960 = G__52224;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51957);
if(temp__5735__auto__){
var seq__51957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51957__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51957__$1);
var G__52225 = cljs.core.chunk_rest(seq__51957__$1);
var G__52226 = c__4556__auto__;
var G__52227 = cljs.core.count(c__4556__auto__);
var G__52228 = (0);
seq__51957 = G__52225;
chunk__51958 = G__52226;
count__51959 = G__52227;
i__51960 = G__52228;
continue;
} else {
var map__51971 = cljs.core.first(seq__51957__$1);
var map__51971__$1 = (((((!((map__51971 == null))))?(((((map__51971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51971):map__51971);
var src = map__51971__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51973){var e_52233 = e51973;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52233);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52233.message)].join('')));
}

var G__52234 = cljs.core.next(seq__51957__$1);
var G__52235 = null;
var G__52236 = (0);
var G__52237 = (0);
seq__51957 = G__52234;
chunk__51958 = G__52235;
count__51959 = G__52236;
i__51960 = G__52237;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51974 = cljs.core.seq(js_requires);
var chunk__51975 = null;
var count__51976 = (0);
var i__51977 = (0);
while(true){
if((i__51977 < count__51976)){
var js_ns = chunk__51975.cljs$core$IIndexed$_nth$arity$2(null,i__51977);
var require_str_52243 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52243);


var G__52244 = seq__51974;
var G__52245 = chunk__51975;
var G__52246 = count__51976;
var G__52247 = (i__51977 + (1));
seq__51974 = G__52244;
chunk__51975 = G__52245;
count__51976 = G__52246;
i__51977 = G__52247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51974);
if(temp__5735__auto__){
var seq__51974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51974__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51974__$1);
var G__52248 = cljs.core.chunk_rest(seq__51974__$1);
var G__52249 = c__4556__auto__;
var G__52250 = cljs.core.count(c__4556__auto__);
var G__52251 = (0);
seq__51974 = G__52248;
chunk__51975 = G__52249;
count__51976 = G__52250;
i__51977 = G__52251;
continue;
} else {
var js_ns = cljs.core.first(seq__51974__$1);
var require_str_52252 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52252);


var G__52253 = cljs.core.next(seq__51974__$1);
var G__52254 = null;
var G__52255 = (0);
var G__52256 = (0);
seq__51974 = G__52253;
chunk__51975 = G__52254;
count__51976 = G__52255;
i__51977 = G__52256;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51983){
var map__51984 = p__51983;
var map__51984__$1 = (((((!((map__51984 == null))))?(((((map__51984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51984):map__51984);
var msg = map__51984__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51984__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51984__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51987(s__51988){
return (new cljs.core.LazySeq(null,(function (){
var s__51988__$1 = s__51988;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51988__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52001 = cljs.core.first(xs__6292__auto__);
var map__52001__$1 = (((((!((map__52001 == null))))?(((((map__52001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52001):map__52001);
var src = map__52001__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51988__$1,map__52001,map__52001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51984,map__51984__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51987_$_iter__51989(s__51990){
return (new cljs.core.LazySeq(null,((function (s__51988__$1,map__52001,map__52001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51984,map__51984__$1,msg,info,reload_info){
return (function (){
var s__51990__$1 = s__51990;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51990__$1);
if(temp__5735__auto____$1){
var s__51990__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51990__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51990__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51992 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51991 = (0);
while(true){
if((i__51991 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51991);
cljs.core.chunk_append(b__51992,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52264 = (i__51991 + (1));
i__51991 = G__52264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51992),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51987_$_iter__51989(cljs.core.chunk_rest(s__51990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51992),null);
}
} else {
var warning = cljs.core.first(s__51990__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51987_$_iter__51989(cljs.core.rest(s__51990__$2)));
}
} else {
return null;
}
break;
}
});})(s__51988__$1,map__52001,map__52001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51984,map__51984__$1,msg,info,reload_info))
,null,null));
});})(s__51988__$1,map__52001,map__52001__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51984,map__51984__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51987(cljs.core.rest(s__51988__$1)));
} else {
var G__52269 = cljs.core.rest(s__51988__$1);
s__51988__$1 = G__52269;
continue;
}
} else {
var G__52270 = cljs.core.rest(s__51988__$1);
s__51988__$1 = G__52270;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52010_52271 = cljs.core.seq(warnings);
var chunk__52011_52272 = null;
var count__52012_52273 = (0);
var i__52013_52274 = (0);
while(true){
if((i__52013_52274 < count__52012_52273)){
var map__52025_52275 = chunk__52011_52272.cljs$core$IIndexed$_nth$arity$2(null,i__52013_52274);
var map__52025_52276__$1 = (((((!((map__52025_52275 == null))))?(((((map__52025_52275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52025_52275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52025_52275):map__52025_52275);
var w_52277 = map__52025_52276__$1;
var msg_52278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025_52276__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025_52276__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025_52276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025_52276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52281)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52279),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52280),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52278__$1)].join(''));


var G__52284 = seq__52010_52271;
var G__52285 = chunk__52011_52272;
var G__52286 = count__52012_52273;
var G__52287 = (i__52013_52274 + (1));
seq__52010_52271 = G__52284;
chunk__52011_52272 = G__52285;
count__52012_52273 = G__52286;
i__52013_52274 = G__52287;
continue;
} else {
var temp__5735__auto___52289 = cljs.core.seq(seq__52010_52271);
if(temp__5735__auto___52289){
var seq__52010_52291__$1 = temp__5735__auto___52289;
if(cljs.core.chunked_seq_QMARK_(seq__52010_52291__$1)){
var c__4556__auto___52292 = cljs.core.chunk_first(seq__52010_52291__$1);
var G__52293 = cljs.core.chunk_rest(seq__52010_52291__$1);
var G__52294 = c__4556__auto___52292;
var G__52295 = cljs.core.count(c__4556__auto___52292);
var G__52296 = (0);
seq__52010_52271 = G__52293;
chunk__52011_52272 = G__52294;
count__52012_52273 = G__52295;
i__52013_52274 = G__52296;
continue;
} else {
var map__52030_52297 = cljs.core.first(seq__52010_52291__$1);
var map__52030_52298__$1 = (((((!((map__52030_52297 == null))))?(((((map__52030_52297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52030_52297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52030_52297):map__52030_52297);
var w_52299 = map__52030_52298__$1;
var msg_52300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52030_52298__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52030_52298__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52030_52298__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52030_52298__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52303)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52301),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52302),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52300__$1)].join(''));


var G__52311 = cljs.core.next(seq__52010_52291__$1);
var G__52312 = null;
var G__52313 = (0);
var G__52314 = (0);
seq__52010_52271 = G__52311;
chunk__52011_52272 = G__52312;
count__52012_52273 = G__52313;
i__52013_52274 = G__52314;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51982_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51982_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52042){
var map__52043 = p__52042;
var map__52043__$1 = (((((!((map__52043 == null))))?(((((map__52043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52043):map__52043);
var msg = map__52043__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52043__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52045 = cljs.core.seq(updates);
var chunk__52047 = null;
var count__52048 = (0);
var i__52049 = (0);
while(true){
if((i__52049 < count__52048)){
var path = chunk__52047.cljs$core$IIndexed$_nth$arity$2(null,i__52049);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52097_52321 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52101_52322 = null;
var count__52102_52323 = (0);
var i__52103_52324 = (0);
while(true){
if((i__52103_52324 < count__52102_52323)){
var node_52325 = chunk__52101_52322.cljs$core$IIndexed$_nth$arity$2(null,i__52103_52324);
if(cljs.core.not(node_52325.shadow$old)){
var path_match_52327 = shadow.cljs.devtools.client.browser.match_paths(node_52325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52327)){
var new_link_52328 = (function (){var G__52114 = node_52325.cloneNode(true);
G__52114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52114;
})();
(node_52325.shadow$old = true);

(new_link_52328.onload = ((function (seq__52097_52321,chunk__52101_52322,count__52102_52323,i__52103_52324,seq__52045,chunk__52047,count__52048,i__52049,new_link_52328,path_match_52327,node_52325,path,map__52043,map__52043__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52325);
});})(seq__52097_52321,chunk__52101_52322,count__52102_52323,i__52103_52324,seq__52045,chunk__52047,count__52048,i__52049,new_link_52328,path_match_52327,node_52325,path,map__52043,map__52043__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52327], 0));

goog.dom.insertSiblingAfter(new_link_52328,node_52325);


var G__52331 = seq__52097_52321;
var G__52332 = chunk__52101_52322;
var G__52333 = count__52102_52323;
var G__52334 = (i__52103_52324 + (1));
seq__52097_52321 = G__52331;
chunk__52101_52322 = G__52332;
count__52102_52323 = G__52333;
i__52103_52324 = G__52334;
continue;
} else {
var G__52335 = seq__52097_52321;
var G__52336 = chunk__52101_52322;
var G__52337 = count__52102_52323;
var G__52338 = (i__52103_52324 + (1));
seq__52097_52321 = G__52335;
chunk__52101_52322 = G__52336;
count__52102_52323 = G__52337;
i__52103_52324 = G__52338;
continue;
}
} else {
var G__52339 = seq__52097_52321;
var G__52340 = chunk__52101_52322;
var G__52341 = count__52102_52323;
var G__52342 = (i__52103_52324 + (1));
seq__52097_52321 = G__52339;
chunk__52101_52322 = G__52340;
count__52102_52323 = G__52341;
i__52103_52324 = G__52342;
continue;
}
} else {
var temp__5735__auto___52345 = cljs.core.seq(seq__52097_52321);
if(temp__5735__auto___52345){
var seq__52097_52346__$1 = temp__5735__auto___52345;
if(cljs.core.chunked_seq_QMARK_(seq__52097_52346__$1)){
var c__4556__auto___52347 = cljs.core.chunk_first(seq__52097_52346__$1);
var G__52348 = cljs.core.chunk_rest(seq__52097_52346__$1);
var G__52349 = c__4556__auto___52347;
var G__52350 = cljs.core.count(c__4556__auto___52347);
var G__52351 = (0);
seq__52097_52321 = G__52348;
chunk__52101_52322 = G__52349;
count__52102_52323 = G__52350;
i__52103_52324 = G__52351;
continue;
} else {
var node_52352 = cljs.core.first(seq__52097_52346__$1);
if(cljs.core.not(node_52352.shadow$old)){
var path_match_52353 = shadow.cljs.devtools.client.browser.match_paths(node_52352.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52353)){
var new_link_52354 = (function (){var G__52121 = node_52352.cloneNode(true);
G__52121.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52353),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52121;
})();
(node_52352.shadow$old = true);

(new_link_52354.onload = ((function (seq__52097_52321,chunk__52101_52322,count__52102_52323,i__52103_52324,seq__52045,chunk__52047,count__52048,i__52049,new_link_52354,path_match_52353,node_52352,seq__52097_52346__$1,temp__5735__auto___52345,path,map__52043,map__52043__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52352);
});})(seq__52097_52321,chunk__52101_52322,count__52102_52323,i__52103_52324,seq__52045,chunk__52047,count__52048,i__52049,new_link_52354,path_match_52353,node_52352,seq__52097_52346__$1,temp__5735__auto___52345,path,map__52043,map__52043__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52353], 0));

goog.dom.insertSiblingAfter(new_link_52354,node_52352);


var G__52361 = cljs.core.next(seq__52097_52346__$1);
var G__52362 = null;
var G__52363 = (0);
var G__52364 = (0);
seq__52097_52321 = G__52361;
chunk__52101_52322 = G__52362;
count__52102_52323 = G__52363;
i__52103_52324 = G__52364;
continue;
} else {
var G__52365 = cljs.core.next(seq__52097_52346__$1);
var G__52366 = null;
var G__52367 = (0);
var G__52368 = (0);
seq__52097_52321 = G__52365;
chunk__52101_52322 = G__52366;
count__52102_52323 = G__52367;
i__52103_52324 = G__52368;
continue;
}
} else {
var G__52369 = cljs.core.next(seq__52097_52346__$1);
var G__52370 = null;
var G__52371 = (0);
var G__52372 = (0);
seq__52097_52321 = G__52369;
chunk__52101_52322 = G__52370;
count__52102_52323 = G__52371;
i__52103_52324 = G__52372;
continue;
}
}
} else {
}
}
break;
}


var G__52373 = seq__52045;
var G__52374 = chunk__52047;
var G__52375 = count__52048;
var G__52376 = (i__52049 + (1));
seq__52045 = G__52373;
chunk__52047 = G__52374;
count__52048 = G__52375;
i__52049 = G__52376;
continue;
} else {
var G__52377 = seq__52045;
var G__52378 = chunk__52047;
var G__52379 = count__52048;
var G__52380 = (i__52049 + (1));
seq__52045 = G__52377;
chunk__52047 = G__52378;
count__52048 = G__52379;
i__52049 = G__52380;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52045);
if(temp__5735__auto__){
var seq__52045__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52045__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52045__$1);
var G__52382 = cljs.core.chunk_rest(seq__52045__$1);
var G__52383 = c__4556__auto__;
var G__52384 = cljs.core.count(c__4556__auto__);
var G__52385 = (0);
seq__52045 = G__52382;
chunk__52047 = G__52383;
count__52048 = G__52384;
i__52049 = G__52385;
continue;
} else {
var path = cljs.core.first(seq__52045__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52123_52388 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52127_52389 = null;
var count__52128_52390 = (0);
var i__52129_52391 = (0);
while(true){
if((i__52129_52391 < count__52128_52390)){
var node_52394 = chunk__52127_52389.cljs$core$IIndexed$_nth$arity$2(null,i__52129_52391);
if(cljs.core.not(node_52394.shadow$old)){
var path_match_52396 = shadow.cljs.devtools.client.browser.match_paths(node_52394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52396)){
var new_link_52399 = (function (){var G__52141 = node_52394.cloneNode(true);
G__52141.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52396),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52141;
})();
(node_52394.shadow$old = true);

(new_link_52399.onload = ((function (seq__52123_52388,chunk__52127_52389,count__52128_52390,i__52129_52391,seq__52045,chunk__52047,count__52048,i__52049,new_link_52399,path_match_52396,node_52394,path,seq__52045__$1,temp__5735__auto__,map__52043,map__52043__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52394);
});})(seq__52123_52388,chunk__52127_52389,count__52128_52390,i__52129_52391,seq__52045,chunk__52047,count__52048,i__52049,new_link_52399,path_match_52396,node_52394,path,seq__52045__$1,temp__5735__auto__,map__52043,map__52043__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52396], 0));

goog.dom.insertSiblingAfter(new_link_52399,node_52394);


var G__52402 = seq__52123_52388;
var G__52403 = chunk__52127_52389;
var G__52404 = count__52128_52390;
var G__52405 = (i__52129_52391 + (1));
seq__52123_52388 = G__52402;
chunk__52127_52389 = G__52403;
count__52128_52390 = G__52404;
i__52129_52391 = G__52405;
continue;
} else {
var G__52407 = seq__52123_52388;
var G__52408 = chunk__52127_52389;
var G__52409 = count__52128_52390;
var G__52410 = (i__52129_52391 + (1));
seq__52123_52388 = G__52407;
chunk__52127_52389 = G__52408;
count__52128_52390 = G__52409;
i__52129_52391 = G__52410;
continue;
}
} else {
var G__52411 = seq__52123_52388;
var G__52412 = chunk__52127_52389;
var G__52413 = count__52128_52390;
var G__52414 = (i__52129_52391 + (1));
seq__52123_52388 = G__52411;
chunk__52127_52389 = G__52412;
count__52128_52390 = G__52413;
i__52129_52391 = G__52414;
continue;
}
} else {
var temp__5735__auto___52415__$1 = cljs.core.seq(seq__52123_52388);
if(temp__5735__auto___52415__$1){
var seq__52123_52416__$1 = temp__5735__auto___52415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52123_52416__$1)){
var c__4556__auto___52419 = cljs.core.chunk_first(seq__52123_52416__$1);
var G__52420 = cljs.core.chunk_rest(seq__52123_52416__$1);
var G__52421 = c__4556__auto___52419;
var G__52422 = cljs.core.count(c__4556__auto___52419);
var G__52423 = (0);
seq__52123_52388 = G__52420;
chunk__52127_52389 = G__52421;
count__52128_52390 = G__52422;
i__52129_52391 = G__52423;
continue;
} else {
var node_52424 = cljs.core.first(seq__52123_52416__$1);
if(cljs.core.not(node_52424.shadow$old)){
var path_match_52427 = shadow.cljs.devtools.client.browser.match_paths(node_52424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52427)){
var new_link_52428 = (function (){var G__52144 = node_52424.cloneNode(true);
G__52144.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52427),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52144;
})();
(node_52424.shadow$old = true);

(new_link_52428.onload = ((function (seq__52123_52388,chunk__52127_52389,count__52128_52390,i__52129_52391,seq__52045,chunk__52047,count__52048,i__52049,new_link_52428,path_match_52427,node_52424,seq__52123_52416__$1,temp__5735__auto___52415__$1,path,seq__52045__$1,temp__5735__auto__,map__52043,map__52043__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52424);
});})(seq__52123_52388,chunk__52127_52389,count__52128_52390,i__52129_52391,seq__52045,chunk__52047,count__52048,i__52049,new_link_52428,path_match_52427,node_52424,seq__52123_52416__$1,temp__5735__auto___52415__$1,path,seq__52045__$1,temp__5735__auto__,map__52043,map__52043__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52427], 0));

goog.dom.insertSiblingAfter(new_link_52428,node_52424);


var G__52431 = cljs.core.next(seq__52123_52416__$1);
var G__52432 = null;
var G__52433 = (0);
var G__52434 = (0);
seq__52123_52388 = G__52431;
chunk__52127_52389 = G__52432;
count__52128_52390 = G__52433;
i__52129_52391 = G__52434;
continue;
} else {
var G__52436 = cljs.core.next(seq__52123_52416__$1);
var G__52437 = null;
var G__52438 = (0);
var G__52439 = (0);
seq__52123_52388 = G__52436;
chunk__52127_52389 = G__52437;
count__52128_52390 = G__52438;
i__52129_52391 = G__52439;
continue;
}
} else {
var G__52440 = cljs.core.next(seq__52123_52416__$1);
var G__52441 = null;
var G__52442 = (0);
var G__52443 = (0);
seq__52123_52388 = G__52440;
chunk__52127_52389 = G__52441;
count__52128_52390 = G__52442;
i__52129_52391 = G__52443;
continue;
}
}
} else {
}
}
break;
}


var G__52446 = cljs.core.next(seq__52045__$1);
var G__52447 = null;
var G__52448 = (0);
var G__52449 = (0);
seq__52045 = G__52446;
chunk__52047 = G__52447;
count__52048 = G__52448;
i__52049 = G__52449;
continue;
} else {
var G__52450 = cljs.core.next(seq__52045__$1);
var G__52451 = null;
var G__52452 = (0);
var G__52453 = (0);
seq__52045 = G__52450;
chunk__52047 = G__52451;
count__52048 = G__52452;
i__52049 = G__52453;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52147){
var map__52148 = p__52147;
var map__52148__$1 = (((((!((map__52148 == null))))?(((((map__52148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52148):map__52148);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52148__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52154){
var map__52155 = p__52154;
var map__52155__$1 = (((((!((map__52155 == null))))?(((((map__52155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52155):map__52155);
var _ = map__52155__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52155__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52160,done,error){
var map__52162 = p__52160;
var map__52162__$1 = (((((!((map__52162 == null))))?(((((map__52162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52162):map__52162);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52165,done,error){
var map__52166 = p__52165;
var map__52166__$1 = (((((!((map__52166 == null))))?(((((map__52166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52166):map__52166);
var msg = map__52166__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52166__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52166__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52166__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52169){
var map__52170 = p__52169;
var map__52170__$1 = (((((!((map__52170 == null))))?(((((map__52170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52170):map__52170);
var src = map__52170__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52170__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52173 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52173) : done.call(null,G__52173));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52175){
var map__52176 = p__52175;
var map__52176__$1 = (((((!((map__52176 == null))))?(((((map__52176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52176):map__52176);
var msg__$1 = map__52176__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52176__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52178){var ex = e52178;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52180){
var map__52181 = p__52180;
var map__52181__$1 = (((((!((map__52181 == null))))?(((((map__52181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52181):map__52181);
var env = map__52181__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52185){
var map__52186 = p__52185;
var map__52186__$1 = (((((!((map__52186 == null))))?(((((map__52186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52186):map__52186);
var msg = map__52186__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52186__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52193){
var map__52194 = p__52193;
var map__52194__$1 = (((((!((map__52194 == null))))?(((((map__52194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52194):map__52194);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52194__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52194__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52201){
var map__52202 = p__52201;
var map__52202__$1 = (((((!((map__52202 == null))))?(((((map__52202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52202):map__52202);
var svc = map__52202__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
