- _"By their nature, switch statements always do N things. Unfortunately we can’t always avoid switch statements, but we can make sure that each switch
statement is buried in a low-level class and is never repeated. We do this, of course, with
polymorphism."_ **- Clean Code, Robert Cecil Martin**

- _The ideal number of arguments for a function is
zero (niladic). Next comes one (monadic), followed
closely by two (dyadic). Three arguments (triadic)
should be avoided where possible. More than three
(polyadic) requires very special justification—and
then shouldn’t be used anyway._ **- Clean Code, Robert Cecil Martin**

- _When a function seems to need more than two or three arguments, it is likely that some of
those arguments ought to be wrapped into a class of their own._ **- Clean Code, Robert Cecil Martin**

- _Duplication may be the root of all evil in software_ **- Clean Code, Robert Cecil Martin**
- _Master programmers think of systems as stories to be told rather than programs to
be written. They use the facilities of their chosen programming language to construct a
much richer and more expressive language that can be used to tell that story._ **- Clean Code, Robert Cecil Martin**

- _The proper use of comments is to compensate for our failure to express ourself in
code. Note that I used the word failure. I meant it. Comments are always failures. We must
have them because we cannot always figure out how to express ourselves without them,
but their use is not a cause for celebration. <br>
So when you find yourself in a position where you need to write a comment, think it
through and see whether there isn’t some way to turn the tables and express yourself in
code. Every time you express yourself in code, you should pat yourself on the back. Every
time you write a comment, you should grimace and feel the failure of your ability of
expression._ **- Clean Code, Robert Cecil Martin**

- _The price of checked exceptions is an Open/Closed Principle1 violation._... <br>Consider the calling hierarchy of a large system. Functions at the top call functions
below them, which call more functions below them, ad infinitum. Now let’s say one of the
lowest level functions is modified in such a way that it must throw an exception. If that
exception is checked, then the function signature must add a throws clause. But this
means that every function that calls our modified function must also be modified either to
catch the new exception or to append the appropriate throws clause to its signature. Ad
infinitum. The net result is a cascade of changes that work their way from the lowest levels
of the software to the highest! Encapsulation is broken because all functions in the path
of a throw must know about details of that low-level exception. Given that the purpose of
exceptions is to allow you to handle errors at a distance, it is a shame that checked exceptions break encapsulation in this way. 
<br>Checked exceptions can sometimes be useful if you are writing a critical library: You
must catch them. But in general application development the dependency costs outweigh
the benefits **- Clean Code, Robert Cecil Martin**
- _The tests
and the production code are written together, with the tests just a few seconds ahead of the
production code_ **- Clean Code, Robert Cecil Martin**

- _The higher your test coverage, the less
your fear. You can make changes with near impunity to code that has a less than stellar
architecture and a tangled and opaque design. Indeed, you can improve that architecture
and design without fear_ **- Clean Code, Robert Cecil Martin**

- _With functions we measured size by counting physical lines. With classes we use a
different measure. We count responsibilities._ **- Clean Code, Robert Cecil Martin**

- _We should also be able to write a brief description of the class in about 25 words,
without using the words “if,” “and,” “or,” or “but.” How would we describe the
SuperDashboard? “The SuperDashboard provides access to the component that last held the
focus, and it also allows us to track the version and build numbers.” The first “and” is a
hint that SuperDashboard has too many responsibilities._ **- Clean Code, Robert Cecil Martin**

- _According to Kent, a design is “simple” if it follows these rules:_
  - _Runs all the tests_
  - _Contains no duplication_
  - _Expresses the intent of the programmer_
  - _Minimizes the number of classes and method_ **- Clean Code, Robert Cecil Martin**

- _All too often we get our code
working and then move on to the next problem without giving sufficient thought to making
that code easy for the next person to read. Remember, the most likely next person to read
the code will be you_  **- Clean Code, Robert Cecil Martin**
