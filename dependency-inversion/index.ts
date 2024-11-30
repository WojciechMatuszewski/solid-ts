/**
 * Dependency inversion is all about _depending on abstractions_ rather than _concrete implementations_.
 *
 * This means that _high-level_ modules should not depend on _low-level_ modules and vice-versa.
 * If do you this, you will have much easier time refactoring and testing your code.
 */

/**
 * Consider this implementation.
 */
{
  /**
   * _Low-level_ module.
   */
  class MySqlDatabase {
    save(data: string): void {}
  }

  /**
   * _High-level_ module that depends on the _low-level_ module.
   */
  class HighLevelModule {
    constructor(private database: MySqlDatabase) {}

    public execute(data: string) {
      this.database.save(data);
    }
  }

  /**
   * Ask yourself:
   * 1. How would you test this?
   * 2. What if you want to change the `MySqlDatabase` interface?
   *
   * Those become problematic if you are **communicating with _concrete_ rather than _abstract_**.
   */
}

/**
 * Now, consider the following implementation.
 */
{
  /**
   * Abstraction
   */
  interface Database {
    save(data: string): void;
  }

  /**
   * _Low-level_ module that _implements_ an interface.
   */
  class MySqlDatabase implements Database {
    save(data: string): void {}
  }

  /**
   * _High-level_ module that depends on _abstraction_.
   */
  class HighLevelModule {
    constructor(private database: Database) {}

    public execute(data: string) {
      this.database.save(data);
    }
  }

  /**
   * 1. Testing becomes much easier.
   * 2. Refactoring becomes much easier.
   */
}
