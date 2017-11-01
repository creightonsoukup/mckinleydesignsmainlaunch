import React, { Component, PropTypes } from 'react';
import { Row } from 'reactstrap';

class StarlingInfo extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <Row noGutters className="starling-info">
        <h2>{'Starling Project + Madison Mckinley Collaboration'}</h2>
        <img
          src={
            'https://s3-us-west-1.amazonaws.com/madison-mckinley/starling.jpg'
          }
        />
        <h3>{`About Starling Project`}</h3>
        <h4
        >{`The Starling Project provides development of solar power systems in countries such as Chad by supporting organizations like UNICEF through the sale of hand-poured candles made in Brooklyn, NY. This collaboration is to further support Starling Projects's efforts with UNICEF.`}</h4>
        <a
          href={`https://starlingproject.org/product/starling-project-x-madison-mckinley/`}
        >
          {`Shop Now `}
          <i className="fa fa-arrow-right" />
        </a>
      </Row>
    );
  }
}

export default StarlingInfo;
