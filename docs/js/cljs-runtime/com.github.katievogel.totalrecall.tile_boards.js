goog.provide('com.github.katievogel.totalrecall.tile_boards');
com.github.katievogel.totalrecall.tile_boards.render_tile = (function com$github$katievogel$totalrecall$tile_boards$render_tile(){
var board = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-board","get-board",-174318601)], null)));
var iter__4529__auto__ = (function com$github$katievogel$totalrecall$tile_boards$render_tile_$_iter__43412(s__43413){
return (new cljs.core.LazySeq(null,(function (){
var s__43413__$1 = s__43413;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43413__$1);
if(temp__5735__auto__){
var s__43413__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43413__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43413__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43415 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43414 = (0);
while(true){
if((i__43414 < size__4528__auto__)){
var map__43416 = cljs.core._nth(c__4527__auto__,i__43414);
var map__43416__$1 = (((((!((map__43416 == null))))?(((((map__43416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43416):map__43416);
var record = map__43416__$1;
var pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43416__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43416__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__43415,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.border.bg-light","div.p-3.border.bg-light",-1335314267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43414,map__43416,map__43416__$1,record,pair,id,c__4527__auto__,size__4528__auto__,b__43415,s__43413__$2,temp__5735__auto__,board){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),record], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked, id: ",id], 0));
});})(i__43414,map__43416,map__43416__$1,record,pair,id,c__4527__auto__,size__4528__auto__,b__43415,s__43413__$2,temp__5735__auto__,board))
], null),"pair:",pair," id:",id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__43420 = (i__43414 + (1));
i__43414 = G__43420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43415),com$github$katievogel$totalrecall$tile_boards$render_tile_$_iter__43412(cljs.core.chunk_rest(s__43413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43415),null);
}
} else {
var map__43418 = cljs.core.first(s__43413__$2);
var map__43418__$1 = (((((!((map__43418 == null))))?(((((map__43418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43418):map__43418);
var record = map__43418__$1;
var pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.border.bg-light","div.p-3.border.bg-light",-1335314267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43418,map__43418__$1,record,pair,id,s__43413__$2,temp__5735__auto__,board){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pick-tile","pick-tile",-2012375543),record], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clicked, id: ",id], 0));
});})(map__43418,map__43418__$1,record,pair,id,s__43413__$2,temp__5735__auto__,board))
], null),"pair:",pair," id:",id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),com$github$katievogel$totalrecall$tile_boards$render_tile_$_iter__43412(cljs.core.rest(s__43413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(board);
});
com.github.katievogel.totalrecall.tile_boards.TileBoard = (function com$github$katievogel$totalrecall$tile_boards$TileBoard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3","div.row.row-cols-4.row-cols-lg-5.g2.g-lg-3",382892193),com.github.katievogel.totalrecall.tile_boards.render_tile()], null)], null);
});

//# sourceMappingURL=com.github.katievogel.totalrecall.tile_boards.js.map
