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

        // try {
        //     const posts = await prisma.post.findMany({
        //         select: {id: true, title: true},
        //     });
        //     res.send(posts);
        // } catch (err) {
        //     console.log(err);
        //     next(err);
        // }

        res.send(posts);
    }
);

async function commitToDb(promise) {
    app.to;
}

app.listen({port: process.env.PORT});
