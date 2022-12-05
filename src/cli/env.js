import { env } from 'process';

const parseEnv = () => {
  const dataArray = [];

  Object.entries(env).forEach(([name, value]) => {
    if (name.startsWith('RSS_')) {
      dataArray.push(`${name}=${value}`);
    }
  });
  console.log(dataArray.join(';'));
};

parseEnv();
