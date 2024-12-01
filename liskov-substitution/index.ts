/**
 * The _Liskov Substitution_ principle is all about interchangeability.
 *
 * Any instance of the "parent class" can be changed to any instance of the "child class".
 * All that matters is the functionality, NOT the type.
 */

/**
 * Consider the following code:
 */
{
  class Bird {
    fly() {}
  }

  class Sparrow extends Bird {}

  /**
   * Notice that the parameter refers to the "base" class.
   */
  function letBirdFly(bird: Bird) {}

  /**
   * But I can pass the _derived_ class.
   */
  letBirdFly(new Sparrow());
}

/**
 * The violation of this principle might be adding "empty" implementation methods,
 * or throwing errors when the method does not make sense in the context of the class.
 */
{
  class Bird {
    fly() {}
  }

  /**
   * Penguin is _classified_ as bird, but it does not fly.
   *
   * Remember – the "representative" do not share the same relationships as things they represent.
   * A layer that _represents_ their client does not share the same relationship to the client's wife as the client.
   */
  class Penguin implements Bird {
    fly() {
      throw new Error("Penguins do not fly");
    }
  }
}
