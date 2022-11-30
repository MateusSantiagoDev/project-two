import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags("Status")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: "Status da aplicação"
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
