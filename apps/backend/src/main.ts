import { NestFactory } from "@nestjs/core";
import { MainModule } from "@bulletproof/backend/main.module";
import { Logger, LoggerErrorInterceptor } from "nestjs-pino";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
    const app = await NestFactory.create(MainModule, { bufferLogs: true });
    app.useLogger(app.get(Logger));

    app.useGlobalInterceptors(new LoggerErrorInterceptor());

    const configService = app.get(ConfigService);
    const port = configService.get<number>("app.port", 8080);

    await app.listen(port, () => {
        app.get(Logger).log(`App listening on port ${port}`);
    });
}

bootstrap();
