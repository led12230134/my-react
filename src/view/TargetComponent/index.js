import React,{Component} from 'react';
import BorderHOC from '../BorderHOC';

@BorderHOC
class TargetComponent extends Component {
  render() {
    return <div>TargetComponent inner</div>;
  }
}

export default TargetComponent;
