(function(e){function s(s){for(var r,a,u=s[0],i=s[1],l=s[2],v=0,h=[];v<u.length;v++)a=u[v],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(s);while(h.length)h.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,s=0;s<t.length;s++){for(var o=t[s],r=!0,u=1;u<o.length;u++){var i=o[u];0!==n[i]&&(r=!1)}r&&(t.splice(s--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},t=[];function a(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,s,o){a.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,s){if(1&s&&(e=a(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)a.d(o,r,function(s){return e[s]}.bind(null,r));return o},a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,"a",s),s},a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=s,u=u.slice();for(var l=0;l<u.length;l++)s(u[l]);var c=i;t.push([0,"chunk-vendors"]),o()})({0:function(e,s,o){e.exports=o("56d7")},"115c":function(e){e.exports=JSON.parse('{"HouseQuestions":2,"TotalQuestions":4,"questions":[{"question":"What came in the mail today?","answers":[{"answer":"a paper airplane","house":"explorer","value":1},{"answer":"a pillow","house":"conqueror","value":1},{"answer":"a cup","house":"visionary","value":1},{"answer":"a pencil","house":"visionary","value":1.5}]},{"question":"What did you eat for dinner last night?","answers":[{"answer":"a sandwich.","house":"explorer","value":1},{"answer":"two sandwiches","house":"conqueror","value":1},{"answer":"a salad","house":"visionary","value":1},{"answer":"a 5 course meal","house":"visionary","value":1.5}]},{"question":"Whats your favorite number?","answers":[{"answer":"7","house":"explorer","value":1},{"answer":"1","house":"conqueror","value":1},{"answer":"6","house":"visionary","value":1},{"answer":"9","house":"conqueror","value":1.5}]},{"question":"Whats the best way to solve a problem?","answers":[{"answer":"Around it","house":"explorer","value":1},{"answer":"Buy a Travis Scott meal","house":"conqueror","value":1},{"answer":"Surrender. /ff","house":"visionary","value":1},{"answer":"Just walk away","house":"conqueror","value":1.5}]},{"question":"We\'re in zoom class and you\'re ____","answers":[{"answer":"sleeping","house":"explorer","value":1},{"answer":"playing games","house":"conqueror","value":1},{"answer":"taking notes","house":"visionary","value":1},{"answer":"doing something else","house":"explorer","value":1.5}]},{"question":"I don\'t shower, I","answers":[{"answer":"run in the rain.","house":"explorer","value":1},{"answer":"sweat on myself.","house":"conqueror","value":1},{"answer":"bathe.","house":"visionary","value":1},{"answer":"go swimming.","house":"explorer","value":1.5}]},{"question":"Only the worthy will ","answers":[{"answer":"consume the Travis Scott meal.","house":"explorer","value":1},{"answer":"play competitive Among Us.","house":"conqueror","value":1},{"answer":"play fortnite at a competitive level.","house":"visionary","value":1},{"answer":"consume the J Balvin meal.","house":"conqueror","value":1.5}]},{"question":"With 1 day left, you\'d _______.","answers":[{"answer":"take a nap","house":"explorer","value":1},{"answer":"have some fun","house":"conqueror","value":1},{"answer":"maximize your time","house":"visionary","value":1},{"answer":"recieve a life sentence","house":"visionary","value":1.5}]}]}')},"56d7":function(e,s,o){"use strict";o.r(s);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"container-app"},[r("div",{staticClass:"container-house-gradient",class:e.HouseGradient}),r("div",{staticClass:"container-quiz"},[r("div",{staticClass:"quiz-main"},[r("div",{staticClass:"quiz-header",class:e.HouseColor},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.ShowingResults,expression:"!ShowingResults"}],staticClass:"box-question"},[r("h1",[e._v(e._s(e.GetCurrentQuestion()))])]),r("img",{directives:[{name:"show",rawName:"v-show",value:e.ShowingResults,expression:"ShowingResults"}],staticClass:"house-icon",attrs:{src:e.HouseIcon}})]),r("div",{ref:"answers",staticClass:"box-answers",class:e.HouseColor},[r("button",{directives:[{name:"show",rawName:"v-show",value:!e.ShowingResults,expression:"!ShowingResults"}],staticClass:"answer-button",on:{click:function(s){return e.PickAnswer(0)}}},[e._v(e._s(e.GetAnswer(0)))]),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.ShowingResults,expression:"!ShowingResults"}],staticClass:"answer-button",on:{click:function(s){return e.PickAnswer(1)}}},[e._v(e._s(e.GetAnswer(1)))]),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.ShowingResults,expression:"!ShowingResults"}],staticClass:"answer-button",on:{click:function(s){return e.PickAnswer(2)}}},[e._v(e._s(e.GetAnswer(2)))]),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.ShowingResults,expression:"!ShowingResults"}],staticClass:"answer-button",on:{click:function(s){return e.PickAnswer(3)}}},[e._v(e._s(e.GetAnswer(3)))]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.ShowingResults,expression:"ShowingResults"}],staticClass:"box-results",class:e.ShowingResults?"white-text":""},[r("h1",[e._v(e._s("You were placed in the House of "+e.HouseResult))]),r("p",[e._v(e._s(e.HouseDescription))])])]),r("div",{staticClass:"quiz-footer",class:e.HouseColor},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.ShowingResults,expression:"ShowingResults"}],attrs:{id:"retry-button",src:o("7441")},on:{click:function(s){return e.Restart()}}})])])])])},t=[],a=(o("4160"),o("159b"),o("115c")),u={name:"App",mounted:function(){this.PopulateQuestions()},data:function(){return{NumHouseQuestions:a.HouseQuestions,NumTotalQuestions:a.TotalQuestions,QuestionDatabase:a.questions,ActiveQuestions:[],CurrentQuestion:0,UserData:{explorer:0,conqueror:0,visionary:0},ShowingResults:!1,HouseResult:"",HouseDescription:"",HouseColor:{"color-explorer":!1,"color-conqueror":!1,"color-visionary":!1,"color-travis":!1},HouseGradient:{"gradient-explorer":!1,"gradient-conqueror":!1,"gradient-visionary":!1,"gradient-travis":!1},HouseIcon:""}},methods:{PopulateQuestions:function(){var e=this;e.ActiveQuestions=[],e.QuestionDatabase.forEach((function(e){for(var s=e.answers,o=s.length-1;o>0;o--){var r=Math.floor(Math.random()*(o+1)),n=s[o];s[o]=s[r],s[r]=n}}));for(var s=0;s<e.NumTotalQuestions*e.NumHouseQuestions;s+=e.NumHouseQuestions)e.ActiveQuestions.push(e.QuestionDatabase[Math.floor(Math.random()*(s+(e.NumHouseQuestions-1)-s+1)+s)])},PickAnswer:function(e){var s=this,o=s.ActiveQuestions[s.CurrentQuestion].answers[e];s.UserData[o.house]+=o.value,s.CurrentQuestion++,s.CurrentQuestion>=s.NumTotalQuestions&&s.ShowResults()},GetCurrentQuestion:function(){var e=this;return null!=e.ActiveQuestions[e.CurrentQuestion]?e.ActiveQuestions[e.CurrentQuestion].question:""},GetAnswer:function(e){var s=this,o=s.ActiveQuestions[s.CurrentQuestion];return null!=o?o.answers[e].answer:""},ShowResults:function(){var e=this;e.ShowingResults=!0,e.UpdateHouseResults()},UpdateHouseResults:function(){var e=this,s="explorer";switch(e.UserData["conqueror"]>e.UserData[s]&&(s="conqueror"),e.UserData["visionary"]>e.UserData[s]&&(s="visionary"),4.5==e.UserData["conqueror"]&&(s="travis"),e.HouseColor["color-".concat(s)]=!0,e.HouseGradient["gradient-".concat(s)]=!0,e.HouseIcon="assets/".concat(s,"-logo.png"),s){case"explorer":e.HouseResult="Explorers",e.HouseDescription="Thoughtful and inquisitive, an Explorer is well balanced.";break;case"conqueror":e.HouseResult="Conquerors",e.HouseDescription="Brave and decisive, a Conqueror knows themself well.";break;case"visionary":e.HouseResult="Visionaries",e.HouseDescription="Wise and knowledgable, a Visionary sees what most cannot.";break;case"travis":e.HouseResult="Travis Scott",e.HouseDescription="Talented, professional, well fed from the Travis Scott meal, consider yourself a legend amongst all.";break;default:e.HouseResult="funny gifs?",e.HouseDescription="An error has occured! Please alert the nearest McDonalds employee, tell them Cactus Jack sent you.";break}e.HouseResult+="!"},Restart:function(){var e=this;e.PopulateQuestions(),e.CurrentQuestion=0,e.UserData={explorer:0,conqueror:0,visionary:0},e.ShowingResults=!1,e.HouseColor={"color-explorer":!1,"color-conqueror":!1,"color-visionary":!1,"color-travis":!1},e.HouseGradient={"gradient-explorer":!1,"gradient-conqueror":!1,"gradient-visionary":!1,"gradient-travis":!1}}}},i=u,l=o("2877"),c=Object(l["a"])(i,n,t,!1,null,null,null),v=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},7441:function(e,s,o){e.exports=o.p+"img/retry.199b6b99.png"}});
//# sourceMappingURL=app.d1dfc863.js.map