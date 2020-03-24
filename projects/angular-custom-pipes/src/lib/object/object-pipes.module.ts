import { NgModule } from '@angular/core';

import { AssignPipe } from './assign/assign.pipe';
import { InvertPipe } from './invert/invert.pipe';
import { KeysPipe } from './keys/keys.pipe';
import { OmitPipe } from './omit/omit.pipe';
import { PickPipe } from './pick/pick.pipe';
import { ToArrayPipe } from './to-array/to-array.pipe';
import { ValuesPipe } from './values/values.pipe';

@NgModule({
  declarations: [
    AssignPipe,
    InvertPipe,
    KeysPipe,
    OmitPipe,
    PickPipe,
    ToArrayPipe,
    ValuesPipe,
  ],
  exports: [
    AssignPipe,
    InvertPipe,
    KeysPipe,
    OmitPipe,
    PickPipe,
    ToArrayPipe,
    ValuesPipe,
  ]
})
export class ObjectPipesModule {}
