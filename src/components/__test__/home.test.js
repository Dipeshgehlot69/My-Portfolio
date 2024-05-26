import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home/Home';
import Home2 from '../Home/Home2';
import Type from '../Home/Type';
import '@testing-library/jest-dom/extend-expect';

describe('Home Component', () => {

  //text checking at home page 
  test('renders the Home component', () => {
    render(<Home />);
    expect(screen.getByText(/Hi There/i)).toBeInTheDocument();
    expect(screen.getByText(/I'M Dipesh Gehlot/i)).toBeInTheDocument();
  });

    //icon checking at home page 
  test('renders the home logo image', () => {
    render(<Home />);
    const homeLogo = screen.getByAltText(/home pic/i);
    expect(homeLogo).toBeInTheDocument();
  });
});

describe('Home2 Component', () => {
 
    //icon checking at home page 
  test('renders the avatar image with tilt effect', () => {
    render(<Home2 />);
    const avatarImg = screen.getByAltText(/avatar/i);
    expect(avatarImg).toBeInTheDocument();
  });
 
});


jest.mock("typewriter-effect", () => ({ options }) => (
  <div data-testid="typewriter">
    {options.strings.map((string) => (
      <span key={string}>{string}</span>
    ))}
  </div>
));


describe("Type Component", () => {

  // Test to check if Typewriter component renders correctly with the expected options

  test("renders Typewriter component with correct options", () => {
    render(<Type />);
    const typewriter = screen.getByTestId("typewriter");
    expect(typewriter).toBeInTheDocument();
    const strings = ["Website Developer", "Website Designer", "Freelancer", "MERN Stack Developer", "Software Developer"];
    strings.forEach((string) => {
      expect(typewriter).toHaveTextContent(string);
    });
  });
});

