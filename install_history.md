Rq: order for a new install:


10/12/2017:
1)
create react app:
  create-react-app orders_view
  ls orders_view
  npm install --save redux
  npm install --save react-redux
  npm install --save material-ui

7)
add eslintrc.json
  npm install
  update atom package
  restart atom

2)
install propTypes
  npm i -S prop-types

reinstall eslint (it was installed written depend in the package.json but removed)
4)  
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )

5)
npm install
  result show:"npm WARN eslint-config-react-app@2.0.1 requires a peer of eslint-plugin-jsx-a11y@^5.1.1 but none is installed. You must install peer dependencies yourself."

6) if necessary:
install eslint plugin jsx ally
  npm i -S eslint-plugin-jsx-a11y@^5.1.1

3)
npm i -S react-test-renderer
