---
title: 'Learning Golang #4, oder FizzBuzz Kata'
date: 2010-03-09 00:00:00 
tags: golang
layout: post
---
Heute habe ich mir eine [Kata][0] vorgenommen, und zwar FizzBuzz. Ich schreibe mein Golang immer noch extrem kurz und unleserlich. Solche Dinge wie `r[v] = list[v]` lösen ein schlechtes Gewissen bei mir aus, aber trotzdem bekommt ihr hier den Sourcecode ohne irgendwelche Verschönerungen. Wie bei einer Kata üblich kommt erst der Test, dann der Code:

# fizzbuzz_test.go

````golang
package fizzbuzz

import (
   "testing"
)

func TestAnswer(t *testing.T) {
    actual := Answer([]int{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,60})
    expected := []interface{}{1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz","fizzbuzz"}
    for a := range(actual) {
        if actual[a] != expected[a] {
            error(t,"Wrong", expected[a], actual[a])
        }
    }
}

func error(t *testing.T, message string, expected interface{}, actual interface{}) {
    t.Errorf("%s: '%s' != '%s'", message, expected, actual)
}
````

# fizzbuzz.go

````golang
package fizzbuzz

func Answer(list []int) []interface{} {
    r := make([]interface{}, len(list))
    for v := range(list) {
        switch {
            case list[v] % 3 == 0 && list[v] % 5 == 0:
                r[v] ="fizzbuzz"
            case list[v] % 3 == 0:
                r[v] ="fizz"
            case list[v] % 5 == 0:
                r[v] ="buzz"
            default:
                r[v] = list[v]
        }
    }
    return r
}
````

[0]: http://codingdojo.org/cgi-bin/wiki.pl?KataCatalogue
