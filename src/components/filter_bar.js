import React, { Component } from 'react';
import { Row, Form, FormGroup, Col, Input } from 'reactstrap'

class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      searchText: null,
      type: null,
      orderBy: null,
      showFilters: false
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
      <Row noGutters className="filter-bar">
        { this.state.showFilters ? (
          <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs='12' sm='12' md='12' lg='12' xl='12'>
              <div className="filter-header" onClick={() => {this.setState({showFilters: !this.state.showFilters})}}>
                <h1>Filter</h1><i className="fa fa-angle-up"></i>
              </div>
            </Col>
            <Col xs='12' sm='12' md='4' lg='3' xl='3'>
              <Input
              type="select"
              name="type"
              value={this.state.type}
              onChange={this.sortProductTypes}>
                <option value="default">Type</option>
                <option value="BRACELET">Bracelets</option>
                <option value="EARRINGS">Earrings</option>
                <option value="NECKLACE">Necklaces</option>
                <option value="PENDENT">Pendents</option>
                <option value="RING">Rings</option>
              </Input>
              </Col>
              <Col xs='12' sm='12' md='4' lg='3' xl='3'>
              <Input
              type="select"
              name="orderBy"
              value={this.state.orderBy}
              onChange={this.sortProducts}>
                <option value="default">Order By</option>
                <option value="price-descending">Price High-Low</option>
                <option value="price-ascending">Price Low-High</option>
                <option value="title-ascending">Name A-Z</option>
                <option value="title-descending">Name Z-A</option>
              </Input>
              </Col>
              <Col xs='12' sm='12' md='4' lg={{size: 3, offset: 3}} xl={{size: 3, offset: 3}}>
              { this.props.showSearchBar &&
                <Input
                name="searchText"
                placeholder={'Search'}
                value={this.state.searchText}
                onChange={this.handleSearch}
                />
              }
              </Col>
              </Row>
          </Form>
        ) : (
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <div className="filter-header-close" onClick={() => {this.setState({showFilters: !this.state.showFilters})}}>
              <h1>Filter</h1><i className="fa fa-angle-down"></i>
            </div>
          </Col>
        )}
      </Row>
    )
  }
}

export default FilterBar
