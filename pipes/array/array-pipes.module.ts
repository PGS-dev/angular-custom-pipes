import { NgModule } from '@angular/core';

import { RemoveFalsyPipe } from './removeFalsy/removeFalsy.pipe';
import { UniqueByPipe } from './uniqueBy/unique-by.pipe';
import { UniquePipe } from './unique/unique.pipe';

@NgModule({
  declarations: [
    RemoveFalsyPipe,
    UniqueByPipe,
    UniquePipe,
  ],
  exports: [
    RemoveFalsyPipe,
    UniqueByPipe,
    UniquePipe,
  ]
})
export class ArrayPipesModule {}
