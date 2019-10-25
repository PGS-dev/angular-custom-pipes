import { NgModule } from '@angular/core';

import { UniqueByPipe } from './uniqueBy/unique-by.pipe';
import { UniquePipe } from './unique/unique.pipe';

@NgModule({
  declarations: [
    UniqueByPipe,
    UniquePipe,
  ],
  exports: [
    UniqueByPipe,
    UniquePipe,
  ]
})
export class ArrayPipesModule {}
