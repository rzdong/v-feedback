# v-feedback
vue指令

# 安装
npm install feedback-vue --save

# 使用

```
import Vue from 'vue';
import feedback from 'feedback-vue';
Vue.use(feedback);

v-feedback.scale="0.8";
v-feedback.opacity="0.8";
```

# API
```
可选修饰符 scale  默认值  0.75
可选修饰符 opacity  默认值  0.8
```

# 备注
```
<p v-feedback>默认修饰符 opacity </p>
```

# 效果
按下指令所在的元素，该元素透明度降低或者缩小尺寸, 抬起后恢复

