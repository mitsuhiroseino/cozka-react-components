// ビルド用の設定
/** @type {import('@babel/core').TransformOptions} */
export default {
  presets: [
    [
      // 標準のpreset
      '@babel/preset-env',
      // 一部の設定を変更する
      {
        // esmを別の形式に変換しない
        modules: false,
        // Browserslistのデフォルト設定(> 0.5%, last 2 versions, Firefox ESR, not dead)で変換する
        targets: { browsers: 'defaults' },
      },
    ],
    // [
    //   '@emotion/babel-preset-css-prop',
    //   {
    //     runtime: 'automatic',
    //     importSource: '@emotion/react',
    //   },
    // ],
    // typescript用のpreset
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    // babelのポリフィルを個々のソースコードに展開しない
    '@babel/plugin-transform-runtime',
  ],
  comments: false,
};
