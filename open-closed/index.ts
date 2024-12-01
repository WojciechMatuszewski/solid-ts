/**
 * The _Open-Closed_ principle is all about minimizing changes to existing entities when adding new functionality.
 * The entity should be _open for extension_ (think extending a class) and _closed for modification_ (think directly modifying given class).
 *
 * Of course, you can't always extend the entity to implement the necessary changes. Sometimes you will need to change _that_ entity itself,
 * for example when fixing a bug.
 *
 * But, in most cases, we should favour adding new functionality as a separate "lego block" rather than modifying the existing one
 * to fit our needs.
 */

/**
 * Consider the following:
 */

{
  type Consumer = {
    type: "free" | "premium";
  };

  class Discount {
    giveDiscount(consumer: Consumer) {
      switch (consumer.type) {
        case "free": {
          return 10;
        }
        case "premium": {
          return 20;
        }
      }
    }
  }
}

/**
 * What if I want to add another type of Consumer?
 * I would need to modify the `Discount` class.
 *
 * In real world, this might be okay, there is no way we will ALWAYS adhere to OCP,
 * but regardless, adding a new type of consumer would violate the OCP.
 */
{
  type Consumer = {
    type: "free" | "premium" | "advanced";
  };

  class Discount {
    giveDiscount(consumer: Consumer) {
      switch (consumer.type) {
        case "free": {
          return 10;
        }
        case "premium": {
          return 20;
        }
        /**
         * I had to modify the existing code to add new feature.
         */
        case "advanced": {
          return 30;
        }
      }
    }
  }
}

/**
 * As an alternative, we could "open" the notion of `Consumer` for extension.
 * Notice that we had to write a bit more code – this is **the main drawback of using OCP**. It _might_ increase the complexity of your code.
 */
{
  class FreeConsumer {
    getDiscount() {
      return 10;
    }
  }

  /**
   * Notice that, to add a new type of consumer,
   * I had to add net-new code.
   *
   * I do not have to amend any existing code.
   * If you do not have to amend any existing code, the chance of introducing bugs is reduced.
   */
  class PremiumConsumer {
    getDiscount() {
      return 20;
    }
  }

  class AdvancedConsumer {
    getDiscount() {
      return 30;
    }
  }
}
