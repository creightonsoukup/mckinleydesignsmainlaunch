import React, { Component } from 'react';
import { Row, Form, FormGroup, Input } from 'reactstrap'

class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      searchText: null,
      type: null,
      orderBy: null
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sortProducts = this.sortProducts.bind(this)
    this.sortProductTypes = this.sortProductTypes.bind(this)
  }

  handleSearch(event) {
    const value = event.target.value
    this.setState({
      searchText: value
    });
    this.props.searchProducts(value)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  sortProducts(event) {
    event.preventDefault()
    const value = event.target.value
    this.props.sortProducts(value)
  }

  sortProductTypes(event) {
    event.preventDefault()
    const value = event.target.value
    this.props.sortProductTypes(value)
  }

  render() {
    return (
      <Row>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
            type="select"
            name="type"
            value={this.state.type}
            onChange={this.sortProductTypes}>
              <option value="">Type</option>
              <option value="BRACELET">Bracelets</option>
              <option value="EARRINGS">Earrings</option>
              <option value="NECKLACE">Necklaces</option>
              <option value="PENDENT">Pendents</option>
              <option value="RING">Rings</option>
            </Input>
            <Input
            type="select"
            name="orderBy"
            value={this.state.orderBy}
            onChange={this.sortProducts}>
              <option value="default">Order By</option>
              <option value="best-selling">Best Selling</option>
              <option value="price-ascending">Price Ascending</option>
              <option value="price-descending">Price Descending</option>
              <option value="title-ascending">Name Ascending</option>
              <option value="title-descending">Name Descending</option>
            </Input>
            <Input
            name="searchText"
            value={this.state.searchText}
            onChange={this.handleSearch}
            />
          </FormGroup>
        </Form>
      </Row>
    )
  }
}

export default FilterBar
