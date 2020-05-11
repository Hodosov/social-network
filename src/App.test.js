import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { profileReducer, addPostActionCreator } from './redux/Profile-reducer'



test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it('length of post', () => {
    let action = addPostActionCreator('new message')
    let state = {
        posts: [
            { id: 1, massage: 'Hello man', like: 2 },
            { id: 2, massage: 'Yo, how are your?', like: 4 },
            { id: 3, massage: 'I create SPA', like: 20 },
            { id: 4, massage: 'I go to the park', like: 3 },
        ]}

        let newState = profileReducer(state, action)

        expect(newState.posts.length).toBe(5)
})