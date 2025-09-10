import db from "../client.js";

/** @returns the employee created according to the provided details */
export async function createEmployee({ employee_name, birthday, salary }) {
  // TODO
  try{
  const SQL = `
    INSERT INTO employees (employee_name, birthday, salary)
    VALUES($1, $2, $3) RETURNING *
  `;
  const { rows: employee } = await db.query(SQL, [
    employee_name,
    birthday,
    salary,
  ]);
  console.log(employee)
  return employee;} catch(e) {
    console.error(e)
  }
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
