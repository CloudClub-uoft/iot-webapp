// Register Page Test Suite

import React from 'react';
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Register from '../../../components/layout/Register';
import {setupServer} from 'msw/node';
import { rest } from 'msw';

// Setup Mock Server
const server = setupServer(
  rest.post('http://localhost:8080/api/register', (req, res, ctx) => {
    return res(ctx.json({Status: 'Success'}));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

// Register Tests
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
    it('1c. Fetch from server.', async () => {
      const utils = render(<Register />);
      const friendly = utils.getByRole('textbox', {name: "Friendly Name" /*label*/}); 
      fireEvent.change(friendly, {target: {value: 'Register Test Friendly Name'}});
      const device = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
      fireEvent.change(device, {target: {value: '123456ABCDEF'}});
      // Click register
      fireEvent.click(screen.getByRole('button'));
      await waitFor(() => screen.getByText('Device Successfully Registered!'));
    });
  });

  describe('2. Negative Tests', () => {
    it('2a. Bad Request.', async () => {
      const expected = "Bad Request";
      // Mimic bad request
      server.use(
        rest.post('http://localhost:8080/api/register', (req, res, ctx) => {
          return res(ctx.json({error: expected}));
        }),
      );
      const utils = render(<Register />);
      // Click register
      fireEvent.click(screen.getByRole('button'));
      await waitFor(() => screen.getByText(expected));
      // await screen.findByText('Device Successfully Registered!'); // alternative
      // expect(screen.getByLabelText('toast').innerHTML).toBe("Device Successfully Registered!"); //alternative
    });

    // These tests have no implemented frontend features currently (i.e. tooltips for incorrect inputs)

    // it('2b. No device id entered.', () => {
    //   const expected = "Bad Request";
    //   // Mimic bad request
    //   server.use(
    //     rest.post('http://localhost:8080/api/register', (req, res, ctx) => {
    //       return res(ctx.json({error: expected}));
    //     }),
    //   );
    //   const utils = render(<Register />);
    //   const actual = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
    //   fireEvent.change(actual, {target: {value: ''}});
      
    //   // TODO: Artificial fetch, verify that correct toast pops up

    // });
    // it('2c. Invalid device id entered.', () => {
    //   // Mimic bad request
    //   server.use(
    //     rest.post('http://localhost:8080/api/register', (req, res, ctx) => {
    //       return res(ctx.json({error: expected}));
    //     }),
    //   );
    //   const utils = render(<Register />);
    //   const actual = utils.getByRole('textbox', {name: "Device ID" /*label*/}); 
    //   fireEvent.change(actual, {target: {value: '12:34:56:AB:CD:EF'}});

    //   // TODO: Artificial fetch, verify that correct toast pops up
      
    // });
  });
});
