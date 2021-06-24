// BASIC NAVBAR TEST
// https://testing-library.com/docs/queries/about/

import { React } from 'react';
import { render, screen } from "@testing-library/react";
import Navbar from '../../../components/layout/navbar';

describe('Navbar', () => {
        
    it('Testing rendering of Navbar.', function () { //Description of the test        
        
        render(<Navbar />);
        
        //ensure that the navbar has been rendered and the Document Object Model contains the word "Dash"
        const res = screen.getByText("Dash")
        
        //Use Jest's toBeTruthy function to determine that the "res" object is not undefined.
        expect(res).toBeTruthy();
    })

})