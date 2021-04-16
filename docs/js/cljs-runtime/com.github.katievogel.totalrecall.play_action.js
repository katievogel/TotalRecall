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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),(function (db,p__43421){
var vec__43422 = p__43421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43422,(0),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43422,(1),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shuffle-tiles","shuffle-tiles",-1960397157),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.shuffle(com.github.katievogel.totalrecall.state.tile_pair_map));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temp-clear","temp-clear",617853998),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"first-pick","first-pick",469108243),null),new cljs.core.Keyword(null,"second-pick","second-pick",346937067),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-start","hide-start",1971184144),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"start-button-display","start-button-display",1929305852),true);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-score","show-score",-113505229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43425){
var vec__43426 = p__43425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43426,(0),null);
return new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-strikes","show-strikes",-1652124718),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43429){
var vec__43430 = p__43429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43430,(0),null);
return new cljs.core.Keyword(null,"strikes","strikes",-327043906).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-board","get-board",-174318601),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43433){
var vec__43434 = p__43433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43434,(0),null);
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-start-display","get-start-display",2058406297),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43437){
var vec__43438 = p__43437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43438,(0),null);
return new cljs.core.Keyword(null,"start-button-display","start-button-display",1929305852).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-db","get-db",-630166596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43441){
var vec__43442 = p__43441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43442,(0),null);
return db;
})], 0));

//# sourceMappingURL=com.github.katievogel.totalrecall.play_action.js.map
