goog.provide('com.github.katievogel.totalrecall.play_action');
com.github.katievogel.totalrecall.play_action.pick_tile_eval = (function com$github$katievogel$totalrecall$play_action$pick_tile_eval(db){
var first_pick_pair = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-pick","first-pick",469108243),new cljs.core.Keyword(null,"pair","pair",-447516312)], null));
var second_pick_pair = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"second-pick","second-pick",346937067),new cljs.core.Keyword(null,"pair","pair",-447516312)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_pick_pair,second_pick_pair)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strikes","strikes",-327043906)], null),cljs.core.inc);

}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),(function (db,p__43509){
var vec__43510 = p__43509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(0),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-pick","first-pick",469108243).cljs$core$IFn$_invoke$arity$1(db),null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"first-pick","first-pick",469108243),record);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"second-pick","second-pick",346937067).cljs$core$IFn$_invoke$arity$1(db),null)){
return com.github.katievogel.totalrecall.play_action.pick_tile_eval(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"second-pick","second-pick",346937067),record));
} else {
return db;

}
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-db","get-db",-630166596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43513){
var vec__43514 = p__43513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43514,(0),null);
return db;
})], 0));

//# sourceMappingURL=com.github.katievogel.totalrecall.play_action.js.map
