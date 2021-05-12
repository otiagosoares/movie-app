module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
    emitOnErrors: true,
  }
}