/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';
import scheduleHandlers from './scheduleHandlers';

const scheduleServer = setupServer(...scheduleHandlers);

export default scheduleServer;
