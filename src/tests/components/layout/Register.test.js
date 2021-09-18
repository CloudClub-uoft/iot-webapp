// Register Page Test Suite

import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Register from '../../../components/layout/Register';

describe('Register Page', () => {
  describe('1. Functional Tests', () => {
    it('1a. Enter a friendly name.', () => {
      const utils = render(<Register />);
      const actual = utils.getByRole('textbox', {name: "Friendly Name" /*label*/}); 
      // const {actual} = setup_1a();
      fireEvent.change(actual, {target: {value: 'Register Test Friendly Name'}});
      expect(actual.value).toBe('Register Test Friendly Name');
    });
    it('1b. Enter a device id.', () => {
      const utils = render(<Register />);
      const actual = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
      fireEvent.change(actual, {target: {value: '123456ABCDEF'}});
      expect(actual.value).toBe('123456ABCDEF');
    });
  });

  // describe('2. Negative Tests', () => {
  //   it('2a. No friendly name entered.', () => {
  //     const utils = render(<Register />);
  //     const actual = utils.getByRole('textbox', {name: "Friendly Name" /*label*/}); 
  //     fireEvent.change(actual, {target: {value: 'Register Test Friendly Name'}});

  //     // TODO: Artificial fetch, verify that correct toast pops up

  //   });
  //   it('2b. No device id entered.', () => {
  //     const utils = render(<Register />);
  //     const actual = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
  //     fireEvent.change(actual, {target: {value: ''}});
      
  //     // TODO: Artificial fetch, verify that correct toast pops up

  //   });
  //   it('2c. Invalid device id entered.', () => {
  //     const utils = render(<Register />);
  //     const actual = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
  //     fireEvent.change(actual, {target: {value: '12:34:56:AB:CD:EF'}});

  //     // TODO: Artificial fetch, verify that correct toast pops up
      
  //   });
  // });
});
