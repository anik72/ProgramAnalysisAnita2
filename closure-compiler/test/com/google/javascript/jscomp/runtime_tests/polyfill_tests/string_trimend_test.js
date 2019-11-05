/*
 * Copyright 2019 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.module('jscomp.runtime_tests.polyfill_tests.string_trim_end');
goog.setTestOnly();

const testSuite = goog.require('goog.testing.testSuite');

testSuite({
  testTrimEnd_noChange() {
    assertEquals('a', 'a'.trimEnd());
    assertEquals('a', 'a'.trimRight());
    assertEquals('ab', 'ab'.trimEnd());
    assertEquals('ab', 'ab'.trimRight());
    assertEquals('a b', 'a b'.trimEnd());
    assertEquals('a b', 'a b'.trimRight());
    assertEquals(' <-', ' <-'.trimEnd());
    assertEquals(' <-', ' <-'.trimRight());
    assertEquals('\t<-', '\t<-'.trimEnd());
    assertEquals('\t<-', '\t<-'.trimRight());
  },

  testTrimEnd_change() {
    assertEquals('->', '-> '.trimEnd());
    assertEquals('->', '-> '.trimRight());
    assertEquals('->', '->         '.trimEnd());
    assertEquals('->', '->         '.trimRight());
    assertEquals('->', '->\t'.trimEnd());
    assertEquals('->', '->\t'.trimRight());
  },
});
