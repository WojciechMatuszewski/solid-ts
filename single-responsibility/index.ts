/**
 * The _Single Responsibility_ principle is all about keeping the interface small and focused on one thing or group of closely related things.
 * How closely related? You have to be pragmatic here – there is no one-fit-all answer.
 *
 * In my experience, here are the signs that method/function/class/object might violate SRP:
 * 1. You have to use `and` to describe its functionality.
 * 2. The name contains `and`.
 * 3. The parameters seem to be related to different things, for example `accountId` and `jwt`
 */

/**
 * Consider the following class:
 */
{
  class Post {
    public save() {}
    public delete() {}
    public render() {}
    public update() {}
  }

  /**
   * Anything that jumps to you when reading the method names?
   *
   * All of them, except one – the `render`, are related to CRUD operations.
   * This means that the `Post` violates the SRP.
   */
}

/**
 * Consider the following class:
 */
{
  /**
   * The `Post` only handles CRUD – win!
   * It also became easier to test and reason about. Cognitive load is a real thing.
   */
  class Post {
    public save() {}
    public delete() {}
    public update() {}
  }

  /**
   * Now if I want to change how we _render_ the Post, we only make changes here.
   * There is less code that "surrounds" the `render` method.
   */
  class Renderer {
    public render(post: Post) {}
  }
}
