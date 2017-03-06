import { renderComponent , expect } from '../test_helper';
import HomepageVideoPlayer from '../../src/components/all_products'

describe('HomepageVideoPlayer', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HomepageVideoPlayer);
  })
  it('has the correct class', () =>{
    expect(component).to.have.class('comment-box')
  })



})
