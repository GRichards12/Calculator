import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

//Makes sure that the application always has this specific text
it("should find the text of the header", () => {
  //what file we're testing
  render(<App />);
  //query methods that we're using
  const headerElement = screen.getByText(/My calculator/i);
  //assertions
  expect(headerElement).toBeInTheDocument();
  });
  
  it('should find the element of the header', ()=>{
  render(<App />);
  const headingElement = screen.getByRole('heading', {name:"My calculator"});
  expect(headingElement).toBeInTheDocument();
  });
  
  it("should have a h1 tag as the main header element", ()=>{
  render(<App />);
  const headingElementType = screen.getByText("My calculator");
  expect(headingElementType).toContainHTML("h1");
  });
  
  it('should display 4 when the user enters 2 + 2', ()=>{
  render(<App />);
  const twoButton = screen.getByText('2');
  const plusButton = screen.getByText('+');
  const equalsButton = screen.getByText('=');
  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);
  //data-testid="display" needs to go into .App
  const display=screen.getByTestId('display');
  expect(display).toHaveTextContent('4');})
  
  //**QUESTIONS**//
  //Should display 3 when a user enters 6/2
    it('should display 3 when the user enters 6 / 2', ()=>{
  render(<App />);
  const twoButton = screen.getByText('2');
  const sixButton = screen.getByText('6');
  const divideButton = screen.getByText('/');
  const equalsButton = screen.getByText('=');
  fireEvent.click(sixButton);
  fireEvent.click(divideButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);
  //data-testid="display" needs to go into .App
  const display=screen.getByTestId('display');
  expect(display).toHaveTextContent('3');})
  //Should display 6 when a user enters 3*2
  it('should display 6 when the user enters 3 * 2', ()=>{
    render(<App />);
    const twoButton = screen.getByText('2');
    const threeButton = screen.getByText('3');
    const multiplyButton = screen.getByText('*');
    const equalsButton = screen.getByText('=');
    fireEvent.click(twoButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(threeButton);
    fireEvent.click(equalsButton);
    //data-testid="display" needs to go into .App
    const display=screen.getByTestId('display');
    expect(display).toHaveTextContent('6');})
  //Test ToDo (1 element)