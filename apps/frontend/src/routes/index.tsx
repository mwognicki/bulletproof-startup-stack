import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div className={"p-8 text-4xl"}>Hello "/"!</div>;
}
