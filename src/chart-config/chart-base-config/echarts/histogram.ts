import { fontWeight } from "chart-config/shared"
import { BaseConfigType } from "types/chart"

  const configType: BaseConfigType[] = [
    {
      title: '标题',
      children: [
        {
          text: '是否显示',
          fields: 'title-show',
          component: 'Switch',
          types: {
            defaultChecked: true
          }
        },
        {
          text: '标题',
          fields: 'title-text',
          component: 'Input',
          types: {
            defaultValue: '主标题'
          }
        },
        {
          text: '子标题',
          fields: 'title-subtext',
          component: 'Input',
          types: {
            defaultValue: '子标题'
          }
        },
        {
          text: '字体颜色',
          fields: 'title-textStyle-color',
          component: 'ColorPicker',
          types: {
            defaultValue: '#ffffff'
          }
        },
        {
          text: '字体大小',
          fields: 'title-textStyle-fontSize',
          component: 'InputNumber',
          types: {
            defaultValue: 26
          }
        },
        {
          text: '字体粗细',
          fields: 'title-textStyle-fontWeight',
          component: 'Select',
          types: {
            options: fontWeight,
            defaultValue: '500'
          }
        }
      ]
    },
    {
      title: 'X轴',
      children: [
        {
          text: '是否显示',
          fields: 'xAxis-show',
          component: 'Switch',
          types: {
            defaultChecked: true
          }
        },
        {
          text: '文字颜色',
          fields: 'xAxis-axisLabel-color',
          component: 'ColorPicker',
          types: {
            defaultValue: '#ffffff'
          }
        },
        {
          text: '字体大小',
          fields: 'xAxis-axisLabel-fontSize',
          component: 'InputNumber',
          types: {
            defaultValue: 18
          }
        },
        {
          text: '字体粗细',
          fields: 'xAxis-axisLabel-fontWeight',
          component: 'Select',
          types: {
            options: fontWeight,
            defaultValue: '500'
          }
        },
        {
          text: '线条颜色',
          fields: 'xAxis-axisLine-lineStyle-color',
          component: 'ColorPicker',
          types: {
            defaultValue: '#666666'
          }
        }
      ]
    },
    {
      title: 'Y轴',
      children: [
        {
          text: '文字颜色',
          fields: 'yAxis-axisLabel-color',
          component: 'ColorPicker',
          types: {
            defaultValue: '#ffffff'
          }
        },
        {
          text: '字体大小',
          fields: 'yAxis-axisLabel-fontSize',
          component: 'InputNumber',
          types: {
            defaultValue: 18
          }
        },
        {
          text: '字体粗细',
          fields: 'yAxis-axisLabel-fontWeight',
          component: 'Select',
          types: {
            options: fontWeight,
            defaultValue: '500'
          }
        }
      ]
    }
  ]
  
  
  export default [
    {
      id: '0-1',
      configType
    },
    {
      id: '0-2',
      configType
    }
  ]
  