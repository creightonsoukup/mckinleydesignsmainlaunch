import React, { Component, PropTypes } from 'react';
import { Row } from 'reactstrap';

class Starling extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <Row noGutters className="starling">
        <h2>{'Starling Project + Madison Mckinley Collaboration'}</h2>
        <img
          onClick={() => {
            this.context.router.push('/charity');
          }}
          src={
            'https://s3-us-west-1.amazonaws.com/madison-mckinley/starling.jpg'
          }
        />
        <h3
          onClick={() => {
            this.context.router.push(`/charity`);
          }}
        >
          {'Learn More'} <i className="fa fa-arrow-right" />
        </h3>
      </Row>
    );
  }
}

export default Starling;
