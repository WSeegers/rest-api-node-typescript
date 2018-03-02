import initTests from '../../utils/initTests';
import {API_ROUTE_V1, DEFAULT_USER_PERMISSIONS} from '../../../../utils/constants';
import {Response} from 'express';
import { CREATED, CONFLICT } from 'http-status-codes';
import config from '../../../../config';
import {TEST_VALID_REGISTER_USER, TEST_INVALID_EMAIL, TEST_VALID_PASSWORD, TEST_VALID_EMAIL, TEST_TOO_SHORT_PASSWORD, TEST_DIFFERENT_VALID_PASSWORD} from '../../../../utils/testValues';
import * as R  from 'ramda';
import expectError from '../../utils/expectError';

describe(__filename, () => {

  const { service, request } = initTests();

  it('should fail to register a user without input', async () => {
    const response = await request.post(`${API_ROUTE_V1}/auth/register`);
    expectError(response);
  });

  it('should fail to register a user when email is invalid', async () => {
    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send({
                                    email: TEST_INVALID_EMAIL, 
                                    password: TEST_VALID_PASSWORD,
                                    password_confirmation: TEST_VALID_PASSWORD
                                  });
    expectError(response);
  });

  it('should fail to register a user without password', async () => {
    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send({email: TEST_VALID_EMAIL});
    expectError(response);
  });

  it('should fail to register a user with too short password', async () => {
    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send({
                                    email: TEST_VALID_EMAIL, 
                                    password: TEST_TOO_SHORT_PASSWORD
                                  });
    expectError(response);
  });

  it('should fail to register a user with the same email address', async () => {
  
    const user = await service.createUser(TEST_VALID_REGISTER_USER);
  
    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send(TEST_VALID_REGISTER_USER);
    expectError(response,CONFLICT);
  });

  it('should fail to register a user when the password does not match password_confirmation', async () => {
  
    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send({
                                    email: TEST_VALID_EMAIL, 
                                    password: TEST_VALID_EMAIL,
                                    password_confirmation: TEST_DIFFERENT_VALID_PASSWORD
                                  });
    expectError(response);
  });

  it('should succesfully register a user', async () => {

    const response = await request.post(`${API_ROUTE_V1}/auth/register`)
                                  .send(TEST_VALID_REGISTER_USER);
    const {user, token} = response.body;
    const permissions: any = await service.getUserPermissions({userId: user.id});
    // const permissionsNames = R.pluck('name')(permissions);
    // const defaultPermissionsNames =  R.pluck('name')(DEFAULT_USER_PERMISSIONS);
 
    // expect(R.intersection(permissionsNames,defaultPermissionsNames).length)
    //       .toBe(DEFAULT_USER_PERMISSIONS.length);
    // expect(response.status).toBe(CREATED);
    // expect(user.email).toEqual(TEST_VALID_REGISTER_USER.email);
  });

});