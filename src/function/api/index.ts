import { Context } from 'aws-lambda';
import { proxy } from 'aws-serverless-express';

import { bootstrapServer } from '../../main';

exports.handler = async (event: any, context: Context) => {
  const cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
