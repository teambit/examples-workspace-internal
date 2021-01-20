import { Injectable, Logger, OnApplicationShutdown } from '@nestjs/common';
import { StatusDto } from './dto/liveness.status-dto';
//import { getGitBranch, getGitSha } from '@urbansharing/lowlevel.utils';

@Injectable()
export class LivenessService implements OnApplicationShutdown {
  private drainMs = 25000;
  private liveness = true;
  private readiness = true;
  private logger = new Logger('Liveness');

  async beforeApplicationShutdown(): Promise<void> {
    this.readiness = false;

    this.logger.log(`Shutdown signal received. Draining for ${this.drainMs}ms`);

    await new Promise((resolve) => {
      setTimeout(() => resolve(undefined), this.drainMs);
    });

    this.logger.log('Draining complete');
  }

  onApplicationShutdown(): any {
    this.logger.log('We have shutdown');
  }

  getStatus(): StatusDto {
    const statusDto = new StatusDto();

    //statusDto.branch = getGitBranch(); // TODO: Update when we have the new environment package
    //statusDto.version = getGitSha(); // TODO: Update when we have the new environment package

    return statusDto;
  }

  getLiveness(): boolean {
    return this.liveness;
  }

  getReadiness(): boolean {
    return this.readiness;
  }
}
