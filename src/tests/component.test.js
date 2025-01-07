import React from 'react';
import Link from '../Link'; 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import { describe } from 'jest-circus';
import '@testing-library/jest-dom';

// utiliser le composant Link comme celui-ci dans vos tests : <Link page="http://www.facebook.com">Facebook</Link>
describe('Link component', () => { 
    it('renders with correct text content', () => {
        // vérifie que le composant Link est bien rendu avec le texte "Facebook"
        render(<Link page="http://www.facebook.com">Facebook</Link>);
        expect(screen.getByText('Facebook')).toBeInTheDocument();
        console.log('renders with correct text content : OK');
    });

    
    it('has the correct default classname', () => {
        // vérifie que le composant Link a la classe "normal" lorsqu'il est rendu
        render(<Link page="http://www.facebook.com">Facebook</Link>);
        expect(screen.getByText('Facebook')).toHaveClass('normal');
        console.log('has the correct default classname : OK');
    });
    
    it('renders correct href attribute', () => {
        // vérifie que le lien href est bien "http://www.facebook.com"
        render(<Link page="http://www.facebook.com">Facebook</Link>);
        expect(screen.getByText('Facebook')).toHaveAttribute('href', 'http://www.facebook.com');
        console.log('renders correct href attribute : OK');
    });
    
    it('changes classname on hover', () => {
        // vérifie que la classe "hovered" est bien ajoutée lors du survol sur le composant et retirée lors du unhover
        render(<Link page="http://www.facebook.com">Facebook</Link>);
        const linkElement = screen.getByText('Facebook');
        
        fireEvent.mouseEnter(linkElement);
        expect(linkElement).toHaveClass('hovered');
        
        fireEvent.mouseLeave(linkElement);
        expect(linkElement).toHaveClass('normal');
        
        console.log('changes classname on hover : OK');
    });
});
