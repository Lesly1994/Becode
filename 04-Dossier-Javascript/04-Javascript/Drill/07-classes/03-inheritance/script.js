/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    const dog = new Animal ("Hello", "Sammy");
    const cat = new Animal ("Good Morning", "Raph");
    document.getElementById('run').addEventListener('click', () => {
        console.log(dog.sayHello(), cat.sayHello());
    })
})();
