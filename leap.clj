;NOTE(adam): make a function that prints the next 20 leap years

;NOTE(adam): get leap year following argument
(defn getNextLeap [year]
  (def nextLeap (+ year (- 4 (mod year 4))))
  (if (and (= (mod nextLeap 100) 0) (not (= (mod nextLeap 400) 0)))
    (+ nextLeap 4)
    nextLeap))

;NOTE(adam): get list of leap years
(defn leaps
  ([startYear] (take 20 (iterate getNextLeap startYear)))
  ([startYear yearCount] (take yearCount (iterate getNextLeap startYear))))

(println (leaps 1899))
(println (leaps 1999))
(println (leaps 2020 5))
(println (leaps 1940))
