# SassFunk

A collection of utility functions for Sass.

## Install SassFunk

SassFunk can be installed as a Ruby gem, via [Bower](http://bower.io), or manually.

When installing as a Ruby Gem, SassFunk will be installed as a Compass extension if Compass is installed on your system:

    $ gem install SassFunk
    
    
To install ia bower run:

	$ bower install --save-dev sassfunk
	
For a manual install, include `dist/SassFunk.scss` in the appropriate directory of your project.

SassFunk is also on [Sache](http://sache.in).



## Use SassFunk

### What's inside

#### sfnk-colors-complement( $colors )
Returns the list of complementary colors for a list of colors.

#### sfnk-colors-darken( $colors, $value )
Returns the list of colors darkened by `$value`.

#### sfnk-colors-desaturate( $colors, $value )
Returns the list of colors desatureated by `$value`.

#### sfnk-colors-grayscale( $colors )
Returns the list of equivalent grayscale colors.

#### sfnk-colors-invert( $colors )
Returns the list of inverted colors.

#### sfnk-colors-lighten( $colors, $value )
Returns th elist of colors lightened by `$value`.

#### sfnk-colors-mix( $colors )
Returns a single color that is the mix of `$colors`.

#### sfnk-colors-saturate( $colors, $value )
Returns the list of colors saturated by `$value`.

#### sfnk-is-color-list( $list )
Returns a bool whether `$list` consists of color values only.

#### sfnk-is-nested-list( $list )
Returns a bool whether `$list` contains any items that are lists.

#### sfnk-is-numeric-list( $list )
Returns a bool whether `$list` consists of numbers only.

#### sfnk-is-type-list( $list, $type )
Returns a bool whether all items of `$list` are of type `$type` .

#### sfnk-is-valid-border( $border, [$strict:false] )
Returns a bool whether $border is a valid CSS border statement. Pass `strict: true`to check whether $border is a complete shorthand CSS border statement consisting of border-width, border-style, and border-color.

#### sfnk-list-contains-all( $list1, $list2 )
Returns a bool whether `$list1` contains all items in `$list2`.

#### sfnk-list-contains( $list, $value )
Returns a bool whether `$list` contains `$value`.

#### sfnk-list-mapify( $list )
Creates a map from a nested `$list` where the keys are the first items of the items of `$list`, the value the remaining items of each item of `$list`.

#### sfnk-list-prepend( $list, $value )
Returns `$list`prepended with `$value`.

#### sfnk-list-reject-all( $list, $value )
Returns a list where all occurences of `$value`.

#### sfnk-list-reject-nth( $list, $index, [$pos: 1] )
Rejects the item at `$index` from `$list`. Pass `$pos: -1` to reject the item at `$index` from the end of `$list`.

#### sfnk-list-reject( $list, $value, [$pos: 1])
Rejects first occurence of `$value` from `$list`. Pass `$pos: -1`to reject the last occurence.

#### sfnk-list-reverse( $list )
Reverses `$list`.

#### sfnk-map-listify-deep( $map )
Like `sfnk-map-listify()` , but recursive.

#### sfnk-map-listify( $map )
Creates a list of list items from `$map`, where the keys are the first item in each list item of `$list`.

#### sfnk-map-set( $map, $key, $value )
Sets key `$key` in `$map` to `$value`.


The MIT License (MIT)
---


Copyright (c) 2015 Franz Heidl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.