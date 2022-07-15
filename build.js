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

build({
  ...options,
  format: 'iife',
  outfile: 'dist/poker-hand-verifier.min.js',
  minify: true,
  target: 'es6',
  globalName: 'verificateHand',
  supported: {
    arrow: false,
  }
});
