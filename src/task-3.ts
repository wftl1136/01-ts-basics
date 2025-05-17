// Задача 3. Типізація масивів (файл task-3.ts)

// Додай тип для масиву рядків usernames, використовуючи синтаксис [].
// Додай тип для масиву чисел ratings, використовуючи синтаксис [].
// Для масиву products:
// Створи окремий інтерфейс Product для елементів масиву.
// Типізуй сам масив за допомогою цього інтерфейсу.
// Залиш елементи масиву products без змін.

interface Product {
    id: number;
    title: string;
  }
  
  const usernames: string[] = ["alice", "bob", "charlie"];
  const ratings: number[] = [4.5, 3.8, 5];
  const products: Product[] = [
    { id: 1, title: "Phone" },
    { id: 2, title: "Laptop" },
  ];
  
  console.log(`Usernames: ${JSON.stringify(usernames)}`);
  console.log(`Ratings: ${JSON.stringify(ratings)}`);
  console.log(`Products: ${JSON.stringify(products)}`);