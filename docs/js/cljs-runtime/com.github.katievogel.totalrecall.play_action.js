goog.provide('com.github.katievogel.totalrecall.play_action');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),(function (db,p__44942){
var vec__44943 = p__44942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(0),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-pick","first-pick",469108243).cljs$core$IFn$_invoke$arity$1(db),null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"first-pick","first-pick",469108243),record);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"second-pick","second-pick",346937067).cljs$core$IFn$_invoke$arity$1(db),null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"second-pick","second-pick",346937067),record);
} else {
return null;

}
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-db","get-db",-630166596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__44946){
var vec__44947 = p__44946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44947,(0),null);
return db;
})], 0));

//# sourceMappingURL=com.github.katievogel.totalrecall.play_action.js.map
