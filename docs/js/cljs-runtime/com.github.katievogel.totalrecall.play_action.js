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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),(function (db,p__43344){
var vec__43345 = p__43344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(0),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(1),null);
var strikes = new cljs.core.Keyword(null,"strikes","strikes",-327043906).cljs$core$IFn$_invoke$arity$1(db);
if((strikes >= (3))){
return db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-pick","first-pick",469108243).cljs$core$IFn$_invoke$arity$1(db),null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"first-pick","first-pick",469108243),record);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"second-pick","second-pick",346937067).cljs$core$IFn$_invoke$arity$1(db),null)){
return com.github.katievogel.totalrecall.play_action.pick_tile_eval(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"second-pick","second-pick",346937067),record));
} else {
return db;

}
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temp-clear","temp-clear",617853998),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"first-pick","first-pick",469108243),null),new cljs.core.Keyword(null,"second-pick","second-pick",346937067),null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-score","show-score",-113505229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43348){
var vec__43349 = p__43348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43349,(0),null);
return new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-strikes","show-strikes",-1652124718),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43352){
var vec__43353 = p__43352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43353,(0),null);
return new cljs.core.Keyword(null,"strikes","strikes",-327043906).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-db","get-db",-630166596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43356){
var vec__43357 = p__43356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43357,(0),null);
return db;
})], 0));

//# sourceMappingURL=com.github.katievogel.totalrecall.play_action.js.map
