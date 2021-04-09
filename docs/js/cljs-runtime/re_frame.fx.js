goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__43578 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43579 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43579);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43740 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43740)){
var new_db_43741 = temp__5735__auto___43740;
var fexpr__43584_43742 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43584_43742.cljs$core$IFn$_invoke$arity$1 ? fexpr__43584_43742.cljs$core$IFn$_invoke$arity$1(new_db_43741) : fexpr__43584_43742.call(null,new_db_43741));
} else {
}

var seq__43585 = cljs.core.seq(effects_without_db);
var chunk__43586 = null;
var count__43587 = (0);
var i__43588 = (0);
while(true){
if((i__43588 < count__43587)){
var vec__43597 = chunk__43586.cljs$core$IIndexed$_nth$arity$2(null,i__43588);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43597,(1),null);
var temp__5733__auto___43743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43743)){
var effect_fn_43744 = temp__5733__auto___43743;
(effect_fn_43744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43745 = seq__43585;
var G__43746 = chunk__43586;
var G__43747 = count__43587;
var G__43748 = (i__43588 + (1));
seq__43585 = G__43745;
chunk__43586 = G__43746;
count__43587 = G__43747;
i__43588 = G__43748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43585);
if(temp__5735__auto__){
var seq__43585__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43585__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43585__$1);
var G__43750 = cljs.core.chunk_rest(seq__43585__$1);
var G__43751 = c__4556__auto__;
var G__43752 = cljs.core.count(c__4556__auto__);
var G__43753 = (0);
seq__43585 = G__43750;
chunk__43586 = G__43751;
count__43587 = G__43752;
i__43588 = G__43753;
continue;
} else {
var vec__43603 = cljs.core.first(seq__43585__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603,(1),null);
var temp__5733__auto___43754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43754)){
var effect_fn_43755 = temp__5733__auto___43754;
(effect_fn_43755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43756 = cljs.core.next(seq__43585__$1);
var G__43757 = null;
var G__43758 = (0);
var G__43759 = (0);
seq__43585 = G__43756;
chunk__43586 = G__43757;
count__43587 = G__43758;
i__43588 = G__43759;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42374__auto___43760 = re_frame.interop.now();
var duration__42375__auto___43761 = (end__42374__auto___43760 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42375__auto___43761,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42374__auto___43760);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43578);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___43762 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___43762)){
var new_db_43763 = temp__5735__auto___43762;
var fexpr__43606_43765 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__43606_43765.cljs$core$IFn$_invoke$arity$1 ? fexpr__43606_43765.cljs$core$IFn$_invoke$arity$1(new_db_43763) : fexpr__43606_43765.call(null,new_db_43763));
} else {
}

var seq__43607 = cljs.core.seq(effects_without_db);
var chunk__43608 = null;
var count__43609 = (0);
var i__43610 = (0);
while(true){
if((i__43610 < count__43609)){
var vec__43630 = chunk__43608.cljs$core$IIndexed$_nth$arity$2(null,i__43610);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43630,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43630,(1),null);
var temp__5733__auto___43766 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43766)){
var effect_fn_43767 = temp__5733__auto___43766;
(effect_fn_43767.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43767.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43767.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43768 = seq__43607;
var G__43769 = chunk__43608;
var G__43770 = count__43609;
var G__43771 = (i__43610 + (1));
seq__43607 = G__43768;
chunk__43608 = G__43769;
count__43609 = G__43770;
i__43610 = G__43771;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43607);
if(temp__5735__auto__){
var seq__43607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43607__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43607__$1);
var G__43772 = cljs.core.chunk_rest(seq__43607__$1);
var G__43773 = c__4556__auto__;
var G__43774 = cljs.core.count(c__4556__auto__);
var G__43775 = (0);
seq__43607 = G__43772;
chunk__43608 = G__43773;
count__43609 = G__43774;
i__43610 = G__43775;
continue;
} else {
var vec__43636 = cljs.core.first(seq__43607__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43636,(1),null);
var temp__5733__auto___43777 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43777)){
var effect_fn_43779 = temp__5733__auto___43777;
(effect_fn_43779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43779.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43780 = cljs.core.next(seq__43607__$1);
var G__43781 = null;
var G__43782 = (0);
var G__43783 = (0);
seq__43607 = G__43780;
chunk__43608 = G__43781;
count__43609 = G__43782;
i__43610 = G__43783;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__43643){
var map__43645 = p__43643;
var map__43645__$1 = (((((!((map__43645 == null))))?(((((map__43645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43645):map__43645);
var effect = map__43645__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__43655 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43656 = null;
var count__43657 = (0);
var i__43658 = (0);
while(true){
if((i__43658 < count__43657)){
var effect = chunk__43656.cljs$core$IIndexed$_nth$arity$2(null,i__43658);
re_frame.fx.dispatch_later(effect);


var G__43786 = seq__43655;
var G__43787 = chunk__43656;
var G__43788 = count__43657;
var G__43789 = (i__43658 + (1));
seq__43655 = G__43786;
chunk__43656 = G__43787;
count__43657 = G__43788;
i__43658 = G__43789;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43655);
if(temp__5735__auto__){
var seq__43655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43655__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43655__$1);
var G__43791 = cljs.core.chunk_rest(seq__43655__$1);
var G__43792 = c__4556__auto__;
var G__43793 = cljs.core.count(c__4556__auto__);
var G__43794 = (0);
seq__43655 = G__43791;
chunk__43656 = G__43792;
count__43657 = G__43793;
i__43658 = G__43794;
continue;
} else {
var effect = cljs.core.first(seq__43655__$1);
re_frame.fx.dispatch_later(effect);


var G__43795 = cljs.core.next(seq__43655__$1);
var G__43796 = null;
var G__43797 = (0);
var G__43798 = (0);
seq__43655 = G__43795;
chunk__43656 = G__43796;
count__43657 = G__43797;
i__43658 = G__43798;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__43692 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__43693 = null;
var count__43694 = (0);
var i__43695 = (0);
while(true){
if((i__43695 < count__43694)){
var vec__43706 = chunk__43693.cljs$core$IIndexed$_nth$arity$2(null,i__43695);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43706,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43801 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43801)){
var effect_fn_43802 = temp__5733__auto___43801;
(effect_fn_43802.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43802.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43802.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43803 = seq__43692;
var G__43804 = chunk__43693;
var G__43805 = count__43694;
var G__43806 = (i__43695 + (1));
seq__43692 = G__43803;
chunk__43693 = G__43804;
count__43694 = G__43805;
i__43695 = G__43806;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43692);
if(temp__5735__auto__){
var seq__43692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43692__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43692__$1);
var G__43807 = cljs.core.chunk_rest(seq__43692__$1);
var G__43808 = c__4556__auto__;
var G__43809 = cljs.core.count(c__4556__auto__);
var G__43810 = (0);
seq__43692 = G__43807;
chunk__43693 = G__43808;
count__43694 = G__43809;
i__43695 = G__43810;
continue;
} else {
var vec__43714 = cljs.core.first(seq__43692__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43714,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43714,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___43814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43814)){
var effect_fn_43816 = temp__5733__auto___43814;
(effect_fn_43816.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43816.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43816.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__43817 = cljs.core.next(seq__43692__$1);
var G__43818 = null;
var G__43819 = (0);
var G__43820 = (0);
seq__43692 = G__43817;
chunk__43693 = G__43818;
count__43694 = G__43819;
i__43695 = G__43820;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__43719 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43720 = null;
var count__43721 = (0);
var i__43722 = (0);
while(true){
if((i__43722 < count__43721)){
var event = chunk__43720.cljs$core$IIndexed$_nth$arity$2(null,i__43722);
re_frame.router.dispatch(event);


var G__43823 = seq__43719;
var G__43824 = chunk__43720;
var G__43825 = count__43721;
var G__43826 = (i__43722 + (1));
seq__43719 = G__43823;
chunk__43720 = G__43824;
count__43721 = G__43825;
i__43722 = G__43826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43719);
if(temp__5735__auto__){
var seq__43719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43719__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43719__$1);
var G__43827 = cljs.core.chunk_rest(seq__43719__$1);
var G__43828 = c__4556__auto__;
var G__43829 = cljs.core.count(c__4556__auto__);
var G__43830 = (0);
seq__43719 = G__43827;
chunk__43720 = G__43828;
count__43721 = G__43829;
i__43722 = G__43830;
continue;
} else {
var event = cljs.core.first(seq__43719__$1);
re_frame.router.dispatch(event);


var G__43831 = cljs.core.next(seq__43719__$1);
var G__43832 = null;
var G__43833 = (0);
var G__43834 = (0);
seq__43719 = G__43831;
chunk__43720 = G__43832;
count__43721 = G__43833;
i__43722 = G__43834;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__43729 = cljs.core.seq(value);
var chunk__43730 = null;
var count__43731 = (0);
var i__43732 = (0);
while(true){
if((i__43732 < count__43731)){
var event = chunk__43730.cljs$core$IIndexed$_nth$arity$2(null,i__43732);
clear_event(event);


var G__43836 = seq__43729;
var G__43837 = chunk__43730;
var G__43838 = count__43731;
var G__43839 = (i__43732 + (1));
seq__43729 = G__43836;
chunk__43730 = G__43837;
count__43731 = G__43838;
i__43732 = G__43839;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43729);
if(temp__5735__auto__){
var seq__43729__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43729__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43729__$1);
var G__43840 = cljs.core.chunk_rest(seq__43729__$1);
var G__43841 = c__4556__auto__;
var G__43842 = cljs.core.count(c__4556__auto__);
var G__43843 = (0);
seq__43729 = G__43840;
chunk__43730 = G__43841;
count__43731 = G__43842;
i__43732 = G__43843;
continue;
} else {
var event = cljs.core.first(seq__43729__$1);
clear_event(event);


var G__43845 = cljs.core.next(seq__43729__$1);
var G__43846 = null;
var G__43847 = (0);
var G__43848 = (0);
seq__43729 = G__43845;
chunk__43730 = G__43846;
count__43731 = G__43847;
i__43732 = G__43848;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
