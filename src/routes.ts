import { UserController } from "./controller/UserController"
import { QuestionarioController } from "./controller/UserController"


export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/questionario",
    controller: QuestionarioController,
    action: "all"
}, {
    method: "get",
    route: "/questionario/:id",
    controller: QuestionarioController,
    action: "one"
}, {
    method: "post",
    route: "/questionario",
    controller: QuestionarioController,
    action: "save"
}, {
    method: "delete",
    route: "/questionario/:id",
    controller: QuestionarioController,
    action: "remove"
}]