module.exports = {
  id: 'eco-demo',
  name: 'Eco Demo',
  version: '0.3.0',
  async activate(ctx) { throw new Error('broken version') },
  async deactivate() {},
  ping() { return 'pong 0.3.0' },
}
