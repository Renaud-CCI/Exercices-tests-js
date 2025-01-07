import ShareComponent from '../MockComponents/ShareComponent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

//mocker le composant UserComponent
jest.mock('../MockComponents/UserComponent', () => (props) => <div>Mocked User: {props.para2}</div>);

//mocker le composant InstallComponent
jest.mock('../MockComponents/InstallComponent', () => (props) => <div>Mocked Install: {props.para1}</div>);

describe("ShareComponent", () => {
  it("should return correct component", () => {
    // vérifie que le composant ShareComponent est bien rendu
    render(<ShareComponent />);
    
    // vérifie que les composants mockés contiennent le texte choisi dans le mock
    expect(screen.getByText('Mocked Install: title1')).toBeInTheDocument();
    expect(screen.getByText('Mocked User: title2')).toBeInTheDocument();
  });
});