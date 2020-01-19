"use strict";
const feedback = {
    install(Vue) {
        Vue.directive('feedback', {
            inserted(el, binding, vnode) {
                // touchstart
                const idClass = 'feedback' + Date.now() + Math.floor(Math.random() * 100000000);
                const style = document.createElement('style');
                let ctn;

                // opacity属性
                if (binding.modifiers.opacity) {
                    let opacity = 0.8;
                    if (binding.value > 0 && binding.value < 1) {
                        opacity = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{opacity:' + opacity + ';}');
                }

                // 缩放属性
                if (binding.modifiers.scale) {
                    let scale = 0.75;
                    if (binding.value > 0 && binding.value < 1) {
                        scale = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{-webkit-transform-origin: center center;-webkit-transform:scale(' + scale + ')}')
                }

                // 平移变换属性
                if (binding.modifiers.translate) {
                    let translate = 1;
                    if (binding.value > -5 && binding.value < 5) {
                        translate = binding.value;
                    }
                    ctn = document.createTextNode('.' + idClass + '{transform: translate3d(' + translate + 'px,' + translate + 'px,0) }');
                }

                // 如果没有三者之一，默认使用opacity属性
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
                el.addEventListener('touchcancel', () => {
                    if (el.classList.contains(idClass)) {
                        el.classList.remove(idClass);
                    }
                }, false);


            },
        });
    }
}

module.exports = feedback
