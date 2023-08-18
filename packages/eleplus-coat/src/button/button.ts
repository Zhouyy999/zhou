import { ExtractPropTypes, PropType } from 'vue'
import { iconPropType } from '@zhou/utils'
import type { ElTooltipProps } from 'element-plus'

const tipsPropType = [String, Object] as PropType<string | ElTooltipProps>

export const zButtonProps = {
  // 自有实现Button的icon图标，不使用原始ElButton.icon
  // 原因：原始只能是组件传入，有些时候懒得还要在父组件中传入，想要直接穿个字符串就搞定。为了兼容之前写的，依然可以传入组件类型
  // 等同于ZIcon组件中的name字段
  icon: {
    type: iconPropType,
    default: ''
  },
  // 鼠标移到按钮上面时进行的提示 (通过外层包裹一层tooltip实现)
  tips: {
    //  type === string，直接采用传入值作为提示
    //  type === object，等同于传入ElementPlus.Eltooltip组件的props
    type: tipsPropType,
    defalult: ''
  }
}

export type ZButtonProps = ExtractPropTypes<typeof zButtonProps>
export type ZButtonBasicBtnProps = ExtractPropTypes<{ icon: typeof iconPropType }>
export type ZButtonTipWarpPropType = ElTooltipProps
