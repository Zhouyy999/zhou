import { computed, defineComponent, h } from 'vue'
import { ElIcon } from 'element-plus'
import { zIconProps } from './icon'
import * as elIconsVue from '@element-plus/icons-vue'

export default defineComponent({
  name: 'ZIcon',
  props: zIconProps,
  setup(props) {
    const icon = computed(() => {
      const IconComponent = (elIconsVue as Record<string, any>)[props.name as string]
      return IconComponent ? <IconComponent /> : <i class={['iconfont', props.name]}></i>
    })

    return () => <ElIcon>{typeof props.name === 'string' ? icon.value : h(props.name)}</ElIcon>
  }
})
