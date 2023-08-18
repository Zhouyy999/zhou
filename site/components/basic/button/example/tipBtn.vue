<template>
  <z-button type="primary" tips="一个简单的提示">简单提示</z-button>
  <z-button type="warning" icon="Plus" :tips="{ content: '根据ElTooltipProps来进行传参', placement: 'bottom' }">自定义提示</z-button>
</template>
