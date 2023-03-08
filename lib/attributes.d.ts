import type { LiteralUnion } from './utility-types'

export type SystemType = LiteralUnion<'ios' | 'android' | 'win' | 'wp'>

export type UIMode = LiteralUnion<'pad' | 'phone' | 'tv' | 'car' | 'desk' | 'watch'>

export type Platform = LiteralUnion<'app' | 'web' | 'mp'>

export type ConnectionType = LiteralUnion<
  'unknown' | 'ethernet' | 'wifi' | '2g' | '3g' | '4g' | 'none'
>

export interface SafeArea {
  /**
   * 安全区域上边缘
   *
   * @description 对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为 0 (iPhone X 竖屏时全屏状态下也为44)
   */
  top: number
  /**
   * 安全区域左边缘
   *
   * @description 通常为0（iPhone X横屏时为44）
   */
  left: number
  /**
   * 安全区域右边缘
   *
   * @description 通常为0（iPhone X横屏时为44）
   */
  right: number
  /**
   * 安全区域下边缘
   *
   * @description 通常为0（iPhone X竖屏时为34，横屏时为21）
   */
  bottom: number
}

export interface APIAttributes {
  /**
   * 应用的 ID
   */
  appId: string

  /**
   * 应用在桌面显示名称
   */
  appName: string

  /**
   * 应用版本号
   */
  appVersion: string

  /**
   * 系统类型
   */
  systemType: SystemType

  /**
   * 手机品台的系统版本
   */
  systemVersion: string

  /**
   * 引擎版本信息
   */
  version: string

  /**
   * 系统语言
   */
  language: string

  /**
   * 设备唯一标识
   */
  deviceId: string

  /**
   * iOS中用于推送的 DeviceToken
   */
  deviceToken: string

  /**
   * 设备型号
   */
  deviceModel: string

  /**
   * 设备名称
   */
  deviceName: string

  /**
   * 设备类型
   */
  uiMode: UIMode

  /**
   * 运行平台
   */
  platform: string

  /**
   * 运营商名称
   */
  operator: string

  /**
   * 网络连接类型
   */
  connectionType: string

  /**
   * 是否支持全屏
   *
   * @description 仅支持 iOS
   */
  fullScreen: boolean

  /**
   * 屏幕分辨率宽
   */
  screenWidth: number

  /**
   * 屏幕分辨率高
   */
  screenHeight: number

  /**
   * 当前 window 名称
   */
  winName: string

  /**
   * window 宽度
   */
  winWidth: number

  /**
   * window 高度
   */
  winHeight: number

  /**
   * frame 名称
   */
  frameName: string

  /**
   * frame 宽度
   */
  frameWidth: number

  /**
   * frame 高度
   */
  frameHeight: number

  /**
   * 页面不被其它内容（如状态栏）遮住的区域
   *
   * @since 1.2.33
   */
  safeArea: SafeArea

  /**
   * 页面参数
   */
  pageParam: any

  /**
   * widget 参数
   */
  wgtParam: any

  /**
   * 应用被第三方应用打开时，传递过来的参数
   */
  appParam: any

  /**
   * 应用状态栏是否支持沉浸式效果
   */
  statusBarAppearance: boolean
}
