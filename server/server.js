import express from 'express';
import dotenv from 'dotenv';
import {PrismaClient} from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.get('/posts', async (req, res, next) => {
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
});

async function commitToDb(promise) {
    app.to;
}

app.listen({port: process.env.PORT});