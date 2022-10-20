System.register("chunks:///_virtual/Controller.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ForceMovement.ts","./VelocityMovements.ts","./ImpulseMovements.ts","./PositionMovement.ts","./TranslationMovements.ts"],(function(e){"use strict";var t,o,n,s,i,c,r,m,v,a,u,p;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,s=e.input,i=e.Input,c=e.KeyCode,r=e.Component},function(e){m=e.ForceMovement},function(e){v=e.VelocityMovements},function(e){a=e.ImpulseMovements},function(e){u=e.PositionMovements},function(e){p=e.TranslationMovements}],execute:function(){var l;o._RF.push({},"30c024GZMVFPIugucpORF8n","Controller",void 0);var h=n.ccclass;n.property,e("Controller",h("Controller")(l=function(e){function o(){for(var t,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).movements=void 0,t}t(o,e);var n=o.prototype;return n.onLoad=function(){s.on(i.EventType.KEY_DOWN,this.onKeyDown,this),s.on(i.EventType.KEY_UP,this.onKeyUp,this),this.movements=this.getComponent(m)||this.getComponent(v)||this.getComponent(u)||this.getComponent(p)||this.getComponent(a)},n.onKeyDown=function(e){switch(e.keyCode){case c.ARROW_LEFT:this.movements.moveLeft();break;case c.ARROW_RIGHT:this.movements.moveRight();break;case c.ARROW_UP:this.movements.moveUp();break;case c.ARROW_DOWN:this.movements.moveDown()}},n.onKeyUp=function(e){switch(e.keyCode){case c.ARROW_LEFT:case c.ARROW_RIGHT:case c.ARROW_UP:case c.ARROW_DOWN:this.movements.stopMoving()}},o}(r))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/Debug.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,n,o,a,s,u,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.PhysicsSystem2D,u=e.EPhysics2DDrawFlags,c=e.Component}],execute:function(){var l,p,g;o._RF.push({},"ef667xvGSZFDKpi6vMuHUnf","Debug",void 0);var b=a.ccclass,f=a.property;e("Debug",b("Debug")((g=t((p=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(t,"debug",g,n(t)),t}return r(t,e),t.prototype.onLoad=function(){this.debug&&(s.instance.debugDrawFlags=u.Aabb|u.Pair|u.CenterOfMass|u.Joint|u.Shape)},t}(c)).prototype,"debug",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=p))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/ForceMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Globals.ts"],(function(o){"use strict";var t,e,n,i,s,c,r,p;return{setters:[function(o){t=o.inheritsLoose,e=o.createClass},function(o){n=o.cclegacy,i=o._decorator,s=o.RigidBody2D,c=o.Vec2,r=o.Component},function(o){p=o.Globals}],execute:function(){var l;n._RF.push({},"111adnZarlGgqyOCUdmnMkM","ForceMovement",void 0);var g=i.ccclass;i.property,o("ForceMovement",g("ForceMovement")(l=function(o){function n(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(t=o.call.apply(o,[this].concat(n))||this).rigidBody=void 0,t.isMovingLeft=!1,t.isMovingRight=!1,t}t(n,o);var i=n.prototype;return i.start=function(){console.log("ForceMovement start"),this.rigidBody=this.getComponent(s)},i.moveLeft=function(){this.isMovingLeft=!0,this.updateInLoop||this.applyForceLeft(100)},i.moveRight=function(){this.isMovingRight=!0,this.updateInLoop||this.applyForceRight(100)},i.stopMoving=function(){this.isMovingLeft=!1,this.isMovingRight=!1,console.log("stopMoving")},i.moveUp=function(){console.log("moveUp")},i.moveDown=function(){console.log("moveDown")},i.applyForceRight=function(o){console.log("moveRight"),this.rigidBody.applyForceToCenter(new c(o,0),!0)},i.applyForceLeft=function(o){console.log("moveLeft"),this.rigidBody.applyForceToCenter(new c(-o,0),!0)},i.update=function(o){this.updateInLoop&&(this.isMovingLeft&&this.applyForceLeft(10),this.isMovingRight&&this.applyForceRight(10))},e(n,[{key:"updateInLoop",get:function(){return p.updateInLoop}}]),n}(r))||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/Globals.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var o,t,n,r,c;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,n=e._decorator,r=e.director,c=e.Component}],execute:function(){var s,a;t._RF.push({},"312b1/lmJVHPpnNKgp9z/1z","Globals",void 0);var i=n.ccclass;n.property,e("Globals",i("Globals")(((a=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.chaneUpdateInLoop=function(e){t.updateInLoop=e.isChecked},n.restartScene=function(){r.loadScene("Main")},t}(c)).updateInLoop=!1,s=a))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/ImpulseMovements.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Globals.ts"],(function(o){"use strict";var t,e,i,n,s,p,l,u;return{setters:[function(o){t=o.inheritsLoose,e=o.createClass},function(o){i=o.cclegacy,n=o._decorator,s=o.RigidBody2D,p=o.Vec2,l=o.Component},function(o){u=o.Globals}],execute:function(){var c;i._RF.push({},"bcb36MyqFVC7JllJf8ES6OM","ImpulseMovements",void 0);var r=n.ccclass;n.property,o("ImpulseMovements",r("ImpulseMovements")(c=function(o){function i(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return(t=o.call.apply(o,[this].concat(i))||this).rigidBody=void 0,t.isMovingLeft=!1,t.isMovingRight=!1,t}t(i,o);var n=i.prototype;return n.start=function(){console.log("ImpulseMovements start"),this.rigidBody=this.getComponent(s)},n.moveLeft=function(){this.isMovingLeft=!0,this.updateInLoop||this.applyImpulseLeft(5)},n.moveRight=function(){this.isMovingRight=!0,this.updateInLoop||this.applyImpulseRight(5)},n.stopMoving=function(){this.isMovingLeft=!1,this.isMovingRight=!1,console.log("stopMoving")},n.moveUp=function(){console.log("moveUp")},n.moveDown=function(){console.log("moveDown")},n.applyImpulseRight=function(o){console.log("moveRight"),this.rigidBody.applyLinearImpulseToCenter(new p(o,0),!0)},n.applyImpulseLeft=function(o){console.log("moveLeft"),this.rigidBody.applyLinearImpulseToCenter(new p(-o,0),!0)},n.update=function(o){this.updateInLoop&&(this.isMovingLeft&&this.applyImpulseLeft(.5),this.isMovingRight&&this.applyImpulseRight(.5))},e(i,[{key:"updateInLoop",get:function(){return u.updateInLoop}}]),i}(l))||c);i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Debug.ts","./Controller.ts","./ForceMovement.ts","./Globals.ts","./ImpulseMovements.ts","./Movements.ts","./PositionMovement.ts","./TranslationMovements.ts","./VelocityMovements.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Movements.ts",["cc"],(function(){"use strict";var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"c8b6dnzw6ZDKIk8YyLj6Rc2","Movements",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/PositionMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Globals.ts"],(function(o){"use strict";var t,i,n,e,s,c,p,r;return{setters:[function(o){t=o.inheritsLoose,i=o.createClass},function(o){n=o.cclegacy,e=o._decorator,s=o.RigidBody2D,c=o.Vec3,p=o.Component},function(o){r=o.Globals}],execute:function(){var a;n._RF.push({},"29e0erxCOFJFII0vQX0fF7+","PositionMovement",void 0);var g=e.ccclass;e.property,o("PositionMovements",g("PositionMovements")(a=function(o){function n(){for(var t,i=arguments.length,n=new Array(i),e=0;e<i;e++)n[e]=arguments[e];return(t=o.call.apply(o,[this].concat(n))||this).rigidBody=void 0,t.isMovingLeft=!1,t.isMovingRight=!1,t}t(n,o);var e=n.prototype;return e.start=function(){console.log("PositionMovements start"),this.rigidBody=this.getComponent(s)},e.moveLeft=function(){this.isMovingLeft=!0,this.updateInLoop||this.applyPositionLeft(10)},e.moveRight=function(){this.isMovingRight=!0,this.updateInLoop||this.applyPositionRight(10)},e.stopMoving=function(){this.isMovingLeft=!1,this.isMovingRight=!1},e.moveUp=function(){console.log("moveUp")},e.moveDown=function(){console.log("moveDown")},e.applyPositionRight=function(o){console.log("moveRight");var t=this.node.getPosition();this.node.setPosition(new c(t.x+o,t.y))},e.applyPositionLeft=function(o){console.log("moveLeft");var t=this.node.getPosition();this.node.setPosition(new c(t.x-o,t.y))},e.update=function(o){this.updateInLoop&&(this.isMovingLeft&&this.applyPositionLeft(100*o),this.isMovingRight&&this.applyPositionRight(100*o))},i(n,[{key:"updateInLoop",get:function(){return r.updateInLoop}}]),n}(p))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/TranslationMovements.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Globals.ts"],(function(o){"use strict";var t,i,n,e,s,r,a,l,c,p,u,h;return{setters:[function(o){t=o.applyDecoratedDescriptor,i=o.inheritsLoose,n=o.initializerDefineProperty,e=o.assertThisInitialized,s=o.createClass},function(o){r=o.cclegacy,a=o._decorator,l=o.RigidBody2D,c=o.Vec3,p=o.NodeSpace,u=o.Component},function(o){h=o.Globals}],execute:function(){var g,f,v;r._RF.push({},"67e6flhUG9CIIcc6ul2cogk","TranslationMovements",void 0);var d=a.ccclass,y=a.property;o("TranslationMovements",d("TranslationMovements")((v=t((f=function(o){function t(){for(var t,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=o.call.apply(o,[this].concat(s))||this).rigidBody=void 0,t.isMovingLeft=!1,t.isMovingRight=!1,n(t,"worldSpace",v,e(t)),t}i(t,o);var r=t.prototype;return r.start=function(){console.log("TranslationMovements start"),this.rigidBody=this.getComponent(l)},r.moveLeft=function(){this.isMovingLeft=!0,this.updateInLoop||this.applyPositionLeft(10)},r.moveRight=function(){this.isMovingRight=!0,this.updateInLoop||this.applyPositionRight(10)},r.stopMoving=function(){this.isMovingLeft=!1,this.isMovingRight=!1},r.moveUp=function(){console.log("moveUp")},r.moveDown=function(){console.log("moveDown")},r.applyPositionRight=function(o){console.log("moveRight"),this.node.translate(new c(o,0),this.worldPosition)},r.applyPositionLeft=function(o){console.log("moveLeft"),this.node.translate(new c(-o,0),this.worldPosition)},r.update=function(o){this.updateInLoop&&(this.isMovingLeft&&this.applyPositionLeft(100*o),this.isMovingRight&&this.applyPositionRight(100*o))},s(t,[{key:"updateInLoop",get:function(){return h.updateInLoop}},{key:"worldPosition",get:function(){return this.worldSpace?p.WORLD:p.LOCAL}}]),t}(u)).prototype,"worldSpace",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=f))||g);r._RF.pop()}}}));

System.register("chunks:///_virtual/VelocityMovements.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Globals.ts"],(function(i){"use strict";var o,t,e,n,s,c,l,r;return{setters:[function(i){o=i.inheritsLoose,t=i.createClass},function(i){e=i.cclegacy,n=i._decorator,s=i.RigidBody2D,c=i.Vec2,l=i.Component},function(i){r=i.Globals}],execute:function(){var a;e._RF.push({},"31d8bRM4MxASLj84qJjN2PI","VelocityMovements",void 0);var y=n.ccclass;n.property,i("VelocityMovements",y("VelocityMovements")(a=function(i){function e(){for(var o,t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(o=i.call.apply(i,[this].concat(e))||this).rigidBody=void 0,o.isMovingLeft=!1,o.isMovingRight=!1,o}o(e,i);var n=e.prototype;return n.start=function(){console.log("VelocityMovements start"),this.rigidBody=this.getComponent(s)},n.moveLeft=function(){this.isMovingLeft=!0,this.updateInLoop||this.applyLinearVelocityLeft(10)},n.moveRight=function(){this.isMovingRight=!0,this.updateInLoop||this.applyLinearVelocityRight(10)},n.stopMoving=function(){this.isMovingLeft=!1,this.isMovingRight=!1,this.updateInLoop||this.removeLinearVelocity()},n.moveUp=function(){console.log("moveUp")},n.moveDown=function(){console.log("moveDown")},n.applyLinearVelocityRight=function(i){console.log("moveRight");var o=this.rigidBody.linearVelocity;this.rigidBody.linearVelocity=new c(o.x+i,o.y)},n.applyLinearVelocityLeft=function(i){console.log("moveLeft");var o=this.rigidBody.linearVelocity;this.rigidBody.linearVelocity=new c(o.x-i,o.y)},n.removeLinearVelocity=function(){console.log("stopMoving");var i=this.rigidBody.linearVelocity;this.rigidBody.linearVelocity=new c(0,i.y)},n.update=function(i){this.updateInLoop&&(this.isMovingLeft&&this.applyLinearVelocityLeft(10*i),this.isMovingRight&&this.applyLinearVelocityRight(10*i))},t(e,[{key:"updateInLoop",get:function(){return r.updateInLoop}}]),e}(l))||a);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});