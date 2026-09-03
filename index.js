// ============================================================
// Knomi 生态验证插件 Eco Demo
// 用途：验证 Knomi 插件生态闭环（发布 → 社区发现 → 安装 → 激活 → 更新）
// activate 中注册一个 Agent 工具（需 agent:tools 权限声明），
// ping() 返回带版本号的标记，用于证明"运行的是哪份代码"。
// ============================================================

module.exports = {
  id: 'eco-demo',
  name: 'Eco Demo',
  version: '0.1.0',
  async activate(ctx) {
    ctx.registerAgentTool(
      {
        name: 'eco_tool',
        description: 'Eco demo verification tool',
        parameters: { type: 'object', properties: {}, required: [] },
      },
      async () => 'ok'
    )
  },
  async deactivate() {},
  ping() { return 'pong 0.1.0' },
}
