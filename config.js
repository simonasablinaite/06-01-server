console.log('kur dirba kodas?');

console.log(process.env.NODE_ENV);

const config = {};

config.dev = {
    name: 'dev',
    passwordLenght: 2,
    defaultLanguage: 'en',
    db: {
        user: 'root',
        password: 'admin',
        database: 'batai'
    },
}

config.prod = {
    name: 'prod',
    passwordLenght: 12,
    defaultLanguage: 'lt',
    db: {
        user: 'node_batai_user',
        password: 'vcbldc65465165fg65v6f15g21v',
        database: 'batai-5v542c1v2fs'
    },
}

const nodeEnv = process.env.NODE_ENV;
const env = nodeEnv ? nodeEnv : 'dev';
const options = config[env] ? config[env] : config.dev;

console.log(nodeEnv);
console.log(options);

export default options;