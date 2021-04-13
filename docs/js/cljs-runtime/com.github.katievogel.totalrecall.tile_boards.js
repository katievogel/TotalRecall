goog.provide('com.github.katievogel.totalrecall.tile_boards');
com.github.katievogel.totalrecall.tile_boards.tile_pair_map = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"pair","pair",-447516312),(1),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"pair","pair",-447516312),(1),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"pair","pair",-447516312),(2),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"pair","pair",-447516312),(2),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"pair","pair",-447516312),(3),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"pair","pair",-447516312),(3),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"pair","pair",-447516312),(4),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"pair","pair",-447516312),(4),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"pair","pair",-447516312),(5),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"pair","pair",-447516312),(5),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(11),new cljs.core.Keyword(null,"pair","pair",-447516312),(6),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(12),new cljs.core.Keyword(null,"pair","pair",-447516312),(6),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(13),new cljs.core.Keyword(null,"pair","pair",-447516312),(7),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(14),new cljs.core.Keyword(null,"pair","pair",-447516312),(7),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(15),new cljs.core.Keyword(null,"pair","pair",-447516312),(8),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(16),new cljs.core.Keyword(null,"pair","pair",-447516312),(8),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(17),new cljs.core.Keyword(null,"pair","pair",-447516312),(9),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(18),new cljs.core.Keyword(null,"pair","pair",-447516312),(9),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(19),new cljs.core.Keyword(null,"pair","pair",-447516312),(10),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(20),new cljs.core.Keyword(null,"pair","pair",-447516312),(10),new cljs.core.Keyword(null,"face-up","face-up",-200804391),false], null)], null);
com.github.katievogel.totalrecall.tile_boards.tile_randomizer = (function com$github$katievogel$totalrecall$tile_boards$tile_randomizer(tile_pair_map){
var iter__4529__auto__ = (function com$github$katievogel$totalrecall$tile_boards$tile_randomizer_$_iter__43360(s__43361){
return (new cljs.core.LazySeq(null,(function (){
var s__43361__$1 = s__43361;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43361__$1);
if(temp__5735__auto__){
var s__43361__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43361__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43361__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43363 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43362 = (0);
while(true){
if((i__43362 < size__4528__auto__)){
var map__43364 = cljs.core._nth(c__4527__auto__,i__43362);
var map__43364__$1 = (((((!((map__43364 == null))))?(((((map__43364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43364):map__43364);
var record = map__43364__$1;
var pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43364__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43364__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__43363,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.border.bg-light","div.p-3.border.bg-light",-1335314267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43362,map__43364,map__43364__$1,record,pair,id,c__4527__auto__,size__4528__auto__,b__43363,s__43361__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),record], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked, id: ",id], 0));
});})(i__43362,map__43364,map__43364__$1,record,pair,id,c__4527__auto__,size__4528__auto__,b__43363,s__43361__$2,temp__5735__auto__))
], null),"pair:",pair," id:",id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__43368 = (i__43362 + (1));
i__43362 = G__43368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43363),com$github$katievogel$totalrecall$tile_boards$tile_randomizer_$_iter__43360(cljs.core.chunk_rest(s__43361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43363),null);
}
} else {
var map__43366 = cljs.core.first(s__43361__$2);
var map__43366__$1 = (((((!((map__43366 == null))))?(((((map__43366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43366):map__43366);
var record = map__43366__$1;
var pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43366__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.border.bg-light","div.p-3.border.bg-light",-1335314267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43366,map__43366__$1,record,pair,id,s__43361__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),record], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked, id: ",id], 0));
});})(map__43366,map__43366__$1,record,pair,id,s__43361__$2,temp__5735__auto__))
], null),"pair:",pair," id:",id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),com$github$katievogel$totalrecall$tile_boards$tile_randomizer_$_iter__43360(cljs.core.rest(s__43361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.shuffle(tile_pair_map));
});
com.github.katievogel.totalrecall.tile_boards.TileBoard = (function com$github$katievogel$totalrecall$tile_boards$TileBoard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3","div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3",382892193),com.github.katievogel.totalrecall.tile_boards.tile_randomizer(com.github.katievogel.totalrecall.tile_boards.tile_pair_map)], null)], null);
});

//# sourceMappingURL=com.github.katievogel.totalrecall.tile_boards.js.map
