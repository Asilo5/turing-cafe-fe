import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {

    let mockReservation = jest.fn();
    const wrapper;

    beforeEach(() => {
      wrapper = shallow (<Form addReservation={mockReservation} />)
    })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleChange is called', () => {
    const mockReserve = {
        name: 'Bob',
        date: '05/02',
        time: '11:00',
       guests: '2'
     }
    const expected = [mockReserve];

    expect(wrapper.state('name')).toEqual('');

    wrapper.instance().addReservation(mockReserve);

    expect(wrapper.state('name')).toEqual('Bob');
  })
})