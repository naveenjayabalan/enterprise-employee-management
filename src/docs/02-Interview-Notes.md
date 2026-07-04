# Component

Q: What is Component?

Answer

A Component is the basic building block of Angular. It contains UI, business logic and metadata.

---

Q: What is Selector?

Answer

Selector is a custom HTML tag used by Angular to render a component.

What is @Input()?

A strong interview answer:

@Input() is a decorator that allows a parent component to pass data to a child component through property binding.

Interview Answer

Why can't a child component directly access a parent's property?

A good answer is:

Angular components are designed to be independent and loosely coupled. A child component cannot directly access a parent's internal properties because that would tightly couple the components. Instead, the parent explicitly passes only the required data using @Input(), making the child reusable, easier to test, and easier to maintain.

Q: Is @Input() one-way or two-way communication?

✅ Correct Answer:

@Input() provides one-way data binding from the parent component to the child component.

Parent → Child  = @Input()

Child → Parent  = @Output()

What is @Input()?
What is @Output()?
Difference between property binding [ ] and event binding ( ).

Q: Can a child modify a parent's property directly?

No. Angular components are designed to be loosely coupled. A child component should not directly modify a parent's properties. Instead, it should notify the parent using @Output(), and the parent decides how to update its own state.

Q: @Output

@Output() is a decorator that allows a child component to emit an event using EventEmitter, and the parent listens to that event using event binding.

Q: {{}} what is mean?

Interpolation is a one-way data binding technique used to display data from the component (TypeScript) to the template (HTML) using the {{ }} syntax.

Q: What is the difference between: [ngModel] and [(ngModel)]

[ngModel] provides one-way binding from the component to the view. [(ngModel)] provides two-way binding, keeping the component property and the input element synchronized.

Q: What are the four types of data binding in Angular?

Interpolation, property binding, Event binding, Two way binding

Q: What is Interpolation?

Interpolation is a one-way data binding technique that displays data from the component (TypeScript) to the template (HTML) using the {{ }} syntax.

Q: What is Property Binding?

Property Binding is used to bind a component property to an HTML element property or to a child component's @Input() property using square brackets [].

Q: What is Event Binding?

Event Binding is used to listen for events from HTML elements or custom events emitted by child components using parentheses ().

Q: What is Two-Way Binding?

Two-Way Binding keeps the component property and the view synchronized. Changes in the component update the UI, and user input updates the component automatically.

Q: Why do we need FormsModule to use ngModel?

FormsModule provides Angular's template-driven forms features, including the ngModel directive. Without importing FormsModule, Angular cannot recognize ngModel.

Q: Difference between {{}} and [title]

Interpolation displays data from the component to the HTML template. It is mainly used for displaying text.

Property Binding binds a component property to an HTML element property or to a child component's @Input() property.

Q: Why do we need FormsModule?

FormsModule provides Angular's Template-Driven Forms features, including the ngModel directive. Without FormsModule, Angular doesn't recognize ngModel.

Q:Why do we use track in @for (or trackBy in *ngFor)?

track helps Angular uniquely identify each item in a collection. This allows Angular to reuse existing DOM elements instead of recreating them, improving rendering performance.

Q: Why do we use @if instead of hidden?

@if creates or removes elements from the DOM based on the condition. This improves performance because Angular doesn't create unnecessary DOM elements. In contrast, hidden only hides the element using CSS, but the element still exists in the DOM.

Q: Why is track mandatory in Angular's @for?

Angular requires track so it can uniquely identify items in a collection. This allows it to reuse existing DOM elements instead of recreating them, improving rendering performance, especially for large lists.

Q: How do you handle an empty list in Angular?

I first check whether the collection contains data. If it does, I render the list using @for (or *ngFor in older Angular versions). Otherwise, I display an empty-state message such as 'No Employees Found'.

Q: Suppose your EmployeeTable has 1000 rows.

"I would create a separate EmployeeRowComponent because it improves maintainability, reusability, readability, and testing. If the row becomes more complex in the future, I can modify only that component without affecting the entire table.

Q: What do you think the purpose of app.routes.ts is?

app.routes.ts is the Angular routing configuration file. It maps URL paths to components. When the user navigates to a specific URL, Angular Router checks this configuration and loads the corresponding component into the router-outlet.

App
│
├── Layout
│   ├── Header
│   ├── Sidebar
│   ├── Router Outlet
│   └── Footer
│
└── Features
    ├── Dashboard
    ├── Employees
    ├── Reports
    └── Settings

Q:Where should the employee data come from initially?

I would create an EmployeeService because business logic and data access should be separated from the UI. The component's responsibility is to display data and handle user interactions, while the service is responsible for fetching, processing, and managing the data.
