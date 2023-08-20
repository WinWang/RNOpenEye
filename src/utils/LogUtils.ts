import {consoleTransport, logger} from "react-native-logs";

const defaultConfig = {
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },
    severity: "debug",
    transport: consoleTransport,
    transportOptions: {
        colors: {
            info: "blueBright",
            warn: "yellowBright",
            error: "redBright",
        },
    },
    async: true,
    dateFormat: "time",
    printLevel: true,
    printDate: true,
    enabled: true,
};

class LogUtils {
    private static log = logger.createLogger(defaultConfig);

    static setLevel(level: string): void {
        LogUtils.log.setLevel(level);
    }

    static debug(...args: unknown[]): void {
        LogUtils.log.debug(args);
    }

    static info(...args: unknown[]): void {
        LogUtils.log.info(args);
    }

    static warn(...args: unknown[]): void {
        LogUtils.log.warn(args);
    }

    static error(...args: unknown[]): void {
        LogUtils.log.error(args);
    }
}

export default LogUtils;