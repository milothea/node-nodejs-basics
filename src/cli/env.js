import { env } from 'node:process';

const parseEnv = () => {
    const nameCondition = new RegExp('^RSS_');
    const envVarKeys = Object.keys(env);
    const result = [];

    envVarKeys.forEach((key) => {
        const isAcceptableKey = nameCondition.test(key);

        if (isAcceptableKey) {
            result.push(`${key}=${env[key]}`);
        }
    });

    console.log(result.join('; '));
};

parseEnv();
