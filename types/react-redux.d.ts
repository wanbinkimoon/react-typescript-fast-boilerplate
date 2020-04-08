import 'react-redux';

declare module 'react-redux' {
  // Add removed inferrable type to support connect as decorator

  // overload connect interface to return built-in ClassDecorator
  // https://github.com/reactjs/react-redux/pull/541#issuecomment-269197189

}
