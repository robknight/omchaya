// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.datetime');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat.Format');
goog.require('goog.i18n.DateTimeFormat.Format');
omchaya.datetime.full_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_DATE));
omchaya.datetime.full_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_DATETIME));
omchaya.datetime.full_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_TIME));
omchaya.datetime.long_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));
omchaya.datetime.long_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATETIME));
omchaya.datetime.long_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_TIME));
omchaya.datetime.medium_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_DATE));
omchaya.datetime.medium_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_DATETIME));
omchaya.datetime.medium_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_TIME));
omchaya.datetime.short_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_DATE));
omchaya.datetime.short_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_DATETIME));
omchaya.datetime.short_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_TIME));
omchaya.datetime.format_date = (function format_date(date_format,date){return date_format.format((new Date(date)));
});
omchaya.datetime.full_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.full_date_format);
omchaya.datetime.full_datetime_format = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.full_datetime_format);
omchaya.datetime.full_time = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.full_time_format);
omchaya.datetime.long_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.long_date_format);
omchaya.datetime.long_datetime = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.long_datetime_format);
omchaya.datetime.long_time = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.long_time_format);
omchaya.datetime.medium_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.medium_date_format);
omchaya.datetime.medium_datetime = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.medium_datetime_format);
omchaya.datetime.medium_time = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.medium_time_format);
omchaya.datetime.short_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.short_date_format);
omchaya.datetime.short_datetime = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.short_datetime_format);
omchaya.datetime.short_time = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.short_time_format);
omchaya.datetime.medium_consistent_date_format = (new goog.i18n.DateTimeFormat("MMM dd, yyyy"));
omchaya.datetime.medium_consistent_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.medium_consistent_date_format);
omchaya.datetime.calendar_date_format = (new goog.i18n.DateTimeFormat("EEE, MMM dd, yyyy 'at' hh:mma"));
omchaya.datetime.calendar_date = cljs.core.partial.call(null,omchaya.datetime.format_date,omchaya.datetime.calendar_date_format);
omchaya.datetime.date_in_ms = (function date_in_ms(date){var vec__11750 = cljs.core.map.call(null,parseInt,cljs.core.name.call(null,date).split(/-/));var y = cljs.core.nth.call(null,vec__11750,0,null);var m = cljs.core.nth.call(null,vec__11750,1,null);var d = cljs.core.nth.call(null,vec__11750,2,null);return (new Date(Date.UTC(y,(m - 1),(d - 1),0,0,0))).getTime();
});
omchaya.datetime.day_in_ms = ((1000 * 3600) * 24);
omchaya.datetime.minute = 60;
omchaya.datetime.hour = (omchaya.datetime.minute * 60);
omchaya.datetime.day = (omchaya.datetime.hour * 24);
omchaya.datetime.month = (omchaya.datetime.day * 30);
omchaya.datetime.year = (omchaya.datetime.month * 12);
omchaya.datetime.time_ago = (function time_ago(time){var now = (new Date()).getTime();var ago = Math.floor(((now - time) / 1000));var interval = (((ago < omchaya.datetime.hour))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",2688237584),omchaya.datetime.minute,new cljs.core.Keyword(null,"unit","unit",1017498870),"minute"], null):(((ago < omchaya.datetime.day))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",2688237584),omchaya.datetime.hour,new cljs.core.Keyword(null,"unit","unit",1017498870),"hour"], null):(((ago < omchaya.datetime.month))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",2688237584),omchaya.datetime.day,new cljs.core.Keyword(null,"unit","unit",1017498870),"day"], null):(((ago < omchaya.datetime.year))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",2688237584),omchaya.datetime.month,new cljs.core.Keyword(null,"unit","unit",1017498870),"month"], null):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",2688237584),omchaya.datetime.year,new cljs.core.Keyword(null,"unit","unit",1017498870),"year"], null):null)))));var count = Math.round((ago / new cljs.core.Keyword(null,"divisor","divisor",2688237584).cljs$core$IFn$_invoke$arity$1(interval)));return [cljs.core.str(count),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"unit","unit",1017498870).cljs$core$IFn$_invoke$arity$1(interval)),cljs.core.str(((cljs.core._EQ_.call(null,1,count))?null:"s"))].join('');
});

//# sourceMappingURL=datetime.js.map