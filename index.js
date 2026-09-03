module.exports = {
  id: 'eco-demo',
  name: 'Eco Demo',
  version: '0.1.5',
  async activate(ctx) { ctx.registerAgentTool(
      { name: 'eco_tool', description: 'Eco demo verification tool', parameters: { type: 'object', properties: {}, required: [] } },
      async () => 'ok'
    ) },
  async deactivate() {},
  ping() { return 'pong 0.1.5' },
}
