import { registerAs } from "@nestjs/config";

const addTransport = (config: Record<string, any>) => {
    return config;
};

export default registerAs("logger", () =>
    addTransport({
        renameContext: "loggerContext",
        pinoHttp: {
            redact: {
                paths: [
                    "req.headers.authorization",
                    'req.headers["x-api-key"]',
                    'res.headers["set-cookie"]',
                ],
                censor: "[REDACTED]",
            },
        },
    }),
);
