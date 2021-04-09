goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__52588 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__52588)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__52588)){
var G__52590 = (console["error"]);
var G__52591 = msg;
var G__52592 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52589 = oops.state.get_console_reporter();
return (fexpr__52589.cljs$core$IFn$_invoke$arity$3 ? fexpr__52589.cljs$core$IFn$_invoke$arity$3(G__52590,G__52591,G__52592) : fexpr__52589.call(null,G__52590,G__52591,G__52592));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52588)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52588)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__52593 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__52593)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__52593)){
var G__52595 = (console["warn"]);
var G__52596 = msg;
var G__52597 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__52594 = oops.state.get_console_reporter();
return (fexpr__52594.cljs$core$IFn$_invoke$arity$3 ? fexpr__52594.cljs$core$IFn$_invoke$arity$3(G__52595,G__52596,G__52597) : fexpr__52594.call(null,G__52595,G__52596,G__52597));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52593)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52593)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52670 = arguments.length;
var i__4737__auto___52671 = (0);
while(true){
if((i__4737__auto___52671 < len__4736__auto___52670)){
args__4742__auto__.push((arguments[i__4737__auto___52671]));

var G__52672 = (i__4737__auto___52671 + (1));
i__4737__auto___52671 = G__52672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__52600){
var vec__52601 = p__52600;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52601,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__52604_52673 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__52604_52673)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__52604_52673)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__52604_52673)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52604_52673)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52604_52673)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq52598){
var G__52599 = cljs.core.first(seq52598);
var seq52598__$1 = cljs.core.next(seq52598);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52599,seq52598__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_52605 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_52605);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_52606 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_52606,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_52608 = oops.config.get_child_factory();
var child_factory_52608__$1 = (function (){var G__52609 = child_factory_52608;
var G__52609__$1 = (((G__52609 instanceof cljs.core.Keyword))?G__52609.fqn:null);
switch (G__52609__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_52608;

}
})();

var child_obj_52607 = (child_factory_52608__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_52608__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_52608__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_52607);
} else {
}

return child_obj_52607;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_52612 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_52612);

return selector_path_52612;
} else {
var selector_path_52613 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_52613);

return selector_path_52613;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_52614 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_52614);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_52623 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_52623,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_52616 = (function (){var path_52615 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_52615,(0));

return path_52615;
})();
var len_52617 = path_52616.length;
var i_52618 = (0);
var obj_52619 = obj;
while(true){
if((i_52618 < len_52617)){
var mode_52620 = (path_52616[i_52618]);
var key_52621 = (path_52616[(i_52618 + (1))]);
var next_obj_52622 = oops.core.get_key_dynamically(obj_52619,key_52621,mode_52620);
var G__52624 = mode_52620;
switch (G__52624) {
case (0):
var G__52676 = (i_52618 + (2));
var G__52677 = next_obj_52622;
i_52618 = G__52676;
obj_52619 = G__52677;
continue;

break;
case (1):
if((!((next_obj_52622 == null)))){
var G__52678 = (i_52618 + (2));
var G__52679 = next_obj_52622;
i_52618 = G__52678;
obj_52619 = G__52679;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52622 == null)))){
var G__52680 = (i_52618 + (2));
var G__52681 = next_obj_52622;
i_52618 = G__52680;
obj_52619 = G__52681;
continue;
} else {
var G__52682 = (i_52618 + (2));
var G__52683 = oops.core.punch_key_dynamically_BANG_.call(null,obj_52619,key_52621);
i_52618 = G__52682;
obj_52619 = G__52683;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52624)].join('')));

}
} else {
return obj_52619;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_52650 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_52650,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_52626 = (function (){var path_52625 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_52625,(0));

return path_52625;
})();
var len_52627 = path_52626.length;
if((len_52627 < (4))){
return [obj,(function (){var path_52629 = path_52626;
var len_52630 = path_52629.length;
var i_52631 = (0);
var obj_52632 = obj;
while(true){
if((i_52631 < len_52630)){
var mode_52633 = (path_52629[i_52631]);
var key_52634 = (path_52629[(i_52631 + (1))]);
var next_obj_52635 = oops.core.get_key_dynamically(obj_52632,key_52634,mode_52633);
var G__52651 = mode_52633;
switch (G__52651) {
case (0):
var G__52685 = (i_52631 + (2));
var G__52686 = next_obj_52635;
i_52631 = G__52685;
obj_52632 = G__52686;
continue;

break;
case (1):
if((!((next_obj_52635 == null)))){
var G__52687 = (i_52631 + (2));
var G__52688 = next_obj_52635;
i_52631 = G__52687;
obj_52632 = G__52688;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52635 == null)))){
var G__52689 = (i_52631 + (2));
var G__52690 = next_obj_52635;
i_52631 = G__52689;
obj_52632 = G__52690;
continue;
} else {
var G__52691 = (i_52631 + (2));
var G__52692 = oops.core.punch_key_dynamically_BANG_.call(null,obj_52632,key_52634);
i_52631 = G__52691;
obj_52632 = G__52692;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52651)].join('')));

}
} else {
return obj_52632;
}
break;
}
})()];
} else {
var target_obj_52628 = (function (){var path_52636 = path_52626.slice((0),(len_52627 - (2)));
var len_52637 = path_52636.length;
var i_52638 = (0);
var obj_52639 = obj;
while(true){
if((i_52638 < len_52637)){
var mode_52640 = (path_52636[i_52638]);
var key_52641 = (path_52636[(i_52638 + (1))]);
var next_obj_52642 = oops.core.get_key_dynamically(obj_52639,key_52641,mode_52640);
var G__52652 = mode_52640;
switch (G__52652) {
case (0):
var G__52694 = (i_52638 + (2));
var G__52695 = next_obj_52642;
i_52638 = G__52694;
obj_52639 = G__52695;
continue;

break;
case (1):
if((!((next_obj_52642 == null)))){
var G__52696 = (i_52638 + (2));
var G__52697 = next_obj_52642;
i_52638 = G__52696;
obj_52639 = G__52697;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52642 == null)))){
var G__52698 = (i_52638 + (2));
var G__52699 = next_obj_52642;
i_52638 = G__52698;
obj_52639 = G__52699;
continue;
} else {
var G__52700 = (i_52638 + (2));
var G__52701 = oops.core.punch_key_dynamically_BANG_.call(null,obj_52639,key_52641);
i_52638 = G__52700;
obj_52639 = G__52701;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52652)].join('')));

}
} else {
return obj_52639;
}
break;
}
})();
return [target_obj_52628,(function (){var path_52643 = [(path_52626[(len_52627 - (2))]),(path_52626[(len_52627 - (1))])];
var len_52644 = path_52643.length;
var i_52645 = (0);
var obj_52646 = target_obj_52628;
while(true){
if((i_52645 < len_52644)){
var mode_52647 = (path_52643[i_52645]);
var key_52648 = (path_52643[(i_52645 + (1))]);
var next_obj_52649 = oops.core.get_key_dynamically(obj_52646,key_52648,mode_52647);
var G__52653 = mode_52647;
switch (G__52653) {
case (0):
var G__52703 = (i_52645 + (2));
var G__52704 = next_obj_52649;
i_52645 = G__52703;
obj_52646 = G__52704;
continue;

break;
case (1):
if((!((next_obj_52649 == null)))){
var G__52705 = (i_52645 + (2));
var G__52706 = next_obj_52649;
i_52645 = G__52705;
obj_52646 = G__52706;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52649 == null)))){
var G__52707 = (i_52645 + (2));
var G__52708 = next_obj_52649;
i_52645 = G__52707;
obj_52646 = G__52708;
continue;
} else {
var G__52709 = (i_52645 + (2));
var G__52710 = oops.core.punch_key_dynamically_BANG_.call(null,obj_52646,key_52648);
i_52645 = G__52709;
obj_52646 = G__52710;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52653)].join('')));

}
} else {
return obj_52646;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_52668 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_52668,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_52655 = (function (){var path_52654 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_52654,(1));

return path_52654;
})();
var len_52658 = path_52655.length;
var parent_obj_path_52659 = path_52655.slice((0),(len_52658 - (2)));
var key_52656 = (path_52655[(len_52658 - (1))]);
var mode_52657 = (path_52655[(len_52658 - (2))]);
var parent_obj_52660 = (function (){var path_52661 = parent_obj_path_52659;
var len_52662 = path_52661.length;
var i_52663 = (0);
var obj_52664 = obj;
while(true){
if((i_52663 < len_52662)){
var mode_52665 = (path_52661[i_52663]);
var key_52666 = (path_52661[(i_52663 + (1))]);
var next_obj_52667 = oops.core.get_key_dynamically(obj_52664,key_52666,mode_52665);
var G__52669 = mode_52665;
switch (G__52669) {
case (0):
var G__52712 = (i_52663 + (2));
var G__52713 = next_obj_52667;
i_52663 = G__52712;
obj_52664 = G__52713;
continue;

break;
case (1):
if((!((next_obj_52667 == null)))){
var G__52714 = (i_52663 + (2));
var G__52715 = next_obj_52667;
i_52663 = G__52714;
obj_52664 = G__52715;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_52667 == null)))){
var G__52716 = (i_52663 + (2));
var G__52717 = next_obj_52667;
i_52663 = G__52716;
obj_52664 = G__52717;
continue;
} else {
var G__52718 = (i_52663 + (2));
var G__52719 = oops.core.punch_key_dynamically_BANG_.call(null,obj_52664,key_52666);
i_52663 = G__52718;
obj_52664 = G__52719;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52669)].join('')));

}
} else {
return obj_52664;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_52660,key_52656,val,mode_52657);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
