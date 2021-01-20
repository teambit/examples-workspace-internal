import { Module } from '@nestjs/common';
import { LivenessController } from './liveness.controller';
import { LivenessService } from './liveness.service';

@Module({
  controllers: [LivenessController],
  providers: [LivenessService],
})
export class LivenessModule {}
