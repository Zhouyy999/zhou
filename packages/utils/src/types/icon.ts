import { PropType } from 'vue'
import type { Component } from 'vue'

export const iconPropType = [String, Object, Function] as PropType<string | Component>
