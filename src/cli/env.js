const parseEnv = () => {
    const prefix = 'RSS_';

    Object.entries(process.env)?.forEach((data) => console.log(`${prefix}${data[0]}=${data[1]}`));
};

parseEnv();