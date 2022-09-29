import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Speedboat } from './models/speedboat.entity';
import { Agent } from './models/agent.entity';
import { User } from './models/user.entity';
import { Route } from './models/route.entity';
import { Order } from './models/order.entity';

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('Speedboat API')
        .setDescription('The rest API for the Speedboats rent service & db')
        .setVersion('1.0')
        .addTag('Аренда катеров')
        .build();
    const document = SwaggerModule.createDocument(app, options, {
        extraModels: [Speedboat, Agent, User, Route, Order],
    });
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`Сервер запущен! Порт: ${PORT}`))
}
start()