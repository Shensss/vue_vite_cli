import { lifeCycle, render } from './life-cycle'

/**
 * @name 导出微应用生命周期
 */
const {
  bootstrap,
  mount,
  unmount
} = lifeCycle()
export { bootstrap, mount, unmount }

/**
 * @name 单独环境直接实例化vue
 */
const __qiankun__ = window.__POWERED_BY_QIANKUN__
__qiankun__ || render()
