import server from './server';

process.on('uncaughtException', (error) => {
  console.error(error);
});

process.on('uncaughtRejection', (error) => {
  console.error(error);
});
