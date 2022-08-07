import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    console.log('here');
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    const lamar = await prisma.user.create({data: {name: 'Lamar'}});
    const leandre = await prisma.user.create({data: {name: 'Leandre'}});

    const post1 = await prisma.post.create({
        data: {
            body: 'Incident bird minds cozy rejoice keeping 4 Arathorn problem! Moments tune eastern mortal Thorin Oakenshield forthwith. Disappear uniting kingdom laughing thirst garb mash Dunland courtesy hospitality. Thus Southrons day rider. Pickle delaying stench distract friend flames except Shire vile razors seize? Devil stare Celeborn every! Pits whip abyss esquire draining wring strong Merry care. Gibbets vast reinforcements thrice secretive dawn sure rules malt kingly. Wrong Orcses whyfors poisoning amaze! Hear my voice. Come back to the light.',
            title: 'First post',
        },
    });

    const post2 = await prisma.post.create({
        data: {
            body: "This Mordor's aren't plan's. Beren forming uprooted hometown parted maids weather get arrow furnaces alarm. Feed Iáve bur spreads palantir canopy people's seeking. Dozens pile hammering fixed up joking rivers yearned living Ecthelion! Coast journeying pan Greybeard older. Fulfill opened outside fish name's Halflings. Yards Ring-bearer fishes see driven defiling quality haunted. Given Galeton stretched dying concludes rightfully bound birthday pot woodsmen knife-work. It's some form of Elvish. I can't read it. Endless agree Balrog feed grab remuneration continue sausages red commoners.",
            title: 'Second post',
        },
    });

    const comment1 = await prisma.comment.create({
        data: {
            message: 'Argonath witness journeys merry bodyguard dry',
            userId: lamar.id,
            postId: post1.id,
        },
    });
    const comment2 = await prisma.comment.create({
        data: {
            message: 'Antagonize hunters summon Dale any',
            parentId: comment1.id,
            userId: leandre.id,
            postId: post1.id,
        },
    });
    const comment3 = await prisma.comment.create({
        data: {
            message: 'Elderly chap',
            userId: leandre.id,
            postId: post1.id,
        },
    });
}

seed();
