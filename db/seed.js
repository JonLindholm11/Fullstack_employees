import db from "./client.js";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";



async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const employee_name = faker.person.firstName();
    const birthday = faker.date.birthdate({ mode: "age", min: 18, max: "65" });
    const salary = faker.number.int({ min: 30000, max: 300000 });

    try {
      const response = await createEmployee({
        employee_name,
        birthday,
        salary,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

await db.connect();
await seedEmployees();
await db.end();
await db.end();
console.log("🌱 Database seeded.");
