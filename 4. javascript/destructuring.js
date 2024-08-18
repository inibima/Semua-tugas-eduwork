const students = [
    { id: 1, name: "Alice", age: 20, major: "Computer Science" },
    { id: 2, name: "Bob", age: 22, major: "Mathematics" },
    { id: 3, name: "Charlie", age: 21, major: "Physics" },
  ];
  
  
  // Destructuring array
  const [student1, student2, student3] = students;
  
  // Destructuring object dengan alias dan default value
  const { id: id1, name: name1, age: age1, major: major1 = "Undeclared" } = student1;
  const { id: id2, name: name2, age: age2, major: major2 = "Undeclared" } = student2;
  const { id: id3, name: name3, age: age3, major: major3 = "Undeclared" } = student3;
  
  console.log(name1); // Alice
  console.log(major2); // Mathematics
  console.log(major3); // Physics
  
  
  function printStudent({ id, name, age, major = "Undeclared" }) {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}, Major: ${major}`);
  }
  
  students.forEach(printStudent);
  
  // Output:
  // ID: 1, Name: Alice, Age: 20, Major: Computer Science
  // ID: 2, Name: Bob, Age: 22, Major: Mathematics
  // ID: 3, Name: Charlie, Age: 21, Major: Physics