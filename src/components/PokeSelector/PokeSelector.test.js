import { render, fireEvent } from '@testing-library/react';
import PokeSelector from './PokeSelector';

describe('pokemon selector', () => {

  it('initializes at position 0', () => {
    const { getByTestId, getAllByTestId } = render(<PokeSelector />);
    const selectElement = getByTestId('select');
    const options = getAllByTestId('select-option');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.value).toEqual("0");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  });

  it('updates after change event fired', () => {
    const { getByTestId, getAllByTestId } = render(<PokeSelector />);
    const selectElement = getByTestId('select');
    const options = getAllByTestId('select-option');
    fireEvent.change(selectElement, {target: { value: 1 }});
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.value).toEqual("1");
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
});
