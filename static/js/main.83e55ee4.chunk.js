(this["webpackJsonppair-interview"]=this["webpackJsonppair-interview"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(22),a(2)),s=a(3),l=a(5),u=a(4),m=(a(23),a(16)),v=a.n(m),h=(a(41),[{currency:"USD",convertval:1.09322},{currency:"GBP",convertval:.87345},{currency:"JPY",convertval:117.431},{currency:"CHF",convertval:1.05378}]),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:"",currencyIdFrom:"EUR",currencyIdTo:null,conversion:null,timestamp:null,history:[]},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleCurrencyChange=function(e){n.setState({currencyIdTo:e.target.value})},n.handleCurrencyFrom=function(e){n.setState({currencyIdFrom:e.target.value})},n.newCurrencyConvert=function(e,t){v.a.post("https://igfcc7aebk.execute-api.sa-east-1.amazonaws.com/default/money-conversion-interview-exercise-api",{headers:{accept:"application/json"},body:{from:e,to:t}}).then((function(e){n.setState({multiplier:e.data.multiplier}),console.log(n.state.multiplier)})).catch((function(e){console.log(e)}))},n.currencyConvert=function(e){e.preventDefault();var t=parseFloat(n.state.value).toFixed(2),a=n.state.currencyIdTo,r=n.state.currencyIdFrom,o=new Date;n.newCurrencyConvert(r,a);for(var c=0;c<h.length;c++)if(h[c].currency===a){var i=h[c].convertval*t;n.setState({conversion:i.toFixed(2)}),n.setState({timestamp:o.toUTCString()}),n.props.addItemToHistory({timestamp:o.toUTCString(),fromId:r,toId:a,value:t,conversion:i.toFixed(2)})}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"convertor-container"},this.state.value&&this.state.currencyIdFrom?r.a.createElement("div",{className:"user-input-amount item-1"},this.state.value," ",this.state.currencyIdFrom," equals"):r.a.createElement("div",{className:"item-1"},r.a.createElement("h3",null,"Enter a value to begin")),this.state.conversion?r.a.createElement("div",{className:"return-value item-2"},this.state.conversion," ",this.state.currencyIdTo):r.a.createElement("div",{className:"item-2"}),this.state.timestamp?r.a.createElement("div",{className:"date-of-conversion item-3"},this.state.timestamp):r.a.createElement("div",{className:"item-3"}),r.a.createElement("form",{className:"conversion-form item-4",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleChange,className:"form-item text-input"}),r.a.createElement("select",{id:"currency-from",onChange:this.handleCurrencyFrom,className:"form-item"},r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"YEN"},"YEN"),r.a.createElement("option",{value:"CHF"},"CHF")),r.a.createElement("select",{id:"currency-to",onChange:this.handleCurrencyChange,className:"form-item"},r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"YEN"},"YEN"),r.a.createElement("option",{value:"CHF"},"CHF")),r.a.createElement("input",{type:"submit",id:"convert",onClick:this.currencyConvert,value:"Convert",className:"form-item"})))}}]),a}(r.a.Component),p=(a(42),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"history-container"},r.a.createElement("h3",null,"History"),this.props.history.map((function(e){return r.a.createElement("div",{key:e.timestamp,className:"history-item"},r.a.createElement("h6",null,e.timestamp),r.a.createElement("h5",null,e.value," ",e.fromId," was ",e.conversion," ",e.toId))})))}}]),a}(r.a.Component)),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).addItemToHistory=function(e){var t=n.state.history;t.unshift(e),n.setState({history:t}),console.log(n.state.history)},n.state={history:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{addItemToHistory:this.addItemToHistory}),r.a.createElement(p,{history:this.state.history}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.83e55ee4.chunk.js.map