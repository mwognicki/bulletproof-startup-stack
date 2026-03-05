import { NestFactory } from "@nestjs/core";
import { MainModule } from "@bulletproof/backend/main.module";
import { Logger, LoggerErrorInterceptor } from "nestjs-pino";

async function bootstrap() {
    const app = await NestFactory.create(MainModule, { bufferLogs: true });
    app.useLogger(app.get(Logger));

    app.useGlobalInterceptors(new LoggerErrorInterceptor());

    await app.listen(8080, () => {
        app.get(Logger).debug(`App listening on port 8080`);
    });
}

bootstrap();
