;NOTE(adam): function that takes a list of strings and prints them, one per line, in a rectangular frame.

(defn longer [a b]
  (if (> (count a) (count b)) a b))

(defn stringPad [string longestLength]
  (apply str string (repeat (- longestLength (count string)) "-")))

(defn frame [stringList]
  (def longest (reduce longer stringList))
  (def longestLength (count longest))
  (def cap (str "**" (apply str (repeat longestLength "*")) "**"))
  (print cap)
  (print \newline)
  (map #(str "* " (stringPad %1 longestLength) " *") stringList))

(print (reduce longer ["different" "strings"]))
(print \newline)
(print (frame ["Hello" "World" "in" "a" "frame"]))
(print \newline)
