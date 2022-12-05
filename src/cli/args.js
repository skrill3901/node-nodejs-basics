import { argv } from 'process';

const parseArgs = () => {
  const dataArray = [];

  argv.forEach((arg, i) => {
    if (arg.startsWith('--')) {
      dataArray.push(`${arg.slice(2)} is ${argv[i + 1] || 'not value'}`);
    }
  });

  console.log(dataArray.join(','));
};

parseArgs();
