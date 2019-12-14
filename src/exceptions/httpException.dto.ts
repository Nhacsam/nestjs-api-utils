import { ApiModelProperty } from '@nestjs/swagger';

export class HttpExceptionDto {
  @ApiModelProperty({ type: 'number' })
  statusCode: number;

  @ApiModelProperty()
  code: string;

  @ApiModelProperty()
  message: string;

  @ApiModelProperty({ isArray: true, type: 'object' })
  errors?: Array<any>;

  constructor(options: Object = {}) {
    Object.assign(this, options);
  }
}
