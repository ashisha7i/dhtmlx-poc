//v.3.6 build 131108

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
dhtmlXGridObject.prototype.setFiltrationLevel=function(c,a,b){this._tr_strfltr=c;this._tr_fltr_c=a;this._tr_fltr_d=b;this.refreshFilters()};
dhtmlXGridObject.prototype.filterTreeBy=function(c,a,b){var e=this._h2;if(typeof this._tr_strfltr=="undefined")this._tr_strfltr=-1;if(this._f_rowsBuffer){if(!b&&(this._h2=this._f_rowsBuffer,this._fake))this._fake._h2=this._h2}else this._f_rowsBuffer=this._h2;var d=!0;this.dma(!0);this._fbf={};if(typeof c=="object")for(var f=0;f<a.length;f++)this._filterTreeA(c[f],a[f]);else this._filterTreeA(c,a);this._fbf=null;this.dma(!1);this._fix_filtered_images(this._h2,e);this._renderSort();this.callEvent("onGridReconstructed",
[])};
dhtmlXGridObject.prototype._filterTreeA=function(c,a){if(a!=""){var b=!0;typeof a=="function"?b=!1:a=(a||"").toString().toLowerCase();var e=function(a,b,d){var h=d.get[a.parent.id];h||(h=e(a.parent,b,d));d=f.get[a.id];d||(d={id:a.id,childs:[],level:a.level,parent:h,index:h.childs.length,image:a.image,state:a.state,buff:a.buff,has_kids:a.has_kids,_xml_await:a._xml_await},h.childs.push(d),f.get[d.id]=d);return d},d=this._fbf,f=new dhtmlxHierarchy,h,j=this._tr_strfltr,i=this,k=function(a){for(var d=0;d<
a.childs.length;d++)i.temp(a.childs[d])};switch(j.toString()){case "-2":h=function(a){if(d[a.id])return!1;k(a);return!0};break;case "-1":h=function(a){return!a.childs.length};break;default:h=function(a){return j==a.level}}this.temp=function(g){if(g.id!=0&&h(g))return(b?this._get_cell_value(g.buff,c).toString().toLowerCase().indexOf(a)==-1:!a(this._get_cell_value(g.buff,c),g.id))?(d[g.id]=!0,this._tr_fltr_c&&e(g.parent,this._h2,f),!1):(e(g,this._h2,f),g.childs&&j!=-2&&this._h2.forEachChild(g.id,function(a){e(a,
this._h2,f)},this),!0);else this._tr_fltr_d&&this._tr_strfltr>g.level&&g.id!=0&&e(g,this._h2,f),k(g)};this.temp(this._h2.get[0]);this._h2=f;if(this._fake)this._fake._h2=this._h2}};
dhtmlXGridObject.prototype._fix_filtered_images=function(c,a){c.forEachChild(0,function(b){if(!b.childs.length&&!b.has_kids){if(b.state!=dhtmlXGridObject._emptyLineImg)b.state=dhtmlXGridObject._emptyLineImg,b.update=!0,this._updateTGRState(b)}else if(b.buff.tagName=="TR"){var c=a.get[b.id];if(c&&c.state!=dhtmlXGridObject._emptyLineImg)b.state=c.state;b.update=!0;this._updateTGRState(b)}},this)};
dhtmlXGridObject.prototype.collectTreeValues=function(c){if(typeof this._tr_strfltr=="undefined")this._tr_strfltr=-1;this.dma(!0);this._build_m_order();var c=this._m_order?this._m_order[c]:c,a={},b=[],e=this._f_rowsBuffer||this._h2;e.forEachChild(0,function(d){if(this._tr_strfltr==-2||this._tr_strfltr==-1&&!d.childs.length||this._tr_strfltr==d.level){var b=this._get_cell_value(d.buff,c);b&&(a[b]=!0)}},this);this.dma(!1);var d=this.combos[c],f;for(f in a)a[f]===!0&&b.push(d?d.get(f)||f:f);return b.sort()};
dhtmlXGridObject.prototype._in_header_stat_tree_total=function(c,a,b){var e=function(){var d=0;this._build_m_order();var b=this._m_order?this._m_order[a]:a;this._h2.forEachChild(0,function(a){var c=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],b));d+=isNaN(c)?0:c},this);return this._maskArr[a]?this._aplNF(d,a):Math.round(d*100)/100};this._stat_in_header(c,e,a,b,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_total_leaf=function(c,a,b){var e=function(){var d=0;this._build_m_order();var b=this._m_order?this._m_order[a]:a;this._h2.forEachChild(0,function(a){if(!a.childs.length){var c=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],b));d+=isNaN(c)?0:c}},this);return this._maskArr[a]?this._aplNF(d,a):Math.round(d*100)/100};this._stat_in_header(c,e,a,b,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_multi_total=function(c,a,b){var e=b[1].split(":");b[1]="";var d=function(){var d=0;this._h2.forEachChild(0,function(a){var b=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],e[0]))*parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],e[1]));d+=isNaN(b)?0:b},this);return this._maskArr[a]?this._aplNF(d,a):Math.round(d*100)/100};this._stat_in_header(c,d,a,b,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_multi_total_leaf=function(c,a,b){var e=b[1].split(":");b[1]="";var d=function(){var d=0;this._h2.forEachChild(0,function(a){if(!a.childs.length){var b=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],e[0]))*parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],e[1]));d+=isNaN(b)?0:b}},this);return this._maskArr[a]?this._aplNF(d,a):Math.round(d*100)/100};this._stat_in_header(c,d,a,b,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_max=function(c,a,b){var e=function(){var d=-999999999;this._build_m_order();var b=this._m_order?this._m_order[a]:a;if(this.getRowsNum()==0)return"";this._h2.forEachChild(0,function(a){var c=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],b));isNaN(c)||(d=Math.max(d,c))},this);return this._maskArr[a]?this._aplNF(d,a):d};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_min=function(c,a,b){var e=function(){var d=999999999;this._build_m_order();var b=this._m_order?this._m_order[a]:a;if(this.getRowsNum()==0)return"";this._h2.forEachChild(0,function(a){var c=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],b));isNaN(c)||(d=Math.min(d,c))},this);return this._maskArr[a]?this._aplNF(d,a):d};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_average=function(c,a,b){var e=function(){var d=0,b=0;this._build_m_order();var c=this._m_order?this._m_order[a]:a;this._h2.forEachChild(0,function(a){var e=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],c));d+=isNaN(e)?0:e;b++},this);return this._maskArr[a]?this._aplNF(d,a):Math.round(d/b*100)/100};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_max_leaf=function(c,a,b){var e=function(){var d=-999999999;this._build_m_order();var b=this._m_order?this._m_order[a]:a;if(this.getRowsNum()==0)return"";this._h2.forEachChild(0,function(a){if(!a.childs.length){var c=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],b));isNaN(c)||(d=Math.max(d,c))}},this);return this._maskArr[a]?this._aplNF(d,a):d};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_min_leaf=function(c,a,b){var e=function(){var b=999999999;this._build_m_order();var c=this._m_order?this._m_order[a]:a;if(this.getRowsNum()==0)return"";this._h2.forEachChild(0,function(a){if(!a.childs.length){var e=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],c));isNaN(e)||(b=Math.min(b,e))}},this);return this._maskArr[a]?this._aplNF(b,a):b};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_average_leaf=function(c,a,b){var e=function(){var b=0,c=0;this._build_m_order();var e=this._m_order?this._m_order[a]:a;this._h2.forEachChild(0,function(a){if(!a.childs.length){var i=parseFloat(this._get_cell_value(a.buff||this.rowsAr[a.id],e));b+=isNaN(i)?0:i;c++}},this);return this._maskArr[a]?this._aplNF(b,a):Math.round(b/c*100)/100};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._in_header_stat_tree_count=function(c,a,b){var e=function(){var a=0;this._h2.forEachChild(0,function(){a++},this);return a};this._stat_in_header(c,e,a,b)};dhtmlXGridObject.prototype._in_header_stat_tree_count_leaf=function(c,a,b){var e=function(){var a=0;this._h2.forEachChild(0,function(b){b.childs.length||a++},this);return a};this._stat_in_header(c,e,a,b)};
dhtmlXGridObject.prototype._stat_in_header=function(c,a,b,e){var d=this,f=function(){this.dma(!0);c.innerHTML=(e[0]?e[0]:"")+a.call(this)+(e[1]?e[1]:"");this.dma(!1);this.callEvent("onStatReady",[])};if(!this._stat_events)this._stat_events=[],this.attachEvent("onClearAll",function(){if(!this.hdr.rows[1]){for(var a=0;a<this._stat_events.length;a++)for(var b=0;b<4;b++)this.detachEvent(this._stat_events[a][b]);this._stat_events=[]}});this._stat_events.push([this.attachEvent("onGridReconstructed",f),
this.attachEvent("onXLE",f),this.attachEvent("onFilterEnd",f),this.attachEvent("onEditCell",function(a,c,d){a==2&&d==b&&f.call(this);return!0})]);c.innerHTML=""};dhtmlXGridObject.prototype._build_m_order=function(){if(this._c_order){this._m_order=[];for(var c=0;c<this._c_order.length;c++)this._m_order[this._c_order[c]]=c}};

//v.3.6 build 131108

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/