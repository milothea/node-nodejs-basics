const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = [];

    args.forEach((arg, i, arr) => {
        if (i%2 === 0) {
            result.push(`${arg.replace('--', '')} is ${arr[i + 1]}`);
        }
    });

    console.log(result.join(', '));
};

parseArgs();