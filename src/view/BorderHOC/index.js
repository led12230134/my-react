import React, {Component} from 'react';
// const BorderHOC = WrappedComponent => class extends Component {
//   render() {
//     return <div style={{border:'solid 1px red'}}>
//       <WrappedComponent />
//     </div>
//   }
// }
const BorderHOC = WrappedComponent => function() {
  return <div style={{border:'solid 1px red'}}>
    <WrappedComponent />
  </div>;
}
export default BorderHOC;
