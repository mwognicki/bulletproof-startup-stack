import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import path from "node:path";
import { LoggerModule } from "nestjs-pino";
import loggerConfig from "@bulletproof/backend/config/logger.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: path.join(__dirname, ".env"),
        }),
        LoggerModule.forRootAsync({
            imports: [ConfigModule.forFeature(loggerConfig)],
            useFactory: async (configService: ConfigService) =>
                configService.get("logger"),
            inject: [ConfigService],
        }),
    ],
})
export class MainModule {}
