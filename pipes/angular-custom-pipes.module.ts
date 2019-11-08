import { NgModule } from '@angular/core';

import { ArrayPipesModule } from './array/array-pipes.module';
import { MathPipesModule } from './math/math-pipes.module';

@NgModule({
  exports: [
    ArrayPipesModule,
    MathPipesModule,
  ],
})
export class AngularCustomPipesModule {}
