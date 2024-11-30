/**
 * The _Interface Segregation Principle_ is all about separation of concerns.
 * "No client should be forced to depend on interfaces they do not use."
 *
 * This means we should not overload existing interfaces with additional functionality.
 * Instead, we should create new interfaces.
 *
 * Consider the following `Machine` interface.
 */
interface Machine {
  print(document: any): void;
  scan(document: any): void;
  fax(document: any): void;
}

/**
 * Printer machine has to implement all three methods!
 */
class BasicPrinter implements Machine {
  print(document: any): void {}

  scan(document: any): void {}

  fax(document: any): void {}
}

/**
 * Let us _segregate_ the interfaces.
 */
interface Printer {
  print(document: any): void;
}

interface Scanner {
  scan(document: any): void;
}

interface Faxer {
  fax(document: any): void;
}

/**
 * Now we can mix and match.
 *
 * We do not have to implement methods that we do not use,
 * or do not make sense in our context.
 */
class RobustPrinter implements Printer, Scanner {
  print(document: any): void {}
  scan(document: any): void {}
}

/**
 * This makes our code much more flexible!
 */
class BasicPrinter2 implements Printer {
  print(document: any): void {}
}

/**
 * Real world example.
 */
interface Sharer {
  share(post: any): void;
}

interface Creator {
  create(post: any): void;
}

interface Commenter {
  comment(post: any): void;
}

/**
 * Notice how easy it is to derive functionality.
 * If I want another "entity", I only need to create new interface.
 *
 * Think about how easy it would be to test these.
 * Add dependency injection and you are golden.
 */
class Admin implements Sharer, Creator, Commenter {
  share(post: any): void {}
  create(post: any): void {}
  comment(post: any): void {}
}

class User implements Sharer, Commenter {
  share(post: any): void {}
  comment(post: any): void {}
}
