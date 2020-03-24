import { NgModule } from '@angular/core';

import { ArrayPipesModule } from './array/array-pipes.module';
import { MathPipesModule } from './math/math-pipes.module';
import { ObjectPipesModule } from './object/object-pipes.module';

@NgModule({
  exports: [
    ArrayPipesModule,
    MathPipesModule,
    ObjectPipesModule,
  ],
})
export class AngularCustomPipesModule {}
