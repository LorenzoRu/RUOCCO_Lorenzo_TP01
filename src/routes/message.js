/**
 * @type { import("fastify").RouteHandlerMethod }
 */
export const messageSchema = {
    body: {
        type: 'object',
        properties: {
            message: { type: 'string' },
            random: { type: 'string' },
        },
        required: ['message'],
        additionalProperties: false,
    },
}
export function message(req, reply) {
    const data = req.body
    reply.send({
        message: 'Message received',
        data: data,
    })
}


