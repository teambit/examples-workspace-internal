import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LivenessService } from './liveness.service';

const serviceAvailable = 'Service available';
const serviceUnavailable = 'Service unavailable';

@ApiTags('liveness')
@Controller('')
export class LivenessController {
  constructor(private livenessService: LivenessService) {}

  @ApiOperation({ summary: 'Returns the current status of the application' })
  @Get(['/status', '/'])
  getStatus() {
    return this.livenessService.getStatus();
  }

  @ApiOperation({ summary: 'Returns the liveness state' })
  @ApiResponse({ status: 200, description: serviceAvailable })
  @ApiResponse({ status: 503, description: serviceUnavailable })
  @Get('/liveness')
  getLiveness() {
    if (this.livenessService.getLiveness()) {
      return { status: 'OK' };
    } else {
      throw new ServiceUnavailableException(serviceUnavailable);
    }
  }

  @ApiOperation({ summary: 'Returns the readiness state' })
  @ApiResponse({ status: 200, description: serviceAvailable })
  @ApiResponse({ status: 503, description: serviceUnavailable })
  @Get('/readiness')
  getReadiness() {
    if (this.livenessService.getReadiness()) {
      return { status: 'OK' };
    } else {
      throw new ServiceUnavailableException(serviceUnavailable);
    }
  }
}
