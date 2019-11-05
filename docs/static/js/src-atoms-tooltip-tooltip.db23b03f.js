(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/atoms/tooltip/Tooltip.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),r=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),u=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),m=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),d=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),b=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),f=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),h=n("./src/ions/text/StyledText.tsx"),g=n("./src/colors/index.ts"),j=n("./src/utility/helpers.ts");"10"===Object("10")&&Object.isExtensible("10")&&Object.defineProperty("10","__filemeta",{enumerable:!0,configurable:!0,value:{name:"tooltipMargin",filename:"src/atoms/tooltip/helpers.ts"}});var O="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: ".concat("10","px;\n"),v="\n  margin-bottom: 0;\n  bottom: auto;\n  transform: translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: ".concat("10","px;\n"),y="\n  margin-bottom: 0;\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  margin-top: ".concat("10","px;\n"),x=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 10px;\n  bottom: 100%;\n  left: 50%;\n";case"right":return O;case"left":return v;case"bottom":return y;default:return Object(j.a)(t)}};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipPosition",filename:"src/atoms/tooltip/helpers.ts"}});var w=function(e){var t=e.placement;switch(t){case"top":return"\n  margin-bottom: 5px;\n  bottom: 100%;\n  transform: translate(-50%, 0);\n  left: 50%;\n";case"right":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(90deg) translate(0, -50%);\n  left: 100%;\n  top: 50%;\n  margin-left: -2px;\n  margin-top: -4px;\n";case"left":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(-90deg) translate(0, -50%);\n  left: auto;\n  right: 100%;\n  top: 50%;\n  margin-right: -2px;\n  margin-top: -4px;\n";case"bottom":return"\n  margin-bottom: 0;\n  bottom: auto;\n  transform: rotate(180deg) translate(-50%, 0);\n  top: 100%;\n  left: unset;\n  right: 50%\n  margin-top: 5px;\n";default:return Object(j.a)(t)}};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"handleTooltipArrowPosition",filename:"src/atoms/tooltip/helpers.ts"}});var _=function(e){switch(e){case"info":return g.b[700];case"success":return g.d[500];case"error":return g.a[500];default:return Object(j.a)(e)}};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTooltipBgColorByType",filename:"src/atoms/tooltip/helpers.ts"}});var T=function(e){return isNaN(e)?0:e},P=function(e,t,n){var i=parseInt(e.paddingLeft||"0",10)+parseInt(e.paddingRight||"0",10)+parseInt("10",10)+parseInt(n||e.width||"0",10);return T(i)};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeTooltipWidth",filename:"src/atoms/tooltip/helpers.ts"}});var E=function(e,t,n){var i=parseInt(e.paddingTop||"0",10)+parseInt(e.paddingBottom||"0",10)+parseInt("10",10)+parseInt(n||e.height||"0",10);return T(i)};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"computeTooltipHeight",filename:"src/atoms/tooltip/helpers.ts"}});var q=function(e){return/\d/.test(e)},C=function(e,t){return-1!==e.indexOf(t)},k=function(e){var t=e.height,n=e.width;return!(!t||!n)&&(q(t)||q(n)||!C(t,"%")||!C(n,"%"))};k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"checkIsStyleComputed",filename:"src/atoms/tooltip/helpers.ts"}});var S=function(e){return window.getComputedStyle(e,":before")};S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCSSComputedStyle",filename:"src/atoms/tooltip/helpers.ts"}});var N=function(e){return e?e.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}};"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getBoundingRect",filename:"src/atoms/tooltip/helpers.ts"}});var W=function(e,t){var n=document.createElement("div");Object.values(e).forEach(function(t){t&&"length"!==t&&"parentRule"!==t&&!q(t.toString())&&(n.style[t]=e[t])}),t.appendChild(n);var i=n.getBoundingClientRect(),o=i.height,a=i.width;return n.remove(),{height:o.toString(),width:a.toString()}};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlternativeStyle",filename:"src/atoms/tooltip/helpers.ts"}});var I=function(e){var t=e.rect,n=e.measurements,i=e.container,o=e.placement,a=n.totalWidth,r=n.totalHeight,l=function(e){if(e===window)return{maxHeight:window.innerHeight,minHeight:0,maxWidth:window.innerWidth,minWidth:0};var t=N(e);return{maxHeight:t.top+t.height,minHeight:t.top,minWidth:t.left,maxWidth:t.left+t.width}}(i),s=l.maxHeight,c=l.minHeight,u=l.maxWidth,m=l.minWidth;switch(o){case"top":return t.top-r<c||t.left+t.width/2+a/2>u||t.left+t.width/2-a/2<m;case"bottom":return t.top+t.height+r>s||t.left+t.width/2+a/2>u||t.left+t.width/2-a/2<m;case"right":return t.left+t.width+a>u||t.top+t.height/2-r/2<c||t.top+t.height/2+r/2>s;case"left":return t.left-a<m||t.top+t.height/2-r/2<c||t.top+t.height/2+r/2>s;default:return Object(j.a)(o),!0}};I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isElementOutOfContainer",filename:"src/atoms/tooltip/helpers.ts"}});var D=function(e,t){return e.filter(function(e){return e!==t})};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function A(){var e=Object(b.a)(["\n  > :first-child:hover {\n    position: relative;\n  }\n\n  > :first-child::before {\n    ","\n    visibility: hidden;\n    opacity: 0;\n    font-size: 0.75rem;\n    line-height: 1.25;\n    display: inline-block;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    padding: 8px;\n    background-color: ",";\n    content: attr(data-tooltip);\n    color: ",";\n    position: absolute;\n    max-width: ",";\n    width: max-content;\n    @supports (-ms-ime-align: auto) {\n      min-width: 50px;\n    }\n    word-wrap: break-word;\n    transform: translate(-50%, 0);\n    text-align: center;\n    z-index: 1001;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::before {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  > :first-child::after {\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid\n      ",";\n    position: absolute;\n    content: '';\n    z-index: 1002;\n    transition: opacity 0.1s ease-in-out;\n    ","\n  }\n\n  > :first-child:hover::after {\n    visibility: visible;\n    opacity: 1;\n  }\n"]);return A=function(){return e},e}D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"removeOutOfScreenPlacement",filename:"src/atoms/tooltip/helpers.ts"}}),"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src/atoms/tooltip/Tooltip.tsx"}}),"undefined"!==typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&Object.defineProperty(WrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WrapperProps",filename:"src/atoms/tooltip/Tooltip.tsx"}});var H=f.d.span(A(),h.b,function(e){var t=e.type;return _(t)},g.b[100],function(e){var t=e.options;return t.tooltipMaxWidth?"".concat(t.tooltipMaxWidth,"px"):"300px"},x,function(e){var t=e.type;return _(t)},w),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).ref=void 0,n.coordinates=void 0,n.tooltipPossiblePlacements=[],n.defaultPlacement=void 0,n.onHover=function(e){var t=e.currentTarget,o=n.coordinates,a=o.top,r=o.left,l=N(t),s=l.top,c=l.left;s===a&&c===r||(n.coordinates=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.coordinates,{},{top:s,left:c}),n.ref=t,n.positionTooltip())},n.cloneChildren=function(e){return function(t){if(a.isValidElement(t))return a.cloneElement(t,{"data-tooltip":e,onMouseEnter:n.onHover})}},n.defaultPlacement="top",n.ref=null,n.state={placement:e.placement||n.defaultPlacement},n.tooltipPossiblePlacements=["top","left","right","bottom"],n.coordinates={top:null,left:null},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.placement===this.state.placement&&this.ref&&this.positionTooltip()}},{key:"getTooltipPlacement",value:function(e,t){if(!e)throw new Error("Tooltip cannot be displayed in the container Element/Window due to its incompatible size. Please consider reducing it or better position tooltiped element in the screen.");if(!this.isOutScreen(e))return e;var n=D(t,e),i=Object(s.a)(n,1)[0];return this.getTooltipPlacement(i,n)}},{key:"isOutScreen",value:function(e){var t=S(this.ref),n=k(t)?{}:W(t,this.ref),i=n.width,o=void 0===i?null:i,a=n.height,r=void 0===a?null:a,l=P(t,0,o),s=E(t,0,r),c=N(this.ref),u=this.props.options,m=u&&u.container?u.container:window;return I({rect:c,measurements:{totalWidth:l,totalHeight:s},container:m,placement:e})}},{key:"positionTooltip",value:function(){try{var e=this.getTooltipPlacement(this.props.placement||this.defaultPlacement,this.tooltipPossiblePlacements);this.setState({placement:e})}catch(t){console.error(t)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=void 0===t?"Default":t,i=e.type,o=void 0===i?"info":i,r=e.children,l=e.options,s=void 0===l?{}:l,c=a.Children.map(r,this.cloneChildren(n));return a.createElement(H,{type:o,placement:this.state.placement,options:s},c)}}]),t}(a.PureComponent),R=z;"undefined"!==typeof z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tooltip",filename:"src/atoms/tooltip/Tooltip.tsx"}});var M=n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).clickCb=function(){1===n.props.item&&(n.setState({itemOneClicked:!0}),setTimeout(function(){return n.setState({itemOneClicked:!1})},500))},n.getTitle=function(){var e=n.props.item;return 1!=e||n.state.itemOneClicked?1==e&&n.state.itemOneClicked?"This is a custom title for item 1 after click appended with an extra long text to test the placement auto change behaviour":"Tooltip for item ".concat(e," on hover."):"Item 1"},n.state={itemOneClicked:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.innerRef;return a.createElement(a.Fragment,null,a.createElement("li",{style:{border:"solid 1px lightgray",padding:" 0 4px",borderRadius:"4px",display:"flex",justifyContent:"space-around"}},a.createElement("span",null,"Item ",t),a.createElement(R,{placement:1===t?"left":"bottom",type:1===t&&this.state.itemOneClicked?"success":"info",options:{tooltipMaxWidth:150,container:n?n.current:null},title:this.getTitle()},a.createElement("button",{style:{marginRight:"20px"},onClick:this.clickCb},"Hover me"))),a.createElement("hr",null))}}]),t}(a.Component),$=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).ref=void 0,n.ref=a.createRef(),n.state={ref:n.ref},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({ref:this.ref})}},{key:"render",value:function(){var e=this;return a.createElement("ul",{ref:this.ref,style:{height:"200px",width:"40%",padding:0,overflow:"hidden",overflowY:"scroll"}},Object(M.a)(Array(13)).map(function(t,n){return a.createElement(U,{innerRef:e.state.ref,key:n,item:n})}))}}]),t}(a.Component),L=$;"undefined"!==typeof $&&$&&$===Object($)&&Object.isExtensible($)&&Object.defineProperty($,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TooltipDemo",filename:"src/atoms/tooltip/TooltipDemo.tsx"}}),n.d(t,"default",function(){return F});var Y={},X="wrapper";function F(e){var t,n,a,s=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)(X,Object.assign({},Y,c,{components:s,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tooltip"},"Tooltip"),Object(r.b)("p",null,"A tooltip component that gives an extra information about something when the user moves the mouse pointer over an element.\nThis tooltip component is dynamic: it adapts to the container size. It means that if you specify a ",Object(r.b)("inlineCode",{parentName:"p"},"right")," placement for the tooltip and that placement doesn't fit in the current container, then the tooltip placement will be changed automatically to the first possible placement. The alternative placements order is defined like following ",Object(r.b)("inlineCode",{parentName:"p"},"['top', 'left', 'right', 'bottom']"),". If the tooltip-ed element changes its position in the container (due to scroll or window resize for example) then the placement will be calculated again to fit the new display.\nAlso, if the text of the tooltip changes while its being displayed, then the placement will be calculated again to make sure that it still fits in the container with the new content."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(l.d,{of:R,mdxType:"Props"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"basic-usage"},"Basic usage"),Object(r.b)("p",null,"Examples below show usage of the tooltip with different titles and types. You can change the size of the window (by opening the dev console for example) to see how the tooltip of the last button adapts to the new container size (placement goes from right to top)."),Object(r.b)(l.c,{__position:1,__code:'<div style={{ display: \'flex\' }}>\n  <div>\n    <Tooltip\n      options={{ container: document.getElementById(\'list\') }}\n      title="Oups!"\n      type="error"\n    >\n      <button>Tooltip me to the default (top)</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="left"\n      options={{ container: document.getElementById(\'list\') }}\n      title="At vero eos et accusamus"\n      placement="right"\n    >\n      <button>Tooltip me to the right</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="bottom"\n      options={{ container: document.getElementById(\'list\') }}\n      title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"\n      placement="bottom"\n      options={{ container: document.getElementById(\'list\') }}\n      type="success"\n    >\n      <button>Tooltip me to the bottom with success</button>\n    </Tooltip>\n  </div>\n  <div>\n    <Tooltip\n      placement="right"\n      options={{ container: document.getElementById(\'list\') }}\n      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "\n      placement="right"\n      type="success"\n    >\n      <button>Tooltip me to the right with a long text</button>\n    </Tooltip>\n  </div>\n</div>',__scope:{props:this?this.props:c,Playground:l.c,Props:l.d,Tooltip:R,TooltipDemo:L},style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},mdxType:"Playground"},Object(r.b)("div",{style:{display:"flex"}},Object(r.b)("div",null,Object(r.b)(R,{options:{container:document.getElementById("list")},title:"Oups!",type:"error",mdxType:"Tooltip"},Object(r.b)("button",null,"Tooltip me to the default (top)"))),Object(r.b)("div",null,Object(r.b)(R,(t={placement:"left",options:{container:document.getElementById("list")},title:"At vero eos et accusamus"},Object(i.a)(t,"placement","right"),Object(i.a)(t,"mdxType","Tooltip"),t),Object(r.b)("button",null,"Tooltip me to the right"))),Object(r.b)("div",null,Object(r.b)(R,(n={placement:"bottom",options:{container:document.getElementById("list")},title:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},Object(i.a)(n,"placement","bottom"),Object(i.a)(n,"options",{container:document.getElementById("list")}),Object(i.a)(n,"type","success"),Object(i.a)(n,"mdxType","Tooltip"),n),Object(r.b)("button",null,"Tooltip me to the bottom with success"))),Object(r.b)("div",null,Object(r.b)(R,(a={placement:"right",options:{container:document.getElementById("list")},title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},Object(i.a)(a,"placement","right"),Object(i.a)(a,"type","success"),Object(i.a)(a,"mdxType","Tooltip"),a),Object(r.b)("button",null,"Tooltip me to the right with a long text"))))),Object(r.b)("h3",{id:"advanced-settings"},"Advanced settings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Tooltip can be configured with extra options in order to customize it with the desired behaviour. This is where you can make use of the ",Object(r.b)("inlineCode",{parentName:"li"},"options")," props."),Object(r.b)("li",{parentName:"ul"},'The Example below shows a list of items. A tooltip is displayed once we hover the "hover me" button of each item. The placement of tooltip is configured to ',Object(r.b)("inlineCode",{parentName:"li"},"bottom")," for all items except for the item number ",Object(r.b)("inlineCode",{parentName:"li"},"1")," that has a ",Object(r.b)("inlineCode",{parentName:"li"},"left")," placement. The code associated to this example is located in the ",Object(r.b)("inlineCode",{parentName:"li"},"TooltipDemo.tsx")," file."),Object(r.b)("li",{parentName:"ul"},"This example shows how to configure a custom ",Object(r.b)("inlineCode",{parentName:"li"},"container")," (the ",Object(r.b)("inlineCode",{parentName:"li"},"ul")," list in our case) if you need to handle the tooltip placement calculation in a specific zone. The placement will be then calculated in the range of that container instead of Window."),Object(r.b)("li",{parentName:"ul"},"Also you can configure a ",Object(r.b)("inlineCode",{parentName:"li"},"tooltipMaxWidth")," to make the max-width property smaller than default (300px) in order to adapt to the tooltip size to the new container."),Object(r.b)("li",{parentName:"ul"},"You will notice as you test the behaviour below that for the fourth item the tooltip will be displayed on top instead of specified placement ",Object(r.b)("inlineCode",{parentName:"li"},"bottom")," since the space left doesn't allow it to be visible. And if you scroll in the list, then the space will be sufficient for it to be displayed so the placement will be set back to bottom."),Object(r.b)("li",{parentName:"ul"},'You will notice as well that once you click on the "hover me" button of the item number ',Object(r.b)("inlineCode",{parentName:"li"},"1")," the tooltip title will be updated and its placement will be automatically calculated again to fit into the container with the new long text.")),Object(r.b)(l.c,{__position:2,__code:"<TooltipDemo />",__scope:{props:this?this.props:c,Playground:l.c,Props:l.d,Tooltip:R,TooltipDemo:L},style:{display:"flex",justifyContent:"center"},mdxType:"Playground"},Object(r.b)(L,{mdxType:"TooltipDemo"})))}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/tooltip/Tooltip.mdx"}}),F.isMDXComponent=!0},"./src/colors/index.ts":function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"e",function(){return m});var i=n("./src/design-tokens/colors.json"),o=i.d;"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$primary",filename:"src/colors/index.ts"}});var a=i.e;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$secondary",filename:"src/colors/index.ts"}});var r=i.f;"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$success",filename:"src/colors/index.ts"}});var l=i.a;"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$danger",filename:"src/colors/index.ts"}});var s=i.g;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$warning",filename:"src/colors/index.ts"}});var c=i.b;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$info",filename:"src/colors/index.ts"}});var u=i.c;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$light",filename:"src/colors/index.ts"}});var m="transparent";"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"$transparent",filename:"src/colors/index.ts"}})},"./src/design-tokens/colors.json":function(e){e.exports={d:{100:"#cce5ea",300:"#8cc4d0",500:"#007c97",600:"#005d71",700:"#003945",800:"#002e38",900:"#062931"},e:{300:"#ffc1a3",500:"#ff5412",700:"#b34015",900:"#823214"},f:{300:"#c1eac1",500:"#20b422",700:"#157917",900:"#105C11"},a:{300:"#ffe3dd",500:"#ff002d",700:"#8b0018",900:"#4E000D"},g:{300:"#fffac1",500:"#ffe900",700:"#595200",900:"#2E2A00"},b:{300:"#bdedff",500:"#00b8ff",700:"#007dad",900:"#00e042"},c:{100:"#ffffff",200:"#fafafa",300:"#f6f6f6",400:"#e7e7e7",500:"#d6d6d6",600:"#9b9b9b",700:"#474747",900:"#191919"}}},"./src/ions/text/StyledText.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s});var i=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function a(){var e=Object(i.a)(["\n  ","\n  font-weight: 500;\n  line-height: 1.125rem;\n  font-size: ",";\n  display: flex;\n"]);return a=function(){return e},e}function r(){var e=Object(i.a)(["\n  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;\n"]);return r=function(){return e},e}var l=Object(o.c)(r());"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontFamily",filename:"src/ions/text/StyledText.tsx"}});var s=o.d.span(a(),l,function(e){return e.large?"1.125rem":"1rem"});"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyledText",filename:"src/ions/text/StyledText.tsx"}})},"./src/utility/helpers.ts":function(e,t,n){"use strict";function i(e){throw new Error("Unexpected value. Should have been never.")}n.d(t,"a",function(){return i}),i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"assertUnreachable",filename:"src/utility/helpers.ts"}})}}]);
//# sourceMappingURL=src-atoms-tooltip-tooltip.fd9405642d9112aef636.js.map