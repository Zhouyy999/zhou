import { computed, defineComponent } from 'vue'
import { ElButton, ElTooltip } from 'element-plus'
import type { ButtonProps } from 'element-plus'
import { zButtonProps } from './button'
import type { ZButtonBasicBtnProps, ZButtonTipWarpPropType } from './button'
import ZIcon from '../icon'

export default defineComponent({
  name: 'ZButton',
  inheritAttrs: false,
  props: zButtonProps,
  setup(props, { slots, attrs }) {
    // 基础的Button组件
    function CompBasicButton(props: ZButtonBasicBtnProps, { attrs }: { attrs: ButtonProps }): JSX.Element {
      return (
        <ElButton {...attrs}>
          {{
            ...slots,
            default() {
              return [props.icon && <ZIcon name={props.icon}></ZIcon>, <span>{slots?.default?.() || ''}</span>]
            }
          }}
        </ElButton>
      )
    }
    CompBasicButton.props = ['icon']

    const btnProps = computed(() => ({
      icon: props.icon,
      ...attrs
    }))
    const tipProps = computed(() => ({
      placement: 'top',
      content: typeof props.tips === 'string' ? props.tips : '',
      ...(typeof props.tips === 'object' ? props.tips : {})
    }))

    return () =>
      !props.tips ? (
        <CompBasicButton {...btnProps.value} />
      ) : (
        <ElTooltip {...(tipProps.value as ZButtonTipWarpPropType)}>
          <CompBasicButton {...btnProps.value} />
        </ElTooltip>
      )
  }
})
