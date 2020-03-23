# Installation

1. Use npm to install the package

        $ npm install angular-custom-pipes
    
2. You can import all Pipes by AngularCustomPipesModule or specific pipes importing one module such as MathPipesModule, for example:

        import { AngularCustomPipesModule } from 'angular-custom-pipes';
        
        @NgModule({
         // ...
         imports: [
           // ...
           AngularCustomPipesModule
         ]
        })
  
3. Now you are able to use imported pipes, for example:

    In template:

        <p>{{ 10 | calculate: 2: CalculateActions.ADD }}</p> // Output: 12
        
    In component:

        import { CalculateActions, CalculatePipe } from 'angular-custom-pipes';
        
        export class AppComponent {
          constructor(private calculatePipe: CalculatePipe) {
            this.calculatePipe.transform(10, 2, CalculateActions.ADD); // Output: 12
          }
          // ..
        }

# Documentation

Array
- [drop](#drop)
- [head](#head)
- [indexOf](#index-of)
- [initial](#initial)
- [join](#join)
- [last](#last)
- [removeFalsy](#removeFalsy)
- [sum](#sum)
- [unique](#unique)
- [uniqueBy](#uniqueBy)

Math
- [calculate](#calculate)
                                 
#### Array  

###### drop

Returns slice of _array_ <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | drop: 2 }}</p> // Output: [3]
```
```
<p>{{ [1, 2, 3] | drop }}</p> // Output: [1, 2, 3]
```

###### head

Returns _first value_ of array <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | head }}</p> // Output: [1]
```

###### indexOf

Returns _index_ of array or -1 <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | indexOf: 2 }}</p> // Output: 1
```

###### initial

Returns _array_ without last value <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | initial: 2 }}</p> // Output: [1, 2]
```

###### isEmpty

Returns _true_ if array is empty, else _false_ <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | isEmpty }}</p> // Output: false
```
```
<p>{{ [] | isEmpty }}</p> // Output: true
```

###### join

Returns a _string_ separated by separator <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | join: ' + ' }}</p> // Output: '1 + 2 + 3'
```
```
<p>{{ [1, 2, 3] | join: '*' }}</p> // Output: '1*2*3'
```

###### last

Returns _last value_ of array <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | last }}</p> // Output: 3
```

###### removeFalsy

Returns _array_ without falsy values <br />

**Example** <br />
```
<p>{{ [1, null, 2, [], NaN] | removeFalsy }}</p> // Output: [1, 2]
```

###### sum

Returns _sum_ of values in array <br />

**Example** <br />
```
<p>{{ [1, 2, 3] | sum }}</p> // Output: 6
```

###### unique

Returns new _array_ without duplicate values <br />

**Example** <br />
```
<p>{{ [1, 2, 3, 2] | unique }}</p> // Output: [1, 2, 3]
```

###### uniqueBy

Returns new _array_ without duplicate values <br />

**Example** <br />
```
<p>{{ [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }] | uniqueBy: 'x' }}</p> // Output: [{ 'x': 1 }, { 'x': 2 }]
```
<br />

#### Math  

###### calculate

Returns result of calculate <br />

**Example** <br />
```
<p>{{ 10 | calculate: 2: CalculateActions.ADD }}</p> // Output: 12
```
```
<p>{{ 10 | calculate: 2: CalculateActions.SUBTRACT }}</p> // Output: 8
```
```
<p>{{ 10 | calculate: 2: CalculateActions.MULTIPLY }}</p> // Output: 20
```
```
<p>{{ 10 | calculate: 2: CalculateActions.DIVIDE }}</p> // Output: 5
```
