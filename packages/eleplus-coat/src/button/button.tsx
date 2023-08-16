import type { PropType } from "vue";
import { computed, defineComponent } from 'vue'
import { ElButton } from "element-plus"

export default defineComponent({
  name: 'ZButton',
  props: {
    size: { 
      type: String as PropType<'default'|'large'>,
      default: 'default' 
    }
  },
  setup(props, { slots }) {
    const prefixCls = 'custom-btn'
    const cls = computed(()=>({
      [prefixCls]: true,
      [`${prefixCls}-${props.size}`]: props.size !== 'default'

    }))
    
    return () => <ElButton class={cls.value}>{slots.default && slots.default()}</ElButton>
  }
})
