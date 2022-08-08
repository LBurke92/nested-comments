import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {PrismaClient} from '@prisma/client';

dotenv.config();

const app = express();

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//     })
// );

const prisma = new PrismaClient();

app.get(
    '/posts',
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }),
    async (req, res, next) => {
        const posts = await prisma.post.findMany({
            select: {id: true, title: true},
        });
        res.send(posts);
    }
);
app.get(
    '/posts/:id',
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }),
    async (req, res, next) => {
        const posts = await prisma.post.findUnique({
            where: {id: req.params.id},
            select: {
                body: true,
                title: true,
                comments: {
                    orderBy: {createdAt: 'desc'},
                    select: {
                        id: true,
                        message: true,
                        parentId: true,
                        createdAt: true,
                        user: {select: {id: true, name: true}},
                    },
                },
            },
        });
        res.send(posts);
    }
);

app.listen({port: process.env.PORT});
