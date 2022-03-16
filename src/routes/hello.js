/**
 * @type { import("fastify").RouteHandlerMethod }
 */

export function hello(req, reply) {
    const message = req.query.name
        ? `Hello ${req.query.name}`
        : 'Hello world';

    reply.send({ message });
}
