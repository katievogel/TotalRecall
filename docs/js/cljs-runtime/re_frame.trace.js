goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__42396){
var map__42398 = p__42396;
var map__42398__$1 = (((((!((map__42398 == null))))?(((((map__42398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42398):map__42398);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__42401_42431 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__42402_42432 = null;
var count__42403_42433 = (0);
var i__42404_42434 = (0);
while(true){
if((i__42404_42434 < count__42403_42433)){
var vec__42416_42435 = chunk__42402_42432.cljs$core$IIndexed$_nth$arity$2(null,i__42404_42434);
var k_42436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42416_42435,(0),null);
var cb_42437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42416_42435,(1),null);
try{var G__42420_42438 = cljs.core.deref(re_frame.trace.traces);
(cb_42437.cljs$core$IFn$_invoke$arity$1 ? cb_42437.cljs$core$IFn$_invoke$arity$1(G__42420_42438) : cb_42437.call(null,G__42420_42438));
}catch (e42419){var e_42439 = e42419;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42436,"while storing",cljs.core.deref(re_frame.trace.traces),e_42439], 0));
}

var G__42440 = seq__42401_42431;
var G__42441 = chunk__42402_42432;
var G__42442 = count__42403_42433;
var G__42443 = (i__42404_42434 + (1));
seq__42401_42431 = G__42440;
chunk__42402_42432 = G__42441;
count__42403_42433 = G__42442;
i__42404_42434 = G__42443;
continue;
} else {
var temp__5735__auto___42445 = cljs.core.seq(seq__42401_42431);
if(temp__5735__auto___42445){
var seq__42401_42451__$1 = temp__5735__auto___42445;
if(cljs.core.chunked_seq_QMARK_(seq__42401_42451__$1)){
var c__4556__auto___42453 = cljs.core.chunk_first(seq__42401_42451__$1);
var G__42454 = cljs.core.chunk_rest(seq__42401_42451__$1);
var G__42455 = c__4556__auto___42453;
var G__42456 = cljs.core.count(c__4556__auto___42453);
var G__42457 = (0);
seq__42401_42431 = G__42454;
chunk__42402_42432 = G__42455;
count__42403_42433 = G__42456;
i__42404_42434 = G__42457;
continue;
} else {
var vec__42422_42461 = cljs.core.first(seq__42401_42451__$1);
var k_42462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422_42461,(0),null);
var cb_42463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422_42461,(1),null);
try{var G__42426_42464 = cljs.core.deref(re_frame.trace.traces);
(cb_42463.cljs$core$IFn$_invoke$arity$1 ? cb_42463.cljs$core$IFn$_invoke$arity$1(G__42426_42464) : cb_42463.call(null,G__42426_42464));
}catch (e42425){var e_42465 = e42425;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42462,"while storing",cljs.core.deref(re_frame.trace.traces),e_42465], 0));
}

var G__42466 = cljs.core.next(seq__42401_42451__$1);
var G__42467 = null;
var G__42468 = (0);
var G__42469 = (0);
seq__42401_42431 = G__42466;
chunk__42402_42432 = G__42467;
count__42403_42433 = G__42468;
i__42404_42434 = G__42469;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
