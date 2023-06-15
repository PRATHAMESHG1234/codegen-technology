export const courses = [
  {
    course: 'JAVA FULL STACK',
    title: 'Core Java',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Java Basics',
        points: [
          'Introduction to Java programming language',
          'Understanding data types and variables in Java',
          'Control flow statements: if-else, switch, and loops',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Object-Oriented Programming',
        points: [
          'Classes and objects: creating and using objects in Java',
          'Inheritance: extending classes and implementing inheritance',
          'Polymorphism: method overriding and dynamic method dispatch',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Exception Handling',
        points: [
          'Understanding exceptions: types and handling mechanism',
          'Using try-catch blocks to catch and handle exceptions',
          'Throwing and handling custom exceptions',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: Language Fundamentals',
        points: [
          'Understanding data types and their usage in Java',
          'Variables: declaration, initialization, and scope',
          'Operators: arithmetic, relational, logical, and assignment operators',
          'Control statements: if-else, switch, while, do-while, and for loops',
          'Arrays: creating and manipulating arrays in Java',
        ],
        isOpen: false,
      },
      {
        title: 'Module 5: The Java Library: String Handling',
        points: [
          'String class and its methods: creating, manipulating, and comparing strings',
          'StringBuffer and StringBuilder classes: mutable string manipulation',
          'Regular expressions: pattern matching and string manipulation',
        ],
        isOpen: false,
      },
      {
        title: 'Module 6: Object-Oriented Programming (Advanced)',
        points: [
          'Interfaces: defining and implementing interfaces in Java',
          'Abstract classes: creating and extending abstract classes',
          'Nested and inner classes: using nested classes and inner classes',
        ],
        isOpen: false,
      },
      {
        title: 'Module 7: Packages',
        points: [
          'Creating and organizing code into packages',
          'Importing and accessing classes from different packages',
          'Package visibility and access modifiers',
        ],
        isOpen: false,
      },
      {
        title: 'Module 8: Exception Handling (Advanced)',
        points: [
          'Checked and unchecked exceptions: handling different types of exceptions',
          'Exception hierarchy and exception chaining',
          'Using try-with-resources for automatic resource management',
        ],
        isOpen: false,
      },
      {
        title: 'Module 9: Utilize the CPU time using MultiThreaded Programming',
        points: [
          'Understanding threads and multi-threaded programming',
          'Creating and managing threads in Java',
          'Synchronization: thread safety and handling concurrent access',
        ],
        isOpen: false,
      },
      {
        title: 'Module 10: The Collection Framework',
        points: [
          'Introduction to collections: List, Set, and Map interfaces',
          'Using ArrayList, LinkedList, HashSet, and HashMap',
          'Iterating and manipulating collections',
        ],
        isOpen: false,
      },
      {
        title: 'Module 11: Using Comparator interface',
        points: [
          'Custom sorting using Comparator interface',
          'Implementing comparator for custom object sorting',
          'Sorting collections using Comparator',
        ],
        isOpen: false,
      },
      {
        title: 'Module 12: Network Programming',
        points: [
          'Introduction to network programming in Java',
          'Working with sockets: TCP and UDP communication',
          'Building client-server applications',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'JAVA FULL STACK',
    title: 'Advanced Java',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Multithreading',
        points: [
          'Introduction to Multithreading: Understanding the concept of executing multiple threads concurrently',
          'Thread Class and Runnable Interface: Creating and managing threads using the Thread class and implementing the Runnable interface',
          'Thread Synchronization: Synchronizing access to shared resources and preventing thread interference',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Java Generics',
        points: [
          'Introduction to Generics: Understanding the need for generics and their benefits in type safety',
          'Generic Classes and Methods: Creating classes and methods that can work with different types using generics',
          'Wildcard Types: Using wildcard characters to handle unknown types and provide flexibility',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Java Database Connectivity (JDBC)',
        points: [
          'Introduction to JDBC: Understanding the basics of JDBC and its role in connecting Java programs with databases',
          'Connecting to a Database: Establishing a connection to a database server and managing database connections',
          'Executing SQL Queries: Writing and executing SQL queries from Java programs using JDBC',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: JEE/Server Side Programming',
        points: [
          'Introduction to JEE/Server Side Programming: Understanding the fundamentals of Java Enterprise Edition and server-side development',
          'Servlets: Creating Java servlets to handle HTTP requests and generate dynamic web content',
          'Java Server Pages (JSP): Building JSP pages to separate presentation logic from business logic',
        ],
        isOpen: false,
      },
      {
        title: 'Module 5: JSP Standard Tag Library (JSTL)',
        points: [
          'Introduction to JSP Standard Tag Library (JSTL): Leveraging JSTL to simplify JSP development',
          'Core Tags: Using core tags for iteration, conditional statements, and other common tasks',
          'Formatting Tags: Formatting dates, numbers, and other data using formatting tags',
        ],
        isOpen: false,
      },
      {
        title: 'Module 6: MVC Architecture Type-1',
        points: [
          'Understanding MVC Architecture: Learning about the Model-View-Controller pattern and its advantages',
          'Implementing Model: Creating the model layer to represent data and business logic',
          'Implementing View: Developing the view layer to present the user interface',
          'Implementing Controller: Building the controller layer to handle user input and control the flow of the application',
        ],
        isOpen: false,
      },
      {
        title: 'Module 7: MVC Architecture Type-2',
        points: [
          'Understanding MVC Architecture (Type-2): Exploring an alternative implementation of the Model-View-Controller pattern',
          'Implementing Model: Creating the model layer with separate business objects and data access objects',
          'Implementing View: Developing the view layer to render the user interface using JSP and JSTL',
          'Implementing Controller: Building the controller layer using servlets to handle user requests and manage the flow',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'JAVA FULL STACK',
    title: 'Framework',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Spring Framework',
        points: [
          'Introduction to the Spring Framework: Understanding the features and benefits of the Spring Framework',
          'Dependency Injection: Managing object dependencies and inversion of control (IoC)',
          'Spring MVC: Building web applications using the Spring Model-View-Controller architecture',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Hibernate',
        points: [
          'Introduction to Hibernate: Understanding object-relational mapping (ORM) and Hibernate features',
          'Hibernate Configuration: Configuring Hibernate for database connectivity',
          'Entity Mapping: Mapping Java objects to database tables using Hibernate annotations',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Spring Boot',
        points: [
          'Introduction to Spring Boot: Creating stand-alone, production-grade Spring-based applications',
          'Auto-configuration and Convention over Configuration: Simplifying application setup and configuration',
          'Spring Boot Actuator: Monitoring and managing Spring Boot applications',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'JAVA FULL STACK',
    title: 'Database',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Relational Database Concepts',
        points: [
          'Introduction to relational databases: Understanding tables, relationships, and normalization',
          'SQL Basics: Writing basic SQL queries for data retrieval and manipulation',
          'Database Design: Designing efficient database schemas',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Database Management Systems',
        points: [
          'Introduction to Database Management Systems (DBMS)',
          'MySQL: Managing MySQL databases and executing SQL queries',
          'PostgreSQL: Working with the PostgreSQL database management system',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Advanced Database Concepts',
        points: [
          'Transactions and Concurrency Control: Ensuring data integrity and managing concurrent access',
          'Indexes and Query Optimization: Improving query performance using indexes and optimizing SQL queries',
          'Database Security: Understanding database security mechanisms and best practices',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'JAVA FULL STACK',
    title: 'HTML',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: HTML Fundamentals',
        points: [
          'Introduction to HTML: Understanding the structure and syntax of HTML documents',
          'HTML Tags: Working with common HTML tags for text formatting, links, images, and tables',
          'HTML Forms: Creating interactive web forms using HTML form elements',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: HTML5 and Semantic Markup',
        points: [
          'Introduction to HTML5: Exploring new features and elements in HTML5',
          'Semantic Markup: Using semantic HTML tags for improved accessibility and search engine optimization (SEO)',
          'Audio and Video: Embedding audio and video content in HTML5',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: CSS Fundamentals',
        points: [
          'Introduction to CSS: Understanding the role of CSS in styling web documents',
          'CSS Selectors: Selecting HTML elements to apply styles',
          'Box Model: Working with margins, borders, padding, and dimensions',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'JAVA FULL STACK',
    title: 'JavaScript',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: JavaScript Basics',
        points: [
          'Introduction to JavaScript: Understanding the role of JavaScript in web development',
          'JavaScript Syntax: Learning the basics of JavaScript syntax and data types',
          'DOM Manipulation: Manipulating HTML elements and handling events using the Document Object Model (DOM)',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: JavaScript Functions and Objects',
        points: [
          'Functions: Creating and invoking functions in JavaScript',
          'Objects and Prototypes: Working with objects, prototypes, and inheritance in JavaScript',
          'Working with Arrays: Manipulating arrays and using array methods',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Asynchronous JavaScript and AJAX',
        points: [
          'Asynchronous JavaScript: Handling asynchronous operations using callbacks, promises, and async/await',
          'AJAX: Making asynchronous HTTP requests and updating web pages dynamically',
          'JSON: Parsing and generating JSON data in JavaScript',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: Modern JavaScript Frameworks',
        points: [
          'Introduction to React: Building user interfaces using the React library',
          'Introduction to Vue.js: Creating interactive web applications with Vue.js',
          'Introduction to Angular: Developing web applications using the Angular framework',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },

  {
    course: 'PYTHON FULL STACK',
    title: 'Python Basics',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to Python',
        points: [
          'Overview of Python programming language',
          'Setting up Python environment',
          'Running Python programs',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Python Syntax and Data Types',
        points: [
          'Python variables and data types',
          'Control flow statements: if-else, loops, and more',
          'Working with strings, numbers, lists, and dictionaries',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Functions and Modules',
        points: [
          'Defining and using functions in Python',
          'Creating and importing modules',
          'Handling exceptions and errors',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: File Handling and Input/Output',
        points: [
          'Reading from and writing to files',
          'Working with text and binary files',
          'User input and output in Python',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'PYTHON FULL STACK',
    title: 'Web Development with Python',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: HTML and CSS',
        points: [
          'Introduction to HTML5 and CSS3',
          'HTML tags and elements',
          'CSS selectors and styling',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Flask Web Framework',
        points: [
          'Overview of Flask framework',
          'Creating routes and handling requests',
          'Template rendering and working with forms',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Database Integration with Python',
        points: [
          'Introduction to SQL and relational databases',
          'Connecting to databases using Python',
          'Executing SQL queries and retrieving data',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: Building RESTful APIs',
        points: [
          'Understanding REST architecture and principles',
          'Designing and implementing RESTful APIs with Flask',
          'Handling HTTP methods and authentication',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'PYTHON FULL STACK',
    title: 'Python Frameworks',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Django Framework',
        points: [
          'Introduction to Django',
          'Creating Django projects and applications',
          'Working with models, views, and templates',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Flask Web Development',
        points: [
          'Advanced Flask topics',
          'Creating custom decorators and middleware',
          'Using Flask extensions and libraries',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Asynchronous Programming',
        points: [
          'Understanding asynchronous programming concepts',
          'Using async/await for asynchronous tasks',
          'Working with asynchronous libraries like asyncio',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'PYTHON FULL STACK',
    title: 'Data Science with Python',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to Data Science',
        points: [
          'Overview of data science and its applications',
          'Working with Jupyter notebooks',
          'NumPy and Pandas for data manipulation',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Data Visualization',
        points: [
          'Introduction to data visualization libraries (Matplotlib, Seaborn)',
          'Creating charts, plots, and graphs',
          'Customizing visualizations for effective storytelling',
        ],
        isOpen: false,
      },
      {
        title: 'Module 3: Machine Learning with Python',
        points: [
          'Introduction to machine learning algorithms',
          'Supervised and unsupervised learning techniques',
          'Implementing machine learning models using scikit-learn',
        ],
        isOpen: false,
      },
      {
        title: 'Module 4: Deep Learning',
        points: [
          'Understanding neural networks and deep learning',
          'Working with deep learning frameworks (TensorFlow, Keras)',
          'Building and training deep learning models',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'MongoDB',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to MongoDB',
        points: [
          'Overview of MongoDB and NoSQL databases',
          'Installing and setting up MongoDB',
          'CRUD operations with MongoDB',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Advanced MongoDB Concepts',
        points: [
          'Working with indexes and queries',
          'Aggregation framework for data analysis',
          'Schema design and best practices',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'Express.js',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to Express.js',
        points: [
          'Overview of Express.js framework',
          'Setting up an Express.js project',
          'Routing and handling HTTP requests',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Middleware and Authentication',
        points: [
          'Working with middleware functions',
          'Implementing authentication and authorization',
          'Securing routes and handling user sessions',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'React.js',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to React.js',
        points: [
          'Overview of React.js and component-based architecture',
          'Setting up a React.js project',
          'Creating and rendering components',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: State Management with Redux',
        points: [
          'Understanding state and props in React',
          'Implementing Redux for global state management',
          'Async actions and middleware in Redux',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'Node.js',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to Node.js',
        points: [
          'Overview of Node.js and its features',
          'Setting up a Node.js project',
          'Working with modules and npm packages',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Building RESTful APIs with Node.js',
        points: [
          'Creating routes and handling requests',
          'Integrating with MongoDB for data storage',
          'Authentication and authorization in Node.js',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'Redux',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to Redux',
        points: [
          'Understanding the Redux architecture',
          'Setting up Redux in a React.js application',
          'Creating actions, reducers, and the store',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Advanced Redux',
        points: [
          'Asynchronous actions and middleware',
          'Using Redux DevTools for debugging',
          'Best practices for structuring Redux code',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  {
    course: 'MERN STACK',
    title: 'GraphQL',
    isOpen: false,
    modules: [
      {
        title: 'Module 1: Introduction to GraphQL',
        points: [
          'Understanding GraphQL and its advantages',
          'Creating a GraphQL server with Node.js',
          'Defining schemas and types in GraphQL',
        ],
        isOpen: false,
      },
      {
        title: 'Module 2: Querying and Mutating with GraphQL',
        points: [
          'Performing queries and mutations with GraphQL',
          'Working with resolvers and data sources',
          'Handling authentication and authorization in GraphQL',
        ],
        isOpen: false,
      },
      // Add more modules as needed
    ],
  },
  // Add more sections for additional technologies in the MERN stack (e.g., additional frameworks, libraries, etc.)

  // Add more courses as needed
];
