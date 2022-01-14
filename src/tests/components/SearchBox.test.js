import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// userEventは、ブラウザインタラクションのシミュレーションを提供します

import SearchBox from '../../components/SearchBox';
import MovieProviders from '../../components/MovieProviders';

afterEach(() => cleanup());

describe('SearchBox test', () => {
  it('input Display text after input', () => {
    // Contextの状態を利用するコンポーネントをテストする際、renderで仮想DOMを生成するときに第2引数に{ wrapper: Provider }を与えてあげる必要があります
    render(<SearchBox />, { wrapper: MovieProviders });

    const input = screen.getByRole('textbox');
    // type(element, text, [options])
    userEvent.type(input, 'test');
    expect(input.value).toBe('test');
  });
  it('Pressing the submit button will remove the input value.', () => {
    render(<SearchBox />, { wrapper: MovieProviders });

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    // type(element, text, [options])
    userEvent.type(input, 'test');
    expect(input.value).toBe('test');
    userEvent.click(button);
    expect(input.value).toBe('');
  });
});
