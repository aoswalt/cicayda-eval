;NOTE(adam): a function that translates a text to Pig Latin and back

(defn changeWords [string changer]
  (def stringList (clojure.string/split string #" "))
  (def changedList (map changer stringList))
  (def changedString (reduce #(str %1 " " %2) changedList))
  changedString)

(defn toPigLatin [string] (changeWords string #(str "toPig" %1)))
(defn fromPigLatin [string] (changeWords string #(str "fromPig" %1)))


(print "The quick brown fox -->  ")
(print (toPigLatin "The quick brown fox"))
(print \newline)
(print "Hetay uickqay rownbay oxfay -->  ")
(print (fromPigLatin "Hetay uickqay rownbay oxfay"))
(print \newline)
