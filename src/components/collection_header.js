import React from 'react';
import { Row } from 'reactstrap';

const CollectionHeader = ({collectionContent}) => {
  return (
    <Row noGutters className='collection-header'>
      <h2>{collectionContent.subtitle}</h2>
      <h3>{collectionContent.description}</h3>
    </Row>
  )
}

export default CollectionHeader
