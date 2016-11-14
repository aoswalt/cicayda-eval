;NOTE(adam): function that takes a list of strings and prints them, one per line, in a rectangular frame.

;NOTE(adam):
(defn longer [a b]
  (if (> (count a) (count b)) a b))

;NOTE(adam): right pad a string with spaces to be the longestLength
(defn stringPad [string longestLength]
  (apply str string (repeat (- longestLength (count string)) " ")))

;NOTE(adam): construct a framed message
(defn frameStrings [stringList frameChar]
  (def longest (reduce longer stringList))
  (def longestLength (count longest))

  (def cap (str frameChar frameChar (apply str (repeat longestLength frameChar)) frameChar frameChar))
  (def body (map #(str frameChar " " (stringPad %1 longestLength) " " frameChar) stringList))

  (def bodyCapped (concat [cap] body [cap]))
  (def bodyLined (map #(str %1 \newline) bodyCapped))
  (apply str bodyLined))

;NOTE(adam): multi-variadic function to supply optional arg
(defn frame
  ([stringList] (frameStrings stringList "*"))
  ([stringList frameChar] (frameStrings stringList frameChar)))


(print (frame ["Hello" "World" "in" "a" "frame"]))
(print \newline)
(print (frame ["A" "different" "set" "of" "strings" "to" "test"] "#"))
(print \newline)
