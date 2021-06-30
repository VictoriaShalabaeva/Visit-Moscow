let sayHello = (message) => {
    if (!message) {
        return "Hello World";
    }

    return `Hello {message}`;
}



let testSayHello = () => {
    const message = sayHello("Sandeep");


    assertEquals(message, "Hello Sandeep");
}

let testSayHello_EmptyMessage = () => {
    const message = sayHello();


    assertEquals(message, "Hello World");
}
