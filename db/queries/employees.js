import db from "../client.js";

/** @returns the employee created according to the provided details */
export async function createEmployee({ employee_name, birthday, salary }) {
  // TODO
  console.log(employee_name, birthday, salary);
  try {
    const SQL = `
    INSERT INTO employees (employee_name, birthday, salary)
    VALUES($1, $2, $3) RETURNING *
  `;
    const { rows: employee } = await db.query(SQL, [
      employee_name,
      birthday,
      salary,
    ]);
    console.log(employee);
    return employee;
  } catch (e) {
    console.error(e);
  }
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  try {
    const SQL = `
      SELECT * FROM employees
    `;
    const { rows: employee } = await db.query(SQL);
    return employee;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  try {
    const SQL = `
      SELECT * FROM employees
      WHERE id = $1
    `;
    const { rows: employee } = await db.query(SQL, [id]);
    return employee;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, employee_name, birthday, salary }) {
  try {
    const SQL = `
      UPDATE employees
      SET
        employee_name = $2,
        birthday = $3,
        salary = $4
      WHERE id = $1
      RETURNING *
    `;
    const { rows: employee } = await db.query(SQL, [
      id,
      employee_name,
      birthday,
      salary,
    ]);
    return employee;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  try {
    const SQL = `
    DELETE FROM employees WHERE id = $1 RETURNING *
    `;
    const { rows: employee } = await db.query(SQL, [id])
    return employee[0]
  } catch (error) {
    console.error(error);
  }
}
