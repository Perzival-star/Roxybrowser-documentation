import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '快速开始 ⚡️',
      collapsed: false,
      items: [
        { text: '快速入门', link: '/zh/quick/quick-start'},
        { text: '个人设置', link: '/zh/quick/personal-settings' },
        { text: '联系在线支持', link: '/zh/quick/online-support' },
      ]
    },
    {
      text: '功能文档 🛠️',
      collapsed: false,
      items: [
        { text: '窗口配置', link: '/zh/features/profile-configuration'},
        { text: '项目管理', link: '/zh/features/project-management'},
        { text: '平台账号', link: '/zh/features/accounts'},
        { text: '代理资源', link: '/zh/features/proxies'},
        { text: '扩展中心', link: '/zh/features/extensions'},
        { text: '工作空间', link: '/zh/features/workspace'},
        { text: '窗口同步', link: '/zh/features/synchronizer'},
        { text: '窗口投送', link: '/zh/features/transfer-profile' },
        { text: '名词解释', link: '/zh/features/glossary'},
      ]
    },
    {
      text: 'API文档 🔌',
      collapsed: false,
      items: [
        { text: 'API说明', link: '/zh/api-documentation/api-reference'},
        { text: '接口文档', link: '/zh/api-documentation/api-endpoint'},
      ]
    },
    {
      text: '常见问题 🧭',
      items: [
        { text: '注册问题解答', link: '/zh/faqs/registration'},
        { text: '代理问题解答', link: '/zh/faqs/proxy-questions'},
        { text: '启动窗口问题解答', link: '/zh/faqs/startup-error'},
      ],
      collapsed: false
    },
    {
      text: '视频教程 💻',
      items: [

      ],
      collapsed: false
    },{
      text: '模板下载 🖨️',
      items: [
        { text: '模板下载', link: '/zh/templates/templates-download'}
      ],
      collapsed: false
    }
  ]
}