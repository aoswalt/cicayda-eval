;NOTE(adam): a function that translates a text to Pig Latin and back

;NOTE(adam): change each word in a string with the function
(defn changeWords [string changer]
  (def stringList (.split (.toLowerCase string) " "))
  (def changedList (map changer stringList))
  (def changedString (reduce #(str %1 " " %2) changedList))
  (str (.toUpperCase  (str (first changedString))) (apply str (rest changedString))))

;NOTE(adam): move first character to end and append "ay"
(defn toPigLatin [string]
  (changeWords string #(str (apply str (rest %1)) (first %1) "ay")))

;NOTE(adam): strip ending "ay" and move last character to beginning
(defn fromPigLatin [string]
  (changeWords string #(apply str (last (drop-last 2 %1)) (drop-last 3 %1))))


(print "The quick brown fox -->  ")
(print (toPigLatin "The quick brown fox"))
(print \newline)
(print "Hetay uickqay rownbay oxfay -->  ")
(print (fromPigLatin "Hetay uickqay rownbay oxfay"))
(print \newline)
