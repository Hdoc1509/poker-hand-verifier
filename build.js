const { build } = require('esbuild');

const options = {
  entryPoints: ['src/index.ts'],
  bundle: true,
};

build({
  ...options,
  format: 'cjs',
  outdir: 'cjs',
  target: 'node14',
});

build({
  ...options,
  format: 'esm',
  outdir: 'esm',
  target: 'es6',
  supported: {
    arrow: false,
  },
});
