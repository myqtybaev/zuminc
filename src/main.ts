import { NestFactory } from '@nestjs/core';
import { WsAdapter } from './chat/chat.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(process.env.APP_PORT || 53850);
}
bootstrap();
