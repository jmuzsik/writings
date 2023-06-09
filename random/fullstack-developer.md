# when i was reading tech books bc job

Progressive enhancement is a technique where you deliver a basic version of some functionality to a device, and then test if the device can support a more advanced alternative, then enable the enhanced alternative if the test is successful. (Location 498)

Having an effective way to develop plans for the work you’re going to do is the best way to ensure that you approach the work so that it actually meet the needs of the user. (Location 549)

We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value: Individuals and interactions over processes and tools Working software over comprehensive documentation Customer collaboration over contract negotiation Responding to change over following a plan That is, while there is value in the items on the right, we value the items on the left more. —The Agile Manifesto: http://​agilemanifesto.​org/​ When you read the agile manifesto, it’s important to understand what it really means. (Location 573)

Sometimes a user story is hard to define because it covers a wide range of related technology and user journeys. These types of user stories can often be converted into “epics,” which are user stories that have been broken down into (or are being broken down into) a number of smaller, more granular user stories. (Location 694)

Bill Wake proposed the mnemonic INVEST to remember the important characteristics of a good user story. Independent Negotiable Valuable Estimatable Small Testable (Location 706)

An independent user story is one that is achievable without any other user stories being done first. (Location 708)

Negotiability means that a story can be changed, rewritten, or discarded at any point until work starts on it. (Location 710)

A user story must be valuable for it to make any sense. (Location 713)

Some teams go further than simply requiring a story to be valuable and assign “value points” to an item, which are an abstract concept similar to story points that can help with prioritizing items. High value/low cost items tend to be the highest priority, whereas low value/high cost items can be discarded. (Location 714)

Small is another important characteristic of a user story. Many teams will define a rule of thumb for how large a story can be. (Location 719)

The final requirement of INVEST is that a user story must be testable. If a story is not testable, it means there’s no way of figuring out if what the team has implemented is correct, or if it has the right impact. (Location 723)

Scrum are several key artifacts, roles, and rituals. The single most important thing is the backlog, which is a prioritized list of things to work on. (Location 783)

For a feature to be considered ready for development, the following things must be complete: The product owner has prioritized it. UX, product, and dev have developed and agreed upon acceptance criteria for it. The development team has estimated it (or re-estimated, if the scope of the item has changed). The technical lead is happy with the proposed approach, if it impacts the technical architecture. If the feature involves any changes to administrator workflow, the administrators have been consulted. If the feature requires any changes to the data schema, the data architect has reviewed it. Any dependencies on external APIs have been identified. If any new UI assets are needed, they have been identified. An example definition of done For a feature to be considered done, the following must be complete: The code should conform to the coding style guide. All new code should have unit tests written against it, and all unit tests must pass. The tech lead must have reviewed the impact on the cross-functional requirements of the product. The code should have been written by a pair, or reviewed by a peer. The UX designer and product owner should have seen the feature in the QA environment. The tester should have exercised the functionality and smoke tested the product in the QA environment. Browser-based automation tests should have passed in all supported browsers. Any bug tickets identified by the manual QA should have been resolved. (Location 797)

The principles of Kanban are fairly straightforward (although there are many different variations on them): Make all work visible. Limit work in progress. Practice continual self-improvement. (Location 855)

Regardless of how you run a retrospective, there are a few principles to take into account. One is known as the “prime directive” of retrospectives: regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand. The other key piece is that the team should feel that the retrospective is a safe place for them to engage in constructive discussion and suggest improvements. (Location 929)

A backlog is essentially a big, ordered to-do list. The concept of the backlog started in Scrum, but at its simplest, a backlog is ordered such that the most important thing is on the top, and you automatically pick that most important thing off. (Location 971)

In a Planning Poker session, everyone is given playing cards (or an app) with the sequence of story points on them. For each item, each individual on the team chooses a card that reflects the story points they would assign that item, sometimes after some discussion of the exact scope and purpose of a story. The cards are then revealed simultaneously—this is done to reduce influence between team members, so a truly representative sample of the entire team is taken. (Location 1029)

A very effective technique for managing bugs is to either fix them immediately (so bugs always go to the top of the backlog), or decide that it’s not worth ever fixing. The latter can be uncomfortable for some teams, but if a bug is not important enough to fix now, then why would that ever change? (Location 1070)

At its core, continuous delivery is about minimizing the time and friction required to make a change to an application. (Location 1084)

A pipeline might consist of several phases, such as: Discovery, where research is done on an idea to get a high-level understanding of the problem space and what solutions might be necessary; Definition, where formal acceptance criteria and design work yields the necessary information for development work to proceed; Development, where the product is built and functionally tested; Acceptance, where high-level acceptance testing is done and any required stakeholder signoffs are obtained; Deployment, where the change is put into production; Verification, where any analytics are investigated to make sure that the change is having its intended impact. (Location 1086)

It’s often surprising to realize that there’s a strong link between how you plan and go about your work and how you manage your source code in a repository like Git. There are two dominant approaches to managing source code in the world of software engineering. One is often referred to as feature-branching, and the other as continuous integration (CI), or trunk-based development. (Location 1106)

CI was created as an alternative method to address these downsides. Every developer commits to the master branch frequently, usually at least once daily. In a pure application of continuous integration, developers always commit directly to master, but it has become common to use a variant where short-lived feature branches are used as a mechanism for code review. This enables code review before pushing into master, but each branch is very short-lived (often only a few hours) to still enable most of the benefits of continuous integration. (Location 1118)

Agile methodologies focus on only planning what is actually needed right now, leaving you free to plan or re-plan other parts of your project in a way that reacts to change. (Location 1146)

Planning starts with defining a backlog—a prioritized list of what the team will be building—and these items should be structured so that they are not purely technical to allow for them to be prioritized in line with the organization’s goals. (Location 1147)

Both Scrum and Kanban encourage teams to reflect on their workflows and update them often to ensure they meet the unique needs of that team. (Location 1151)

Updated: Apr 16, 2021

UX designers are similar to a traditional visual designer, who can produce high-quality designs and assets for a developer to implement, and sometimes have some front-end development skills themselves. Researchers, or user testers, are typically focused on designing and running studies with potential users to test the suitability of particular designs and proposed experiences. Finally, a UX architect (or information architect) thinks about how the system is structured as a whole and where the information is presented to users based on their needs. (Location 1193)

If the end goal of a UX designer is an aesthetically pleasing look and feel that makes each feature easy and obvious to use, then the ultimate goal of an information architect is making sure each individual component on a page is where a user expects to find it, with minimal ambiguity. (Location 1211)

the main goal of a UX team is to produce a usable web site, and then apply branding and aesthetics on top of that as a “cherry on top.” (Location 1219)

reasons people might come to a web site or use a web app will often put them in a certain mental state or give them expectations about how a thing should work. Designers need to take these perceived affordances into account. (Location 1229)

A content designer goes one step beyond that of a copywriter (although many content designers end up creating the content too), in that they help determine the content that needs to be conveyed. They can help determine the high-level structure of this content within the context of an entire site, as well as the structure of a piece of content itself, and the links between them. (Location 1239)

As the old joke goes, naming things (alongside cache invalidation and off-by-one errors) is one of the two most difficult tasks in computer science, but consistent and clear naming can make it much easier for users to find what they are looking for. (Location 1242)

In organizations without information architects, it is common for different parts of a site, or different sites for the same organization, to be run by different internal teams, and as a result the structure of a web site then reflects the management hierarchy of the organization, meaning that some information might not be where a user expects it to be. This is an example of “Conway’s Law,” which states that anything designed by an organization is destined to mirror the internal corporate structure of that organization. (Location 1248)

Data architects are responsible for defining structures and relationships, but as the name suggests, they work with the raw data underlying an organization. Data architects also usually focus on the needs of the business, rather than that of the users, often addressing on concerns such as removing duplication, security, and accuracy of the data. (Location 1255)

User testing at its core seems deceptively simple. You simply invite users to interact with your web site and give them tasks to complete, watching them as they do so. It’s important to not only watch what they are doing and saying, but also their body language, as this can suggest frustration or other problems that might not be obvious from what they’re saying or doing. (Location 1267)

common web patterns that seem effective have been shown to actually not achieve their goals very well after further scrutiny. This includes patterns such as the “hamburger menu,” icons without a label next to them, and carousels, which have seen widespread adoption. (Location 1297)

common guerrilla testing session might take place in a coffee shop, where (with permission from the owner) you could offer to buy someone a coffee in exchange for 10 minutes of their time, where you observe them using your site or carrying out some common tasks. (Location 1302)

experiments ethically. The general rule of thumb is informed consent: the user must be aware of what they’re being asked to do and agree to take part, with the ability to withdraw from the agreement at any time. The user tests shouldn’t aim to mislead or trick a user, and should treat them with respect. (Location 1307)

A/B testing involves presenting a number of variants (often two) to a user along with a “control” case of the current site with no changes. A subset of users on your site are randomly selected to take part in the trial and then given one of each variant. (Location 1312)

The statistical significance of the result needs to be determined in order to evaluate whether the relevance of these numbers. This concept comes from the idea of “sampling.” In this case, a sample is a subset of your user base that undertakes the experiment. It’s impossible to pick a perfectly representative subset, so a level of fuzziness is applied to the results to determine if differing results are a result of the different subsets just behaving in subtly different ways, or if there is actually a real change there. When analysis finds that two numbers legitimately represent a difference in the performance of two versions, this is said to be “statistically significant.” With few participants, the fuzziness of the numbers is more intense, so it is harder to determine if one number is accurate or not, so a large number of participants is needed to determine if a difference is actually significant. A/B testing is therefore inappropriate on low-traffic areas of a web site, although by running tests for a long period of time (perhaps as long as several weeks) you can increase the number of participants and hence get more accurate results. (Location 1318)

A famous example was an A/B test Facebook undertook that involved showing posts with positive and negative sentiment in users’ feeds, and then seeing if that impacted the sentiment of the posts that user then made. Many decried this as bringing harm by making people sadder. (Location 1336)

“principle of least surprise” comes into play in user experience; a feature should work the way the user expects it to work, and consistency across your app, (Location 1350)

When it comes to specifying layout, alignment of items on the page can have a pleasing aesthetic effect. This is sometimes referred to as a rhythm, and pages that do not have a rhythm can look messy and jarring. (Location 1376)

However, until Internet Explorer 6, Microsoft implemented its own interpretation of the box model, where the width defined everything up to the border, and only the margin was added on. Figure 3-4 The CSS box model Microsoft eventually replaced its implementation with the standardized one, but many felt that the Microsoft definition was more useful, and in CSS3, the option to change the CSS box model was introduced with the box-sizing directive. (Location 1412)

In atomic design, there are several levels of hierarchy: Atoms Molecules Organisms Templates Pages An atom is the smallest unit of design, and often has one-to-one mapping with a HTML element—for example, a generic button or text field. (Location 1422)

Atoms are combined into molecules, which are a more useful component because they represent some distinct functionality. A molecule might be an address finder or a search box, something that represents a distinct part of user functionality but not so much that it becomes a stage of the journey in its own right. (Location 1425)

Organisms are distinctive elements of a page that may be reusable in theory, but are often only used once. (Location 1428)

Templates put organisms into a structure (without content) that is essentially a whole view for the user. Pages are templates that have been populated with content, (Location 1430)

The good thing about this kind of structure is that it maps well into the ways of implementing design specifications using HTML and CSS. Atoms can be implemented as CSS classes, which are applied to plain HTML elements. Molecules and organisms are often implemented either as template partials or as components in virtual DOM libraries like React, then get composed together into templates that are populated with real data to make a page. (Location 1432)

The BBC’s Global Experience Language, for example, uses names such as “Primer,” “Canon,” and “Trafalgar” as typography identifiers. (Location 1447)

The underlying pixel implementation is called a “display pixel,” but CSS pixels are known as “reference pixels.” A reference pixel is defined as a single pixel on a 96dpi screen that is at arm’s length from the viewer. This might seem complicated, but it allows you to design a site that will appear roughly the same size regardless of the pixel density of a screen and the viewer’s distance from it. Mobile phones often have a smaller physical pixel size, but as mobile phones are held closer to the eyes, the ratio is maintained, and devices with “retina” or high-DPI screens will map a single CSS pixel onto multiple device pixels. It is important for designers to understand this, as this means if a designer is working on a responsive design with a specific screen size in mind, it is the CSS pixels that matter, not the display pixels. For example, when the iPhone 4 (the first “retina” iPhone) came out, you still specified dimensions as if the width of the device was 320px, despite the actual screen being 640 physical pixels across. (Location 1460)

Although the microservices system seems more complex, this is only because it forces you to make interactions between services explicit, rather than the potentially complex hidden interaction model within a single app. (Location 1523)

Trying to force technology choices into an architecture before the concepts, interactions, and systems are identified can lead to decisions that compromise the goals of making a good software architecture. (Location 1539)

MVC, the view deals with actually presenting the detail to a user (in a web framework, this is often HTML templates), whereas the controller deals with getting all the data and values that are needed to create a template, and performing any actions that a request may have asked for. (Location 1550)

The “fat model, thin controller” approach can make refactoring an architecture much easier at a later date, as it can allow you to extract concepts into their own APIs, which are shared across multiple components. (Location 1554)

In the popular React+Redux combination, it is common to structure your app such that the Redux store is your model, and then have the React components as the view. The Redux connect() function then maps the state in the store and dispatchable actions to properties, and this mapping provides the role of the controller. However, views can also nest other components, which themselves might be wrapped in a connect(), so a view can include another controller. This hierarchical method might look like MVC close up, but from further away it becomes clear it is not, though the separation of concerns remains useful. (Location 1572)

Domain-driven design (DDD) is a methodology in software engineering that helps manage these problems. At the core of DDD is the concept of the domain: the things that your organization knows and does that are relevant to a project. (Location 1587)

By starting at the level of what people in your organization currently do and how they refer to things, and using this as a basis for building your models, it becomes easier to build software that matches the actions people actually want to do. (Location 1589)

Sometimes, this collection of models is known as an ontology—that is, the structure that defines your domain. (Location 1591)

you should instead do is translate between the two contexts, using a method that accepts the form data of that model, and returns a new object that makes sense in the context of the server-side code. This translation can often be fairly simple, but is also a good place to do things like authorization checks or validation. Performing this translation as things move between your contexts can reduce bugs, as each context comes with its own set of assumptions, and moving data between contexts without translating it appropriately can mean different assumptions on that data that are no longer true. (Location 1599)

Multiple applications accessing the same database directly can cause problems for data integrity and deployments, especially if any schema changes are involved, so the API that implements the business logic wraps the database and becomes the single point of interaction for other components. Remember that the goal here is for each component to be able to grow and move independently of each other, and this encapsulation enables that. (Location 1616)

Once you identify which journeys a user wants to take, they can come together into a single front-end component. (Location 1621)

However, one of the key goals we want to achieve is the ability to grow each part of the system independently, without introducing risks to other parts of the system, so we can maintain our pace of change. (Location 1628)

Ultimately, you should be able to trace every interaction with a user, data, and response to an action that is generated through the entire system, including its real-world components. (Location 1648)

user journeys, and it’s useful to identify which front-end component each journey belongs to, consider which concepts it needs to interact with, and determine the nature of that interaction. (Location 1653)

In a typical web architecture, there are three ways for components to interact: asking for data; taking an action synchronously, such as when the result of the action, or knowing when it was completed, matters; or taking an action asynchronously, when either the result doesn’t matter, or the time taken to perform this action is so long that it makes no sense to wait for it to finish before showing the user. (Location 1654)

If there are two components that seem to communicate with each other a lot, this could indicate that they actually belong in the same component. On the other hand, if there’s a central component that everything seems to talk to, this may suggest that this component does too much, and there could be smaller elements that should be extracted, or that perhaps it’s capturing a concept at too high a level of abstraction. (Location 1668)

The most common use case for ESBs is integrating many distinct components together, as the ESB can hide the complexity of integration, but you should instead consider having well-defined APIs on these services, as this can allow for more independent scaling of systems. (Location 1682)

An application that uses the facade pattern doesn't actually do much by itself; it simply exists to present a common API on top of another service and translate between that new API and the original one. (Location 1695)

Updated: Apr 17, 2021

it’s often very effective to build each application to be stateless; for example, not storing sessions server-side, or in a database that lives outside your application. (Location 1737)

The Circuit Breaker Pattern In real life, a circuit breaker is something that trips when it detects failure. The software circuit breaker is fairly similar. When the circuit breaker is "closed," everything operates normally, but when failure is detected, the circuit breaker "opens," stopping any requests to that backend service. (Location 1760)

SOLID refers to five different concepts: (Location 1817)

The single responsibility principle, for example, is one of the driving factors behind microservices. The principle states that each individual class in your system should only take responsibility for a single thing. A (Location 1821)

According to the open/closed principle, a particular bit of code should be open for extension but closed for modification. (Location 1825)

It dictates that each other class that uses your class should be able to extend its functionality beyond what is provided to satisfy its use case, without having to modify the module it is inheriting from. (Location 1827)

the Liskov substitution principle (Location 1830)

description can seem intimidating, it simply means that if you extend a module, or provide modules with the same interface and intend for them to be used interchangeably, then the assumptions that the user of that class has about how to interact and use it must hold between everything that implements (Location 1833)

basis. The 'I' in SOLID is the interface-segregation principle, which says that a user of an interface should not be required to depend on more methods than it actually needs in order (Location 1845)

both interfaces. (Location 1850)

frameworks than the concept itself. With dependency inversion, you are not responsible for finding the classes or modules that you need to do your (Location 1854)

The goal of a systems architecture is to act as the most effective way to solve a problem, while remaining flexible enough to respond to future change. (Location 1937)

An analogy that often arises in relation to user data is that of oil, often focusing on the perceived value of data and how it's desirable to "mine" it. When refined, oil is very useful and valuable, but the flip side is that in its crude form, it is toxic, and if spilled, can destroy entire ecosystems. Collecting and processing data should be considered risky, and the easiest way to reduce that risk is to reduce the amount of data you are collecting. (Location 1982)

"Your app makes me fat" was the claim made in a famous blog post by Kathy Sierra,2 who highlighted an academic study showing that people who have to do more difficult tasks (hence, have a higher cognitive load) show less willpower (for example, the ability to reject unhealthy food) than those who do simpler tasks. (Location 2033)

As the blockchain is decentralized, a transaction has to propagate through the blockchain for it to appear in the record of truth. At the time of writing, each transaction uses the same kWh of electricity as a typical house uses in a day. (Location 2054)

When organizations ran their own data centers, energy usage was at least visible to that organization, often as a cost to be minimized, in addition to any environmental impact. In the cloud, it’s hard to see this impact, much less consider it, but it is important to do so. (Location 2057)

When a team undertakes a retrospective, the prime directive is a good principle to follow in most interactions with people: “we assume that everyone did the best job they could with the knowledge they had at the time.” (Location 2070)

Using an open source component as a library within a commercial product is often seen as acceptable, but any improvements or changes made to the library itself are expected to be contributed back to the main project, so others can benefit from them. (Location 2081)

PHP deserves special mention here, as the entire language is based on the idea of string interpolation. However, in an MVC world, mixing the domain logic with the templating language can make the code harder to maintain due to working in different domains in the same file. (Location 2225)

As backwards compatibility (supporting older browsers) is often an important concern in web development, writing CSS often requires writing “lowest common denominator” CSS, which lacks developer niceties, like variables and mix-ins. (Location 2338)

BEM stands for Block Element Modifier, and may just be seen as a naming scheme, but it goes beyond that. In BEM, a high-level component is called a block, and corresponds to a reusable or distinct component within your page structure. A block is usually made up of other HTML elements, which may look like this: <div class="product-card"> <h3 class="product-card__name">...</h3> (Location 2382)

BEM’s naming scheme, which is “block\_\_element--modifier,” (Location 2392)

BEM encourages using very flat CSS, where most selectors are a single class (perhaps with pseudo-elements) to manage specificity in this way. This can lead to verbose HTML, as an element might need many CSS selectors if it combines different classes, but BEM proponents believe this is a good trade-off. (Location 2439)

One approach to CSS-in-JS is for the styling to be managed at run-time by the JavaScript, which can have extremely negative performance implications, especially for responsive designs. An alternative approach is to have the build tool look at where the styles have been defined in JavaScript and extract them into a CSS file, which then behaves like a traditional bundle in the browser. (Location 2511)

In the event a component needs to be parameterized, this can be done by passing query parameters in the URL and then letting the component that renders the contents of the IFrame react appropriately. A JavaScript API (window.postMessage) also allows the parent page to communicate with the embedded IFrame if further interactivity is required, but otherwise access to the DOM of the parent or the child can be limited unless they are hosted on the same domain. (Location 2527)

Web components are a complex and evolving beast. Styling is handled using something known as the shadow DOM, which allows you to specify styles that only apply within the scope of that HTML element, but also stops document-level styles from affecting the contents of the custom element. (Location 2535)

Finally, it is interesting to note that the original purpose of media queries was to specify a “print” stylesheet—one that only applies when a page is printed out. (Location 2592)

Updated: Apr 19, 2021

Many standards were written based on the idea that web pages were simply documents, and then tools arose that exploited this, such as accessibility toolkits and search engines. (Location 2600)

Progressive enhancement is the idea of layering functionality on top of a simple document to give a richer experience. (Location 2604)

Progressive enhancement is all about identifying the core functionality of your web site and making it available to all, and then applying any additional functionality or nice-to-haves as layers beyond that. (Location 2628)

If we try to apply the technique in reverse, then the value of mobile-first becomes clear. If we assumed desktop first, and then used hovering as part of the UI, then when a mobile variant is developed, either a workaround to enable the same interaction would be needed, which may not be obvious for mobile users, or significant rework would need to be done to the interface to take into account the fact that the user will not always be able to hover. By addressing designs in a mobile-first context, we either eliminate the use of desktop-only interactions like hover, or only use them for additional “nice-to-haves” rather than critical parts of the functionality. (Location 2669)

For example, if you are building a “find a store” feature, then you may want to start with a simple search form that has no dependency on JavaScript, and only expose a “Use current location” button if the Geolocation API is available. This is a technique called feature detection, where a certain area of functionality on your web site is only enabled when a corresponding feature is detected in the user’s browser. (Location 2691)

“cuts the mustard” technique. This goes beyond the simple “does JavaScript run” approach; instead, a test is run to determine if the browser has a baseline support for modern JavaScript. Using this kind of technique can help with testing, because instead of a large combination of browsers and devices with different features to test, testing can be divided into browsers and devices that “cut the mustard” and those that don’t. Browsers that don’t cut the mustard get a non-JavaScript experience, which is better than having a subtly broken web site, and gives you an easier way of confirming your site works for search engines and in other situations where JavaScript cannot be relied upon. (Location 2696)

The ethos of Google and other search engines is that the things that matter to humans are the things that matter to the engine. Ultimately, technical methods cannot correct for bad content, so getting the right content, including effective headlines and a good standard of English, is the single most important thing you can do. The second is to make sure that Google can understand your page. Although search engine crawlers can execute some JavaScript, it is not clear how much of the language they support. Fortunately, making a site easily parseable by browser—using techniques such as progressive enhancement—and ensuring that it is accessible means that search engines can also parse it, so a web site that is well-designed for human users should also work well for SEO purposes. (Location 2742)

if your site is not responsive to the size of a mobile screen, it will not appear as high for searches conducted from a mobile phone. (Location 2757)

Google in particular will punish sites that are slow to render and load, because users often will not wait more than a few seconds for a site to load. (Location 2758)

In terms of actually getting those external sites to link to yours, this is a completely non-technical problem! Linking to the site from social media and using press releases to link to your content, or even other sites linking back, will help. (Location 2765)

TDD is based on a cycle of “red-green-refactor.” At first, you write a test for the new functionality you want to add, which should fail (go red), and then you write the simplest bit of functionality to make the test pass (go green). Once you have done this, you can refactor your application and test code to tidy it up and remove duplication. (Location 2840)

those who practice behavior-driven development, will often start by writing a test that’s wider than one particular module, and then write the necessary tests with a smaller scope that satisfies the requirements of the bigger test—this is the outside-in approach. (Location 2845)

Others prefer to start at the smallest unit and then write integration tests to wire the modules together once they have been built, referred to as the inside-out approach. (Location 2846)

“Arrange-act-assert” (sometimes called “given-when-then,” especially when used with behavior-driven development , discussed later in this chapter) is a common pattern for arranging your test code. (Location 2852)

without automated tests, manual QA is needed, and it is too slow and expensive for the fast-changing nature of a digital organization. Test automation, especially for rote checks, is therefore an essential part of modern product delivery. (Location 2872)

At the bottom of the pyramid are unit tests. These test a single unit in isolation but test each system exhaustively. When it comes to unit tests, it’s important to test only an individual system in isolation. However, many classes will have dependencies on others, and in this case, a technique known as mocking is used. (Location 2894)

Mocks can be used to ensure they are interacted with in the correct way, or return canned responses to easily but exhaustively test that a class behaves correctly under all conditions. (Location 2897)

Integration testing is used to ensure that a cluster of modules actually interact together in the expected way. (Location 2904)

Integration testing allows a test to run against real instances of their dependencies, such as real files on disk, a real database, or other dependencies. However, integration testing does not need to be as exhaustive as unit testing. Rather than testing each possible configuration of inputs and outputs, the value from integration testing comes from ensuring the assumptions on the interactions that have been mocked are correct, so it’s only tests for these interactions that must be tested. (Location 2906)

End-to-end tests interact with systems in the same way a user would. For an API, this could be by simply making HTTP requests from a separate program, but for a web site, this can involve using either a headless browser (a type of browser that can be controlled programmatically, but never needs to show a visual representation of the web page to a human). (Location 2914)

Selenium allows for real web browsers to be controlled remotely, and to query the state of a web page to make assertions on the state. It is also common to run the same test suite against different browsers to ensure cross-browser compatibility. (Location 2918)

You should write as few tests as possible at this level, but enough to cover the most important parts of the system, similar to the approach taken with integration versus unit tests. For example, if you have an HTML form, it is important to test the success and failure cases at the end-to-end level, but testing every single validation, and every way in which a validation can fail, is best performed at a lower level of the pyramid, such as the unit test level. (Location 2921)

Using the Page Object Model, you create an abstraction layer over your UI to hide any implementation details, and then create a test using that abstraction layer. This allows you to change UI implementation details without breaking a large number of tests at once, as you can refactor the abstraction layer at the same time, as well as adding clarity to your test code. (Location 2930)

The three amigos are a product representative, a developer, and a tester, the idea being that the product representative is the one who knows and understands the problem, the developer can ask questions in order to elicit a shared understanding, and the tester can guide the amigos to explore the whole problem space and interactions with other parts of the system to ensure all parts are covered. (Location 2977)

One popular technique for specifying acceptance criteria is to use the Given-When-Then form of specification. (Location 2994)

The two major parts of manual testing are functional testing and regression testing. Functional testing checks that any changes that have been made behave as expected, and make sense within the context of the whole; regression testing checks that any pre-existing functionality has not been broken by the new feature. (Location 3019)

exploratory testing, the QA takes on the mindset of a user, and does complete end-to-end tests of various parts of functionality, ensuring that everything happens as expected (not just as specified). (Location 3037)

Selenium is useful for testing whether or not content appears on a page and is visible, and it is possible to write tests that make assertions regarding the position (in terms of x and y coordinates) of a particular element on a page, but these tests will be very brittle. (Location 3045)

The general idea is to take either entire pages or individual components on a page and take a “known-good” screenshot of that page or component. As changes are made, the tests are then re-run and new screenshots taken. If any screenshots have changed, then the user of the testing tool is informed, and either approves the change or flags a regression. (Location 3052)

The kinds of things you may classify as cross-functional include security, usability, accessibility, performance, ability to handle load, and device compatibility. (Location 3062)

Load testing (sometimes called volume testing) is a type of testing where the application is given a lot of simulated traffic to check that it behaves correctly under load. (Location 3078)

For testing the performance of your front-end code, a suite of testing tools known as RUM (real user monitoring) allow you to capture analytics on statistics from real devices, which can be much nosier but give you a better idea of how your site performs on a wide range of real-world devices. (Location 3097)

Behavior-driven development takes test-driven development a step further and adds specification at a higher level of abstraction. TDD might focus on unit testing, but BDD usually looks at integration or end-to-end testing. (Location 3111)

Updated: Apr 20, 2021

Fortunately, a technique known as source maps was introduced that allowed in-browser debuggers to help map the minified or transformed JavaScript back to the original. (Location 3231)

Fortunately, new browsers support “web workers,” which are a way of bringing a thread-type structure to JavaScript. Web workers can be thought of more as background processes than as threads. They run in a more constrained environment, without access to the full set of browser APIs. Most importantly, the web worker does not have access to the DOM to alter the page directly. There is also no shared state, though messages can be passed back and forth between the main JavaScript context and the workers. (Location 3260)

A service worker is a JavaScript application that runs in the background of the browser, without access to the DOM. It behaves like a proxy server, in that all requests for the page or domain it was registered for go through it, meaning that the service worker can decide how to handle caching for requests. Service workers are inherently asynchronous. They receive events from the browser, and then call respondWith() on the event with promises that either resolve with a response to the request that event signifies, or reject if there’s an error. (Location 3270)

For read-only web sites, offline-first can be quite simple, requiring periodic downloads of certain data. This data can then be stored using the IndexedDB API from the service worker and accessed in the client. The Background Sync API was designed for exactly this use case, but at the time of writing, it is an extremely new API without widespread support. (Location 3292)

When a sync occurs, the service worker would check for messages in a pending or outbox table in IndexedDB and then fire them, marking them as successful when completed. (Location 3299)

The DOM is basically a tree of JavaScript objects that is exposed on a global object called window that represents the HTML structure of the page (starting at window.document for the <html> tag) and other HTML APIs. You manipulate the page by altering this tree—for (Location 3311)

Each HTML element has a corresponding class in JavaScript that offers an API, as well as some common APIs that apply to all elements (Location 3316)

When a user clicks on a button, the event is first “captured” through all of the parent nodes until it reaches the target, and then “bubbles” up, so that the event listeners on the button, then on the parent node of the button, then on its parent, and so on, are called, all the way back to the root of the DOM tree. (Location 3326)

The major downside to JavaScript’s single-threaded nature is that on a multi-CPU server, it is limited to using only one CPU , and if you want to utilize all the CPUs on a multi-core system, you will need to start up multiple processes of the app (fortunately, Node’s cluster module allows you to share a port between all of these processes). This does mean that anything kept in-memory will not necessarily be available in response to future requests from a user, as a different process on the same box may serve that request. For storing any information that may need to persist beyond multiple requests, an external caching server such (Location 3346)

With an external caching server in place, it is as easy to scale to multiple boxes as it is to scale to different processes. This approach is called horizontal scaling, (Location 3352)

The biggest difference between JavaScript in the browser and JavaScript on the server is the DOM. There simply isn’t one on the server (nor would it make sense for there to be one!). Instead, Node has a completely separate standard library that provides functions that make sense on the server, but not on the browser, such as opening raw TCP sockets and accessing files. (Location 3354)

When something is defined inside of a function, it only remains visible inside of that function, so to avoid putting everything onto window, modules were instead wrapped in a function that then became immediately invoked: (Location 3373)

Despite null being a type, typeof null === 'object' is true. This is a result of a bug in the initial implementation of JavaScript that was left too long, and now cannot be fixed without breaking legacy code. (Location 3479)

Symbols were added in ES6 as a way of uniquely identifying keys on objects. The main difference between strings and symbols is that two symbols are not identical even if they have the same value. (Location 3497)

An instance of a JavaScript class is an object that has a prototype. However, this prototype is itself just an object, so it can itself have a prototype. This is called the prototype chain, and when you access a JavaScript object, the prototype chain is followed until the first thing with the name you’re asking for is found. Ultimately, the last object you define in a chain will have a prototype of JavaScript’s built-in Object, which itself has a prototype of null, indicating the end of the chain. (Location 3592)

One advantage of JavaScript in this context is that it allows you to switch between class-based, procedural and functional styles with ease, and even use them in combination with one another. (Location 3612)

At the core of functional programming is the idea of a function. A function is something that, for a given input, always returns the same output. (Location 3618)

A closure is simply a function that has access to the scope of where it is defined. (Location 3634)

Scope determines which functions can “see” a particular variable or function. (Location 3639)

immutability, in that once an object or thing is created, it should never change as a side effect or something else. Instead, a new object is created as the result of the operation. (Location 3705)

The loosest coupling is one where there is no interaction whatsoever, but components often have to at least communicate state or changes to each other. (Location 3735)

directional flow; the state changes may be started by an action being dispatched in a component, but the actual state changes only happen in one direction, rather than a component changing the state or data model directly, as happens in a two-way binding system. (Location 3777)

Updated: Apr 21, 2021

If you are using macOS, then this is a built-in feature of the operating system known as VoiceOver. Pressing ⌘ + F5 will toggle this feature on and off, and you can then use a keyboard to move around your web browser. (Location 4304)

Updated: Apr 22, 2021

Idempotence means that making the same request should always have the same result. (Location 4507)

OPTIONS doesn’t actually change the state, but will tell you what methods can be used on a resource. It is also used by browsers in a technique known as CORS preflight, where the returned headers are checked for the cross-origin policy to determine whether or not the actual request should be allowed. (Location 4511)

GET requests can be cached, so should never be used to change content or perform an action (as you’ll be unsure if the request actually reached the server or was just served by a cache). (Location 4523)

POST is not idempotent, as submitting the same request several times will cause that action to be triggered that same number of times. (Location 4544)

WebSockets allow a browser to set up a connection to a server that allows for two-way conversations by sending messages to and from the server, rather than having to make a new connection for a request, which long polling forces you to do. (Location 4710)

The method I just described is based on the idea of sending the initial state and then subscribing to changes. (Location 4712)

One common solution to this is to not remove an item from the cache at the moment it expires, but to instead mark it as stale. The first client to read from the cache after the item goes stale then acquires a lock and makes the request to refresh the cache. In the meantime, that client, and any other that sees the stale item in the cache once the lock has been acquired, serves the stale item to the client. This is known as “stale-while-revalidate.” Retaining stale items in the cache also allows you to use a related technique, known as “stale-on-error.” If your API starts having issues or crashes, then the front end can still display information by using the stale information in the cache. (Location 4783)

Brewer’s CAP Theorem applies. This theorem states that a service can only ever have two of the following qualities: consistent, available and partition tolerant. It cannot be all three. Consistency here means that a system will always return the results of the most recent write to any read (or an error, if it knows it cannot be filled); availability means every request receives a non-error response (although there is no guarantee that it is consistent); and partition tolerant means that if communication is lost between different parts of the system, the system continues to operate. (Location 4859)

Relational databases exemplify the philosophy that database transactions should be ACID, which means that consistency is chosen over availability, and NoSQL databases often determine that transactions should be eventually consistent, where availability is chosen over consistency. (Location 4864)

As an application receives an event, it then updates its own database, often discarding any information it does not need. (Location 4929)

When using replication, a second database server (historically known as a slave, but more recently as a replica) runs, having its own copy of the database and connecting to the first server (historically the master, but more recently referred to as a primary), and then makes any changes on its own copy that the primary server makes. (Location 5032)

A systems architecture should identify where data is being stored in your app, and care should be taken not to accidentally introduce another store as part of your application, making sure all state lives in an appropriate database. (Location 5070)

Updated: Apr 23, 2021

Security professionals have produced “Top N” lists for common types of security vulnerabilities, and simply familiarizing yourself with these lists and iterating over them will address the most common types of errors. The two most popular lists are the OWASP (Open Web Application Security Project) Top 10, which is focused mostly on web development, and the CWE (Common Weakness Enumeration) Top 25, which is more general for all types of software. (Location 5286)

Data can be considered to be “in-transit” (moving between systems), or “at rest” (stored on disk). (Location 5354)

One issue with passwords is that the only way to check whether or not someone knows a particular secret is if you yourself also know the secret. In order to do this, we need to store the password so we can check that the password the user gives us is correct. (Location 5415)

Although it’s impossible to reverse a hash, an attacker could take advantage of the fact that most passwords are dictionary words, and instead simply compute the hash of every word in the dictionary and then check if any hashes match. (Location 5422)

take longer on long passwords, so an attacker can try using passwords that are several megabytes in size which could take minutes to hash and cause your site to crash—but (Location 5440)

The idiom “many eyes make all bugs shallow” is popular, but when a vulnerability in a large open-source software occurs, it is often higher profile, so carries a higher risk. (Location 5520)

Updated: Apr 24, 2021

Vagrant is a fairly simple concept at its core—it creates virtual machines on your local machine from base images (e.g., a fresh, unconfigured Ubuntu or CentOS install, though for larger enterprises, this can be some other standard image), and then runs a script (or series of scripts) to provision it. It should be possible to configure a “Vagrantfile” that allows any new developer on your team to simply run vagrant up and have a fully running dev environment by the time the command has completed. (Location 5757)

Continuous delivery is a set of engineering principles that aims to reduce the time an organization takes to make a change to software. Continuous deployment is a technique where every change is automatically deployed from development into live. (Location 5955)

at the core of continuous delivery is the concept of a pipeline, through which a feature or change travels from inception to delivery. Each stage of the pipeline features automation of rote tasks to minimize the risk and cost of an item going through the pipeline. (Location 5958)

Continuous integration is predicated on the idea that merging is risky, and therefore advocates continually committing (“integrating”) to a single branch, at least daily, that all releases are then made from. Continuous delivery is predicated on the idea that releases are risky, so releasing often means you are forced to mitigate that risk in your process. (Location 5971)

Heroku’s “12 factors,” which are concerns about how an application runs that allow it to be managed through multiple environments and easy to support. (Location 5996)

Updated: Apr 26, 2021

All too often, teams operate with a “works on my machine” mentality, rather than accepting joint responsibility for the good of the organization and its users. At its very core, DevOps aims to break down those barriers, with more reliable software and a short time to fix issues when they do occur, being the aim. (Location 6030)

When building a system, you should consider how you will detect and diagnose any operational issues. The most common ways to do this are to emit useful logs and metrics that can be collected and searched, and to use monitoring tools that run checks against the system to catch common failures. (Location 6211)

Unlike user stories, which express a change from the perspective of a user, hypotheses go one level deeper and express a change in terms of a question. (Location 6315)

Throughout my career, I have learned that what we do as software developers isn’t write code, but rather develop software to solve people’s problems. (Location 6341)
