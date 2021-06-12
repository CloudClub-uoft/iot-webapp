// BASIC SIDEBAR TEST
// https://testing-library.com/docs/queries/about/

import {React} from 'react';
import {render, screen} from "@testing-library/react";
import Sidebar from '../../../components/layout/sidebar';

describe('Sidebar', ()=>{
    
    it('Testing rendering of Sidebar.', function(){
        
        render(<Sidebar />);

        //ensure that the sidebar has been rendered and the Document Object Model contains the word "ABC"        
        const res = screen.getAllByText("ABC") //multiple components may contain the same word. Use *AllBy* version
                
        //Use Jest toBeTruthy function to determine that the "res" object is not undefined.
        expect(res).toBeTruthy();
    })

})