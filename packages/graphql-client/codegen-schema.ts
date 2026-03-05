import type {CodegenConfig} from '@graphql-codegen/cli'
import {configDotenv} from "dotenv";

configDotenv()

const config: CodegenConfig = {
    schema: process.env.GRAPH_URL,
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './schema.graphql': {
            plugins: ['schema-ast'],
            config: {
                includeDirectives: true
            },
        }
    }
}

export default config