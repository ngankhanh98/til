### Do React, Vue, Angular,... have to do heavy first load?

📄 **Not loading a whole HTML page** is the initializing idea of Front-end Frameworks in order to optimize what Just-JavaScript or Multiple page apps can not do.

Multiple page applications makes requests, returns HTML pages as responses, and then renders them. This sounds not so efficient. Front-end Frameworks improve that by not requesting HTML pages all the time. Instead, HTML pages are responded in mostly the first load. Data might be fetched from server and be placed in the rendered templates in the other times, due to DOM manipulation supported by Front-end Frameworks.

The question is: is it worthy doing a bunch fetch from the first time? isn't it suggest that a good endpoint is the one being requested where it needed and responding just enough properties for neccesary data display?

