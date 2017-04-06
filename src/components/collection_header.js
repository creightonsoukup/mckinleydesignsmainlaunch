import React from 'react';
import { Row } from 'reactstrap';

const CollectionHeader = ({collectionContent}) => {
  console.log(collectionContent)
  return (
    <Row className='collection-header'>
      <h2>{collectionContent.subtitle}</h2>
      <h3>{collectionContent.description}</h3>
    </Row>
  )
}

export default CollectionHeader
