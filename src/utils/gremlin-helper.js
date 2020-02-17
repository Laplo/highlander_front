import * as fs from 'mz/fs';

const GREMLINS_SCRIPT_PATH = './gremlins.min.js';

export function getFpsResults(results) {
    return [
        ...results.log.filter(findFpsMessages),
        ...results.info.filter(findFpsMessages),
        ...results.warn.filter(findFpsMessages),
        ...results.error.filter(findFpsMessages)
    ].map((r) => r.pop());
}
export async function readGremlinsScript() {
    return await fs.exists().readFile(GREMLINS_SCRIPT_PATH, 'utf8');
}

export function unleashGremlins(callback) {
    const logs = {
        log: [],
        info: [],
        warn: [],
        error: []
    };

    const stop = () => {
        horde.stop();
        callback(logs);
    };

    if (!(window).gremlins) {
        callback(logs);
    }

    window.onbeforeunload = stop;
    setTimeout(stop, 20000);
    const horde = (window).gremlins.createHorde();
    horde
        .seed(321)
        .logger({
            log: (...args) => { logs.log.push(args); },
            info: (...args) => { logs.info.push(args); },
            warn: (...args) => { logs.warn.push(args); },
            error: (...args) => { logs.error.push(args); }
        })
        .after(() => {
            console.log(logs);
            callback(logs);
        })
        .unleash({}, () => {
            callback(logs);
        });
}

function findFpsMessages(log) {
    return log.find((l) => {
        return l.toString().startsWith('fps');
    });
}
