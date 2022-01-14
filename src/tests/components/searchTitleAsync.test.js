import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from '../../components/SearchBox';
import SearchResult from '../../components/SearchResult';

import MovieProviders from '../../components/MovieProviders';

afterEach(() => {
  cleanup();
})

describe('Testing api asynchronous communication', () => {
  it('Display when searching for cat', async() => {
    render(
    <MovieProviders>
      <SearchBox />
      <SearchResult />
    </MovieProviders>
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    // type(element, text, [options])
    userEvent.type(input, 'cat');
    expect(input.value).toBe('cat');
    userEvent.click(button);
    // 要素の表示が非同期な場合は await findBy* で待機させる
    expect(await screen.findByText('The Cat in the Hat')).toBeInTheDocument();
    //screen.debug();
  })
})