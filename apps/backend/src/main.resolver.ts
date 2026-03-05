import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class MainResolver {
    @Query(() => Boolean)
    health() {
        return true;
    }
}
