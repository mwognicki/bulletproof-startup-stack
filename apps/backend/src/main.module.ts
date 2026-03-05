import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import path from "node:path";
import { LoggerModule } from "nestjs-pino";
import loggerConfig from "@bulletproof/backend/config/logger.config";
import appConfig from "@bulletproof/backend/config/app.config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { MainResolver } from "@bulletproof/backend/main.resolver";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: path.join(__dirname, "../.env"),
        }),
        ConfigModule.forFeature(appConfig),
        LoggerModule.forRootAsync({
            imports: [ConfigModule.forFeature(loggerConfig)],
            useFactory: async (configService: ConfigService) =>
                configService.get("logger"),
            inject: [ConfigService],
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: true,
            debug: true,
            driver: ApolloDriver,
            introspection: true,
            path: "graphql",
            playground: true,
            sortSchema: true,
        }),
    ],
    providers: [MainResolver],
})
export class MainModule {}
