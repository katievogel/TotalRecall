goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44126 = arguments.length;
switch (G__44126) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44131 = (function (f,blockable,meta44132){
this.f = f;
this.blockable = blockable;
this.meta44132 = meta44132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44133,meta44132__$1){
var self__ = this;
var _44133__$1 = this;
return (new cljs.core.async.t_cljs$core$async44131(self__.f,self__.blockable,meta44132__$1));
}));

(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44133){
var self__ = this;
var _44133__$1 = this;
return self__.meta44132;
}));

(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44132","meta44132",1765665081,null)], null);
}));

(cljs.core.async.t_cljs$core$async44131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44131");

(cljs.core.async.t_cljs$core$async44131.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44131.
 */
cljs.core.async.__GT_t_cljs$core$async44131 = (function cljs$core$async$__GT_t_cljs$core$async44131(f__$1,blockable__$1,meta44132){
return (new cljs.core.async.t_cljs$core$async44131(f__$1,blockable__$1,meta44132));
});

}

return (new cljs.core.async.t_cljs$core$async44131(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44180 = arguments.length;
switch (G__44180) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44198 = arguments.length;
switch (G__44198) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44212 = arguments.length;
switch (G__44212) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46975 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46975) : fn1.call(null,val_46975));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46975) : fn1.call(null,val_46975));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44225 = arguments.length;
switch (G__44225) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___46988 = n;
var x_46989 = (0);
while(true){
if((x_46989 < n__4613__auto___46988)){
(a[x_46989] = x_46989);

var G__46990 = (x_46989 + (1));
x_46989 = G__46990;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44248 = (function (flag,meta44249){
this.flag = flag;
this.meta44249 = meta44249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44250,meta44249__$1){
var self__ = this;
var _44250__$1 = this;
return (new cljs.core.async.t_cljs$core$async44248(self__.flag,meta44249__$1));
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44250){
var self__ = this;
var _44250__$1 = this;
return self__.meta44249;
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44249","meta44249",-457124132,null)], null);
}));

(cljs.core.async.t_cljs$core$async44248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44248");

(cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44248.
 */
cljs.core.async.__GT_t_cljs$core$async44248 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44248(flag__$1,meta44249){
return (new cljs.core.async.t_cljs$core$async44248(flag__$1,meta44249));
});

}

return (new cljs.core.async.t_cljs$core$async44248(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44277 = (function (flag,cb,meta44278){
this.flag = flag;
this.cb = cb;
this.meta44278 = meta44278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44279,meta44278__$1){
var self__ = this;
var _44279__$1 = this;
return (new cljs.core.async.t_cljs$core$async44277(self__.flag,self__.cb,meta44278__$1));
}));

(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44279){
var self__ = this;
var _44279__$1 = this;
return self__.meta44278;
}));

(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44278","meta44278",-2008933366,null)], null);
}));

(cljs.core.async.t_cljs$core$async44277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44277");

(cljs.core.async.t_cljs$core$async44277.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44277.
 */
cljs.core.async.__GT_t_cljs$core$async44277 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44277(flag__$1,cb__$1,meta44278){
return (new cljs.core.async.t_cljs$core$async44277(flag__$1,cb__$1,meta44278));
});

}

return (new cljs.core.async.t_cljs$core$async44277(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44290_SHARP_){
var G__44292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44290_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44292) : fret.call(null,G__44292));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44291_SHARP_){
var G__44293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44291_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44293) : fret.call(null,G__44293));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47011 = (i + (1));
i = G__47011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47017 = arguments.length;
var i__4737__auto___47018 = (0);
while(true){
if((i__4737__auto___47018 < len__4736__auto___47017)){
args__4742__auto__.push((arguments[i__4737__auto___47018]));

var G__47019 = (i__4737__auto___47018 + (1));
i__4737__auto___47018 = G__47019;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44301){
var map__44302 = p__44301;
var map__44302__$1 = (((((!((map__44302 == null))))?(((((map__44302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44302):map__44302);
var opts = map__44302__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44298){
var G__44299 = cljs.core.first(seq44298);
var seq44298__$1 = cljs.core.next(seq44298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44299,seq44298__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44305 = arguments.length;
switch (G__44305) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44022__auto___47032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44386){
var state_val_44387 = (state_44386[(1)]);
if((state_val_44387 === (7))){
var inst_44382 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
var statearr_44388_47033 = state_44386__$1;
(statearr_44388_47033[(2)] = inst_44382);

(statearr_44388_47033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (1))){
var state_44386__$1 = state_44386;
var statearr_44389_47034 = state_44386__$1;
(statearr_44389_47034[(2)] = null);

(statearr_44389_47034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (4))){
var inst_44325 = (state_44386[(7)]);
var inst_44325__$1 = (state_44386[(2)]);
var inst_44366 = (inst_44325__$1 == null);
var state_44386__$1 = (function (){var statearr_44390 = state_44386;
(statearr_44390[(7)] = inst_44325__$1);

return statearr_44390;
})();
if(cljs.core.truth_(inst_44366)){
var statearr_44391_47036 = state_44386__$1;
(statearr_44391_47036[(1)] = (5));

} else {
var statearr_44395_47037 = state_44386__$1;
(statearr_44395_47037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (13))){
var state_44386__$1 = state_44386;
var statearr_44396_47038 = state_44386__$1;
(statearr_44396_47038[(2)] = null);

(statearr_44396_47038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (6))){
var inst_44325 = (state_44386[(7)]);
var state_44386__$1 = state_44386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44386__$1,(11),to,inst_44325);
} else {
if((state_val_44387 === (3))){
var inst_44384 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44386__$1,inst_44384);
} else {
if((state_val_44387 === (12))){
var state_44386__$1 = state_44386;
var statearr_44397_47041 = state_44386__$1;
(statearr_44397_47041[(2)] = null);

(statearr_44397_47041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (2))){
var state_44386__$1 = state_44386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44386__$1,(4),from);
} else {
if((state_val_44387 === (11))){
var inst_44375 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
if(cljs.core.truth_(inst_44375)){
var statearr_44399_47046 = state_44386__$1;
(statearr_44399_47046[(1)] = (12));

} else {
var statearr_44400_47047 = state_44386__$1;
(statearr_44400_47047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (9))){
var state_44386__$1 = state_44386;
var statearr_44401_47053 = state_44386__$1;
(statearr_44401_47053[(2)] = null);

(statearr_44401_47053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (5))){
var state_44386__$1 = state_44386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44402_47054 = state_44386__$1;
(statearr_44402_47054[(1)] = (8));

} else {
var statearr_44403_47055 = state_44386__$1;
(statearr_44403_47055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (14))){
var inst_44380 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
var statearr_44404_47056 = state_44386__$1;
(statearr_44404_47056[(2)] = inst_44380);

(statearr_44404_47056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (10))){
var inst_44372 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
var statearr_44405_47057 = state_44386__$1;
(statearr_44405_47057[(2)] = inst_44372);

(statearr_44405_47057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44387 === (8))){
var inst_44369 = cljs.core.async.close_BANG_(to);
var state_44386__$1 = state_44386;
var statearr_44406_47059 = state_44386__$1;
(statearr_44406_47059[(2)] = inst_44369);

(statearr_44406_47059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_44407 = [null,null,null,null,null,null,null,null];
(statearr_44407[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_44407[(1)] = (1));

return statearr_44407;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_44386){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44386);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44408){var ex__43873__auto__ = e44408;
var statearr_44409_47061 = state_44386;
(statearr_44409_47061[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44386[(4)]))){
var statearr_44410_47062 = state_44386;
(statearr_44410_47062[(1)] = cljs.core.first((state_44386[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47065 = state_44386;
state_44386 = G__47065;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_44386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_44386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44411 = f__44023__auto__();
(statearr_44411[(6)] = c__44022__auto___47032);

return statearr_44411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44416){
var vec__44417 = p__44416;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44417,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44417,(1),null);
var job = vec__44417;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44022__auto___47071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44424){
var state_val_44425 = (state_44424[(1)]);
if((state_val_44425 === (1))){
var state_44424__$1 = state_44424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44424__$1,(2),res,v);
} else {
if((state_val_44425 === (2))){
var inst_44421 = (state_44424[(2)]);
var inst_44422 = cljs.core.async.close_BANG_(res);
var state_44424__$1 = (function (){var statearr_44435 = state_44424;
(statearr_44435[(7)] = inst_44421);

return statearr_44435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44424__$1,inst_44422);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_44437 = [null,null,null,null,null,null,null,null];
(statearr_44437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__);

(statearr_44437[(1)] = (1));

return statearr_44437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1 = (function (state_44424){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44424);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44438){var ex__43873__auto__ = e44438;
var statearr_44439_47073 = state_44424;
(statearr_44439_47073[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44424[(4)]))){
var statearr_44440_47074 = state_44424;
(statearr_44440_47074[(1)] = cljs.core.first((state_44424[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47080 = state_44424;
state_44424 = G__47080;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = function(state_44424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1.call(this,state_44424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44441 = f__44023__auto__();
(statearr_44441[(6)] = c__44022__auto___47071);

return statearr_44441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44442){
var vec__44443 = p__44442;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44443,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44443,(1),null);
var job = vec__44443;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___47084 = n;
var __47085 = (0);
while(true){
if((__47085 < n__4613__auto___47084)){
var G__44446_47086 = type;
var G__44446_47087__$1 = (((G__44446_47086 instanceof cljs.core.Keyword))?G__44446_47086.fqn:null);
switch (G__44446_47087__$1) {
case "compute":
var c__44022__auto___47090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47085,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = ((function (__47085,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function (state_44459){
var state_val_44460 = (state_44459[(1)]);
if((state_val_44460 === (1))){
var state_44459__$1 = state_44459;
var statearr_44461_47099 = state_44459__$1;
(statearr_44461_47099[(2)] = null);

(statearr_44461_47099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44460 === (2))){
var state_44459__$1 = state_44459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44459__$1,(4),jobs);
} else {
if((state_val_44460 === (3))){
var inst_44457 = (state_44459[(2)]);
var state_44459__$1 = state_44459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44459__$1,inst_44457);
} else {
if((state_val_44460 === (4))){
var inst_44449 = (state_44459[(2)]);
var inst_44450 = process(inst_44449);
var state_44459__$1 = state_44459;
if(cljs.core.truth_(inst_44450)){
var statearr_44464_47109 = state_44459__$1;
(statearr_44464_47109[(1)] = (5));

} else {
var statearr_44465_47110 = state_44459__$1;
(statearr_44465_47110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44460 === (5))){
var state_44459__$1 = state_44459;
var statearr_44466_47111 = state_44459__$1;
(statearr_44466_47111[(2)] = null);

(statearr_44466_47111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44460 === (6))){
var state_44459__$1 = state_44459;
var statearr_44468_47112 = state_44459__$1;
(statearr_44468_47112[(2)] = null);

(statearr_44468_47112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44460 === (7))){
var inst_44455 = (state_44459[(2)]);
var state_44459__$1 = state_44459;
var statearr_44470_47116 = state_44459__$1;
(statearr_44470_47116[(2)] = inst_44455);

(statearr_44470_47116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47085,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
;
return ((function (__47085,switch__43869__auto__,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_44471 = [null,null,null,null,null,null,null];
(statearr_44471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__);

(statearr_44471[(1)] = (1));

return statearr_44471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1 = (function (state_44459){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44459);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44472){var ex__43873__auto__ = e44472;
var statearr_44473_47125 = state_44459;
(statearr_44473_47125[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44459[(4)]))){
var statearr_44474_47126 = state_44459;
(statearr_44474_47126[(1)] = cljs.core.first((state_44459[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47127 = state_44459;
state_44459 = G__47127;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = function(state_44459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1.call(this,state_44459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__;
})()
;})(__47085,switch__43869__auto__,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
})();
var state__44024__auto__ = (function (){var statearr_44478 = f__44023__auto__();
(statearr_44478[(6)] = c__44022__auto___47090);

return statearr_44478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
});})(__47085,c__44022__auto___47090,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
);


break;
case "async":
var c__44022__auto___47131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47085,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = ((function (__47085,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function (state_44494){
var state_val_44495 = (state_44494[(1)]);
if((state_val_44495 === (1))){
var state_44494__$1 = state_44494;
var statearr_44496_47136 = state_44494__$1;
(statearr_44496_47136[(2)] = null);

(statearr_44496_47136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (2))){
var state_44494__$1 = state_44494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44494__$1,(4),jobs);
} else {
if((state_val_44495 === (3))){
var inst_44492 = (state_44494[(2)]);
var state_44494__$1 = state_44494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44494__$1,inst_44492);
} else {
if((state_val_44495 === (4))){
var inst_44484 = (state_44494[(2)]);
var inst_44485 = async(inst_44484);
var state_44494__$1 = state_44494;
if(cljs.core.truth_(inst_44485)){
var statearr_44498_47140 = state_44494__$1;
(statearr_44498_47140[(1)] = (5));

} else {
var statearr_44499_47141 = state_44494__$1;
(statearr_44499_47141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (5))){
var state_44494__$1 = state_44494;
var statearr_44500_47142 = state_44494__$1;
(statearr_44500_47142[(2)] = null);

(statearr_44500_47142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (6))){
var state_44494__$1 = state_44494;
var statearr_44501_47143 = state_44494__$1;
(statearr_44501_47143[(2)] = null);

(statearr_44501_47143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44495 === (7))){
var inst_44490 = (state_44494[(2)]);
var state_44494__$1 = state_44494;
var statearr_44503_47146 = state_44494__$1;
(statearr_44503_47146[(2)] = inst_44490);

(statearr_44503_47146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47085,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
;
return ((function (__47085,switch__43869__auto__,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_44507 = [null,null,null,null,null,null,null];
(statearr_44507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__);

(statearr_44507[(1)] = (1));

return statearr_44507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1 = (function (state_44494){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44494);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44508){var ex__43873__auto__ = e44508;
var statearr_44509_47152 = state_44494;
(statearr_44509_47152[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44494[(4)]))){
var statearr_44510_47153 = state_44494;
(statearr_44510_47153[(1)] = cljs.core.first((state_44494[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47154 = state_44494;
state_44494 = G__47154;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = function(state_44494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1.call(this,state_44494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__;
})()
;})(__47085,switch__43869__auto__,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
})();
var state__44024__auto__ = (function (){var statearr_44511 = f__44023__auto__();
(statearr_44511[(6)] = c__44022__auto___47131);

return statearr_44511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
});})(__47085,c__44022__auto___47131,G__44446_47086,G__44446_47087__$1,n__4613__auto___47084,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44446_47087__$1)].join('')));

}

var G__47155 = (__47085 + (1));
__47085 = G__47155;
continue;
} else {
}
break;
}

var c__44022__auto___47156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44541){
var state_val_44542 = (state_44541[(1)]);
if((state_val_44542 === (7))){
var inst_44537 = (state_44541[(2)]);
var state_44541__$1 = state_44541;
var statearr_44543_47159 = state_44541__$1;
(statearr_44543_47159[(2)] = inst_44537);

(statearr_44543_47159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (1))){
var state_44541__$1 = state_44541;
var statearr_44545_47164 = state_44541__$1;
(statearr_44545_47164[(2)] = null);

(statearr_44545_47164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (4))){
var inst_44514 = (state_44541[(7)]);
var inst_44514__$1 = (state_44541[(2)]);
var inst_44515 = (inst_44514__$1 == null);
var state_44541__$1 = (function (){var statearr_44550 = state_44541;
(statearr_44550[(7)] = inst_44514__$1);

return statearr_44550;
})();
if(cljs.core.truth_(inst_44515)){
var statearr_44551_47189 = state_44541__$1;
(statearr_44551_47189[(1)] = (5));

} else {
var statearr_44552_47190 = state_44541__$1;
(statearr_44552_47190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (6))){
var inst_44519 = (state_44541[(8)]);
var inst_44514 = (state_44541[(7)]);
var inst_44519__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44529 = [inst_44514,inst_44519__$1];
var inst_44530 = (new cljs.core.PersistentVector(null,2,(5),inst_44528,inst_44529,null));
var state_44541__$1 = (function (){var statearr_44553 = state_44541;
(statearr_44553[(8)] = inst_44519__$1);

return statearr_44553;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44541__$1,(8),jobs,inst_44530);
} else {
if((state_val_44542 === (3))){
var inst_44539 = (state_44541[(2)]);
var state_44541__$1 = state_44541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44541__$1,inst_44539);
} else {
if((state_val_44542 === (2))){
var state_44541__$1 = state_44541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44541__$1,(4),from);
} else {
if((state_val_44542 === (9))){
var inst_44534 = (state_44541[(2)]);
var state_44541__$1 = (function (){var statearr_44555 = state_44541;
(statearr_44555[(9)] = inst_44534);

return statearr_44555;
})();
var statearr_44556_47192 = state_44541__$1;
(statearr_44556_47192[(2)] = null);

(statearr_44556_47192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (5))){
var inst_44517 = cljs.core.async.close_BANG_(jobs);
var state_44541__$1 = state_44541;
var statearr_44558_47201 = state_44541__$1;
(statearr_44558_47201[(2)] = inst_44517);

(statearr_44558_47201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (8))){
var inst_44519 = (state_44541[(8)]);
var inst_44532 = (state_44541[(2)]);
var state_44541__$1 = (function (){var statearr_44559 = state_44541;
(statearr_44559[(10)] = inst_44532);

return statearr_44559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44541__$1,(9),results,inst_44519);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_44562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__);

(statearr_44562[(1)] = (1));

return statearr_44562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1 = (function (state_44541){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44541);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44566){var ex__43873__auto__ = e44566;
var statearr_44567_47210 = state_44541;
(statearr_44567_47210[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44541[(4)]))){
var statearr_44568_47213 = state_44541;
(statearr_44568_47213[(1)] = cljs.core.first((state_44541[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47214 = state_44541;
state_44541 = G__47214;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = function(state_44541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1.call(this,state_44541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44573 = f__44023__auto__();
(statearr_44573[(6)] = c__44022__auto___47156);

return statearr_44573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


var c__44022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44615){
var state_val_44616 = (state_44615[(1)]);
if((state_val_44616 === (7))){
var inst_44611 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44623_47215 = state_44615__$1;
(statearr_44623_47215[(2)] = inst_44611);

(statearr_44623_47215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (20))){
var state_44615__$1 = state_44615;
var statearr_44624_47217 = state_44615__$1;
(statearr_44624_47217[(2)] = null);

(statearr_44624_47217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (1))){
var state_44615__$1 = state_44615;
var statearr_44631_47218 = state_44615__$1;
(statearr_44631_47218[(2)] = null);

(statearr_44631_47218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (4))){
var inst_44576 = (state_44615[(7)]);
var inst_44576__$1 = (state_44615[(2)]);
var inst_44577 = (inst_44576__$1 == null);
var state_44615__$1 = (function (){var statearr_44632 = state_44615;
(statearr_44632[(7)] = inst_44576__$1);

return statearr_44632;
})();
if(cljs.core.truth_(inst_44577)){
var statearr_44633_47223 = state_44615__$1;
(statearr_44633_47223[(1)] = (5));

} else {
var statearr_44634_47224 = state_44615__$1;
(statearr_44634_47224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (15))){
var inst_44589 = (state_44615[(8)]);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44615__$1,(18),to,inst_44589);
} else {
if((state_val_44616 === (21))){
var inst_44606 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44635_47229 = state_44615__$1;
(statearr_44635_47229[(2)] = inst_44606);

(statearr_44635_47229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (13))){
var inst_44608 = (state_44615[(2)]);
var state_44615__$1 = (function (){var statearr_44640 = state_44615;
(statearr_44640[(9)] = inst_44608);

return statearr_44640;
})();
var statearr_44641_47231 = state_44615__$1;
(statearr_44641_47231[(2)] = null);

(statearr_44641_47231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (6))){
var inst_44576 = (state_44615[(7)]);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44615__$1,(11),inst_44576);
} else {
if((state_val_44616 === (17))){
var inst_44601 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
if(cljs.core.truth_(inst_44601)){
var statearr_44642_47239 = state_44615__$1;
(statearr_44642_47239[(1)] = (19));

} else {
var statearr_44643_47241 = state_44615__$1;
(statearr_44643_47241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (3))){
var inst_44613 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44615__$1,inst_44613);
} else {
if((state_val_44616 === (12))){
var inst_44586 = (state_44615[(10)]);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44615__$1,(14),inst_44586);
} else {
if((state_val_44616 === (2))){
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44615__$1,(4),results);
} else {
if((state_val_44616 === (19))){
var state_44615__$1 = state_44615;
var statearr_44659_47249 = state_44615__$1;
(statearr_44659_47249[(2)] = null);

(statearr_44659_47249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (11))){
var inst_44586 = (state_44615[(2)]);
var state_44615__$1 = (function (){var statearr_44662 = state_44615;
(statearr_44662[(10)] = inst_44586);

return statearr_44662;
})();
var statearr_44663_47250 = state_44615__$1;
(statearr_44663_47250[(2)] = null);

(statearr_44663_47250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (9))){
var state_44615__$1 = state_44615;
var statearr_44665_47251 = state_44615__$1;
(statearr_44665_47251[(2)] = null);

(statearr_44665_47251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (5))){
var state_44615__$1 = state_44615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44667_47252 = state_44615__$1;
(statearr_44667_47252[(1)] = (8));

} else {
var statearr_44668_47253 = state_44615__$1;
(statearr_44668_47253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (14))){
var inst_44589 = (state_44615[(8)]);
var inst_44589__$1 = (state_44615[(2)]);
var inst_44590 = (inst_44589__$1 == null);
var inst_44591 = cljs.core.not(inst_44590);
var state_44615__$1 = (function (){var statearr_44669 = state_44615;
(statearr_44669[(8)] = inst_44589__$1);

return statearr_44669;
})();
if(inst_44591){
var statearr_44670_47254 = state_44615__$1;
(statearr_44670_47254[(1)] = (15));

} else {
var statearr_44671_47255 = state_44615__$1;
(statearr_44671_47255[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (16))){
var state_44615__$1 = state_44615;
var statearr_44672_47256 = state_44615__$1;
(statearr_44672_47256[(2)] = false);

(statearr_44672_47256[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (10))){
var inst_44583 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44675_47257 = state_44615__$1;
(statearr_44675_47257[(2)] = inst_44583);

(statearr_44675_47257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (18))){
var inst_44598 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44678_47258 = state_44615__$1;
(statearr_44678_47258[(2)] = inst_44598);

(statearr_44678_47258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (8))){
var inst_44580 = cljs.core.async.close_BANG_(to);
var state_44615__$1 = state_44615;
var statearr_44680_47266 = state_44615__$1;
(statearr_44680_47266[(2)] = inst_44580);

(statearr_44680_47266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_44682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__);

(statearr_44682[(1)] = (1));

return statearr_44682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1 = (function (state_44615){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44615);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44683){var ex__43873__auto__ = e44683;
var statearr_44684_47267 = state_44615;
(statearr_44684_47267[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44615[(4)]))){
var statearr_44685_47268 = state_44615;
(statearr_44685_47268[(1)] = cljs.core.first((state_44615[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47269 = state_44615;
state_44615 = G__47269;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__ = function(state_44615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1.call(this,state_44615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44690 = f__44023__auto__();
(statearr_44690[(6)] = c__44022__auto__);

return statearr_44690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

return c__44022__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44697 = arguments.length;
switch (G__44697) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44705 = arguments.length;
switch (G__44705) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44726 = arguments.length;
switch (G__44726) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44022__auto___47286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44762){
var state_val_44763 = (state_44762[(1)]);
if((state_val_44763 === (7))){
var inst_44754 = (state_44762[(2)]);
var state_44762__$1 = state_44762;
var statearr_44769_47293 = state_44762__$1;
(statearr_44769_47293[(2)] = inst_44754);

(statearr_44769_47293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (1))){
var state_44762__$1 = state_44762;
var statearr_44774_47294 = state_44762__$1;
(statearr_44774_47294[(2)] = null);

(statearr_44774_47294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (4))){
var inst_44735 = (state_44762[(7)]);
var inst_44735__$1 = (state_44762[(2)]);
var inst_44736 = (inst_44735__$1 == null);
var state_44762__$1 = (function (){var statearr_44775 = state_44762;
(statearr_44775[(7)] = inst_44735__$1);

return statearr_44775;
})();
if(cljs.core.truth_(inst_44736)){
var statearr_44779_47295 = state_44762__$1;
(statearr_44779_47295[(1)] = (5));

} else {
var statearr_44780_47296 = state_44762__$1;
(statearr_44780_47296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (13))){
var state_44762__$1 = state_44762;
var statearr_44781_47299 = state_44762__$1;
(statearr_44781_47299[(2)] = null);

(statearr_44781_47299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (6))){
var inst_44735 = (state_44762[(7)]);
var inst_44741 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44735) : p.call(null,inst_44735));
var state_44762__$1 = state_44762;
if(cljs.core.truth_(inst_44741)){
var statearr_44785_47302 = state_44762__$1;
(statearr_44785_47302[(1)] = (9));

} else {
var statearr_44786_47303 = state_44762__$1;
(statearr_44786_47303[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (3))){
var inst_44756 = (state_44762[(2)]);
var state_44762__$1 = state_44762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44762__$1,inst_44756);
} else {
if((state_val_44763 === (12))){
var state_44762__$1 = state_44762;
var statearr_44787_47307 = state_44762__$1;
(statearr_44787_47307[(2)] = null);

(statearr_44787_47307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (2))){
var state_44762__$1 = state_44762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44762__$1,(4),ch);
} else {
if((state_val_44763 === (11))){
var inst_44735 = (state_44762[(7)]);
var inst_44745 = (state_44762[(2)]);
var state_44762__$1 = state_44762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44762__$1,(8),inst_44745,inst_44735);
} else {
if((state_val_44763 === (9))){
var state_44762__$1 = state_44762;
var statearr_44792_47312 = state_44762__$1;
(statearr_44792_47312[(2)] = tc);

(statearr_44792_47312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (5))){
var inst_44738 = cljs.core.async.close_BANG_(tc);
var inst_44739 = cljs.core.async.close_BANG_(fc);
var state_44762__$1 = (function (){var statearr_44793 = state_44762;
(statearr_44793[(8)] = inst_44738);

return statearr_44793;
})();
var statearr_44794_47313 = state_44762__$1;
(statearr_44794_47313[(2)] = inst_44739);

(statearr_44794_47313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (14))){
var inst_44752 = (state_44762[(2)]);
var state_44762__$1 = state_44762;
var statearr_44799_47315 = state_44762__$1;
(statearr_44799_47315[(2)] = inst_44752);

(statearr_44799_47315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (10))){
var state_44762__$1 = state_44762;
var statearr_44801_47319 = state_44762__$1;
(statearr_44801_47319[(2)] = fc);

(statearr_44801_47319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44763 === (8))){
var inst_44747 = (state_44762[(2)]);
var state_44762__$1 = state_44762;
if(cljs.core.truth_(inst_44747)){
var statearr_44802_47320 = state_44762__$1;
(statearr_44802_47320[(1)] = (12));

} else {
var statearr_44803_47321 = state_44762__$1;
(statearr_44803_47321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_44805 = [null,null,null,null,null,null,null,null,null];
(statearr_44805[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_44805[(1)] = (1));

return statearr_44805;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_44762){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44762);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44808){var ex__43873__auto__ = e44808;
var statearr_44810_47322 = state_44762;
(statearr_44810_47322[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44762[(4)]))){
var statearr_44811_47326 = state_44762;
(statearr_44811_47326[(1)] = cljs.core.first((state_44762[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47328 = state_44762;
state_44762 = G__47328;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_44762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_44762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44812 = f__44023__auto__();
(statearr_44812[(6)] = c__44022__auto___47286);

return statearr_44812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44847){
var state_val_44848 = (state_44847[(1)]);
if((state_val_44848 === (7))){
var inst_44843 = (state_44847[(2)]);
var state_44847__$1 = state_44847;
var statearr_44853_47337 = state_44847__$1;
(statearr_44853_47337[(2)] = inst_44843);

(statearr_44853_47337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (1))){
var inst_44825 = init;
var inst_44826 = inst_44825;
var state_44847__$1 = (function (){var statearr_44854 = state_44847;
(statearr_44854[(7)] = inst_44826);

return statearr_44854;
})();
var statearr_44855_47338 = state_44847__$1;
(statearr_44855_47338[(2)] = null);

(statearr_44855_47338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (4))){
var inst_44830 = (state_44847[(8)]);
var inst_44830__$1 = (state_44847[(2)]);
var inst_44831 = (inst_44830__$1 == null);
var state_44847__$1 = (function (){var statearr_44857 = state_44847;
(statearr_44857[(8)] = inst_44830__$1);

return statearr_44857;
})();
if(cljs.core.truth_(inst_44831)){
var statearr_44864_47340 = state_44847__$1;
(statearr_44864_47340[(1)] = (5));

} else {
var statearr_44865_47342 = state_44847__$1;
(statearr_44865_47342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (6))){
var inst_44826 = (state_44847[(7)]);
var inst_44834 = (state_44847[(9)]);
var inst_44830 = (state_44847[(8)]);
var inst_44834__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44826,inst_44830) : f.call(null,inst_44826,inst_44830));
var inst_44835 = cljs.core.reduced_QMARK_(inst_44834__$1);
var state_44847__$1 = (function (){var statearr_44868 = state_44847;
(statearr_44868[(9)] = inst_44834__$1);

return statearr_44868;
})();
if(inst_44835){
var statearr_44869_47350 = state_44847__$1;
(statearr_44869_47350[(1)] = (8));

} else {
var statearr_44870_47351 = state_44847__$1;
(statearr_44870_47351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (3))){
var inst_44845 = (state_44847[(2)]);
var state_44847__$1 = state_44847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44847__$1,inst_44845);
} else {
if((state_val_44848 === (2))){
var state_44847__$1 = state_44847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44847__$1,(4),ch);
} else {
if((state_val_44848 === (9))){
var inst_44834 = (state_44847[(9)]);
var inst_44826 = inst_44834;
var state_44847__$1 = (function (){var statearr_44875 = state_44847;
(statearr_44875[(7)] = inst_44826);

return statearr_44875;
})();
var statearr_44876_47357 = state_44847__$1;
(statearr_44876_47357[(2)] = null);

(statearr_44876_47357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (5))){
var inst_44826 = (state_44847[(7)]);
var state_44847__$1 = state_44847;
var statearr_44877_47359 = state_44847__$1;
(statearr_44877_47359[(2)] = inst_44826);

(statearr_44877_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (10))){
var inst_44841 = (state_44847[(2)]);
var state_44847__$1 = state_44847;
var statearr_44879_47360 = state_44847__$1;
(statearr_44879_47360[(2)] = inst_44841);

(statearr_44879_47360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44848 === (8))){
var inst_44834 = (state_44847[(9)]);
var inst_44837 = cljs.core.deref(inst_44834);
var state_44847__$1 = state_44847;
var statearr_44887_47362 = state_44847__$1;
(statearr_44887_47362[(2)] = inst_44837);

(statearr_44887_47362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43870__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43870__auto____0 = (function (){
var statearr_44892 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44892[(0)] = cljs$core$async$reduce_$_state_machine__43870__auto__);

(statearr_44892[(1)] = (1));

return statearr_44892;
});
var cljs$core$async$reduce_$_state_machine__43870__auto____1 = (function (state_44847){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44847);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44893){var ex__43873__auto__ = e44893;
var statearr_44894_47365 = state_44847;
(statearr_44894_47365[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44847[(4)]))){
var statearr_44895_47367 = state_44847;
(statearr_44895_47367[(1)] = cljs.core.first((state_44847[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47369 = state_44847;
state_44847 = G__47369;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43870__auto__ = function(state_44847){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43870__auto____1.call(this,state_44847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43870__auto____0;
cljs$core$async$reduce_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43870__auto____1;
return cljs$core$async$reduce_$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44900 = f__44023__auto__();
(statearr_44900[(6)] = c__44022__auto__);

return statearr_44900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

return c__44022__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44912){
var state_val_44913 = (state_44912[(1)]);
if((state_val_44913 === (1))){
var inst_44907 = cljs.core.async.reduce(f__$1,init,ch);
var state_44912__$1 = state_44912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44912__$1,(2),inst_44907);
} else {
if((state_val_44913 === (2))){
var inst_44909 = (state_44912[(2)]);
var inst_44910 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44909) : f__$1.call(null,inst_44909));
var state_44912__$1 = state_44912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44912__$1,inst_44910);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43870__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43870__auto____0 = (function (){
var statearr_44915 = [null,null,null,null,null,null,null];
(statearr_44915[(0)] = cljs$core$async$transduce_$_state_machine__43870__auto__);

(statearr_44915[(1)] = (1));

return statearr_44915;
});
var cljs$core$async$transduce_$_state_machine__43870__auto____1 = (function (state_44912){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44912);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e44916){var ex__43873__auto__ = e44916;
var statearr_44917_47376 = state_44912;
(statearr_44917_47376[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44912[(4)]))){
var statearr_44918_47377 = state_44912;
(statearr_44918_47377[(1)] = cljs.core.first((state_44912[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47380 = state_44912;
state_44912 = G__47380;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43870__auto__ = function(state_44912){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43870__auto____1.call(this,state_44912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43870__auto____0;
cljs$core$async$transduce_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43870__auto____1;
return cljs$core$async$transduce_$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_44919 = f__44023__auto__();
(statearr_44919[(6)] = c__44022__auto__);

return statearr_44919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

return c__44022__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44922 = arguments.length;
switch (G__44922) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_44956){
var state_val_44957 = (state_44956[(1)]);
if((state_val_44957 === (7))){
var inst_44938 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44958_47388 = state_44956__$1;
(statearr_44958_47388[(2)] = inst_44938);

(statearr_44958_47388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (1))){
var inst_44928 = cljs.core.seq(coll);
var inst_44929 = inst_44928;
var state_44956__$1 = (function (){var statearr_44959 = state_44956;
(statearr_44959[(7)] = inst_44929);

return statearr_44959;
})();
var statearr_44960_47391 = state_44956__$1;
(statearr_44960_47391[(2)] = null);

(statearr_44960_47391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (4))){
var inst_44929 = (state_44956[(7)]);
var inst_44936 = cljs.core.first(inst_44929);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44956__$1,(7),ch,inst_44936);
} else {
if((state_val_44957 === (13))){
var inst_44950 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44961_47396 = state_44956__$1;
(statearr_44961_47396[(2)] = inst_44950);

(statearr_44961_47396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (6))){
var inst_44941 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
if(cljs.core.truth_(inst_44941)){
var statearr_44966_47398 = state_44956__$1;
(statearr_44966_47398[(1)] = (8));

} else {
var statearr_44967_47399 = state_44956__$1;
(statearr_44967_47399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (3))){
var inst_44954 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44956__$1,inst_44954);
} else {
if((state_val_44957 === (12))){
var state_44956__$1 = state_44956;
var statearr_44974_47401 = state_44956__$1;
(statearr_44974_47401[(2)] = null);

(statearr_44974_47401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (2))){
var inst_44929 = (state_44956[(7)]);
var state_44956__$1 = state_44956;
if(cljs.core.truth_(inst_44929)){
var statearr_44976_47409 = state_44956__$1;
(statearr_44976_47409[(1)] = (4));

} else {
var statearr_44978_47411 = state_44956__$1;
(statearr_44978_47411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (11))){
var inst_44947 = cljs.core.async.close_BANG_(ch);
var state_44956__$1 = state_44956;
var statearr_44984_47413 = state_44956__$1;
(statearr_44984_47413[(2)] = inst_44947);

(statearr_44984_47413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (9))){
var state_44956__$1 = state_44956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44986_47417 = state_44956__$1;
(statearr_44986_47417[(1)] = (11));

} else {
var statearr_44988_47418 = state_44956__$1;
(statearr_44988_47418[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (5))){
var inst_44929 = (state_44956[(7)]);
var state_44956__$1 = state_44956;
var statearr_44993_47420 = state_44956__$1;
(statearr_44993_47420[(2)] = inst_44929);

(statearr_44993_47420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (10))){
var inst_44952 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44994_47424 = state_44956__$1;
(statearr_44994_47424[(2)] = inst_44952);

(statearr_44994_47424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (8))){
var inst_44929 = (state_44956[(7)]);
var inst_44943 = cljs.core.next(inst_44929);
var inst_44929__$1 = inst_44943;
var state_44956__$1 = (function (){var statearr_44995 = state_44956;
(statearr_44995[(7)] = inst_44929__$1);

return statearr_44995;
})();
var statearr_45000_47428 = state_44956__$1;
(statearr_45000_47428[(2)] = null);

(statearr_45000_47428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_45002 = [null,null,null,null,null,null,null,null];
(statearr_45002[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_45002[(1)] = (1));

return statearr_45002;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_44956){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_44956);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e45003){var ex__43873__auto__ = e45003;
var statearr_45004_47437 = state_44956;
(statearr_45004_47437[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_44956[(4)]))){
var statearr_45006_47438 = state_44956;
(statearr_45006_47438[(1)] = cljs.core.first((state_44956[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47439 = state_44956;
state_44956 = G__47439;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_44956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_44956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_45008 = f__44023__auto__();
(statearr_45008[(6)] = c__44022__auto__);

return statearr_45008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

return c__44022__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45011 = arguments.length;
switch (G__45011) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47448 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47448(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47453 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47453(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47465 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47465(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47474 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47474(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45062 = (function (ch,cs,meta45063){
this.ch = ch;
this.cs = cs;
this.meta45063 = meta45063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45064,meta45063__$1){
var self__ = this;
var _45064__$1 = this;
return (new cljs.core.async.t_cljs$core$async45062(self__.ch,self__.cs,meta45063__$1));
}));

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45064){
var self__ = this;
var _45064__$1 = this;
return self__.meta45063;
}));

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45063","meta45063",48982190,null)], null);
}));

(cljs.core.async.t_cljs$core$async45062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45062");

(cljs.core.async.t_cljs$core$async45062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45062.
 */
cljs.core.async.__GT_t_cljs$core$async45062 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45062(ch__$1,cs__$1,meta45063){
return (new cljs.core.async.t_cljs$core$async45062(ch__$1,cs__$1,meta45063));
});

}

return (new cljs.core.async.t_cljs$core$async45062(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44022__auto___47502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_45255){
var state_val_45256 = (state_45255[(1)]);
if((state_val_45256 === (7))){
var inst_45251 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45257_47506 = state_45255__$1;
(statearr_45257_47506[(2)] = inst_45251);

(statearr_45257_47506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (20))){
var inst_45149 = (state_45255[(7)]);
var inst_45161 = cljs.core.first(inst_45149);
var inst_45162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45161,(0),null);
var inst_45163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45161,(1),null);
var state_45255__$1 = (function (){var statearr_45258 = state_45255;
(statearr_45258[(8)] = inst_45162);

return statearr_45258;
})();
if(cljs.core.truth_(inst_45163)){
var statearr_45259_47509 = state_45255__$1;
(statearr_45259_47509[(1)] = (22));

} else {
var statearr_45260_47510 = state_45255__$1;
(statearr_45260_47510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (27))){
var inst_45201 = (state_45255[(9)]);
var inst_45118 = (state_45255[(10)]);
var inst_45196 = (state_45255[(11)]);
var inst_45194 = (state_45255[(12)]);
var inst_45201__$1 = cljs.core._nth(inst_45194,inst_45196);
var inst_45202 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45201__$1,inst_45118,done);
var state_45255__$1 = (function (){var statearr_45269 = state_45255;
(statearr_45269[(9)] = inst_45201__$1);

return statearr_45269;
})();
if(cljs.core.truth_(inst_45202)){
var statearr_45270_47517 = state_45255__$1;
(statearr_45270_47517[(1)] = (30));

} else {
var statearr_45271_47520 = state_45255__$1;
(statearr_45271_47520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (1))){
var state_45255__$1 = state_45255;
var statearr_45272_47524 = state_45255__$1;
(statearr_45272_47524[(2)] = null);

(statearr_45272_47524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (24))){
var inst_45149 = (state_45255[(7)]);
var inst_45169 = (state_45255[(2)]);
var inst_45170 = cljs.core.next(inst_45149);
var inst_45127 = inst_45170;
var inst_45128 = null;
var inst_45129 = (0);
var inst_45130 = (0);
var state_45255__$1 = (function (){var statearr_45278 = state_45255;
(statearr_45278[(13)] = inst_45169);

(statearr_45278[(14)] = inst_45130);

(statearr_45278[(15)] = inst_45129);

(statearr_45278[(16)] = inst_45127);

(statearr_45278[(17)] = inst_45128);

return statearr_45278;
})();
var statearr_45279_47528 = state_45255__$1;
(statearr_45279_47528[(2)] = null);

(statearr_45279_47528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (39))){
var state_45255__$1 = state_45255;
var statearr_45293_47530 = state_45255__$1;
(statearr_45293_47530[(2)] = null);

(statearr_45293_47530[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (4))){
var inst_45118 = (state_45255[(10)]);
var inst_45118__$1 = (state_45255[(2)]);
var inst_45119 = (inst_45118__$1 == null);
var state_45255__$1 = (function (){var statearr_45297 = state_45255;
(statearr_45297[(10)] = inst_45118__$1);

return statearr_45297;
})();
if(cljs.core.truth_(inst_45119)){
var statearr_45302_47532 = state_45255__$1;
(statearr_45302_47532[(1)] = (5));

} else {
var statearr_45303_47533 = state_45255__$1;
(statearr_45303_47533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (15))){
var inst_45130 = (state_45255[(14)]);
var inst_45129 = (state_45255[(15)]);
var inst_45127 = (state_45255[(16)]);
var inst_45128 = (state_45255[(17)]);
var inst_45145 = (state_45255[(2)]);
var inst_45146 = (inst_45130 + (1));
var tmp45290 = inst_45129;
var tmp45291 = inst_45127;
var tmp45292 = inst_45128;
var inst_45127__$1 = tmp45291;
var inst_45128__$1 = tmp45292;
var inst_45129__$1 = tmp45290;
var inst_45130__$1 = inst_45146;
var state_45255__$1 = (function (){var statearr_45304 = state_45255;
(statearr_45304[(14)] = inst_45130__$1);

(statearr_45304[(15)] = inst_45129__$1);

(statearr_45304[(16)] = inst_45127__$1);

(statearr_45304[(17)] = inst_45128__$1);

(statearr_45304[(18)] = inst_45145);

return statearr_45304;
})();
var statearr_45305_47537 = state_45255__$1;
(statearr_45305_47537[(2)] = null);

(statearr_45305_47537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (21))){
var inst_45174 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45309_47539 = state_45255__$1;
(statearr_45309_47539[(2)] = inst_45174);

(statearr_45309_47539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (31))){
var inst_45201 = (state_45255[(9)]);
var inst_45205 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45201);
var state_45255__$1 = state_45255;
var statearr_45310_47550 = state_45255__$1;
(statearr_45310_47550[(2)] = inst_45205);

(statearr_45310_47550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (32))){
var inst_45193 = (state_45255[(19)]);
var inst_45196 = (state_45255[(11)]);
var inst_45194 = (state_45255[(12)]);
var inst_45195 = (state_45255[(20)]);
var inst_45207 = (state_45255[(2)]);
var inst_45208 = (inst_45196 + (1));
var tmp45306 = inst_45193;
var tmp45307 = inst_45194;
var tmp45308 = inst_45195;
var inst_45193__$1 = tmp45306;
var inst_45194__$1 = tmp45307;
var inst_45195__$1 = tmp45308;
var inst_45196__$1 = inst_45208;
var state_45255__$1 = (function (){var statearr_45311 = state_45255;
(statearr_45311[(21)] = inst_45207);

(statearr_45311[(19)] = inst_45193__$1);

(statearr_45311[(11)] = inst_45196__$1);

(statearr_45311[(12)] = inst_45194__$1);

(statearr_45311[(20)] = inst_45195__$1);

return statearr_45311;
})();
var statearr_45312_47561 = state_45255__$1;
(statearr_45312_47561[(2)] = null);

(statearr_45312_47561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (40))){
var inst_45224 = (state_45255[(22)]);
var inst_45228 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45224);
var state_45255__$1 = state_45255;
var statearr_45313_47568 = state_45255__$1;
(statearr_45313_47568[(2)] = inst_45228);

(statearr_45313_47568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (33))){
var inst_45212 = (state_45255[(23)]);
var inst_45216 = cljs.core.chunked_seq_QMARK_(inst_45212);
var state_45255__$1 = state_45255;
if(inst_45216){
var statearr_45314_47571 = state_45255__$1;
(statearr_45314_47571[(1)] = (36));

} else {
var statearr_45315_47573 = state_45255__$1;
(statearr_45315_47573[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (13))){
var inst_45139 = (state_45255[(24)]);
var inst_45142 = cljs.core.async.close_BANG_(inst_45139);
var state_45255__$1 = state_45255;
var statearr_45320_47578 = state_45255__$1;
(statearr_45320_47578[(2)] = inst_45142);

(statearr_45320_47578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (22))){
var inst_45162 = (state_45255[(8)]);
var inst_45166 = cljs.core.async.close_BANG_(inst_45162);
var state_45255__$1 = state_45255;
var statearr_45327_47583 = state_45255__$1;
(statearr_45327_47583[(2)] = inst_45166);

(statearr_45327_47583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (36))){
var inst_45212 = (state_45255[(23)]);
var inst_45219 = cljs.core.chunk_first(inst_45212);
var inst_45220 = cljs.core.chunk_rest(inst_45212);
var inst_45221 = cljs.core.count(inst_45219);
var inst_45193 = inst_45220;
var inst_45194 = inst_45219;
var inst_45195 = inst_45221;
var inst_45196 = (0);
var state_45255__$1 = (function (){var statearr_45331 = state_45255;
(statearr_45331[(19)] = inst_45193);

(statearr_45331[(11)] = inst_45196);

(statearr_45331[(12)] = inst_45194);

(statearr_45331[(20)] = inst_45195);

return statearr_45331;
})();
var statearr_45332_47588 = state_45255__$1;
(statearr_45332_47588[(2)] = null);

(statearr_45332_47588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (41))){
var inst_45212 = (state_45255[(23)]);
var inst_45230 = (state_45255[(2)]);
var inst_45231 = cljs.core.next(inst_45212);
var inst_45193 = inst_45231;
var inst_45194 = null;
var inst_45195 = (0);
var inst_45196 = (0);
var state_45255__$1 = (function (){var statearr_45333 = state_45255;
(statearr_45333[(25)] = inst_45230);

(statearr_45333[(19)] = inst_45193);

(statearr_45333[(11)] = inst_45196);

(statearr_45333[(12)] = inst_45194);

(statearr_45333[(20)] = inst_45195);

return statearr_45333;
})();
var statearr_45334_47592 = state_45255__$1;
(statearr_45334_47592[(2)] = null);

(statearr_45334_47592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (43))){
var state_45255__$1 = state_45255;
var statearr_45335_47593 = state_45255__$1;
(statearr_45335_47593[(2)] = null);

(statearr_45335_47593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (29))){
var inst_45239 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45340_47598 = state_45255__$1;
(statearr_45340_47598[(2)] = inst_45239);

(statearr_45340_47598[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (44))){
var inst_45248 = (state_45255[(2)]);
var state_45255__$1 = (function (){var statearr_45341 = state_45255;
(statearr_45341[(26)] = inst_45248);

return statearr_45341;
})();
var statearr_45342_47599 = state_45255__$1;
(statearr_45342_47599[(2)] = null);

(statearr_45342_47599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (6))){
var inst_45184 = (state_45255[(27)]);
var inst_45183 = cljs.core.deref(cs);
var inst_45184__$1 = cljs.core.keys(inst_45183);
var inst_45185 = cljs.core.count(inst_45184__$1);
var inst_45186 = cljs.core.reset_BANG_(dctr,inst_45185);
var inst_45191 = cljs.core.seq(inst_45184__$1);
var inst_45193 = inst_45191;
var inst_45194 = null;
var inst_45195 = (0);
var inst_45196 = (0);
var state_45255__$1 = (function (){var statearr_45343 = state_45255;
(statearr_45343[(27)] = inst_45184__$1);

(statearr_45343[(19)] = inst_45193);

(statearr_45343[(11)] = inst_45196);

(statearr_45343[(12)] = inst_45194);

(statearr_45343[(20)] = inst_45195);

(statearr_45343[(28)] = inst_45186);

return statearr_45343;
})();
var statearr_45344_47604 = state_45255__$1;
(statearr_45344_47604[(2)] = null);

(statearr_45344_47604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (28))){
var inst_45212 = (state_45255[(23)]);
var inst_45193 = (state_45255[(19)]);
var inst_45212__$1 = cljs.core.seq(inst_45193);
var state_45255__$1 = (function (){var statearr_45345 = state_45255;
(statearr_45345[(23)] = inst_45212__$1);

return statearr_45345;
})();
if(inst_45212__$1){
var statearr_45346_47605 = state_45255__$1;
(statearr_45346_47605[(1)] = (33));

} else {
var statearr_45347_47607 = state_45255__$1;
(statearr_45347_47607[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (25))){
var inst_45196 = (state_45255[(11)]);
var inst_45195 = (state_45255[(20)]);
var inst_45198 = (inst_45196 < inst_45195);
var inst_45199 = inst_45198;
var state_45255__$1 = state_45255;
if(cljs.core.truth_(inst_45199)){
var statearr_45348_47614 = state_45255__$1;
(statearr_45348_47614[(1)] = (27));

} else {
var statearr_45349_47615 = state_45255__$1;
(statearr_45349_47615[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (34))){
var state_45255__$1 = state_45255;
var statearr_45354_47616 = state_45255__$1;
(statearr_45354_47616[(2)] = null);

(statearr_45354_47616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (17))){
var state_45255__$1 = state_45255;
var statearr_45355_47620 = state_45255__$1;
(statearr_45355_47620[(2)] = null);

(statearr_45355_47620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (3))){
var inst_45253 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45255__$1,inst_45253);
} else {
if((state_val_45256 === (12))){
var inst_45179 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45361_47633 = state_45255__$1;
(statearr_45361_47633[(2)] = inst_45179);

(statearr_45361_47633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (2))){
var state_45255__$1 = state_45255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45255__$1,(4),ch);
} else {
if((state_val_45256 === (23))){
var state_45255__$1 = state_45255;
var statearr_45362_47636 = state_45255__$1;
(statearr_45362_47636[(2)] = null);

(statearr_45362_47636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (35))){
var inst_45237 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45363_47638 = state_45255__$1;
(statearr_45363_47638[(2)] = inst_45237);

(statearr_45363_47638[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (19))){
var inst_45149 = (state_45255[(7)]);
var inst_45153 = cljs.core.chunk_first(inst_45149);
var inst_45154 = cljs.core.chunk_rest(inst_45149);
var inst_45155 = cljs.core.count(inst_45153);
var inst_45127 = inst_45154;
var inst_45128 = inst_45153;
var inst_45129 = inst_45155;
var inst_45130 = (0);
var state_45255__$1 = (function (){var statearr_45364 = state_45255;
(statearr_45364[(14)] = inst_45130);

(statearr_45364[(15)] = inst_45129);

(statearr_45364[(16)] = inst_45127);

(statearr_45364[(17)] = inst_45128);

return statearr_45364;
})();
var statearr_45365_47646 = state_45255__$1;
(statearr_45365_47646[(2)] = null);

(statearr_45365_47646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (11))){
var inst_45149 = (state_45255[(7)]);
var inst_45127 = (state_45255[(16)]);
var inst_45149__$1 = cljs.core.seq(inst_45127);
var state_45255__$1 = (function (){var statearr_45370 = state_45255;
(statearr_45370[(7)] = inst_45149__$1);

return statearr_45370;
})();
if(inst_45149__$1){
var statearr_45371_47654 = state_45255__$1;
(statearr_45371_47654[(1)] = (16));

} else {
var statearr_45372_47656 = state_45255__$1;
(statearr_45372_47656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (9))){
var inst_45181 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45373_47658 = state_45255__$1;
(statearr_45373_47658[(2)] = inst_45181);

(statearr_45373_47658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (5))){
var inst_45125 = cljs.core.deref(cs);
var inst_45126 = cljs.core.seq(inst_45125);
var inst_45127 = inst_45126;
var inst_45128 = null;
var inst_45129 = (0);
var inst_45130 = (0);
var state_45255__$1 = (function (){var statearr_45375 = state_45255;
(statearr_45375[(14)] = inst_45130);

(statearr_45375[(15)] = inst_45129);

(statearr_45375[(16)] = inst_45127);

(statearr_45375[(17)] = inst_45128);

return statearr_45375;
})();
var statearr_45380_47664 = state_45255__$1;
(statearr_45380_47664[(2)] = null);

(statearr_45380_47664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (14))){
var state_45255__$1 = state_45255;
var statearr_45381_47667 = state_45255__$1;
(statearr_45381_47667[(2)] = null);

(statearr_45381_47667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (45))){
var inst_45245 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45382_47668 = state_45255__$1;
(statearr_45382_47668[(2)] = inst_45245);

(statearr_45382_47668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (26))){
var inst_45184 = (state_45255[(27)]);
var inst_45241 = (state_45255[(2)]);
var inst_45242 = cljs.core.seq(inst_45184);
var state_45255__$1 = (function (){var statearr_45383 = state_45255;
(statearr_45383[(29)] = inst_45241);

return statearr_45383;
})();
if(inst_45242){
var statearr_45384_47674 = state_45255__$1;
(statearr_45384_47674[(1)] = (42));

} else {
var statearr_45385_47675 = state_45255__$1;
(statearr_45385_47675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (16))){
var inst_45149 = (state_45255[(7)]);
var inst_45151 = cljs.core.chunked_seq_QMARK_(inst_45149);
var state_45255__$1 = state_45255;
if(inst_45151){
var statearr_45386_47678 = state_45255__$1;
(statearr_45386_47678[(1)] = (19));

} else {
var statearr_45387_47680 = state_45255__$1;
(statearr_45387_47680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (38))){
var inst_45234 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45390_47681 = state_45255__$1;
(statearr_45390_47681[(2)] = inst_45234);

(statearr_45390_47681[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (30))){
var state_45255__$1 = state_45255;
var statearr_45391_47685 = state_45255__$1;
(statearr_45391_47685[(2)] = null);

(statearr_45391_47685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (10))){
var inst_45130 = (state_45255[(14)]);
var inst_45128 = (state_45255[(17)]);
var inst_45138 = cljs.core._nth(inst_45128,inst_45130);
var inst_45139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45138,(0),null);
var inst_45140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45138,(1),null);
var state_45255__$1 = (function (){var statearr_45394 = state_45255;
(statearr_45394[(24)] = inst_45139);

return statearr_45394;
})();
if(cljs.core.truth_(inst_45140)){
var statearr_45395_47691 = state_45255__$1;
(statearr_45395_47691[(1)] = (13));

} else {
var statearr_45396_47693 = state_45255__$1;
(statearr_45396_47693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (18))){
var inst_45177 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45397_47694 = state_45255__$1;
(statearr_45397_47694[(2)] = inst_45177);

(statearr_45397_47694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (42))){
var state_45255__$1 = state_45255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45255__$1,(45),dchan);
} else {
if((state_val_45256 === (37))){
var inst_45224 = (state_45255[(22)]);
var inst_45118 = (state_45255[(10)]);
var inst_45212 = (state_45255[(23)]);
var inst_45224__$1 = cljs.core.first(inst_45212);
var inst_45225 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45224__$1,inst_45118,done);
var state_45255__$1 = (function (){var statearr_45398 = state_45255;
(statearr_45398[(22)] = inst_45224__$1);

return statearr_45398;
})();
if(cljs.core.truth_(inst_45225)){
var statearr_45399_47706 = state_45255__$1;
(statearr_45399_47706[(1)] = (39));

} else {
var statearr_45400_47708 = state_45255__$1;
(statearr_45400_47708[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (8))){
var inst_45130 = (state_45255[(14)]);
var inst_45129 = (state_45255[(15)]);
var inst_45132 = (inst_45130 < inst_45129);
var inst_45133 = inst_45132;
var state_45255__$1 = state_45255;
if(cljs.core.truth_(inst_45133)){
var statearr_45402_47716 = state_45255__$1;
(statearr_45402_47716[(1)] = (10));

} else {
var statearr_45404_47718 = state_45255__$1;
(statearr_45404_47718[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43870__auto__ = null;
var cljs$core$async$mult_$_state_machine__43870__auto____0 = (function (){
var statearr_45412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45412[(0)] = cljs$core$async$mult_$_state_machine__43870__auto__);

(statearr_45412[(1)] = (1));

return statearr_45412;
});
var cljs$core$async$mult_$_state_machine__43870__auto____1 = (function (state_45255){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_45255);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e45413){var ex__43873__auto__ = e45413;
var statearr_45414_47735 = state_45255;
(statearr_45414_47735[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_45255[(4)]))){
var statearr_45415_47737 = state_45255;
(statearr_45415_47737[(1)] = cljs.core.first((state_45255[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47738 = state_45255;
state_45255 = G__47738;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43870__auto__ = function(state_45255){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43870__auto____1.call(this,state_45255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43870__auto____0;
cljs$core$async$mult_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43870__auto____1;
return cljs$core$async$mult_$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_45417 = f__44023__auto__();
(statearr_45417[(6)] = c__44022__auto___47502);

return statearr_45417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45423 = arguments.length;
switch (G__45423) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47753 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47753(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47778 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47778(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47791 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47791(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47798 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47798(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47807 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47807(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47818 = arguments.length;
var i__4737__auto___47819 = (0);
while(true){
if((i__4737__auto___47819 < len__4736__auto___47818)){
args__4742__auto__.push((arguments[i__4737__auto___47819]));

var G__47820 = (i__4737__auto___47819 + (1));
i__4737__auto___47819 = G__47820;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45468){
var map__45472 = p__45468;
var map__45472__$1 = (((((!((map__45472 == null))))?(((((map__45472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45472):map__45472);
var opts = map__45472__$1;
var statearr_45479_47835 = state;
(statearr_45479_47835[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45482_47837 = state;
(statearr_45482_47837[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45489_47839 = state;
(statearr_45489_47839[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45456){
var G__45458 = cljs.core.first(seq45456);
var seq45456__$1 = cljs.core.next(seq45456);
var G__45459 = cljs.core.first(seq45456__$1);
var seq45456__$2 = cljs.core.next(seq45456__$1);
var G__45460 = cljs.core.first(seq45456__$2);
var seq45456__$3 = cljs.core.next(seq45456__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45458,G__45459,G__45460,seq45456__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45503 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45504){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45504 = meta45504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45505,meta45504__$1){
var self__ = this;
var _45505__$1 = this;
return (new cljs.core.async.t_cljs$core$async45503(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45504__$1));
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45505){
var self__ = this;
var _45505__$1 = this;
return self__.meta45504;
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45504","meta45504",1073149316,null)], null);
}));

(cljs.core.async.t_cljs$core$async45503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45503");

(cljs.core.async.t_cljs$core$async45503.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45503.
 */
cljs.core.async.__GT_t_cljs$core$async45503 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45503(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45504){
return (new cljs.core.async.t_cljs$core$async45503(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45504));
});

}

return (new cljs.core.async.t_cljs$core$async45503(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44022__auto___47883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_45634){
var state_val_45635 = (state_45634[(1)]);
if((state_val_45635 === (7))){
var inst_45538 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45642_47884 = state_45634__$1;
(statearr_45642_47884[(2)] = inst_45538);

(statearr_45642_47884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (20))){
var inst_45550 = (state_45634[(7)]);
var state_45634__$1 = state_45634;
var statearr_45645_47888 = state_45634__$1;
(statearr_45645_47888[(2)] = inst_45550);

(statearr_45645_47888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (27))){
var state_45634__$1 = state_45634;
var statearr_45646_47889 = state_45634__$1;
(statearr_45646_47889[(2)] = null);

(statearr_45646_47889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (1))){
var inst_45524 = (state_45634[(8)]);
var inst_45524__$1 = calc_state();
var inst_45526 = (inst_45524__$1 == null);
var inst_45527 = cljs.core.not(inst_45526);
var state_45634__$1 = (function (){var statearr_45647 = state_45634;
(statearr_45647[(8)] = inst_45524__$1);

return statearr_45647;
})();
if(inst_45527){
var statearr_45649_47894 = state_45634__$1;
(statearr_45649_47894[(1)] = (2));

} else {
var statearr_45650_47895 = state_45634__$1;
(statearr_45650_47895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (24))){
var inst_45578 = (state_45634[(9)]);
var inst_45602 = (state_45634[(10)]);
var inst_45588 = (state_45634[(11)]);
var inst_45602__$1 = (inst_45578.cljs$core$IFn$_invoke$arity$1 ? inst_45578.cljs$core$IFn$_invoke$arity$1(inst_45588) : inst_45578.call(null,inst_45588));
var state_45634__$1 = (function (){var statearr_45651 = state_45634;
(statearr_45651[(10)] = inst_45602__$1);

return statearr_45651;
})();
if(cljs.core.truth_(inst_45602__$1)){
var statearr_45653_47906 = state_45634__$1;
(statearr_45653_47906[(1)] = (29));

} else {
var statearr_45654_47907 = state_45634__$1;
(statearr_45654_47907[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (4))){
var inst_45541 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45541)){
var statearr_45655_47909 = state_45634__$1;
(statearr_45655_47909[(1)] = (8));

} else {
var statearr_45656_47913 = state_45634__$1;
(statearr_45656_47913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (15))){
var inst_45570 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45570)){
var statearr_45660_47915 = state_45634__$1;
(statearr_45660_47915[(1)] = (19));

} else {
var statearr_45661_47917 = state_45634__$1;
(statearr_45661_47917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (21))){
var inst_45577 = (state_45634[(12)]);
var inst_45577__$1 = (state_45634[(2)]);
var inst_45578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45577__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45577__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45577__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45634__$1 = (function (){var statearr_45665 = state_45634;
(statearr_45665[(13)] = inst_45579);

(statearr_45665[(9)] = inst_45578);

(statearr_45665[(12)] = inst_45577__$1);

return statearr_45665;
})();
return cljs.core.async.ioc_alts_BANG_(state_45634__$1,(22),inst_45580);
} else {
if((state_val_45635 === (31))){
var inst_45611 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45611)){
var statearr_45670_47924 = state_45634__$1;
(statearr_45670_47924[(1)] = (32));

} else {
var statearr_45672_47925 = state_45634__$1;
(statearr_45672_47925[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (32))){
var inst_45586 = (state_45634[(14)]);
var state_45634__$1 = state_45634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45634__$1,(35),out,inst_45586);
} else {
if((state_val_45635 === (33))){
var inst_45577 = (state_45634[(12)]);
var inst_45550 = inst_45577;
var state_45634__$1 = (function (){var statearr_45674 = state_45634;
(statearr_45674[(7)] = inst_45550);

return statearr_45674;
})();
var statearr_45676_47932 = state_45634__$1;
(statearr_45676_47932[(2)] = null);

(statearr_45676_47932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (13))){
var inst_45550 = (state_45634[(7)]);
var inst_45559 = inst_45550.cljs$lang$protocol_mask$partition0$;
var inst_45560 = (inst_45559 & (64));
var inst_45561 = inst_45550.cljs$core$ISeq$;
var inst_45562 = (cljs.core.PROTOCOL_SENTINEL === inst_45561);
var inst_45563 = ((inst_45560) || (inst_45562));
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45563)){
var statearr_45679_47934 = state_45634__$1;
(statearr_45679_47934[(1)] = (16));

} else {
var statearr_45680_47935 = state_45634__$1;
(statearr_45680_47935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (22))){
var inst_45586 = (state_45634[(14)]);
var inst_45588 = (state_45634[(11)]);
var inst_45585 = (state_45634[(2)]);
var inst_45586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45585,(0),null);
var inst_45588__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45585,(1),null);
var inst_45589 = (inst_45586__$1 == null);
var inst_45590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45588__$1,change);
var inst_45591 = ((inst_45589) || (inst_45590));
var state_45634__$1 = (function (){var statearr_45689 = state_45634;
(statearr_45689[(14)] = inst_45586__$1);

(statearr_45689[(11)] = inst_45588__$1);

return statearr_45689;
})();
if(cljs.core.truth_(inst_45591)){
var statearr_45691_47940 = state_45634__$1;
(statearr_45691_47940[(1)] = (23));

} else {
var statearr_45692_47941 = state_45634__$1;
(statearr_45692_47941[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (36))){
var inst_45577 = (state_45634[(12)]);
var inst_45550 = inst_45577;
var state_45634__$1 = (function (){var statearr_45694 = state_45634;
(statearr_45694[(7)] = inst_45550);

return statearr_45694;
})();
var statearr_45699_47943 = state_45634__$1;
(statearr_45699_47943[(2)] = null);

(statearr_45699_47943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (29))){
var inst_45602 = (state_45634[(10)]);
var state_45634__$1 = state_45634;
var statearr_45701_47945 = state_45634__$1;
(statearr_45701_47945[(2)] = inst_45602);

(statearr_45701_47945[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (6))){
var state_45634__$1 = state_45634;
var statearr_45710_47948 = state_45634__$1;
(statearr_45710_47948[(2)] = false);

(statearr_45710_47948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (28))){
var inst_45598 = (state_45634[(2)]);
var inst_45599 = calc_state();
var inst_45550 = inst_45599;
var state_45634__$1 = (function (){var statearr_45715 = state_45634;
(statearr_45715[(15)] = inst_45598);

(statearr_45715[(7)] = inst_45550);

return statearr_45715;
})();
var statearr_45716_47951 = state_45634__$1;
(statearr_45716_47951[(2)] = null);

(statearr_45716_47951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (25))){
var inst_45625 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45719_47961 = state_45634__$1;
(statearr_45719_47961[(2)] = inst_45625);

(statearr_45719_47961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (34))){
var inst_45623 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45720_47967 = state_45634__$1;
(statearr_45720_47967[(2)] = inst_45623);

(statearr_45720_47967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (17))){
var state_45634__$1 = state_45634;
var statearr_45722_47978 = state_45634__$1;
(statearr_45722_47978[(2)] = false);

(statearr_45722_47978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (3))){
var state_45634__$1 = state_45634;
var statearr_45725_47979 = state_45634__$1;
(statearr_45725_47979[(2)] = false);

(statearr_45725_47979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (12))){
var inst_45627 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45634__$1,inst_45627);
} else {
if((state_val_45635 === (2))){
var inst_45524 = (state_45634[(8)]);
var inst_45529 = inst_45524.cljs$lang$protocol_mask$partition0$;
var inst_45530 = (inst_45529 & (64));
var inst_45532 = inst_45524.cljs$core$ISeq$;
var inst_45533 = (cljs.core.PROTOCOL_SENTINEL === inst_45532);
var inst_45534 = ((inst_45530) || (inst_45533));
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45534)){
var statearr_45728_47982 = state_45634__$1;
(statearr_45728_47982[(1)] = (5));

} else {
var statearr_45729_47983 = state_45634__$1;
(statearr_45729_47983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (23))){
var inst_45586 = (state_45634[(14)]);
var inst_45593 = (inst_45586 == null);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45593)){
var statearr_45730_47984 = state_45634__$1;
(statearr_45730_47984[(1)] = (26));

} else {
var statearr_45731_47985 = state_45634__$1;
(statearr_45731_47985[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (35))){
var inst_45614 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45614)){
var statearr_45732_47986 = state_45634__$1;
(statearr_45732_47986[(1)] = (36));

} else {
var statearr_45733_47987 = state_45634__$1;
(statearr_45733_47987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (19))){
var inst_45550 = (state_45634[(7)]);
var inst_45574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45550);
var state_45634__$1 = state_45634;
var statearr_45735_47996 = state_45634__$1;
(statearr_45735_47996[(2)] = inst_45574);

(statearr_45735_47996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (11))){
var inst_45550 = (state_45634[(7)]);
var inst_45556 = (inst_45550 == null);
var inst_45557 = cljs.core.not(inst_45556);
var state_45634__$1 = state_45634;
if(inst_45557){
var statearr_45739_48001 = state_45634__$1;
(statearr_45739_48001[(1)] = (13));

} else {
var statearr_45741_48002 = state_45634__$1;
(statearr_45741_48002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (9))){
var inst_45524 = (state_45634[(8)]);
var state_45634__$1 = state_45634;
var statearr_45742_48005 = state_45634__$1;
(statearr_45742_48005[(2)] = inst_45524);

(statearr_45742_48005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (5))){
var state_45634__$1 = state_45634;
var statearr_45745_48006 = state_45634__$1;
(statearr_45745_48006[(2)] = true);

(statearr_45745_48006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (14))){
var state_45634__$1 = state_45634;
var statearr_45746_48007 = state_45634__$1;
(statearr_45746_48007[(2)] = false);

(statearr_45746_48007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (26))){
var inst_45588 = (state_45634[(11)]);
var inst_45595 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45588);
var state_45634__$1 = state_45634;
var statearr_45748_48008 = state_45634__$1;
(statearr_45748_48008[(2)] = inst_45595);

(statearr_45748_48008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (16))){
var state_45634__$1 = state_45634;
var statearr_45755_48009 = state_45634__$1;
(statearr_45755_48009[(2)] = true);

(statearr_45755_48009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (38))){
var inst_45619 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45757_48010 = state_45634__$1;
(statearr_45757_48010[(2)] = inst_45619);

(statearr_45757_48010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (30))){
var inst_45579 = (state_45634[(13)]);
var inst_45578 = (state_45634[(9)]);
var inst_45588 = (state_45634[(11)]);
var inst_45605 = cljs.core.empty_QMARK_(inst_45578);
var inst_45606 = (inst_45579.cljs$core$IFn$_invoke$arity$1 ? inst_45579.cljs$core$IFn$_invoke$arity$1(inst_45588) : inst_45579.call(null,inst_45588));
var inst_45607 = cljs.core.not(inst_45606);
var inst_45609 = ((inst_45605) && (inst_45607));
var state_45634__$1 = state_45634;
var statearr_45760_48012 = state_45634__$1;
(statearr_45760_48012[(2)] = inst_45609);

(statearr_45760_48012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (10))){
var inst_45524 = (state_45634[(8)]);
var inst_45546 = (state_45634[(2)]);
var inst_45547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45550 = inst_45524;
var state_45634__$1 = (function (){var statearr_45762 = state_45634;
(statearr_45762[(16)] = inst_45547);

(statearr_45762[(17)] = inst_45548);

(statearr_45762[(18)] = inst_45549);

(statearr_45762[(7)] = inst_45550);

return statearr_45762;
})();
var statearr_45766_48014 = state_45634__$1;
(statearr_45766_48014[(2)] = null);

(statearr_45766_48014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (18))){
var inst_45567 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45770_48021 = state_45634__$1;
(statearr_45770_48021[(2)] = inst_45567);

(statearr_45770_48021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (37))){
var state_45634__$1 = state_45634;
var statearr_45771_48022 = state_45634__$1;
(statearr_45771_48022[(2)] = null);

(statearr_45771_48022[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (8))){
var inst_45524 = (state_45634[(8)]);
var inst_45543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45524);
var state_45634__$1 = state_45634;
var statearr_45773_48027 = state_45634__$1;
(statearr_45773_48027[(2)] = inst_45543);

(statearr_45773_48027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43870__auto__ = null;
var cljs$core$async$mix_$_state_machine__43870__auto____0 = (function (){
var statearr_45781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45781[(0)] = cljs$core$async$mix_$_state_machine__43870__auto__);

(statearr_45781[(1)] = (1));

return statearr_45781;
});
var cljs$core$async$mix_$_state_machine__43870__auto____1 = (function (state_45634){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_45634);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e45783){var ex__43873__auto__ = e45783;
var statearr_45784_48030 = state_45634;
(statearr_45784_48030[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_45634[(4)]))){
var statearr_45787_48031 = state_45634;
(statearr_45787_48031[(1)] = cljs.core.first((state_45634[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48033 = state_45634;
state_45634 = G__48033;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43870__auto__ = function(state_45634){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43870__auto____1.call(this,state_45634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43870__auto____0;
cljs$core$async$mix_$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43870__auto____1;
return cljs$core$async$mix_$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_45789 = f__44023__auto__();
(statearr_45789[(6)] = c__44022__auto___47883);

return statearr_45789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48054 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48054(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48063 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48063(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48079 = (function() {
var G__48080 = null;
var G__48080__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48080__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48080 = function(p,v){
switch(arguments.length){
case 1:
return G__48080__1.call(this,p);
case 2:
return G__48080__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48080.cljs$core$IFn$_invoke$arity$1 = G__48080__1;
G__48080.cljs$core$IFn$_invoke$arity$2 = G__48080__2;
return G__48080;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45824 = arguments.length;
switch (G__45824) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48079(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48079(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45836 = arguments.length;
switch (G__45836) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45831_SHARP_){
if(cljs.core.truth_((p1__45831_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45831_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45831_SHARP_.call(null,topic)))){
return p1__45831_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45831_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45846 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45847){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45847 = meta45847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45848,meta45847__$1){
var self__ = this;
var _45848__$1 = this;
return (new cljs.core.async.t_cljs$core$async45846(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45847__$1));
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45848){
var self__ = this;
var _45848__$1 = this;
return self__.meta45847;
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45847","meta45847",1508364703,null)], null);
}));

(cljs.core.async.t_cljs$core$async45846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45846");

(cljs.core.async.t_cljs$core$async45846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45846.
 */
cljs.core.async.__GT_t_cljs$core$async45846 = (function cljs$core$async$__GT_t_cljs$core$async45846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45847){
return (new cljs.core.async.t_cljs$core$async45846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45847));
});

}

return (new cljs.core.async.t_cljs$core$async45846(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44022__auto___48160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_45938){
var state_val_45939 = (state_45938[(1)]);
if((state_val_45939 === (7))){
var inst_45933 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_45945_48161 = state_45938__$1;
(statearr_45945_48161[(2)] = inst_45933);

(statearr_45945_48161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (20))){
var state_45938__$1 = state_45938;
var statearr_45946_48162 = state_45938__$1;
(statearr_45946_48162[(2)] = null);

(statearr_45946_48162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (1))){
var state_45938__$1 = state_45938;
var statearr_45949_48163 = state_45938__$1;
(statearr_45949_48163[(2)] = null);

(statearr_45949_48163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (24))){
var inst_45916 = (state_45938[(7)]);
var inst_45925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45916);
var state_45938__$1 = state_45938;
var statearr_45951_48164 = state_45938__$1;
(statearr_45951_48164[(2)] = inst_45925);

(statearr_45951_48164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (4))){
var inst_45867 = (state_45938[(8)]);
var inst_45867__$1 = (state_45938[(2)]);
var inst_45868 = (inst_45867__$1 == null);
var state_45938__$1 = (function (){var statearr_45953 = state_45938;
(statearr_45953[(8)] = inst_45867__$1);

return statearr_45953;
})();
if(cljs.core.truth_(inst_45868)){
var statearr_45954_48166 = state_45938__$1;
(statearr_45954_48166[(1)] = (5));

} else {
var statearr_45955_48167 = state_45938__$1;
(statearr_45955_48167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (15))){
var inst_45910 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_45956_48169 = state_45938__$1;
(statearr_45956_48169[(2)] = inst_45910);

(statearr_45956_48169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (21))){
var inst_45930 = (state_45938[(2)]);
var state_45938__$1 = (function (){var statearr_45957 = state_45938;
(statearr_45957[(9)] = inst_45930);

return statearr_45957;
})();
var statearr_45960_48172 = state_45938__$1;
(statearr_45960_48172[(2)] = null);

(statearr_45960_48172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (13))){
var inst_45891 = (state_45938[(10)]);
var inst_45893 = cljs.core.chunked_seq_QMARK_(inst_45891);
var state_45938__$1 = state_45938;
if(inst_45893){
var statearr_45962_48175 = state_45938__$1;
(statearr_45962_48175[(1)] = (16));

} else {
var statearr_45965_48177 = state_45938__$1;
(statearr_45965_48177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (22))){
var inst_45922 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
if(cljs.core.truth_(inst_45922)){
var statearr_45967_48179 = state_45938__$1;
(statearr_45967_48179[(1)] = (23));

} else {
var statearr_45968_48180 = state_45938__$1;
(statearr_45968_48180[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (6))){
var inst_45916 = (state_45938[(7)]);
var inst_45918 = (state_45938[(11)]);
var inst_45867 = (state_45938[(8)]);
var inst_45916__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45867) : topic_fn.call(null,inst_45867));
var inst_45917 = cljs.core.deref(mults);
var inst_45918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45917,inst_45916__$1);
var state_45938__$1 = (function (){var statearr_45969 = state_45938;
(statearr_45969[(7)] = inst_45916__$1);

(statearr_45969[(11)] = inst_45918__$1);

return statearr_45969;
})();
if(cljs.core.truth_(inst_45918__$1)){
var statearr_45971_48191 = state_45938__$1;
(statearr_45971_48191[(1)] = (19));

} else {
var statearr_45972_48193 = state_45938__$1;
(statearr_45972_48193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (25))){
var inst_45927 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_45974_48196 = state_45938__$1;
(statearr_45974_48196[(2)] = inst_45927);

(statearr_45974_48196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (17))){
var inst_45891 = (state_45938[(10)]);
var inst_45901 = cljs.core.first(inst_45891);
var inst_45902 = cljs.core.async.muxch_STAR_(inst_45901);
var inst_45903 = cljs.core.async.close_BANG_(inst_45902);
var inst_45904 = cljs.core.next(inst_45891);
var inst_45877 = inst_45904;
var inst_45878 = null;
var inst_45879 = (0);
var inst_45880 = (0);
var state_45938__$1 = (function (){var statearr_45976 = state_45938;
(statearr_45976[(12)] = inst_45877);

(statearr_45976[(13)] = inst_45878);

(statearr_45976[(14)] = inst_45879);

(statearr_45976[(15)] = inst_45903);

(statearr_45976[(16)] = inst_45880);

return statearr_45976;
})();
var statearr_45979_48205 = state_45938__$1;
(statearr_45979_48205[(2)] = null);

(statearr_45979_48205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (3))){
var inst_45935 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45938__$1,inst_45935);
} else {
if((state_val_45939 === (12))){
var inst_45912 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_45982_48210 = state_45938__$1;
(statearr_45982_48210[(2)] = inst_45912);

(statearr_45982_48210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (2))){
var state_45938__$1 = state_45938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45938__$1,(4),ch);
} else {
if((state_val_45939 === (23))){
var state_45938__$1 = state_45938;
var statearr_45983_48215 = state_45938__$1;
(statearr_45983_48215[(2)] = null);

(statearr_45983_48215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (19))){
var inst_45918 = (state_45938[(11)]);
var inst_45867 = (state_45938[(8)]);
var inst_45920 = cljs.core.async.muxch_STAR_(inst_45918);
var state_45938__$1 = state_45938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45938__$1,(22),inst_45920,inst_45867);
} else {
if((state_val_45939 === (11))){
var inst_45877 = (state_45938[(12)]);
var inst_45891 = (state_45938[(10)]);
var inst_45891__$1 = cljs.core.seq(inst_45877);
var state_45938__$1 = (function (){var statearr_45984 = state_45938;
(statearr_45984[(10)] = inst_45891__$1);

return statearr_45984;
})();
if(inst_45891__$1){
var statearr_45985_48216 = state_45938__$1;
(statearr_45985_48216[(1)] = (13));

} else {
var statearr_45986_48217 = state_45938__$1;
(statearr_45986_48217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (9))){
var inst_45914 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_45987_48218 = state_45938__$1;
(statearr_45987_48218[(2)] = inst_45914);

(statearr_45987_48218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (5))){
var inst_45874 = cljs.core.deref(mults);
var inst_45875 = cljs.core.vals(inst_45874);
var inst_45876 = cljs.core.seq(inst_45875);
var inst_45877 = inst_45876;
var inst_45878 = null;
var inst_45879 = (0);
var inst_45880 = (0);
var state_45938__$1 = (function (){var statearr_45988 = state_45938;
(statearr_45988[(12)] = inst_45877);

(statearr_45988[(13)] = inst_45878);

(statearr_45988[(14)] = inst_45879);

(statearr_45988[(16)] = inst_45880);

return statearr_45988;
})();
var statearr_45990_48227 = state_45938__$1;
(statearr_45990_48227[(2)] = null);

(statearr_45990_48227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (14))){
var state_45938__$1 = state_45938;
var statearr_45994_48228 = state_45938__$1;
(statearr_45994_48228[(2)] = null);

(statearr_45994_48228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (16))){
var inst_45891 = (state_45938[(10)]);
var inst_45896 = cljs.core.chunk_first(inst_45891);
var inst_45897 = cljs.core.chunk_rest(inst_45891);
var inst_45898 = cljs.core.count(inst_45896);
var inst_45877 = inst_45897;
var inst_45878 = inst_45896;
var inst_45879 = inst_45898;
var inst_45880 = (0);
var state_45938__$1 = (function (){var statearr_45997 = state_45938;
(statearr_45997[(12)] = inst_45877);

(statearr_45997[(13)] = inst_45878);

(statearr_45997[(14)] = inst_45879);

(statearr_45997[(16)] = inst_45880);

return statearr_45997;
})();
var statearr_46000_48237 = state_45938__$1;
(statearr_46000_48237[(2)] = null);

(statearr_46000_48237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (10))){
var inst_45877 = (state_45938[(12)]);
var inst_45878 = (state_45938[(13)]);
var inst_45879 = (state_45938[(14)]);
var inst_45880 = (state_45938[(16)]);
var inst_45885 = cljs.core._nth(inst_45878,inst_45880);
var inst_45886 = cljs.core.async.muxch_STAR_(inst_45885);
var inst_45887 = cljs.core.async.close_BANG_(inst_45886);
var inst_45888 = (inst_45880 + (1));
var tmp45991 = inst_45877;
var tmp45992 = inst_45878;
var tmp45993 = inst_45879;
var inst_45877__$1 = tmp45991;
var inst_45878__$1 = tmp45992;
var inst_45879__$1 = tmp45993;
var inst_45880__$1 = inst_45888;
var state_45938__$1 = (function (){var statearr_46001 = state_45938;
(statearr_46001[(12)] = inst_45877__$1);

(statearr_46001[(17)] = inst_45887);

(statearr_46001[(13)] = inst_45878__$1);

(statearr_46001[(14)] = inst_45879__$1);

(statearr_46001[(16)] = inst_45880__$1);

return statearr_46001;
})();
var statearr_46002_48249 = state_45938__$1;
(statearr_46002_48249[(2)] = null);

(statearr_46002_48249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (18))){
var inst_45907 = (state_45938[(2)]);
var state_45938__$1 = state_45938;
var statearr_46003_48253 = state_45938__$1;
(statearr_46003_48253[(2)] = inst_45907);

(statearr_46003_48253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45939 === (8))){
var inst_45879 = (state_45938[(14)]);
var inst_45880 = (state_45938[(16)]);
var inst_45882 = (inst_45880 < inst_45879);
var inst_45883 = inst_45882;
var state_45938__$1 = state_45938;
if(cljs.core.truth_(inst_45883)){
var statearr_46004_48258 = state_45938__$1;
(statearr_46004_48258[(1)] = (10));

} else {
var statearr_46005_48259 = state_45938__$1;
(statearr_46005_48259[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46006[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46006[(1)] = (1));

return statearr_46006;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_45938){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_45938);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46007){var ex__43873__auto__ = e46007;
var statearr_46008_48276 = state_45938;
(statearr_46008_48276[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_45938[(4)]))){
var statearr_46009_48278 = state_45938;
(statearr_46009_48278[(1)] = cljs.core.first((state_45938[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48281 = state_45938;
state_45938 = G__48281;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_45938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_45938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46010 = f__44023__auto__();
(statearr_46010[(6)] = c__44022__auto___48160);

return statearr_46010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46012 = arguments.length;
switch (G__46012) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46022 = arguments.length;
switch (G__46022) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46026 = arguments.length;
switch (G__46026) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44022__auto___48313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46080){
var state_val_46081 = (state_46080[(1)]);
if((state_val_46081 === (7))){
var state_46080__$1 = state_46080;
var statearr_46088_48324 = state_46080__$1;
(statearr_46088_48324[(2)] = null);

(statearr_46088_48324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (1))){
var state_46080__$1 = state_46080;
var statearr_46091_48327 = state_46080__$1;
(statearr_46091_48327[(2)] = null);

(statearr_46091_48327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (4))){
var inst_46037 = (state_46080[(7)]);
var inst_46036 = (state_46080[(8)]);
var inst_46039 = (inst_46037 < inst_46036);
var state_46080__$1 = state_46080;
if(cljs.core.truth_(inst_46039)){
var statearr_46100_48331 = state_46080__$1;
(statearr_46100_48331[(1)] = (6));

} else {
var statearr_46101_48332 = state_46080__$1;
(statearr_46101_48332[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (15))){
var inst_46065 = (state_46080[(9)]);
var inst_46070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46065);
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46080__$1,(17),out,inst_46070);
} else {
if((state_val_46081 === (13))){
var inst_46065 = (state_46080[(9)]);
var inst_46065__$1 = (state_46080[(2)]);
var inst_46066 = cljs.core.some(cljs.core.nil_QMARK_,inst_46065__$1);
var state_46080__$1 = (function (){var statearr_46102 = state_46080;
(statearr_46102[(9)] = inst_46065__$1);

return statearr_46102;
})();
if(cljs.core.truth_(inst_46066)){
var statearr_46103_48357 = state_46080__$1;
(statearr_46103_48357[(1)] = (14));

} else {
var statearr_46104_48362 = state_46080__$1;
(statearr_46104_48362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (6))){
var state_46080__$1 = state_46080;
var statearr_46105_48364 = state_46080__$1;
(statearr_46105_48364[(2)] = null);

(statearr_46105_48364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (17))){
var inst_46072 = (state_46080[(2)]);
var state_46080__$1 = (function (){var statearr_46110 = state_46080;
(statearr_46110[(10)] = inst_46072);

return statearr_46110;
})();
var statearr_46111_48373 = state_46080__$1;
(statearr_46111_48373[(2)] = null);

(statearr_46111_48373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (3))){
var inst_46077 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46080__$1,inst_46077);
} else {
if((state_val_46081 === (12))){
var _ = (function (){var statearr_46114 = state_46080;
(statearr_46114[(4)] = cljs.core.rest((state_46080[(4)])));

return statearr_46114;
})();
var state_46080__$1 = state_46080;
var ex46107 = (state_46080__$1[(2)]);
var statearr_46115_48384 = state_46080__$1;
(statearr_46115_48384[(5)] = ex46107);


if((ex46107 instanceof Object)){
var statearr_46117_48385 = state_46080__$1;
(statearr_46117_48385[(1)] = (11));

(statearr_46117_48385[(5)] = null);

} else {
throw ex46107;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (2))){
var inst_46035 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46036 = cnt;
var inst_46037 = (0);
var state_46080__$1 = (function (){var statearr_46118 = state_46080;
(statearr_46118[(7)] = inst_46037);

(statearr_46118[(11)] = inst_46035);

(statearr_46118[(8)] = inst_46036);

return statearr_46118;
})();
var statearr_46119_48396 = state_46080__$1;
(statearr_46119_48396[(2)] = null);

(statearr_46119_48396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (11))){
var inst_46044 = (state_46080[(2)]);
var inst_46045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46080__$1 = (function (){var statearr_46120 = state_46080;
(statearr_46120[(12)] = inst_46044);

return statearr_46120;
})();
var statearr_46121_48398 = state_46080__$1;
(statearr_46121_48398[(2)] = inst_46045);

(statearr_46121_48398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (9))){
var inst_46037 = (state_46080[(7)]);
var _ = (function (){var statearr_46123 = state_46080;
(statearr_46123[(4)] = cljs.core.cons((12),(state_46080[(4)])));

return statearr_46123;
})();
var inst_46051 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46037) : chs__$1.call(null,inst_46037));
var inst_46052 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46037) : done.call(null,inst_46037));
var inst_46053 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46051,inst_46052);
var ___$1 = (function (){var statearr_46124 = state_46080;
(statearr_46124[(4)] = cljs.core.rest((state_46080[(4)])));

return statearr_46124;
})();
var state_46080__$1 = state_46080;
var statearr_46125_48406 = state_46080__$1;
(statearr_46125_48406[(2)] = inst_46053);

(statearr_46125_48406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (5))){
var inst_46063 = (state_46080[(2)]);
var state_46080__$1 = (function (){var statearr_46131 = state_46080;
(statearr_46131[(13)] = inst_46063);

return statearr_46131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46080__$1,(13),dchan);
} else {
if((state_val_46081 === (14))){
var inst_46068 = cljs.core.async.close_BANG_(out);
var state_46080__$1 = state_46080;
var statearr_46135_48416 = state_46080__$1;
(statearr_46135_48416[(2)] = inst_46068);

(statearr_46135_48416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (16))){
var inst_46075 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
var statearr_46138_48436 = state_46080__$1;
(statearr_46138_48436[(2)] = inst_46075);

(statearr_46138_48436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (10))){
var inst_46037 = (state_46080[(7)]);
var inst_46056 = (state_46080[(2)]);
var inst_46057 = (inst_46037 + (1));
var inst_46037__$1 = inst_46057;
var state_46080__$1 = (function (){var statearr_46139 = state_46080;
(statearr_46139[(7)] = inst_46037__$1);

(statearr_46139[(14)] = inst_46056);

return statearr_46139;
})();
var statearr_46140_48447 = state_46080__$1;
(statearr_46140_48447[(2)] = null);

(statearr_46140_48447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (8))){
var inst_46061 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
var statearr_46141_48513 = state_46080__$1;
(statearr_46141_48513[(2)] = inst_46061);

(statearr_46141_48513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46143[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46143[(1)] = (1));

return statearr_46143;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46080){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46080);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46146){var ex__43873__auto__ = e46146;
var statearr_46147_48523 = state_46080;
(statearr_46147_48523[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46080[(4)]))){
var statearr_46148_48528 = state_46080;
(statearr_46148_48528[(1)] = cljs.core.first((state_46080[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48533 = state_46080;
state_46080 = G__48533;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46151 = f__44023__auto__();
(statearr_46151[(6)] = c__44022__auto___48313);

return statearr_46151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46158 = arguments.length;
switch (G__46158) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___48547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46197){
var state_val_46198 = (state_46197[(1)]);
if((state_val_46198 === (7))){
var inst_46174 = (state_46197[(7)]);
var inst_46173 = (state_46197[(8)]);
var inst_46173__$1 = (state_46197[(2)]);
var inst_46174__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46173__$1,(0),null);
var inst_46175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46173__$1,(1),null);
var inst_46176 = (inst_46174__$1 == null);
var state_46197__$1 = (function (){var statearr_46202 = state_46197;
(statearr_46202[(7)] = inst_46174__$1);

(statearr_46202[(9)] = inst_46175);

(statearr_46202[(8)] = inst_46173__$1);

return statearr_46202;
})();
if(cljs.core.truth_(inst_46176)){
var statearr_46203_48601 = state_46197__$1;
(statearr_46203_48601[(1)] = (8));

} else {
var statearr_46204_48605 = state_46197__$1;
(statearr_46204_48605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (1))){
var inst_46161 = cljs.core.vec(chs);
var inst_46162 = inst_46161;
var state_46197__$1 = (function (){var statearr_46206 = state_46197;
(statearr_46206[(10)] = inst_46162);

return statearr_46206;
})();
var statearr_46207_48634 = state_46197__$1;
(statearr_46207_48634[(2)] = null);

(statearr_46207_48634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (4))){
var inst_46162 = (state_46197[(10)]);
var state_46197__$1 = state_46197;
return cljs.core.async.ioc_alts_BANG_(state_46197__$1,(7),inst_46162);
} else {
if((state_val_46198 === (6))){
var inst_46193 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
var statearr_46208_48637 = state_46197__$1;
(statearr_46208_48637[(2)] = inst_46193);

(statearr_46208_48637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (3))){
var inst_46195 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46197__$1,inst_46195);
} else {
if((state_val_46198 === (2))){
var inst_46162 = (state_46197[(10)]);
var inst_46164 = cljs.core.count(inst_46162);
var inst_46165 = (inst_46164 > (0));
var state_46197__$1 = state_46197;
if(cljs.core.truth_(inst_46165)){
var statearr_46210_48647 = state_46197__$1;
(statearr_46210_48647[(1)] = (4));

} else {
var statearr_46211_48648 = state_46197__$1;
(statearr_46211_48648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (11))){
var inst_46162 = (state_46197[(10)]);
var inst_46186 = (state_46197[(2)]);
var tmp46209 = inst_46162;
var inst_46162__$1 = tmp46209;
var state_46197__$1 = (function (){var statearr_46212 = state_46197;
(statearr_46212[(11)] = inst_46186);

(statearr_46212[(10)] = inst_46162__$1);

return statearr_46212;
})();
var statearr_46213_48651 = state_46197__$1;
(statearr_46213_48651[(2)] = null);

(statearr_46213_48651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (9))){
var inst_46174 = (state_46197[(7)]);
var state_46197__$1 = state_46197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46197__$1,(11),out,inst_46174);
} else {
if((state_val_46198 === (5))){
var inst_46191 = cljs.core.async.close_BANG_(out);
var state_46197__$1 = state_46197;
var statearr_46216_48656 = state_46197__$1;
(statearr_46216_48656[(2)] = inst_46191);

(statearr_46216_48656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (10))){
var inst_46189 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
var statearr_46217_48661 = state_46197__$1;
(statearr_46217_48661[(2)] = inst_46189);

(statearr_46217_48661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (8))){
var inst_46174 = (state_46197[(7)]);
var inst_46162 = (state_46197[(10)]);
var inst_46175 = (state_46197[(9)]);
var inst_46173 = (state_46197[(8)]);
var inst_46181 = (function (){var cs = inst_46162;
var vec__46168 = inst_46173;
var v = inst_46174;
var c = inst_46175;
return (function (p1__46153_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46153_SHARP_);
});
})();
var inst_46182 = cljs.core.filterv(inst_46181,inst_46162);
var inst_46162__$1 = inst_46182;
var state_46197__$1 = (function (){var statearr_46218 = state_46197;
(statearr_46218[(10)] = inst_46162__$1);

return statearr_46218;
})();
var statearr_46219_48696 = state_46197__$1;
(statearr_46219_48696[(2)] = null);

(statearr_46219_48696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46220 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46220[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46220[(1)] = (1));

return statearr_46220;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46197){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46197);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46221){var ex__43873__auto__ = e46221;
var statearr_46222_48697 = state_46197;
(statearr_46222_48697[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46197[(4)]))){
var statearr_46223_48700 = state_46197;
(statearr_46223_48700[(1)] = cljs.core.first((state_46197[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48703 = state_46197;
state_46197 = G__48703;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46225 = f__44023__auto__();
(statearr_46225[(6)] = c__44022__auto___48547);

return statearr_46225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46228 = arguments.length;
switch (G__46228) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___48713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46256){
var state_val_46257 = (state_46256[(1)]);
if((state_val_46257 === (7))){
var inst_46238 = (state_46256[(7)]);
var inst_46238__$1 = (state_46256[(2)]);
var inst_46239 = (inst_46238__$1 == null);
var inst_46240 = cljs.core.not(inst_46239);
var state_46256__$1 = (function (){var statearr_46261 = state_46256;
(statearr_46261[(7)] = inst_46238__$1);

return statearr_46261;
})();
if(inst_46240){
var statearr_46262_48717 = state_46256__$1;
(statearr_46262_48717[(1)] = (8));

} else {
var statearr_46263_48718 = state_46256__$1;
(statearr_46263_48718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (1))){
var inst_46231 = (0);
var state_46256__$1 = (function (){var statearr_46265 = state_46256;
(statearr_46265[(8)] = inst_46231);

return statearr_46265;
})();
var statearr_46266_48728 = state_46256__$1;
(statearr_46266_48728[(2)] = null);

(statearr_46266_48728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (4))){
var state_46256__$1 = state_46256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46256__$1,(7),ch);
} else {
if((state_val_46257 === (6))){
var inst_46251 = (state_46256[(2)]);
var state_46256__$1 = state_46256;
var statearr_46267_48730 = state_46256__$1;
(statearr_46267_48730[(2)] = inst_46251);

(statearr_46267_48730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (3))){
var inst_46253 = (state_46256[(2)]);
var inst_46254 = cljs.core.async.close_BANG_(out);
var state_46256__$1 = (function (){var statearr_46268 = state_46256;
(statearr_46268[(9)] = inst_46253);

return statearr_46268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46256__$1,inst_46254);
} else {
if((state_val_46257 === (2))){
var inst_46231 = (state_46256[(8)]);
var inst_46235 = (inst_46231 < n);
var state_46256__$1 = state_46256;
if(cljs.core.truth_(inst_46235)){
var statearr_46271_48732 = state_46256__$1;
(statearr_46271_48732[(1)] = (4));

} else {
var statearr_46272_48733 = state_46256__$1;
(statearr_46272_48733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (11))){
var inst_46231 = (state_46256[(8)]);
var inst_46243 = (state_46256[(2)]);
var inst_46244 = (inst_46231 + (1));
var inst_46231__$1 = inst_46244;
var state_46256__$1 = (function (){var statearr_46273 = state_46256;
(statearr_46273[(10)] = inst_46243);

(statearr_46273[(8)] = inst_46231__$1);

return statearr_46273;
})();
var statearr_46276_48735 = state_46256__$1;
(statearr_46276_48735[(2)] = null);

(statearr_46276_48735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (9))){
var state_46256__$1 = state_46256;
var statearr_46277_48736 = state_46256__$1;
(statearr_46277_48736[(2)] = null);

(statearr_46277_48736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (5))){
var state_46256__$1 = state_46256;
var statearr_46278_48737 = state_46256__$1;
(statearr_46278_48737[(2)] = null);

(statearr_46278_48737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (10))){
var inst_46248 = (state_46256[(2)]);
var state_46256__$1 = state_46256;
var statearr_46279_48742 = state_46256__$1;
(statearr_46279_48742[(2)] = inst_46248);

(statearr_46279_48742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (8))){
var inst_46238 = (state_46256[(7)]);
var state_46256__$1 = state_46256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46256__$1,(11),out,inst_46238);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46282[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46282[(1)] = (1));

return statearr_46282;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46256){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46256);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46283){var ex__43873__auto__ = e46283;
var statearr_46284_48745 = state_46256;
(statearr_46284_48745[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46256[(4)]))){
var statearr_46287_48746 = state_46256;
(statearr_46287_48746[(1)] = cljs.core.first((state_46256[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48747 = state_46256;
state_46256 = G__48747;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46288 = f__44023__auto__();
(statearr_46288[(6)] = c__44022__auto___48713);

return statearr_46288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46290 = (function (f,ch,meta46291){
this.f = f;
this.ch = ch;
this.meta46291 = meta46291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46292,meta46291__$1){
var self__ = this;
var _46292__$1 = this;
return (new cljs.core.async.t_cljs$core$async46290(self__.f,self__.ch,meta46291__$1));
}));

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46292){
var self__ = this;
var _46292__$1 = this;
return self__.meta46291;
}));

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46298 = (function (f,ch,meta46291,_,fn1,meta46299){
this.f = f;
this.ch = ch;
this.meta46291 = meta46291;
this._ = _;
this.fn1 = fn1;
this.meta46299 = meta46299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46300,meta46299__$1){
var self__ = this;
var _46300__$1 = this;
return (new cljs.core.async.t_cljs$core$async46298(self__.f,self__.ch,self__.meta46291,self__._,self__.fn1,meta46299__$1));
}));

(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46300){
var self__ = this;
var _46300__$1 = this;
return self__.meta46299;
}));

(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46289_SHARP_){
var G__46307 = (((p1__46289_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46289_SHARP_) : self__.f.call(null,p1__46289_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46307) : f1.call(null,G__46307));
});
}));

(cljs.core.async.t_cljs$core$async46298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46291","meta46291",-511352046,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46290","cljs.core.async/t_cljs$core$async46290",1508805446,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46299","meta46299",-1969968964,null)], null);
}));

(cljs.core.async.t_cljs$core$async46298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46298");

(cljs.core.async.t_cljs$core$async46298.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46298.
 */
cljs.core.async.__GT_t_cljs$core$async46298 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46298(f__$1,ch__$1,meta46291__$1,___$2,fn1__$1,meta46299){
return (new cljs.core.async.t_cljs$core$async46298(f__$1,ch__$1,meta46291__$1,___$2,fn1__$1,meta46299));
});

}

return (new cljs.core.async.t_cljs$core$async46298(self__.f,self__.ch,self__.meta46291,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46319 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46319) : self__.f.call(null,G__46319));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46291","meta46291",-511352046,null)], null);
}));

(cljs.core.async.t_cljs$core$async46290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46290");

(cljs.core.async.t_cljs$core$async46290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46290.
 */
cljs.core.async.__GT_t_cljs$core$async46290 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46290(f__$1,ch__$1,meta46291){
return (new cljs.core.async.t_cljs$core$async46290(f__$1,ch__$1,meta46291));
});

}

return (new cljs.core.async.t_cljs$core$async46290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46335 = (function (f,ch,meta46336){
this.f = f;
this.ch = ch;
this.meta46336 = meta46336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46337,meta46336__$1){
var self__ = this;
var _46337__$1 = this;
return (new cljs.core.async.t_cljs$core$async46335(self__.f,self__.ch,meta46336__$1));
}));

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46337){
var self__ = this;
var _46337__$1 = this;
return self__.meta46336;
}));

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46336","meta46336",1976846870,null)], null);
}));

(cljs.core.async.t_cljs$core$async46335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46335");

(cljs.core.async.t_cljs$core$async46335.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46335.
 */
cljs.core.async.__GT_t_cljs$core$async46335 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46335(f__$1,ch__$1,meta46336){
return (new cljs.core.async.t_cljs$core$async46335(f__$1,ch__$1,meta46336));
});

}

return (new cljs.core.async.t_cljs$core$async46335(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46356 = (function (p,ch,meta46357){
this.p = p;
this.ch = ch;
this.meta46357 = meta46357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46358,meta46357__$1){
var self__ = this;
var _46358__$1 = this;
return (new cljs.core.async.t_cljs$core$async46356(self__.p,self__.ch,meta46357__$1));
}));

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46358){
var self__ = this;
var _46358__$1 = this;
return self__.meta46357;
}));

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46357","meta46357",962206456,null)], null);
}));

(cljs.core.async.t_cljs$core$async46356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46356");

(cljs.core.async.t_cljs$core$async46356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46356.
 */
cljs.core.async.__GT_t_cljs$core$async46356 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46356(p__$1,ch__$1,meta46357){
return (new cljs.core.async.t_cljs$core$async46356(p__$1,ch__$1,meta46357));
});

}

return (new cljs.core.async.t_cljs$core$async46356(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46392 = arguments.length;
switch (G__46392) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___48850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46416){
var state_val_46417 = (state_46416[(1)]);
if((state_val_46417 === (7))){
var inst_46412 = (state_46416[(2)]);
var state_46416__$1 = state_46416;
var statearr_46423_48851 = state_46416__$1;
(statearr_46423_48851[(2)] = inst_46412);

(statearr_46423_48851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (1))){
var state_46416__$1 = state_46416;
var statearr_46424_48852 = state_46416__$1;
(statearr_46424_48852[(2)] = null);

(statearr_46424_48852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (4))){
var inst_46398 = (state_46416[(7)]);
var inst_46398__$1 = (state_46416[(2)]);
var inst_46399 = (inst_46398__$1 == null);
var state_46416__$1 = (function (){var statearr_46430 = state_46416;
(statearr_46430[(7)] = inst_46398__$1);

return statearr_46430;
})();
if(cljs.core.truth_(inst_46399)){
var statearr_46431_48853 = state_46416__$1;
(statearr_46431_48853[(1)] = (5));

} else {
var statearr_46432_48854 = state_46416__$1;
(statearr_46432_48854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (6))){
var inst_46398 = (state_46416[(7)]);
var inst_46403 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46398) : p.call(null,inst_46398));
var state_46416__$1 = state_46416;
if(cljs.core.truth_(inst_46403)){
var statearr_46434_48856 = state_46416__$1;
(statearr_46434_48856[(1)] = (8));

} else {
var statearr_46435_48859 = state_46416__$1;
(statearr_46435_48859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (3))){
var inst_46414 = (state_46416[(2)]);
var state_46416__$1 = state_46416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46416__$1,inst_46414);
} else {
if((state_val_46417 === (2))){
var state_46416__$1 = state_46416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46416__$1,(4),ch);
} else {
if((state_val_46417 === (11))){
var inst_46406 = (state_46416[(2)]);
var state_46416__$1 = state_46416;
var statearr_46445_48861 = state_46416__$1;
(statearr_46445_48861[(2)] = inst_46406);

(statearr_46445_48861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (9))){
var state_46416__$1 = state_46416;
var statearr_46447_48863 = state_46416__$1;
(statearr_46447_48863[(2)] = null);

(statearr_46447_48863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (5))){
var inst_46401 = cljs.core.async.close_BANG_(out);
var state_46416__$1 = state_46416;
var statearr_46451_48864 = state_46416__$1;
(statearr_46451_48864[(2)] = inst_46401);

(statearr_46451_48864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (10))){
var inst_46409 = (state_46416[(2)]);
var state_46416__$1 = (function (){var statearr_46452 = state_46416;
(statearr_46452[(8)] = inst_46409);

return statearr_46452;
})();
var statearr_46453_48866 = state_46416__$1;
(statearr_46453_48866[(2)] = null);

(statearr_46453_48866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46417 === (8))){
var inst_46398 = (state_46416[(7)]);
var state_46416__$1 = state_46416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46416__$1,(11),out,inst_46398);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46456 = [null,null,null,null,null,null,null,null,null];
(statearr_46456[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46456[(1)] = (1));

return statearr_46456;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46416){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46416);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46459){var ex__43873__auto__ = e46459;
var statearr_46461_48878 = state_46416;
(statearr_46461_48878[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46416[(4)]))){
var statearr_46463_48879 = state_46416;
(statearr_46463_48879[(1)] = cljs.core.first((state_46416[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48880 = state_46416;
state_46416 = G__48880;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46468 = f__44023__auto__();
(statearr_46468[(6)] = c__44022__auto___48850);

return statearr_46468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46473 = arguments.length;
switch (G__46473) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44022__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46569){
var state_val_46570 = (state_46569[(1)]);
if((state_val_46570 === (7))){
var inst_46563 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46586_48885 = state_46569__$1;
(statearr_46586_48885[(2)] = inst_46563);

(statearr_46586_48885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (20))){
var inst_46525 = (state_46569[(7)]);
var inst_46542 = (state_46569[(2)]);
var inst_46543 = cljs.core.next(inst_46525);
var inst_46505 = inst_46543;
var inst_46506 = null;
var inst_46507 = (0);
var inst_46508 = (0);
var state_46569__$1 = (function (){var statearr_46589 = state_46569;
(statearr_46589[(8)] = inst_46505);

(statearr_46589[(9)] = inst_46507);

(statearr_46589[(10)] = inst_46508);

(statearr_46589[(11)] = inst_46542);

(statearr_46589[(12)] = inst_46506);

return statearr_46589;
})();
var statearr_46590_48896 = state_46569__$1;
(statearr_46590_48896[(2)] = null);

(statearr_46590_48896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (1))){
var state_46569__$1 = state_46569;
var statearr_46591_48901 = state_46569__$1;
(statearr_46591_48901[(2)] = null);

(statearr_46591_48901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (4))){
var inst_46494 = (state_46569[(13)]);
var inst_46494__$1 = (state_46569[(2)]);
var inst_46495 = (inst_46494__$1 == null);
var state_46569__$1 = (function (){var statearr_46592 = state_46569;
(statearr_46592[(13)] = inst_46494__$1);

return statearr_46592;
})();
if(cljs.core.truth_(inst_46495)){
var statearr_46593_48905 = state_46569__$1;
(statearr_46593_48905[(1)] = (5));

} else {
var statearr_46595_48906 = state_46569__$1;
(statearr_46595_48906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (15))){
var state_46569__$1 = state_46569;
var statearr_46600_48907 = state_46569__$1;
(statearr_46600_48907[(2)] = null);

(statearr_46600_48907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (21))){
var state_46569__$1 = state_46569;
var statearr_46601_48911 = state_46569__$1;
(statearr_46601_48911[(2)] = null);

(statearr_46601_48911[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (13))){
var inst_46505 = (state_46569[(8)]);
var inst_46507 = (state_46569[(9)]);
var inst_46508 = (state_46569[(10)]);
var inst_46506 = (state_46569[(12)]);
var inst_46519 = (state_46569[(2)]);
var inst_46520 = (inst_46508 + (1));
var tmp46597 = inst_46505;
var tmp46598 = inst_46507;
var tmp46599 = inst_46506;
var inst_46505__$1 = tmp46597;
var inst_46506__$1 = tmp46599;
var inst_46507__$1 = tmp46598;
var inst_46508__$1 = inst_46520;
var state_46569__$1 = (function (){var statearr_46603 = state_46569;
(statearr_46603[(8)] = inst_46505__$1);

(statearr_46603[(9)] = inst_46507__$1);

(statearr_46603[(10)] = inst_46508__$1);

(statearr_46603[(12)] = inst_46506__$1);

(statearr_46603[(14)] = inst_46519);

return statearr_46603;
})();
var statearr_46604_48914 = state_46569__$1;
(statearr_46604_48914[(2)] = null);

(statearr_46604_48914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (22))){
var state_46569__$1 = state_46569;
var statearr_46605_48915 = state_46569__$1;
(statearr_46605_48915[(2)] = null);

(statearr_46605_48915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (6))){
var inst_46494 = (state_46569[(13)]);
var inst_46503 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46494) : f.call(null,inst_46494));
var inst_46504 = cljs.core.seq(inst_46503);
var inst_46505 = inst_46504;
var inst_46506 = null;
var inst_46507 = (0);
var inst_46508 = (0);
var state_46569__$1 = (function (){var statearr_46606 = state_46569;
(statearr_46606[(8)] = inst_46505);

(statearr_46606[(9)] = inst_46507);

(statearr_46606[(10)] = inst_46508);

(statearr_46606[(12)] = inst_46506);

return statearr_46606;
})();
var statearr_46607_48916 = state_46569__$1;
(statearr_46607_48916[(2)] = null);

(statearr_46607_48916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (17))){
var inst_46525 = (state_46569[(7)]);
var inst_46529 = cljs.core.chunk_first(inst_46525);
var inst_46530 = cljs.core.chunk_rest(inst_46525);
var inst_46531 = cljs.core.count(inst_46529);
var inst_46505 = inst_46530;
var inst_46506 = inst_46529;
var inst_46507 = inst_46531;
var inst_46508 = (0);
var state_46569__$1 = (function (){var statearr_46608 = state_46569;
(statearr_46608[(8)] = inst_46505);

(statearr_46608[(9)] = inst_46507);

(statearr_46608[(10)] = inst_46508);

(statearr_46608[(12)] = inst_46506);

return statearr_46608;
})();
var statearr_46609_48927 = state_46569__$1;
(statearr_46609_48927[(2)] = null);

(statearr_46609_48927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (3))){
var inst_46565 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46569__$1,inst_46565);
} else {
if((state_val_46570 === (12))){
var inst_46551 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46612_48934 = state_46569__$1;
(statearr_46612_48934[(2)] = inst_46551);

(statearr_46612_48934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (2))){
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46569__$1,(4),in$);
} else {
if((state_val_46570 === (23))){
var inst_46561 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46613_48949 = state_46569__$1;
(statearr_46613_48949[(2)] = inst_46561);

(statearr_46613_48949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (19))){
var inst_46546 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46614_48951 = state_46569__$1;
(statearr_46614_48951[(2)] = inst_46546);

(statearr_46614_48951[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (11))){
var inst_46505 = (state_46569[(8)]);
var inst_46525 = (state_46569[(7)]);
var inst_46525__$1 = cljs.core.seq(inst_46505);
var state_46569__$1 = (function (){var statearr_46618 = state_46569;
(statearr_46618[(7)] = inst_46525__$1);

return statearr_46618;
})();
if(inst_46525__$1){
var statearr_46620_48990 = state_46569__$1;
(statearr_46620_48990[(1)] = (14));

} else {
var statearr_46621_48995 = state_46569__$1;
(statearr_46621_48995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (9))){
var inst_46553 = (state_46569[(2)]);
var inst_46554 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46569__$1 = (function (){var statearr_46623 = state_46569;
(statearr_46623[(15)] = inst_46553);

return statearr_46623;
})();
if(cljs.core.truth_(inst_46554)){
var statearr_46626_49004 = state_46569__$1;
(statearr_46626_49004[(1)] = (21));

} else {
var statearr_46627_49009 = state_46569__$1;
(statearr_46627_49009[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (5))){
var inst_46497 = cljs.core.async.close_BANG_(out);
var state_46569__$1 = state_46569;
var statearr_46629_49012 = state_46569__$1;
(statearr_46629_49012[(2)] = inst_46497);

(statearr_46629_49012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (14))){
var inst_46525 = (state_46569[(7)]);
var inst_46527 = cljs.core.chunked_seq_QMARK_(inst_46525);
var state_46569__$1 = state_46569;
if(inst_46527){
var statearr_46631_49019 = state_46569__$1;
(statearr_46631_49019[(1)] = (17));

} else {
var statearr_46632_49020 = state_46569__$1;
(statearr_46632_49020[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (16))){
var inst_46549 = (state_46569[(2)]);
var state_46569__$1 = state_46569;
var statearr_46633_49023 = state_46569__$1;
(statearr_46633_49023[(2)] = inst_46549);

(statearr_46633_49023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46570 === (10))){
var inst_46508 = (state_46569[(10)]);
var inst_46506 = (state_46569[(12)]);
var inst_46517 = cljs.core._nth(inst_46506,inst_46508);
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46569__$1,(13),out,inst_46517);
} else {
if((state_val_46570 === (18))){
var inst_46525 = (state_46569[(7)]);
var inst_46540 = cljs.core.first(inst_46525);
var state_46569__$1 = state_46569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46569__$1,(20),out,inst_46540);
} else {
if((state_val_46570 === (8))){
var inst_46507 = (state_46569[(9)]);
var inst_46508 = (state_46569[(10)]);
var inst_46510 = (inst_46508 < inst_46507);
var inst_46511 = inst_46510;
var state_46569__$1 = state_46569;
if(cljs.core.truth_(inst_46511)){
var statearr_46653_49044 = state_46569__$1;
(statearr_46653_49044[(1)] = (10));

} else {
var statearr_46654_49046 = state_46569__$1;
(statearr_46654_49046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____0 = (function (){
var statearr_46663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46663[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__);

(statearr_46663[(1)] = (1));

return statearr_46663;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____1 = (function (state_46569){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46569);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46664){var ex__43873__auto__ = e46664;
var statearr_46665_49063 = state_46569;
(statearr_46665_49063[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46569[(4)]))){
var statearr_46666_49068 = state_46569;
(statearr_46666_49068[(1)] = cljs.core.first((state_46569[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49069 = state_46569;
state_46569 = G__49069;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__ = function(state_46569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____1.call(this,state_46569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43870__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46667 = f__44023__auto__();
(statearr_46667[(6)] = c__44022__auto__);

return statearr_46667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));

return c__44022__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46669 = arguments.length;
switch (G__46669) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46674 = arguments.length;
switch (G__46674) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46678 = arguments.length;
switch (G__46678) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___49079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46706){
var state_val_46707 = (state_46706[(1)]);
if((state_val_46707 === (7))){
var inst_46701 = (state_46706[(2)]);
var state_46706__$1 = state_46706;
var statearr_46710_49081 = state_46706__$1;
(statearr_46710_49081[(2)] = inst_46701);

(statearr_46710_49081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (1))){
var inst_46682 = null;
var state_46706__$1 = (function (){var statearr_46713 = state_46706;
(statearr_46713[(7)] = inst_46682);

return statearr_46713;
})();
var statearr_46714_49082 = state_46706__$1;
(statearr_46714_49082[(2)] = null);

(statearr_46714_49082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (4))){
var inst_46685 = (state_46706[(8)]);
var inst_46685__$1 = (state_46706[(2)]);
var inst_46686 = (inst_46685__$1 == null);
var inst_46687 = cljs.core.not(inst_46686);
var state_46706__$1 = (function (){var statearr_46717 = state_46706;
(statearr_46717[(8)] = inst_46685__$1);

return statearr_46717;
})();
if(inst_46687){
var statearr_46718_49094 = state_46706__$1;
(statearr_46718_49094[(1)] = (5));

} else {
var statearr_46719_49098 = state_46706__$1;
(statearr_46719_49098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (6))){
var state_46706__$1 = state_46706;
var statearr_46720_49099 = state_46706__$1;
(statearr_46720_49099[(2)] = null);

(statearr_46720_49099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (3))){
var inst_46703 = (state_46706[(2)]);
var inst_46704 = cljs.core.async.close_BANG_(out);
var state_46706__$1 = (function (){var statearr_46721 = state_46706;
(statearr_46721[(9)] = inst_46703);

return statearr_46721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46706__$1,inst_46704);
} else {
if((state_val_46707 === (2))){
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46706__$1,(4),ch);
} else {
if((state_val_46707 === (11))){
var inst_46685 = (state_46706[(8)]);
var inst_46695 = (state_46706[(2)]);
var inst_46682 = inst_46685;
var state_46706__$1 = (function (){var statearr_46723 = state_46706;
(statearr_46723[(7)] = inst_46682);

(statearr_46723[(10)] = inst_46695);

return statearr_46723;
})();
var statearr_46724_49106 = state_46706__$1;
(statearr_46724_49106[(2)] = null);

(statearr_46724_49106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (9))){
var inst_46685 = (state_46706[(8)]);
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46706__$1,(11),out,inst_46685);
} else {
if((state_val_46707 === (5))){
var inst_46682 = (state_46706[(7)]);
var inst_46685 = (state_46706[(8)]);
var inst_46689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46685,inst_46682);
var state_46706__$1 = state_46706;
if(inst_46689){
var statearr_46727_49115 = state_46706__$1;
(statearr_46727_49115[(1)] = (8));

} else {
var statearr_46729_49116 = state_46706__$1;
(statearr_46729_49116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (10))){
var inst_46698 = (state_46706[(2)]);
var state_46706__$1 = state_46706;
var statearr_46732_49120 = state_46706__$1;
(statearr_46732_49120[(2)] = inst_46698);

(statearr_46732_49120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46707 === (8))){
var inst_46682 = (state_46706[(7)]);
var tmp46726 = inst_46682;
var inst_46682__$1 = tmp46726;
var state_46706__$1 = (function (){var statearr_46734 = state_46706;
(statearr_46734[(7)] = inst_46682__$1);

return statearr_46734;
})();
var statearr_46735_49121 = state_46706__$1;
(statearr_46735_49121[(2)] = null);

(statearr_46735_49121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46739[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46739[(1)] = (1));

return statearr_46739;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46706){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46706);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46740){var ex__43873__auto__ = e46740;
var statearr_46741_49127 = state_46706;
(statearr_46741_49127[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46706[(4)]))){
var statearr_46742_49162 = state_46706;
(statearr_46742_49162[(1)] = cljs.core.first((state_46706[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49163 = state_46706;
state_46706 = G__49163;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46744 = f__44023__auto__();
(statearr_46744[(6)] = c__44022__auto___49079);

return statearr_46744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46752 = arguments.length;
switch (G__46752) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___49165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46812){
var state_val_46813 = (state_46812[(1)]);
if((state_val_46813 === (7))){
var inst_46804 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46814_49166 = state_46812__$1;
(statearr_46814_49166[(2)] = inst_46804);

(statearr_46814_49166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (1))){
var inst_46766 = (new Array(n));
var inst_46768 = inst_46766;
var inst_46769 = (0);
var state_46812__$1 = (function (){var statearr_46815 = state_46812;
(statearr_46815[(7)] = inst_46769);

(statearr_46815[(8)] = inst_46768);

return statearr_46815;
})();
var statearr_46816_49167 = state_46812__$1;
(statearr_46816_49167[(2)] = null);

(statearr_46816_49167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (4))){
var inst_46772 = (state_46812[(9)]);
var inst_46772__$1 = (state_46812[(2)]);
var inst_46773 = (inst_46772__$1 == null);
var inst_46774 = cljs.core.not(inst_46773);
var state_46812__$1 = (function (){var statearr_46818 = state_46812;
(statearr_46818[(9)] = inst_46772__$1);

return statearr_46818;
})();
if(inst_46774){
var statearr_46819_49168 = state_46812__$1;
(statearr_46819_49168[(1)] = (5));

} else {
var statearr_46820_49170 = state_46812__$1;
(statearr_46820_49170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (15))){
var inst_46798 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46821_49171 = state_46812__$1;
(statearr_46821_49171[(2)] = inst_46798);

(statearr_46821_49171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (13))){
var state_46812__$1 = state_46812;
var statearr_46823_49172 = state_46812__$1;
(statearr_46823_49172[(2)] = null);

(statearr_46823_49172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (6))){
var inst_46769 = (state_46812[(7)]);
var inst_46794 = (inst_46769 > (0));
var state_46812__$1 = state_46812;
if(cljs.core.truth_(inst_46794)){
var statearr_46824_49173 = state_46812__$1;
(statearr_46824_49173[(1)] = (12));

} else {
var statearr_46825_49174 = state_46812__$1;
(statearr_46825_49174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (3))){
var inst_46807 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46812__$1,inst_46807);
} else {
if((state_val_46813 === (12))){
var inst_46768 = (state_46812[(8)]);
var inst_46796 = cljs.core.vec(inst_46768);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46812__$1,(15),out,inst_46796);
} else {
if((state_val_46813 === (2))){
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46812__$1,(4),ch);
} else {
if((state_val_46813 === (11))){
var inst_46784 = (state_46812[(2)]);
var inst_46785 = (new Array(n));
var inst_46768 = inst_46785;
var inst_46769 = (0);
var state_46812__$1 = (function (){var statearr_46828 = state_46812;
(statearr_46828[(7)] = inst_46769);

(statearr_46828[(10)] = inst_46784);

(statearr_46828[(8)] = inst_46768);

return statearr_46828;
})();
var statearr_46829_49197 = state_46812__$1;
(statearr_46829_49197[(2)] = null);

(statearr_46829_49197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (9))){
var inst_46768 = (state_46812[(8)]);
var inst_46782 = cljs.core.vec(inst_46768);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46812__$1,(11),out,inst_46782);
} else {
if((state_val_46813 === (5))){
var inst_46769 = (state_46812[(7)]);
var inst_46777 = (state_46812[(11)]);
var inst_46772 = (state_46812[(9)]);
var inst_46768 = (state_46812[(8)]);
var inst_46776 = (inst_46768[inst_46769] = inst_46772);
var inst_46777__$1 = (inst_46769 + (1));
var inst_46778 = (inst_46777__$1 < n);
var state_46812__$1 = (function (){var statearr_46830 = state_46812;
(statearr_46830[(12)] = inst_46776);

(statearr_46830[(11)] = inst_46777__$1);

return statearr_46830;
})();
if(cljs.core.truth_(inst_46778)){
var statearr_46831_49205 = state_46812__$1;
(statearr_46831_49205[(1)] = (8));

} else {
var statearr_46832_49209 = state_46812__$1;
(statearr_46832_49209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (14))){
var inst_46801 = (state_46812[(2)]);
var inst_46802 = cljs.core.async.close_BANG_(out);
var state_46812__$1 = (function (){var statearr_46838 = state_46812;
(statearr_46838[(13)] = inst_46801);

return statearr_46838;
})();
var statearr_46839_49210 = state_46812__$1;
(statearr_46839_49210[(2)] = inst_46802);

(statearr_46839_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (10))){
var inst_46788 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46840_49211 = state_46812__$1;
(statearr_46840_49211[(2)] = inst_46788);

(statearr_46840_49211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (8))){
var inst_46777 = (state_46812[(11)]);
var inst_46768 = (state_46812[(8)]);
var tmp46836 = inst_46768;
var inst_46768__$1 = tmp46836;
var inst_46769 = inst_46777;
var state_46812__$1 = (function (){var statearr_46842 = state_46812;
(statearr_46842[(7)] = inst_46769);

(statearr_46842[(8)] = inst_46768__$1);

return statearr_46842;
})();
var statearr_46843_49212 = state_46812__$1;
(statearr_46843_49212[(2)] = null);

(statearr_46843_49212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46845[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46845[(1)] = (1));

return statearr_46845;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46812){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46812);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46847){var ex__43873__auto__ = e46847;
var statearr_46848_49216 = state_46812;
(statearr_46848_49216[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46812[(4)]))){
var statearr_46849_49217 = state_46812;
(statearr_46849_49217[(1)] = cljs.core.first((state_46812[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49218 = state_46812;
state_46812 = G__49218;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46850 = f__44023__auto__();
(statearr_46850[(6)] = c__44022__auto___49165);

return statearr_46850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46856 = arguments.length;
switch (G__46856) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44022__auto___49231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44023__auto__ = (function (){var switch__43869__auto__ = (function (state_46900){
var state_val_46901 = (state_46900[(1)]);
if((state_val_46901 === (7))){
var inst_46896 = (state_46900[(2)]);
var state_46900__$1 = state_46900;
var statearr_46902_49233 = state_46900__$1;
(statearr_46902_49233[(2)] = inst_46896);

(statearr_46902_49233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (1))){
var inst_46858 = [];
var inst_46859 = inst_46858;
var inst_46860 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46900__$1 = (function (){var statearr_46903 = state_46900;
(statearr_46903[(7)] = inst_46860);

(statearr_46903[(8)] = inst_46859);

return statearr_46903;
})();
var statearr_46904_49234 = state_46900__$1;
(statearr_46904_49234[(2)] = null);

(statearr_46904_49234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (4))){
var inst_46863 = (state_46900[(9)]);
var inst_46863__$1 = (state_46900[(2)]);
var inst_46864 = (inst_46863__$1 == null);
var inst_46865 = cljs.core.not(inst_46864);
var state_46900__$1 = (function (){var statearr_46905 = state_46900;
(statearr_46905[(9)] = inst_46863__$1);

return statearr_46905;
})();
if(inst_46865){
var statearr_46906_49240 = state_46900__$1;
(statearr_46906_49240[(1)] = (5));

} else {
var statearr_46908_49241 = state_46900__$1;
(statearr_46908_49241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (15))){
var inst_46889 = (state_46900[(2)]);
var state_46900__$1 = state_46900;
var statearr_46909_49242 = state_46900__$1;
(statearr_46909_49242[(2)] = inst_46889);

(statearr_46909_49242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (13))){
var state_46900__$1 = state_46900;
var statearr_46910_49244 = state_46900__$1;
(statearr_46910_49244[(2)] = null);

(statearr_46910_49244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (6))){
var inst_46859 = (state_46900[(8)]);
var inst_46884 = inst_46859.length;
var inst_46885 = (inst_46884 > (0));
var state_46900__$1 = state_46900;
if(cljs.core.truth_(inst_46885)){
var statearr_46911_49245 = state_46900__$1;
(statearr_46911_49245[(1)] = (12));

} else {
var statearr_46912_49246 = state_46900__$1;
(statearr_46912_49246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (3))){
var inst_46898 = (state_46900[(2)]);
var state_46900__$1 = state_46900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46900__$1,inst_46898);
} else {
if((state_val_46901 === (12))){
var inst_46859 = (state_46900[(8)]);
var inst_46887 = cljs.core.vec(inst_46859);
var state_46900__$1 = state_46900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46900__$1,(15),out,inst_46887);
} else {
if((state_val_46901 === (2))){
var state_46900__$1 = state_46900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46900__$1,(4),ch);
} else {
if((state_val_46901 === (11))){
var inst_46863 = (state_46900[(9)]);
var inst_46867 = (state_46900[(10)]);
var inst_46877 = (state_46900[(2)]);
var inst_46878 = [];
var inst_46879 = inst_46878.push(inst_46863);
var inst_46859 = inst_46878;
var inst_46860 = inst_46867;
var state_46900__$1 = (function (){var statearr_46915 = state_46900;
(statearr_46915[(11)] = inst_46877);

(statearr_46915[(7)] = inst_46860);

(statearr_46915[(8)] = inst_46859);

(statearr_46915[(12)] = inst_46879);

return statearr_46915;
})();
var statearr_46916_49247 = state_46900__$1;
(statearr_46916_49247[(2)] = null);

(statearr_46916_49247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (9))){
var inst_46859 = (state_46900[(8)]);
var inst_46875 = cljs.core.vec(inst_46859);
var state_46900__$1 = state_46900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46900__$1,(11),out,inst_46875);
} else {
if((state_val_46901 === (5))){
var inst_46863 = (state_46900[(9)]);
var inst_46860 = (state_46900[(7)]);
var inst_46867 = (state_46900[(10)]);
var inst_46867__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46863) : f.call(null,inst_46863));
var inst_46868 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46867__$1,inst_46860);
var inst_46869 = cljs.core.keyword_identical_QMARK_(inst_46860,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46870 = ((inst_46868) || (inst_46869));
var state_46900__$1 = (function (){var statearr_46919 = state_46900;
(statearr_46919[(10)] = inst_46867__$1);

return statearr_46919;
})();
if(cljs.core.truth_(inst_46870)){
var statearr_46922_49248 = state_46900__$1;
(statearr_46922_49248[(1)] = (8));

} else {
var statearr_46923_49249 = state_46900__$1;
(statearr_46923_49249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (14))){
var inst_46893 = (state_46900[(2)]);
var inst_46894 = cljs.core.async.close_BANG_(out);
var state_46900__$1 = (function (){var statearr_46925 = state_46900;
(statearr_46925[(13)] = inst_46893);

return statearr_46925;
})();
var statearr_46926_49250 = state_46900__$1;
(statearr_46926_49250[(2)] = inst_46894);

(statearr_46926_49250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (10))){
var inst_46882 = (state_46900[(2)]);
var state_46900__$1 = state_46900;
var statearr_46928_49251 = state_46900__$1;
(statearr_46928_49251[(2)] = inst_46882);

(statearr_46928_49251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46901 === (8))){
var inst_46863 = (state_46900[(9)]);
var inst_46867 = (state_46900[(10)]);
var inst_46859 = (state_46900[(8)]);
var inst_46872 = inst_46859.push(inst_46863);
var tmp46924 = inst_46859;
var inst_46859__$1 = tmp46924;
var inst_46860 = inst_46867;
var state_46900__$1 = (function (){var statearr_46929 = state_46900;
(statearr_46929[(7)] = inst_46860);

(statearr_46929[(8)] = inst_46859__$1);

(statearr_46929[(14)] = inst_46872);

return statearr_46929;
})();
var statearr_46930_49252 = state_46900__$1;
(statearr_46930_49252[(2)] = null);

(statearr_46930_49252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43870__auto__ = null;
var cljs$core$async$state_machine__43870__auto____0 = (function (){
var statearr_46933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46933[(0)] = cljs$core$async$state_machine__43870__auto__);

(statearr_46933[(1)] = (1));

return statearr_46933;
});
var cljs$core$async$state_machine__43870__auto____1 = (function (state_46900){
while(true){
var ret_value__43871__auto__ = (function (){try{while(true){
var result__43872__auto__ = switch__43869__auto__(state_46900);
if(cljs.core.keyword_identical_QMARK_(result__43872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43872__auto__;
}
break;
}
}catch (e46935){var ex__43873__auto__ = e46935;
var statearr_46936_49255 = state_46900;
(statearr_46936_49255[(2)] = ex__43873__auto__);


if(cljs.core.seq((state_46900[(4)]))){
var statearr_46937_49256 = state_46900;
(statearr_46937_49256[(1)] = cljs.core.first((state_46900[(4)])));

} else {
throw ex__43873__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49258 = state_46900;
state_46900 = G__49258;
continue;
} else {
return ret_value__43871__auto__;
}
break;
}
});
cljs$core$async$state_machine__43870__auto__ = function(state_46900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43870__auto____1.call(this,state_46900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43870__auto____0;
cljs$core$async$state_machine__43870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43870__auto____1;
return cljs$core$async$state_machine__43870__auto__;
})()
})();
var state__44024__auto__ = (function (){var statearr_46939 = f__44023__auto__();
(statearr_46939[(6)] = c__44022__auto___49231);

return statearr_46939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44024__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
