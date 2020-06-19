import { NgModule } from '@angular/core';

import { CalculatePipe } from './calculate/calculate.pipe';
import { MaxPipe } from './max/max.pipe';
import { MinPipe } from './min/min.pipe';
import { PowPipe } from './pow/pow.pipe';
import { RoundPipe } from './round/round.pipe';

@NgModule({
  declarations: [
    CalculatePipe,
    MaxPipe,
    MinPipe,
    PowPipe,
    RoundPipe,
  ],
  exports: [
    CalculatePipe,
    MaxPipe,
    MinPipe,
    PowPipe,
    RoundPipe,
  ]
})
export class MathPipesModule {}
