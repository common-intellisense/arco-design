import { getComponentMap, getPropsMap } from './mapping'

export function arcoDesign2() {
  return {
    uiName: '@arco-design/web-react2',
    map: getPropsMap(),
    lib: '@arco-design/web-react',
  }
}

export function arcoDesign2Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@arco-design/web-react',
    isReact: true,
  }
}
