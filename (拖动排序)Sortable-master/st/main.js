/**
 * Created by 123 on 2017/5/24.
 */
(function () {
	'use strict';

	var byId = function (id) { return document.getElementById(id); },

		loadScripts = function (desc, callback) {
			var deps = [], key, idx = 0;

			for (key in desc) {
				deps.push(key);
			}

			(function _next() {
				var pid,
					name = deps[idx],
					script = document.createElement('script');

				script.type = 'text/javascript';
				script.src = desc[deps[idx]];

				pid = setInterval(function () {
					if (window[name]) {
						clearTimeout(pid);

						deps[idx++] = window[name];

						if (deps[idx]) {
							_next();
						} else {
							callback.apply(null, deps);
						}
					}
				}, 30);

				document.getElementsByTagName('head')[0].appendChild(script);
			})()
		},

		console = window.console;

	if (!console.log) {
		console.log = function () {
			alert([].join.apply(arguments, ' '));
		};
	}

	Sortable.create(byId('bar'), {
		group: "words",
		animation: 150,
		onAdd: function (evt) {   //拖拽时候添加有新的节点的时候发生该事件
			// console.log('onAdd.foo:', [evt.item, evt.from]);
		},

		onUpdate: function (evt) {  //拖拽更新节点位置发生该事件
			// console.log('onUpdate.foo:', [evt.item, evt.from]);
		},

		onRemove: function (evt) {   //删除拖拽节点的时候促发该事件
			// console.log('onRemove.foo:', [evt.item, evt.from]);
		},

		onStart:function (evt) {  //开始拖拽出发该函数
			// console.log('onStart.foo:', [evt.item, evt.from]);
		},
		onSort:function (evt) {  //发生排序发生该事件
			// console.log('onSort.foo:', [evt.item, evt.from]);
		},
		onEnd: function (evt) { //拖拽完毕之后发生该事件
			// console.log('onEnd.foo:', [evt.item, evt.from]);
			var id_arr = '';
			for (var i = 0, len = evt.from.children.length; i < len; i++) {
				id_arr += ',' + evt.from.children[i].getAttribute('drag-id');
			}
			id_arr = id_arr.substr(1);
			//然后请求后台ajax 这样就完成了拖拽排序
			console.log(id_arr);
		}
	});

})();

// Background
document.addEventListener("DOMContentLoaded", function () {
	function setNoiseBackground(el, width, height, opacity) {
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");

		canvas.width = width;
		canvas.height = height;

		for (var i = 0; i < width; i++) {
			for (var j = 0; j < height; j++) {
				var val = Math.floor(Math.random() * 255);
				context.fillStyle = "rgba(" + val + "," + val + "," + val + "," + opacity + ")";
				context.fillRect(i, j, 1, 1);
			}
		}

		el.style.background = "url(" + canvas.toDataURL("image/png") + ")";
	}

	setNoiseBackground(document.getElementsByTagName('body')[0], 50, 50, 0.02);
}, false);
