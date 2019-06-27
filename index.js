"use strict";
var feedback = {
    install(Vue) {
        /**
         * v-feedback
         *      .opacity = 0.75
         *      .scale = 0.8
         * 
         * 实现方法
         *      event
         *      active
         * 变化类型
         *      style
         *      css
         * 
         * 使用 
         * v-feedback.scale="0.8"
         * v-feedback.opacity="0.8"
         * 
         */
        Vue.directive('feedback', {
            inserted(el, binding, vnode) {
                // touchstart
                const idClass = 'feedback' + Date.now() + Math.floor(Math.random() * 100000000);
                const style = document.createElement('style');
                let ctn;
                if (binding.modifiers.opacity) {
                    let opacity = 0.8;
                    if (binding.value > 0 && binding.value < 1) {
                        opacity = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{opacity:' + opacity + ';}');
                }
                if (binding.modifiers.scale) {
                    let scale = 0.75;
                    if (binding.value > 0 && binding.value < 1) {
                        scale = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{-webkit-transform-origin: center center;-webkit-transform:scale(' + scale + ')}')
                }
                if (binding.modifiers.translate) {
                    let translate = 1;
                    if (binding.value > -5 && binding.value < 5) {
                        translate = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{transform: translate3d(' + translate + 'px,' + translate + 'px,0) }');
                }
                if (!binding.modifiers.opacity && !binding.modifiers.scale && !binding.modifiers.translate) {
                    let opacity = 0.8;
                    if (binding.value > 0 && binding.value < 1) {
                        opacity = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{opacity:' + opacity + '}');
                }
                style.appendChild(ctn);
                el.parentNode.insertBefore(style, el);
                el.addEventListener('touchstart', (e) => {
                    if (!el.classList.contains(idClass)) {
                        el.classList.add(idClass);
                    }

                }, false);
                el.addEventListener('touchend', () => {
                    if (el.classList.contains(idClass)) {
                        el.classList.remove(idClass);
                    }
                }, false);


            },
        });
    }
}

module.exports = feedback
