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

"@Input() provides one-way data binding from the parent component to the child component."