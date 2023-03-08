import type { APICloudAPI } from './lib/api'

declare global {
  interface Window {
    /**
     * @see https://docs.apicloud.com/Client-API/api
     */
    api: APICloudAPI

    /**
     * api 对象准备完毕后触发
     *
     * @description 在每个 Window 或 Frame 的HTML代码中都需要监听此事件
     */
    apiready: () => void
  }
}
