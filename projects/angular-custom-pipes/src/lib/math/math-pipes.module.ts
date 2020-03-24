import { NgModule } from '@angular/core';

import { CalculatePipe } from './calculate/calculate.pipe';
import { MaxPipe } from './max/max.pipe';
import { MinPipe } from './min/min.pipe';

@NgModule({
  declarations: [
    CalculatePipe,
    MaxPipe,
    MinPipe,
  ],
  exports: [
    CalculatePipe,
    MaxPipe,
    MinPipe,
  ]
})
export class MathPipesModule {}
